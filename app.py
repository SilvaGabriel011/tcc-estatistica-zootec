# -*- coding: utf-8 -*-
"""
Tio ZooEstatisco - Aplicação Streamlit
Análise estatística de dados de mercado de bovinos
"""

import streamlit as st
import os
import json
# Imports opcionais - não quebrar se módulos não existirem

try:
    from core.notifications import show_toast_info
    NOTIFICATIONS_AVAILABLE = True
except ImportError:
    NOTIFICATIONS_AVAILABLE = False
    def show_toast_info(msg): st.info(msg)

try:
    from core.theme_manager import init_theme, render_theme_selector
    THEME_AVAILABLE = True
except ImportError:
    THEME_AVAILABLE = False
    def init_theme(): pass
    def render_theme_selector(): pass
import importlib

# Configuração da página
st.set_page_config(
	page_title="Tio ZooEstatisco",
	page_icon="🐂",
	layout="wide",
	initial_sidebar_state="collapsed"  # Performance: collapsed by default
)

# Initialize theme (se disponível)
if THEME_AVAILABLE:
    init_theme()

# Startup dependency check (fail fast with friendly messages)
def _check_startup_dependencies():
    problems = []
    for pkg in ['pandas','plotly','statsmodels','openpyxl']:
        try:
            importlib.import_module(pkg)
        except Exception as e:
            problems.append(f'Dependência ausente: {pkg} ({e})')
    if problems:
        for p in problems:
            st.warning(p)
        st.stop()

_check_startup_dependencies()

# Criar diretórios necessários
os.makedirs('output/figuras', exist_ok=True)
os.makedirs('output/tabelas', exist_ok=True)
os.makedirs('static', exist_ok=True)

# PWA features removidos conforme solicitado

# Página inicial
st.title("🐂 Tio ZooEstatístico")
st.markdown("### Análise Estatística de Dados de Mercado de Bovinos")

# Welcome Modal (First Visit)
if 'first_visit' not in st.session_state:
    st.session_state['first_visit'] = True

if st.session_state['first_visit']:
    with st.container():
        st.markdown("""
        <div style="background: linear-gradient(90deg, #4CAF50, #45a049); padding: 20px; border-radius: 10px; margin: 10px 0;">
            <h2 style="color: white; margin: 0;">🎉 Bem-vindo ao Tio ZooEstatisco!</h2>
            <p style="color: white; margin: 10px 0 0 0;">Sua ferramenta completa para análise estatística de dados de mercado de bovinos.</p>
        </div>
        """, unsafe_allow_html=True)
        
        col1, col2, col3 = st.columns(3)
        
        with col1:
            st.markdown("""
            ### 🚀 Início Rápido
            1. **Upload** - Envie seus dados
            2. **Análise** - Veja gráficos e métricas  
            3. **IA** - Converse sobre os dados
            """)
        
        with col2:
            st.markdown("""
            ### 📊 Recursos Principais
            - Análise estatística avançada
            - Gráficos interativos
            - Assistente IA especializado
            - Exportação profissional
            """)
        
        with col3:
            st.markdown("""
            ### 💡 Dicas
            - Use dados de exemplo para testar
            - Filtros avançados disponíveis
            - IA lembra conversas anteriores
            - Exporte em múltiplos formatos
            """)
        
        col_btn1, col_btn2 = st.columns([1, 4])
        
        with col_btn1:
            if st.button('✅ Entendi!', type='primary'):
                st.session_state['first_visit'] = False
                st.rerun()
        
        with col_btn2:
            dont_show_again = st.checkbox('Não mostrar novamente')
            if dont_show_again:
                st.session_state['first_visit'] = False

# Recent Files Section
def load_upload_history():
    """Load upload history from file."""
    history_path = 'upload_history.json'
    try:
        if os.path.exists(history_path):
            with open(history_path, 'r', encoding='utf-8') as f:
                return json.load(f)
    except:
        pass
    return []

def display_recent_files():
    """Display recent uploaded files."""
    history = load_upload_history()
    
    if history:
        st.subheader('📁 Arquivos Recentes')
        st.caption('Últimos arquivos enviados - clique para recarregar')
        
        # Show last 5 files
        recent_files = history[-5:]
        
        for i, file_info in enumerate(reversed(recent_files)):
            with st.container():
                col1, col2, col3, col4 = st.columns([3, 1, 1, 1])
                
                with col1:
                    st.write(f"📄 **{file_info.get('filename', 'Arquivo')}**")
                    st.caption(f"{file_info.get('rows', 0)} registros • {file_info.get('columns', 0)} colunas")
                
                with col2:
                    st.caption(f"{file_info.get('timestamp', '')[:16]}")
                
                with col3:
                    if st.button('🔄', key=f'reload_{i}', help='Recarregar este arquivo'):
                        if NOTIFICATIONS_AVAILABLE:
                            show_toast_info(f"Recarregando {file_info.get('filename', 'arquivo')}...")
                        else:
                            st.info(f"Recarregando {file_info.get('filename', 'arquivo')}...")
                        # This would trigger a reload - placeholder for now
                
                with col4:
                    if st.button('📊', key=f'analyze_{i}', help='Ir para análise'):
                        st.switch_page('pages/2_Resultados_e_Export.py')
                
                if i < len(recent_files) - 1:  # Don't show divider after last item
                    st.divider()
    else:
        st.info('📁 Nenhum arquivo recente encontrado. Faça upload de dados para começar!')

