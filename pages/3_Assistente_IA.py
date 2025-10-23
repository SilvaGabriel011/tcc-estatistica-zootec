import streamlit as st
import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from core.ai_assistant import get_assistant
from core.ai_context_manager import (
    start_ai_conversation, add_ai_message, get_ai_conversation_history, 
    end_ai_conversation, get_ai_recovery_suggestions, MessageRole, ConversationState
)
from core.theme_manager import init_theme, render_theme_selector
from core.flags import ENABLE_AI

st.set_page_config(
    page_title='Assistente IA', 
    page_icon='🤖', 
    layout='wide',
    initial_sidebar_state='collapsed'  # Performance: collapse sidebar
)
init_theme()
st.title('🤖 Assistente de IA')
st.markdown('Converse com o assistente especializado em análise de dados de bovinos.')

if 'ai_assistant' not in st.session_state:
	st.session_state['ai_assistant'] = get_assistant()

assistant = st.session_state['ai_assistant']


if not assistant.is_available():
	from core.notifications import show_toast_error, log_error
	show_toast_error('IA não disponível')
	
	col_a, col_b = st.columns(2)
	
	with col_a:
		st.markdown("""
		### ⭐ Opção 1: Ollama (Recomendado)
		
		**100% GRATUITO e SEM LIMITES!**
		
		1. Baixe: https://ollama.com/download
		2. Instale (como qualquer programa)
		3. Abra PowerShell e execute:
		```bash
		ollama run llama3.1
		```
		4. Aguarde download (~5-15 min)
		5. Reinicie o app
		
		✅ Funciona offline  
		✅ Privado (dados no seu PC)  
		✅ Sem quotas ou limites
		
		📖 **Guia completo:** `INSTALAR_OLLAMA.md`
		""")
	
	with col_b:
		st.markdown("""
		### Opção 2: Gemini (Nuvem)
		
		**Gratuito mas com limites**
		
		1. Chave: https://aistudio.google.com/apikey
		2. Crie `.env` na raiz:
		```
		GEMINI_API_KEY=sua_chave
		```
		3. Reinicie o app
		
		⚠️ Pode ter limites de requisições
		""")
	
	st.divider()
	st.info('💡 **Recomendação:** Use Ollama (opção 1) para IA ilimitada e gratuita!')
	st.stop()

if not ENABLE_AI:
	st.warning('🧪 Modo diagnóstico: IA desativada temporariamente. Habilite ENABLE_AI em core/flags.py para usar esta página.')
	st.stop()

st.success(f"✅ IA Ativa: {', '.join(assistant.get_available_models()).upper()}")

# Sidebar with tips and controls
with st.sidebar:
	st.markdown('### ⚙️ Configurações da IA')
	render_theme_selector()
	
	# Model selector
	available_models = assistant.get_available_models()
	current_model_info = assistant.get_current_model()
	
	selected_model = st.selectbox(
		'Modelo de IA:',
		available_models,
		index=available_models.index(current_model_info['preferred']) if current_model_info['preferred'] in available_models else 0
	)
	
	if selected_model != current_model_info['preferred']:
		assistant.set_model(selected_model)
		st.success(f'✅ Modelo alterado para: {selected_model.upper()}')
	
	# Temperature slider
	temperature = st.slider(
		'Temperatura (criatividade):',
		0.0, 2.0, 0.7, 0.1,
		help='Valores baixos = respostas mais focadas, valores altos = mais criativas'
	)
	
	# Display current model info
	st.caption(f"**Modelo ativo:** {selected_model.upper()}")
	st.caption(f"**Temperatura:** {temperature}")
	
	st.divider()
	
	# Conversation management
	st.markdown('### 💬 Gerenciar Conversa')
	
	if st.button('🗑️ Limpar Conversa', help='Remove todo o histórico'):
		assistant.clear_conversation()
		st.success('✅ Conversa limpa!')
		st.rerun()
	
	# Show conversation history count
	history = assistant.get_conversation_history()
	if history:
		st.caption(f"**Histórico:** {len(history)} trocas")
	
	st.divider()
	
	# Suggested questions
	st.markdown('### 💡 Perguntas Sugeridas')
	
	example_questions = [
		"Qual raça tem melhor preço médio?",
		"Como interpretar o p-valor?",
		"Quais análises fazer para TCC?",
		"O que é o tamanho de efeito?",
		"Explique o conceito de arroba",
		"Qual a diferença entre gado gordo e magro?"
	]
	
	st.markdown('**Clique para usar:**')
	for q in example_questions:
		if st.button(f"💬 {q}", key=q):
			st.session_state['selected_question'] = q

	st.divider()
	st.markdown('### 📚 Glossário de Zootecnia')
	st.caption('A IA usa uma base de conhecimento com termos técnicos de zootecnia.')
	use_kb = st.toggle('Usar glossário', value=True, help='Inclui contexto de zootecnia nas respostas')
	st.session_state['use_kb'] = use_kb

