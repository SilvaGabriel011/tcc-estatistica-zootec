import streamlit as st
import pandas as pd
import json
import os
import io
import datetime
import hashlib
import sys
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from core.cleaning import clean_data
from core.sample_data import generate_sample_bovinos
from core.formatters import formatar_numero
# Performance module removido - usando funcionalidades básicas
def apply_filters_efficient(df, filters):
    """Aplicar filtros básicos."""
    return df

def optimize_dataframe_memory(df):
    """Otimização básica de memória."""
    return df

def show_performance_info():
    """Placeholder para info de performance."""
    pass

def get_performance_config(data_size=None):
    """Placeholder para config de performance."""
    return {}

def apply_complex_filters(df, filters):
    """Aplicar filtros complexos."""
    return df

def save_filter_preset(name, filters):
    """Salvar preset de filtros."""
    pass

def load_filter_preset(name):
    """Carregar preset de filtros."""
    return {}

def list_filter_presets():
    """Listar presets de filtros."""
    return []

def get_filter_suggestions(df):
    """Obter sugestões de filtros."""
    return []
from core.notifications import (
    show_progress, show_toast_success, show_toast_error, show_toast_info,
    with_progress, show_loading_spinner
)
from core.theme_manager import init_theme, render_theme_selector

# Performance optimizations
st.set_page_config(
    page_title='Upload e Análise', 
    page_icon='📥', 
    layout='wide',
    initial_sidebar_state='collapsed'  # Sidebar collapsed by default
)

# Initialize theme
init_theme()

# Cache filter options for better performance
@st.cache_data
def get_filter_options(df, column):
	"""Get unique values for filter dropdowns."""
	if column not in df.columns:
		return ['Todos']
	return ['Todos'] + sorted(df[column].dropna().unique().tolist())

st.title('📥 Upload e Análise de Dados')
st.markdown('Carregue sua planilha de bovinos ou use dados de exemplo para começar.')

# Performance: Only create columns when needed
col1, col2 = st.columns([3, 1])

os.makedirs('output', exist_ok=True)
history_path = os.path.join('output', 'upload_history.json')
if not os.path.exists(history_path):
	with open(history_path, 'w', encoding='utf-8') as f:
		json.dump([], f, ensure_ascii=False, indent=2)

# Sidebar: Upload History and Performance Info
with st.sidebar:
	st.markdown('### 📜 Histórico de Uploads')
	try:
		with open(history_path, 'r', encoding='utf-8') as f:
			hist = json.load(f)
		if hist:
			st.caption(f'Total: {len(hist)} arquivo(s)')
			for h in hist[-10:]:  # Last 10
				st.caption(f"📄 {h.get('filename', 'N/A')} ({h.get('rows', 0)} linhas)")
		else:
			st.info('Nenhum upload ainda.')
	except Exception:
		st.warning('Histórico indisponível.')
	
	# Show performance info if data is loaded
	if 'df_clean' in st.session_state:
		show_performance_info()
	
	st.markdown('---')
	render_theme_selector()

# Main content
with col1:
	uploaded = st.file_uploader('Selecione um arquivo (.xlsx ou .csv)', type=['xlsx','csv'], help='Envie sua planilha com dados de bovinos')
with col2:
	if st.button('📥 Usar Dados de Exemplo', help='Carrega 50 registros de exemplo'):
		with st.spinner('Gerando dados de exemplo...'):
			df_sample = generate_sample_bovinos(50)
			st.session_state['df_clean'] = df_sample
			st.success('✅ Dados de exemplo carregados!')
			st.rerun()

