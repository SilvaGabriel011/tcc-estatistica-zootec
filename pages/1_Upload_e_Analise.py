import streamlit as st
import pandas as pd
import json
import os
import io
import datetime
import hashlib
import sys
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from core.cleaning import clean_data, get_data_quality_report, suggest_data_improvements, apply_suggested_improvements
from core.data_validator import validate_uploaded_file, DataValidator
from core.sample_data import generate_sample_bovinos
from core.formatters import formatar_numero
from core.notifications import (
    show_progress, show_toast_success, show_toast_error, show_toast_info,
    with_progress, show_loading_spinner
)
from core.theme_manager import init_theme, render_theme_selector

# Helper functions for performance info
def show_performance_info():
    """Show performance information in sidebar."""
    if 'df_clean' in st.session_state:
        df = st.session_state['df_clean']
        st.caption(f"📊 {len(df)} registros carregados")
        st.caption(f"💾 {df.memory_usage(deep=True).sum() / 1024**2:.1f} MB")

# Filter preset functions
def save_filter_preset(preset_name, filters):
    """Save filter preset to JSON file."""
    presets_path = os.path.join('output', 'filter_presets.json')
    
    # Load existing presets
    try:
        with open(presets_path, 'r', encoding='utf-8') as f:
            presets = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        presets = {}
    
    # Save new preset
    presets[preset_name] = {
        'filters': filters,
        'created_at': datetime.datetime.now().isoformat()
    }
    
    # Write back to file
    with open(presets_path, 'w', encoding='utf-8') as f:
        json.dump(presets, f, ensure_ascii=False, indent=2)

def list_filter_presets():
    """List all available filter presets."""
    presets_path = os.path.join('output', 'filter_presets.json')
    
    try:
        with open(presets_path, 'r', encoding='utf-8') as f:
            presets = json.load(f)
        return list(presets.keys())
    except (FileNotFoundError, json.JSONDecodeError):
        return []

def load_filter_preset(preset_name):
    """Load a specific filter preset."""
    presets_path = os.path.join('output', 'filter_presets.json')
    
    try:
        with open(presets_path, 'r', encoding='utf-8') as f:
            presets = json.load(f)
        return presets.get(preset_name, {}).get('filters', {})
    except (FileNotFoundError, json.JSONDecodeError):
        return {}

def get_performance_config(data_size):
    """Get performance configuration based on data size."""
    if data_size <= 1000:
        # Small datasets - fast processing
        return {
            'show_spinner': False,
            'cache_ttl': 300,  # 5 minutes
            'batch_size': 100,
            'enable_optimization': False
        }
    elif data_size <= 10000:
        # Medium datasets - balanced performance
        return {
            'show_spinner': True,
            'cache_ttl': 600,  # 10 minutes
            'batch_size': 500,
            'enable_optimization': True
        }
    else:
        # Large datasets - optimized for performance
        return {
            'show_spinner': True,
            'cache_ttl': 1800,  # 30 minutes
            'batch_size': 1000,
            'enable_optimization': True
        }

def apply_filters_efficient(df, filters):
    """Apply simple filters efficiently to DataFrame."""
    if not filters:
        return df
    
    filtered_df = df.copy()
    
    for column, value in filters.items():
        if column not in filtered_df.columns:
            continue
            
        if value is None or value == '':
            continue
        
        if isinstance(value, tuple) and len(value) == 2:
            # Range filter (min, max)
            min_val, max_val = value
            mask = (filtered_df[column] >= min_val) & (filtered_df[column] <= max_val)
            filtered_df = filtered_df[mask]
            
        elif isinstance(value, list):
            # Multi-select filter
            mask = filtered_df[column].isin(value)
            filtered_df = filtered_df[mask]
            
        else:
            # Single value filter
            mask = filtered_df[column] == value
            filtered_df = filtered_df[mask]
    
    return filtered_df

def apply_complex_filters(df, filter_config):
    """Apply complex/advanced filters to DataFrame."""
    if not filter_config:
        return df
    
    filtered_df = df.copy()
    
    for filter_item in filter_config:
        column = filter_item.get('column')
        filter_type = filter_item.get('type')
        value = filter_item.get('value')
        
        if not column or column not in filtered_df.columns:
            continue
            
        if value is None or value == '':
            continue
        
        if filter_type == 'range':
            # Range filter
            if isinstance(value, (list, tuple)) and len(value) == 2:
                min_val, max_val = value
                mask = (filtered_df[column] >= min_val) & (filtered_df[column] <= max_val)
                filtered_df = filtered_df[mask]
                
        elif filter_type == 'select':
            # Single or multi-select filter
            if isinstance(value, list):
                mask = filtered_df[column].isin(value)
            else:
                mask = filtered_df[column] == value
            filtered_df = filtered_df[mask]
            
        elif filter_type == 'text':
            # Text search filter
            mask = filtered_df[column].astype(str).str.contains(str(value), case=False, na=False)
            filtered_df = filtered_df[mask]
    
    return filtered_df

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
	uploaded = st.file_uploader(
		'Selecione um arquivo (.xlsx, .csv, .json, .zip)', 
		type=['xlsx','csv','json','zip'], 
		help='Envie sua planilha com dados de bovinos. Suporta Excel, CSV, JSON e ZIP.'
	)