# Main chat area
if 'df_clean' in st.session_state:
	st.info(f"📊 Dados carregados: {len(st.session_state['df_clean'])} registros")
	
	if st.button('📝 Gerar Resumo Automático dos Dados'):
		with st.spinner('Gerando resumo...'):
			df = st.session_state['df_clean']
			base_summary = assistant.summarize_dataframe(df)
			context = assistant.build_context(df, None)
			ai_summary = assistant.chat(
				'Resuma os principais achados em até 10 linhas.', 
				context + "\n\n" + base_summary, 
				use_kb=st.session_state.get('use_kb', True)
			)
			st.write('#### 📊 Resumo Automático')
			st.code(base_summary)
			st.write('#### 🤖 Resumo da IA')
			st.markdown(ai_summary)

if 'chat_history' not in st.session_state:
	st.session_state['chat_history'] = []
if 'streaming_active' not in st.session_state:
	st.session_state['streaming_active'] = False

# Display conversation history from session_state
st.markdown('### 💬 Histórico da Conversa')

chat_history = assistant.get_conversation_history()
if chat_history:
	# Mostrar últimas 10 mensagens
	recent_history = chat_history[-10:] if len(chat_history) > 10 else chat_history
	
	for i, msg in enumerate(recent_history):
		with st.expander(f"{'👤' if msg['role'] == 'user' else '🤖'} {msg['content'][:50]}...", expanded=False):
			st.markdown(f"**{'Usuário' if msg['role'] == 'user' else 'Assistente'}:** {msg['content']}")
			
			col1, col2 = st.columns(2)
			with col1:
				if st.button('📋 Copiar', key=f'copy_{i}'):
					st.write("✅ Copiado para área de transferência!")
			with col2:
				if st.button('🗑️ Remover', key=f'remove_{i}'):
					# Remove this message from history
					if i < len(chat_history):
						chat_history.pop(i)
						st.session_state['chat_history'] = chat_history
					st.rerun()
else:
	st.info("Nenhuma conversa ainda. Faça uma pergunta abaixo!")

# Chat interface principal

# Handle selected question from sidebar
if 'selected_question' in st.session_state:
	user_input = st.session_state['selected_question']
	del st.session_state['selected_question']
else:
	user_input = st.chat_input('Digite sua mensagem...', key='chat_input')

if user_input:
	st.session_state['chat_history'].append({'role': 'user', 'content': user_input})
	with st.chat_message('user'):
		st.markdown(user_input)
	
	context = ""
	if 'df_clean' in st.session_state:
		df = st.session_state['df_clean']
		stats = st.session_state.get('descriptive_stats', None)
		context = assistant.build_context(df, stats)
	
	with st.chat_message('assistant'):
		message_placeholder = st.empty()
		full_response = ""
		
		try:
			# Try streaming first
			st.session_state['streaming_active'] = True
			
			import asyncio
			import nest_asyncio
			nest_asyncio.apply()
			
			async def stream_response():
				response_text = ""
				async for token in assistant.chat_stream(user_input, context):
					response_text += token
					message_placeholder.markdown(response_text + "▌")
				message_placeholder.markdown(response_text)
				st.session_state['streaming_active'] = False
				return response_text
			
			# Run async streaming
			loop = asyncio.new_event_loop()
			asyncio.set_event_loop(loop)
			full_response = loop.run_until_complete(stream_response())
			loop.close()
			
		except Exception as e:
			from core.notifications import log_error, show_toast_warning
			log_error('assistente_ia', 'stream_response', e, {"model": selected_model})
			
			error_message = str(e)
			error_type = type(e).__name__
			
			# Show error with recovery suggestions
			st.error(f"❌ Erro ao gerar resposta: {error_message}")
			
			# Get recovery suggestions
			suggestions = get_ai_recovery_suggestions(error_type, error_message)
			
			with st.expander("💡 Como resolver?", expanded=True):
				for suggestion in suggestions:
					st.markdown(suggestion)
			
			# Retry button
			if st.button("🔄 Tentar Novamente", key="retry_ai"):
				st.rerun()
			
			show_toast_warning(f"Streaming indisponível. Motivo: {error_message}")
			with st.spinner('Gerando resposta...'):
				full_response = assistant.chat(user_input, context, use_kb=st.session_state.get('use_kb', True))
				message_placeholder.markdown(full_response)
			st.session_state['streaming_active'] = False
		
		response = full_response
	
	st.session_state['chat_history'].append({'role': 'assistant', 'content': response})

# Stop streaming button
if st.session_state.get('streaming_active', False):
	if st.button('⏹️ Parar Geração'):
		st.session_state['streaming_active'] = False
		st.rerun()

# Chat actions
if st.session_state['chat_history']:
	col_a, col_b = st.columns(2)
	with col_a:
		if st.button('🗑️ Limpar Histórico'):
			st.session_state['chat_history'] = []
			st.rerun()
	with col_b:
		if st.button('💾 Salvar Conversa'):
			chat_text = "\n\n".join([
				f"{msg['role'].upper()}: {msg['content']}" 
				for msg in st.session_state['chat_history']
			])
			st.download_button(
				'⬇️ Download TXT', 
				data=chat_text, 
				file_name='conversa_ia.txt', 
				mime='text/plain'
			)