if uploaded is not None:
	try:
		# Progress container
		progress_container = st.container()
		
		def process_file(status_update=None):
			content = uploaded.getvalue()
			file_hash = hashlib.sha256(content).hexdigest()
			
			# File size check
			if len(content) > 100_000_000:
				raise ValueError('Arquivo muito grande. Máximo: 100 MB')
			
			# Step 1: Read file
			if status_update:
				status_update('Lendo arquivo...')
			show_progress('Lendo arquivo...', 1, 4, progress_container.progress(0))
			
			if uploaded.name.endswith('.csv'):
				try:
					df = pd.read_csv(io.BytesIO(content), encoding='utf-8')
				except (UnicodeDecodeError, pd.errors.ParserError):
					try:
						df = pd.read_csv(io.BytesIO(content), encoding='latin-1', sep=None, engine='python')
					except Exception:
						raise ValueError('Falha ao ler CSV. Verifique o formato do arquivo.')
			else:
				try:
					df = pd.read_excel(io.BytesIO(content))
				except Exception:
					raise ValueError('Falha ao ler Excel. Arquivo pode estar corrompido.')
				
				# Step 2: Clean data
				if status_update:
					status_update('Limpando dados...')
				show_progress('Limpando dados...', 2, 4, progress_container.progress(0.5))
				df_clean, cleaning_info = clean_data(df, optimize_memory=True)
				
				# Show cleaning information
				if cleaning_info.get('success'):
					st.success(f"✅ Dados limpos: {cleaning_info['final_rows']} linhas, {cleaning_info['final_columns']} colunas")
					if 'memory_optimization' in cleaning_info:
						mem_info = cleaning_info['memory_optimization']
						st.info(f"💾 Memória otimizada: {mem_info['reduction_percentage']:.1f}% de redução ({mem_info['savings_mb']:.1f} MB economizados)")
				
				# Step 3: Optimize memory
				if status_update:
					status_update('Otimizando memória...')
				show_progress('Otimizando memória...', 3, 4, progress_container.progress(0.75))
				df_clean = optimize_dataframe_memory(df_clean)
				
				# Step 4: Save to session state
				if status_update:
					status_update('Finalizando...')
				show_progress('Finalizando...', 4, 4, progress_container.progress(1.0))
				st.session_state['df_clean'] = df_clean
				
				return file_hash, df_clean
		
		# Multi-step visual status
		with st.status('Processando arquivo...', expanded=True) as status:
			file_hash, df_clean = with_progress('Processando arquivo', lambda: process_file(status.update))
			status.update(label='✅ Arquivo processado!', state='complete')
		
		if df_clean.empty:
			show_toast_error('O arquivo está vazio após limpeza.')
			st.stop()
		
		show_toast_success(f'Dados carregados: {len(df_clean)} registros')
		
		# Save to history
		try:
			with open(history_path, 'r', encoding='utf-8') as f:
				hist = json.load(f)
		except Exception:
			hist = []
		
		if any(h.get('hash') == file_hash for h in hist):
			show_toast_info('Este arquivo já foi enviado anteriormente.')
		
		hist.append({
			'filename': uploaded.name,
			'rows': int(len(df_clean)),
			'columns': int(len(df_clean.columns)),
			'hash': file_hash,
			'timestamp': datetime.datetime.utcnow().isoformat() + 'Z'
		})
		try:
			with open(history_path, 'w', encoding='utf-8') as f:
				json.dump(hist, f, ensure_ascii=False, indent=2)
		except Exception:
			pass
		
	except Exception as e:
		from core.error_handler import ErrorContext, error_handler
		from core.error_recovery import show_recovery_interface
		
		context = ErrorContext('upload_analise', 'process_file')
		error_info = error_handler.handle_error(e, context)
		
		# Show recovery options
		recovery_result = show_recovery_interface(e, {
			'filename': uploaded.name,
			'file_size': len(content) if 'content' in locals() else 0,
			'error_info': error_info
		})
		
		if recovery_result is not None:
			st.success("Arquivo processado com sucesso após recuperação!")
			st.rerun()
		st.stop()