with col2:
	if st.button('📥 Usar Dados de Exemplo', help='Carrega 50 registros de exemplo'):
		with st.spinner('Gerando dados de exemplo...'):
			df_sample = generate_sample_bovinos(50)
			st.session_state['df_clean'] = df_sample
			st.session_state['upload_validation'] = {'success': True, 'format': 'sample'}
			st.success('✅ Dados de exemplo carregados!')
			st.rerun()

# Processar arquivo uploadado
if uploaded is not None:
	st.markdown('---')
	st.markdown('### 📊 Validação do Arquivo')
	
	with st.spinner('Validando arquivo...'):
		validation_result = validate_uploaded_file(uploaded)
	
	if 'error' in validation_result:
		st.error(f"❌ Erro na validação: {validation_result['error']}")
		if 'suggestions' in validation_result:
			st.info("💡 Sugestões:")
			for suggestion in validation_result['suggestions']:
				st.caption(f"• {suggestion}")
	else:
		st.success("✅ Arquivo validado com sucesso!")
		
		# Mostrar informações do arquivo
		col_info1, col_info2, col_info3 = st.columns(3)
		with col_info1:
			st.metric("📁 Formato", validation_result.get('format', 'Desconhecido'))
		with col_info2:
			st.metric("📊 Linhas", validation_result.get('rows', 0))
		with col_info3:
			st.metric("📋 Colunas", validation_result.get('columns', 0))
		
		# Mostrar relatório de qualidade
		if 'quality' in validation_result:
			quality = validation_result['quality']
			
			st.markdown('#### 📈 Relatório de Qualidade')
			
			# Métricas principais
			col_qual1, col_qual2, col_qual3 = st.columns(3)
			with col_qual1:
				st.metric("💾 Uso de Memória", f"{quality.get('memory_usage_mb', 0):.1f} MB")
			with col_qual2:
				st.metric("🔄 Duplicatas", quality.get('duplicate_rows', 0))
			with col_qual3:
				missing_cols = sum(1 for col, stats in quality.get('column_stats', {}).items() 
								 if stats.get('null_percentage', 0) > 30)
				st.metric("⚠️ Colunas Problemáticas", missing_cols)
			
			# Mostrar orientações
			validator = DataValidator()
			guidance = validator.get_upload_guidance(quality)
			
			if guidance:
				st.markdown('#### 💡 Orientações')
				for guidance_item in guidance:
					if guidance_item.startswith('✅'):
						st.success(guidance_item)
					elif guidance_item.startswith('⚠️'):
						st.warning(guidance_item)
					elif guidance_item.startswith('❌'):
						st.error(guidance_item)
					else:
						st.info(guidance_item)
		
		# Botão para processar dados
		if st.button('🚀 Processar Dados', type='primary'):
			with st.spinner('Processando dados...'):
				try:
					# Usar dados validados
					df = validation_result['dataframe']
					
					# Limpar e normalizar dados
					df_clean, cleaning_info = clean_data(df)
					
					# Salvar na sessão
					st.session_state['df_clean'] = df_clean
					st.session_state['upload_validation'] = validation_result
					st.session_state['cleaning_info'] = cleaning_info
					
					st.success('✅ Dados processados com sucesso!')
					st.rerun()
					
				except Exception as e:
					st.error(f"❌ Erro no processamento: {str(e)}")
					st.caption("Tente novamente ou use dados de exemplo.")

# Código duplicado removido - usando novo sistema de validação acima

# Show data if loaded
if 'df_clean' in st.session_state:
	df_clean = st.session_state['df_clean']
	
	st.divider()
	st.subheader('📊 Visão Geral dos Dados')
	
	col1, col2, col3, col4 = st.columns(4)
	with col1:
		st.metric('Registros', formatar_numero(len(df_clean), 0))
	with col2:
		st.metric('Colunas', len(df_clean.columns))
	with col3:
		if 'PREÇO POR KG' in df_clean.columns:
			from core.formatters import formatar_moeda
			st.metric('Preço Médio/kg', formatar_moeda(df_clean['PREÇO POR KG'].mean()))
	with col4:
		if 'ESTADO' in df_clean.columns:
			st.metric('Estados', df_clean['ESTADO'].nunique())
	
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
	
	# Data preview
	st.markdown('### 👁️ Prévia dos Dados')
	st.caption(f'Mostrando até 100 de {len(df_clean)} registros')
	st.dataframe(df_clean.head(100), use_container_width=True)
	
	# Next step button
	st.divider()
	st.info('✅ Dados prontos! Vá para **Resultados e Export** para ver análises e gráficos.')
else:
	st.info('👆 Envie um arquivo ou use dados de exemplo para começar.')

