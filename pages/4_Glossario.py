import streamlit as st
import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from core.zootecnia_kb import GLOSSARIO, buscar_termos
from core.referencias import obter_referencias_cientificas

st.set_page_config(page_title='Glossário', page_icon='📚', layout='wide')
st.title('📚 Glossário de Zootecnia')
st.markdown(f'Base de conhecimento com **{len(GLOSSARIO)} termos** do agronegócio brasileiro.')

# Tabs para diferentes tipos de busca
tab1, tab2, tab3 = st.tabs(['🔍 Glossário Local', '🔬 Busca Científica', '📊 Estatísticas'])

with tab1:
	st.subheader('🔍 Busca no Glossário Local')
	
	# Search bar
	busca = st.text_input('🔍 Buscar termo:', placeholder='Digite aqui... (ex: arroba, nelore, confinamento)', key='busca_local')

	if busca:
		resultados = buscar_termos(busca, limite=10)
		if resultados:
			st.success(f'Encontrados {len(resultados)} resultado(s):')
			for termo, definicao, score in resultados:
				with st.expander(f"**{termo.upper()}**", expanded=True):
					st.markdown(definicao)
		else:
			st.warning('Nenhum termo encontrado. Tente outra palavra.')
		# Categorias organizadas
		categorias = {
			"📏 Unidades e Medidas": ["arroba", "@", "ua", "alqueire paulista", "alqueire mineiro"],
			"🐂 Categorias de Gado": ["gado gordo", "gado magro", "boi gordo", "vaca gorda", "novilho", "bezerro", "bezerro desmamado", "garrote", "novilha", "matriz"],
			"🧬 Raças Zebuínas": ["nelore", "gir", "guzerá", "tabapuã", "indubrasil", "brahman"],
			"🐄 Raças Taurinas e Sintéticas": ["angus", "hereford", "canchim", "brangus", "senepol"],
			"🌾 Sistemas de Produção": ["confinamento", "semiconfinamento", "pastejo", "pasto rotacionado", "integração lavoura-pecuária", "ilpf"],
			"🔧 Manejo": ["desmama", "recria", "engorda", "terminação", "ganho médio diário", "taxa de lotação", "capacidade de suporte"],
			"🌽 Nutrição": ["suplementação mineral", "volumoso", "concentrado", "silagem", "feno", "ureia", "eficiência alimentar"],
			"💉 Sanidade": ["vacinação", "vermifugação", "manejo sanitário", "carrapaticida", "quarentena"],
			"💰 Econômico": ["preço por kg", "preço por arroba", "custo por arroba", "margem bruta", "ponto de equilíbrio", "arrobas por hectare", "reposição"],
			"🏭 Mercado": ["frigorífico", "leilão", "boi na fazenda", "boi na balança", "cepea", "indicador do boi gordo"],
			"🥩 Abate e Carcaça": ["abate", "carcaça quente", "carcaça fria", "rendimento de carcaça", "ossatura", "acabamento", "conformação", "marmoreio"],
		}
		
		st.markdown('### Navegar por Categoria')
		
		for categoria, termos in categorias.items():
			with st.expander(categoria):
				for termo in termos:
					if termo in GLOSSARIO:
						st.markdown(f"**{termo}:** {GLOSSARIO[termo]}")