# Quick Stats Section (if data is loaded)
def display_quick_stats():
    """Display quick stats if data is loaded."""
    if 'df_clean' in st.session_state:
        df = st.session_state['df_clean']
        
        st.subheader('📊 Estatísticas Rápidas')
        
        col1, col2, col3, col4 = st.columns(4)
        
        with col1:
            st.metric('Total de Registros', len(df))
        
        with col2:
            st.metric('Total de Colunas', len(df.columns))
        
        with col3:
            if 'PREÇO POR KG' in df.columns:
                avg_price = df['PREÇO POR KG'].mean()
                st.metric('Preço Médio', f"R$ {avg_price:.2f}")
            else:
                st.metric('Preço Médio', 'N/A')
        
        with col4:
            if 'ESTADO' in df.columns:
                unique_states = df['ESTADO'].nunique()
                st.metric('Estados', unique_states)
            else:
                st.metric('Estados', 'N/A')
        
        col_btn1, col_btn2 = st.columns(2)
        
        with col_btn1:
            if st.button('📊 Ir para Análise', type='primary'):
                st.switch_page('pages/2_Resultados_e_Export.py')
        
        with col_btn2:
            if st.button('🤖 Conversar com IA'):
                st.switch_page('pages/3_Assistente_IA.py')

# Display sections
display_recent_files()

if 'df_clean' in st.session_state:
    st.divider()
    display_quick_stats()

st.divider()

# Welcome guide
with st.expander("📖 Guia Rápido de Uso", expanded=True):
	st.markdown("""
	### Como usar este aplicativo (3 passos simples):
	
	1. **📥 Upload e Análise**
	   - Envie sua planilha (.xlsx ou .csv) com dados de bovinos
	   - Ou use dados de exemplo para testar
	   - Veja a prévia e relatório de colunas
	
	2. **📊 Resultados e Export**
	   - Visualize métricas principais (média, mediana, min, max)
	   - Gere gráficos automaticamente
	   - Exporte em CSV ou PDF com resumo da IA
	
	3. **🤖 Assistente IA**
	   - Converse com IA especializada em bovinos
	   - Faça perguntas sobre seus dados
	   - Gere resumos automáticos
	
	---
	**💡 Dica:** Comece com os dados de exemplo se não tiver uma planilha pronta!
	""")

st.divider()

# Features overview
st.subheader("✨ Funcionalidades")

col1, col2, col3 = st.columns(3)

with col1:
	st.markdown("""
	#### 📥 Upload Simplificado
	- Suporte para Excel e CSV
	- Detecção automática de encoding
	- Limpeza automática de dados
	- Dados de exemplo incluídos
	""")

with col2:
	st.markdown("""
	#### 📊 Análise Completa
	- Estatísticas descritivas
	- Gráficos automáticos
	- Exportação em CSV/PDF
	- Resumos gerados por IA
	""")

with col3:
	st.markdown("""
	#### 🤖 Assistente IA
	- Chat especializado em zootecnia
	- **Citações bibliográficas automáticas** 📚
	- Glossário 75+ termos técnicos
	- Interpretação de resultados
	- IA local gratuita (Ollama)
	""")

st.divider()

# Expected data structure
with st.expander("📋 Estrutura de Dados Esperada"):
	st.markdown("""
	### Colunas Reconhecidas Automaticamente:
	
	**Temporais:**
	- ANO, TRIMESTRE
	
	**Categóricas:**
	- ESTADO, RAÇA, GÊNERO, ERA, VIA, TIPO GADO GORDO
	
	**Numéricas:**
	- PESO (KG), VALOR, PREÇO POR KG
	- ARROBA GORDO, ARROBA MAGRO, % ÁGIO
	
	### Derivações Automáticas:
	- `PREÇO POR KG = VALOR / PESO (KG)`
	- `ARROBA GORDO = PREÇO POR KG × 15` (1 arroba = 15 kg)
	- `% ÁGIO = (ARROBA MAGRO / ARROBA GORDO) - 1`
	
	**Observação:** Nem todas as colunas são obrigatórias. O app funciona com dados parciais.
	""")

st.divider()

# Navigation
st.markdown("""
### 🚀 Começar Agora

Use o menu lateral (➡️) para navegar:
1. **Upload e Análise** - Envie seus dados ou use exemplo
2. **Resultados e Export** - Veja análises e exporte (CSV/Excel/PDF)
3. **Assistente IA** - Converse com IA especializada (com referências!)
4. **Glossário** - 75+ termos de zootecnia
5. **Calculadoras** - ROI, conversores, simulador
6. **Referências** - Bibliografia de Zootecnia (livros, artigos, instituições)

---
""")

# PWA Features removidos conforme solicitado

# Theme selector in sidebar (se disponível)
if THEME_AVAILABLE:
    st.sidebar.markdown("---")
    render_theme_selector()

# Performance monitor removido conforme solicitado

# Footer
st.sidebar.markdown("---")
st.sidebar.info("""
**Versão**: 3.1.0 🇧🇷  
**Edição Brasileira**  
Desenvolvido para análise de dados agropecuários
""")