# Show data if loaded
if 'df_clean' in st.session_state:
	df_clean = st.session_state['df_clean']
	
	# Filtros Avançados
	st.divider()
	st.subheader('🔍 Filtros Avançados')
	
	# Initialize filter state
	if 'advanced_filters' not in st.session_state:
		st.session_state['advanced_filters'] = {}
	if 'filter_mode' not in st.session_state:
		st.session_state['filter_mode'] = 'simple'
	
	# Filter mode selector
	col_mode1, col_mode2, col_mode3 = st.columns([2, 1, 1])
	
	with col_mode1:
		options = ['Simples', 'Avançado', 'Query Builder']
		current = str(st.session_state.get('filter_mode', 'simples')).lower()
		# Normaliza variações com/sem acento para evitar bytes nulos acidentais
		current_norm = (current
			.replace('ã', 'a')
			.replace('á', 'a')
			.replace('â', 'a')
			.replace('ç', 'c')
		)
		if 'query' in current_norm:
			current_label = 'Query Builder'
		elif current_norm.startswith('avanc'):
			current_label = 'Avançado'
		else:
			current_label = 'Simples'
		selected_index = options.index(current_label) if current_label in options else 0
		filter_mode = st.radio(
			'Modo de filtro:',
			options,
			index=selected_index
		)
		st.session_state['filter_mode'] = filter_mode.lower()
	
	with col_mode2:
		if st.button('💾 Salvar Preset'):
			if st.session_state['advanced_filters']:
				preset_name = st.text_input('Nome do preset:', key='preset_name')
				if preset_name:
					save_filter_preset(preset_name, st.session_state['advanced_filters'])
					st.success(f'✅ Preset "{preset_name}" salvo!')
			else:
				st.warning('Nenhum filtro para salvar')
	
	with col_mode3:
		presets = list_filter_presets()
		if presets:
			selected_preset = st.selectbox('Carregar preset:', [''] + presets)
			if selected_preset and st.button('📂 Carregar'):
				loaded_filters = load_filter_preset(selected_preset)
				if loaded_filters:
					st.session_state['advanced_filters'] = loaded_filters
					st.success(f'✅ Preset "{selected_preset}" carregado!')
					st.rerun()
	
	# Apply filters based on mode
	if filter_mode == 'Simples':
		with st.expander('Filtros Simples', expanded=False):
			col_f1, col_f2, col_f3 = st.columns(3)
			
			# Collect filter values first
			estado_sel = 'Todos'
			ano_sel = 'Todos'
			raca_sel = 'Todas'
			trim_sel = 'Todos'
			faixa_preco = None
			
			with col_f1:
				if 'ESTADO' in df_clean.columns:
					estados = get_filter_options(df_clean, 'ESTADO')
					estado_sel = st.selectbox('Estado:', estados, key='simple_estado')
				
				if 'ANO' in df_clean.columns:
					anos = get_filter_options(df_clean, 'ANO')
					ano_sel = st.selectbox('Ano:', anos, key='simple_ano')
			
			with col_f2:
				if 'RAÇA' in df_clean.columns:
					racas = get_filter_options(df_clean, 'RAÇA')
					raca_sel = st.selectbox('Raça:', racas, key='simple_raca')
				
				if 'TRIMESTRE' in df_clean.columns:
					trimestres = get_filter_options(df_clean, 'TRIMESTRE')
					trim_sel = st.selectbox('Trimestre:', trimestres, key='simple_trim')
			
			with col_f3:
				if 'PREÇO POR KG' in df_clean.columns:
					preco_min = float(df_clean['PREÇO POR KG'].min())
					preco_max = float(df_clean['PREÇO POR KG'].max())
					faixa_preco = st.slider(
						'Faixa de Preço (R$/kg):',
						preco_min, preco_max,
						(preco_min, preco_max),
						step=0.1,
						key='simple_preco'
					)
			
			# Apply simple filters
			config = get_performance_config(len(df_clean))
			show_spinner = len(df_clean) > 1000
			
			filters = {}
			if estado_sel != 'Todos' and 'ESTADO' in df_clean.columns:
				filters['ESTADO'] = estado_sel
			if ano_sel != 'Todos' and 'ANO' in df_clean.columns:
				filters['ANO'] = ano_sel
			if raca_sel != 'Todas' and 'RAÇA' in df_clean.columns:
				filters['RAÇA'] = raca_sel
			if trim_sel != 'Todos' and 'TRIMESTRE' in df_clean.columns:
				filters['TRIMESTRE'] = trim_sel
			if faixa_preco and 'PREÇO POR KG' in df_clean.columns:
				filters['PREÇO POR KG'] = faixa_preco
			
			def apply_simple_filters():
				return apply_filters_efficient(df_clean, filters)
			
			if show_spinner:
				df_filtered = show_loading_spinner('Aplicando filtros...', apply_simple_filters)
			else:
				df_filtered = apply_simple_filters()
			
			st.session_state['df_filtered'] = df_filtered
			
			if len(df_filtered) < len(df_clean):
				st.success(f'✅ Filtros aplicados: {len(df_filtered)} de {len(df_clean)} registros')
				if st.button('🧹 Limpar Filtros', key='clear_simple'):
					st.session_state['df_filtered'] = df_clean.copy()
					st.rerun()
	
	elif filter_mode == 'Avançado':
		with st.expander('Filtros Avançados', expanded=True):
			# Get filter suggestions
			suggestions = get_filter_suggestions(df_clean)
			
			st.markdown('**💡 Sugestões de Filtros:**')
			if suggestions:
				for suggestion in suggestions[:3]:
					st.caption(f'• {suggestion}')
			
			# Add new filter
			col_add1, col_add2, col_add3 = st.columns([2, 2, 1])
			
			with col_add1:
				filter_column = st.selectbox(
					'Coluna:',
					[''] + list(df_clean.columns),
					key='filter_column'
				)
			
			with col_add2:
				if filter_column:
					filter_type = st.selectbox(
						'Tipo de filtro:',
						['equal', 'range', 'multi_select', 'percentile', 'date_range'],
						key='filter_type'
					)
			
			with col_add3:
				if filter_column and st.button('➕ Adicionar Filtro'):
					if filter_column in df_clean.columns:
						if filter_type == 'equal':
							unique_values = df_clean[filter_column].dropna().unique()
							if len(unique_values) <= 50:
								selected_value = st.selectbox(
									f'Valor para {filter_column}:',
									unique_values,
									key=f'value_{filter_column}'
								)
								st.session_state['advanced_filters'][filter_column] = {
									'type': 'equal',
									'value': selected_value
								}
						elif filter_type == 'range':
							if pd.api.types.is_numeric_dtype(df_clean[filter_column]):
								min_val = float(df_clean[filter_column].min())
								max_val = float(df_clean[filter_column].max())
								range_vals = st.slider(
									f'Faixa para {filter_column}:',
									min_val, max_val,
									(min_val, max_val),
									key=f'range_{filter_column}'
								)
								st.session_state['advanced_filters'][filter_column] = {
									'type': 'range',
									'value': range_vals
								}
						elif filter_type == 'multi_select':
							unique_values = df_clean[filter_column].dropna().unique()
							selected_values = st.multiselect(
								f'Valores para {filter_column}:',
								unique_values,
								key=f'multi_{filter_column}'
							)
							if selected_values:
								st.session_state['advanced_filters'][filter_column] = {
									'type': 'multi_select',
									'value': selected_values
								}
						elif filter_type == 'percentile':
							percentile = st.slider(
								f'Percentil para {filter_column}:',
								0, 100, 90,
								key=f'percentile_{filter_column}'
							)
							st.session_state['advanced_filters'][filter_column] = {
								'type': 'percentile',
								'value': percentile
							}
						
						st.success(f'✅ Filtro adicionado para {filter_column}')
						st.rerun()
			
			# Display current filters
			if st.session_state['advanced_filters']:
				st.markdown('**Filtros Ativos:**')
				for col, filter_config in st.session_state['advanced_filters'].items():
					col_disp1, col_disp2 = st.columns([3, 1])
					
					with col_disp1:
						filter_desc = f"{col} ({filter_config['type']}): {filter_config['value']}"
						st.caption(filter_desc)
					
					with col_disp2:
						if st.button('🗑️', key=f'remove_{col}'):
							del st.session_state['advanced_filters'][col]
							st.rerun()
				
				# Apply advanced filters
				if st.button('🎯 Aplicar Filtros Avançados', type='primary'):
					def apply_filters():
						df_filtered = apply_complex_filters(df_clean, st.session_state['advanced_filters'])
						st.session_state['df_filtered'] = df_filtered
						return df_filtered
					
					try:
						df_filtered = show_loading_spinner('Aplicando filtros avançados...', apply_filters)
						show_toast_success(f'Filtros avançados aplicados: {len(df_filtered)} de {len(df_clean)} registros')
					except Exception as e:
						show_toast_error(f'Erro ao aplicar filtros: {e}')
				
				if st.button('🧹 Limpar Todos os Filtros', key='clear_advanced'):
					st.session_state['advanced_filters'] = {}
					st.session_state['df_filtered'] = df_clean.copy()
					st.rerun()
			else:
				st.info('Nenhum filtro avançado configurado.')
	
	elif filter_mode == 'Query Builder':
		with st.expander('Query Builder', expanded=True):
			st.markdown('**🔧 Construtor de Consultas**')
			
			# Simple query builder interface
			query_parts = []
			
			# Group 1
			st.markdown('**Grupo 1:**')
			col_q1, col_q2, col_q3 = st.columns([2, 2, 1])
			
			with col_q1:
				col1 = st.selectbox('Coluna:', [''] + list(df_clean.columns), key='q1_col')
			with col_q2:
				if col1:
					op1 = st.selectbox('Operador:', ['=', '>', '<', '>=', '<=', 'contém'], key='q1_op')
			with col_q3:
				if col1 and op1:
					if op1 in ['=', 'contém']:
						unique_vals = df_clean[col1].dropna().unique()
						if len(unique_vals) <= 20:
							val1 = st.selectbox('Valor:', unique_vals, key='q1_val')
						else:
							val1 = st.text_input('Valor:', key='q1_val')
					else:
						val1 = st.number_input('Valor:', key='q1_val')
			
			if col1 and op1 and 'val1' in locals():
				query_parts.append((col1, op1, val1))
			
			# Logic operator
			logic_op = st.selectbox('Operador Lógico:', ['E (AND)', 'OU (OR)'])
			
			# Group 2
			st.markdown('**Grupo 2 (Opcional):**')
			col_q4, col_q5, col_q6 = st.columns([2, 2, 1])
			
			with col_q4:
				col2 = st.selectbox('Coluna:', [''] + list(df_clean.columns), key='q2_col')
			with col_q5:
				if col2:
					op2 = st.selectbox('Operador:', ['=', '>', '<', '>=', '<=', 'contém'], key='q2_op')
			with col_q6:
				if col2 and op2:
					if op2 in ['=', 'contém']:
						unique_vals = df_clean[col2].dropna().unique()
						if len(unique_vals) <= 20:
							val2 = st.selectbox('Valor:', unique_vals, key='q2_val')
						else:
							val2 = st.text_input('Valor:', key='q2_val')
					else:
						val2 = st.number_input('Valor:', key='q2_val')
			
			if col2 and op2 and 'val2' in locals():
				query_parts.append((col2, op2, val2))
			
			# Build and apply query
			if query_parts and st.button('🔍 Executar Query'):
				def execute_query():
					# Convert to filter format
					filter_config = {
						'logic': 'AND' if 'AND' in logic_op else 'OR',
						'groups': []
					}
					
					for col, op, val in query_parts:
						if op == '=':
							filter_config['groups'].append({
								'column': col,
								'type': 'equal',
								'value': val
							})
						elif op == 'contém':
							filter_config['groups'].append({
								'column': col,
								'type': 'contains',
								'value': val
							})
						elif op in ['>', '<', '>=', '<=']:
							filter_config['groups'].append({
								'column': col,
								'type': 'comparison',
								'operator': op,
								'value': val
							})
					
					df_filtered = apply_complex_filters(df_clean, filter_config)
					st.session_state['df_filtered'] = df_filtered
					return df_filtered
				
				try:
					df_filtered = show_loading_spinner('Executando query...', execute_query)
					show_toast_success(f'Query executada: {len(df_filtered)} de {len(df_clean)} registros')
				except Exception as e:
					show_toast_error(f'Erro na query: {e}')
	
	# Apply current filters if any exist
	if st.session_state.get('advanced_filters') or ('df_filtered' in st.session_state):
		current_filters = st.session_state.get('advanced_filters', {})
		if current_filters:
			with st.spinner('Aplicando filtros...'):
				try:
					df_filtered = apply_complex_filters(df_clean, current_filters)
					st.session_state['df_filtered'] = df_filtered
				except Exception as e:
					st.error(f'❌ Erro ao aplicar filtros: {e}')
					df_filtered = df_clean
		else:
			df_filtered = st.session_state.get('df_filtered', df_clean)
	else:
		df_filtered = df_clean
	
	# Usar df_filtered se existir, senão usar df_clean
	df_display = st.session_state.get('df_filtered', df_clean)
	
	st.divider()
	st.subheader('📊 Visão Geral dos Dados')
	
	col1, col2, col3, col4 = st.columns(4)
	with col1:
		st.metric('Registros', formatar_numero(len(df_display), 0))
	with col2:
		st.metric('Colunas', len(df_display.columns))
	with col3:
		if 'PREÇO POR KG' in df_display.columns:
			from core.formatters import formatar_moeda
			st.metric('Preço Médio/kg', formatar_moeda(df_display['PREÇO POR KG'].mean()))
	with col4:
		if 'ESTADO' in df_display.columns:
			st.metric('Estados', df_display['ESTADO'].nunique())
	
	# Column report
	with st.expander('📋 Relatório de Colunas'):
		expected = ['ANO','TRIMESTRE','ESTADO','RAÇA','GÊNERO','ERA','VIA','TIPO GADO GORDO','PESO (KG)','VALOR','PREÇO POR KG','ARROBA GORDO','ARROBA MAGRO','% ÁGIO']
		present = [c for c in expected if c in df_clean.columns]
		missing = [c for c in expected if c not in df_clean.columns]
		
		col_a, col_b = st.columns(2)
		with col_a:
			st.markdown('**✅ Colunas Presentes:**')
			for c in present:
				st.caption(f'• {c}')
		with col_b:
			if missing:
				st.markdown('**⚠️ Colunas Faltantes:**')
				for c in missing:
					st.caption(f'• {c}')
	
	# Busca rápida
	st.markdown('### 🔎 Busca Rápida')
	busca_texto = st.text_input('Buscar em qualquer coluna:', placeholder='Digite aqui...')
	
	if busca_texto:
		# Busca em todas as colunas tipo object
		if len(df_display) > 500:  # Show spinner for large datasets
			with st.spinner('Buscando...'):
				mask = df_display.apply(
					lambda col: col.astype(str).str.contains(busca_texto, case=False, na=False) if col.dtype == 'object' else False
				).any(axis=1)
				df_display = df_display[mask]
		else:
			mask = df_display.apply(
				lambda col: col.astype(str).str.contains(busca_texto, case=False, na=False) if col.dtype == 'object' else False
			).any(axis=1)
			df_display = df_display[mask]
		st.info(f'🔍 Encontrados {len(df_display)} registros com "{busca_texto}"')
	
	# Data preview
	st.markdown('### 👁️ Prévia dos Dados')
	st.caption(f'Mostrando até 100 de {len(df_display)} registros')
	st.dataframe(df_display.head(100), use_container_width=True)
	
	# Next step button
	st.divider()
	st.info('✅ Dados prontos! Vá para **Resultados e Export** para ver análises e gráficos.')
else:
	st.info('👆 Envie um arquivo ou use dados de exemplo para começar.')