with tab2:
	st.subheader('🔬 Busca Científica em Bases de Dados')
	st.markdown('Busque informações científicas atualizadas em bases acadêmicas.')
	
	# Busca científica
	busca_cientifica = st.text_input('🔬 Buscar termo científico:', 
									 placeholder='Digite um termo técnico... (ex: GMD, conversão alimentar, confinamento)', 
									 key='busca_cientifica')
	
	if busca_cientifica:
		with st.spinner('Buscando referências científicas...'):
			try:
				referencias = obter_referencias_cientificas(busca_cientifica, limite_total=5)
				
				if referencias:
					st.success(f'Encontradas {len(referencias)} referência(s) científica(s):')
					
					for i, ref in enumerate(referencias, 1):
						with st.expander(f"📄 **Referência {i}**: {ref.get('titulo', 'Sem título')}", expanded=True):
							st.markdown(f"**Autores:** {', '.join(ref.get('autores', ['N/A']))}")
							st.markdown(f"**Revista:** {ref.get('revista', 'N/A')}")
							st.markdown(f"**Ano:** {ref.get('ano', 'N/A')}")
							if ref.get('doi'):
								st.markdown(f"**DOI:** {ref.get('doi')}")
							if ref.get('url'):
								st.markdown(f"**Link:** [{ref.get('url')}]({ref.get('url')})")
							
							# Citação formatada
							st.markdown('**Citação:**')
							st.code(ref.get('citacao', 'Citação não disponível'))
				else:
					st.warning('Nenhuma referência científica encontrada. Tente outro termo.')
			except Exception as e:
				st.error(f'Erro na busca científica: {str(e)}')
				st.info('Tente novamente ou use o glossário local.')
	
	# Informações sobre as fontes
	st.markdown('---')
	st.markdown('### 📚 Fontes de Dados Científicos')
	
	col1, col2 = st.columns(2)
	
	with col1:
		st.markdown('#### 🔍 Google Scholar')
		st.markdown('- Base de dados acadêmica global')
		'- Artigos, teses, livros e citações'
		'- Acesso gratuito a resumos'
		
	with col2:
		st.markdown('#### 📖 SciELO Brasil')
		st.markdown('- Portal de periódicos científicos brasileiros')
		'- Artigos em português sobre agronegócio'
		'- Acesso gratuito completo'

with tab3:
	st.subheader('📊 Estatísticas do Glossário')
	
	# Estatísticas gerais
	col1, col2, col3 = st.columns(3)
	
	with col1:
		st.metric('Total de Termos', len(GLOSSARIO))
	
	with col2:
		# Contar categorias
		categorias_count = len([
			"Unidades e Medidas", "Categorias de Gado", "Raças Zebuínas", 
			"Raças Taurinas e Sintéticas", "Sistemas de Produção", "Manejo", 
			"Nutrição", "Sanidade", "Econômico", "Mercado", "Abate e Carcaça"
		])
		st.metric('Categorias', categorias_count)
	
	with col3:
		# Calcular média de caracteres por definição
		media_chars = sum(len(definicao) for definicao in GLOSSARIO.values()) // len(GLOSSARIO)
		st.metric('Média de Caracteres/Definição', media_chars)
	
	# Distribuição por categoria
	st.markdown('### 📈 Distribuição por Categoria')
	
	categorias_data = {
		'Raças': len([t for t in GLOSSARIO.keys() if any(raca in t.lower() for raca in ['nelore', 'angus', 'gir', 'hereford', 'brahman'])]),
		'Manejo': len([t for t in GLOSSARIO.keys() if any(termo in t.lower() for termo in ['desmama', 'recria', 'engorda', 'confinamento'])]),
		'Econômico': len([t for t in GLOSSARIO.keys() if any(termo in t.lower() for termo in ['preço', 'custo', 'arroba', 'margem'])]),
		'Nutrição': len([t for t in GLOSSARIO.keys() if any(termo in t.lower() for termo in ['nutrição', 'alimentação', 'silagem', 'concentrado'])]),
		'Medidas': len([t for t in GLOSSARIO.keys() if any(termo in t.lower() for termo in ['arroba', 'kg', 'alqueire', 'hectare'])])
	}
	
	for categoria, count in categorias_data.items():
		st.markdown(f"**{categoria}**: {count} termos")
	
	# Termos mais populares (baseado no tamanho da definição)
	st.markdown('### 🔥 Termos com Definições Mais Detalhadas')
	
	termos_detalhados = sorted(GLOSSARIO.items(), key=lambda x: len(x[1]), reverse=True)[:10]
	
	for termo, definicao in termos_detalhados:
		st.markdown(f"**{termo}**: {len(definicao)} caracteres")

st.divider()
st.info('💡 **Dica:** Use a busca científica para encontrar informações atualizadas em bases acadêmicas!')

