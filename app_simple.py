"""
TCC Gado Gordo - Versão Simplificada
Análise estatística de dados de mercado de bovinos
"""

import streamlit as st
import pandas as pd
import numpy as np
import plotly.express as px
import plotly.graph_objects as go
from datetime import datetime
import io
import os

# Configuração da página
st.set_page_config(
    page_title="TCC Gado Gordo - Simplificado",
    page_icon="🐂",
    layout="wide"
)

# Criar diretórios necessários
os.makedirs('output', exist_ok=True)

# Função para limpar dados
def clean_data(df):
    """Limpeza básica dos dados"""
    # Converter colunas numéricas
    numeric_columns = ['PESO (KG)', 'VALOR', 'PREÇO POR KG', 'ARROBA GORDO', 'ARROBA MAGRO', '% ÁGIO']
    
    for col in numeric_columns:
        if col in df.columns:
            df[col] = pd.to_numeric(df[col], errors='coerce')
    
    # Remover linhas com valores nulos críticos
    if 'PREÇO POR KG' in df.columns:
        df = df.dropna(subset=['PREÇO POR KG'])
    
    return df

# Função para gerar dados de exemplo
def generate_sample_data():
    """Gerar dados de exemplo para teste"""
    np.random.seed(42)
    n = 100
    
    data = {
        'ANO': np.random.choice([2022, 2023, 2024], n),
        'TRIMESTRE': np.random.choice([1, 2, 3, 4], n),
        'ESTADO': np.random.choice(['MG', 'SP', 'MT', 'GO', 'RS'], n),
        'RAÇA': np.random.choice(['Nelore', 'Angus', 'Hereford', 'Gir'], n),
        'GÊNERO': np.random.choice(['Macho', 'Fêmea'], n),
        'ERA': np.random.choice(['Novilho', 'Vaca', 'Touro'], n),
        'VIA': np.random.choice(['Gado Gordo', 'Gado Magro'], n),
        'TIPO GADO GORDO': np.random.choice(['Confinado', 'Pastagem'], n),
        'PESO (KG)': np.random.normal(450, 50, n).round(0),
        'VALOR': np.random.normal(2000, 300, n).round(2),
    }
    
    df = pd.DataFrame(data)
    
    # Calcular derivadas
    df['PREÇO POR KG'] = (df['VALOR'] / df['PESO (KG)']).round(2)
    df['ARROBA GORDO'] = (df['PREÇO POR KG'] * 15).round(2)
    df['ARROBA MAGRO'] = (df['ARROBA GORDO'] * 0.9).round(2)
    df['% ÁGIO'] = ((df['ARROBA MAGRO'] / df['ARROBA GORDO']) - 1).round(3)
    
    return df

# Função para estatísticas descritivas
def get_descriptive_stats(df):
    """Calcular estatísticas descritivas"""
    if 'PREÇO POR KG' not in df.columns:
        return {}
    
    price_col = df['PREÇO POR KG']
    
    stats = {
        'Total de Registros': len(df),
        'Média': price_col.mean(),
        'Mediana': price_col.median(),
        'Desvio Padrão': price_col.std(),
        'Mínimo': price_col.min(),
        'Máximo': price_col.max(),
        'Primeiro Quartil': price_col.quantile(0.25),
        'Terceiro Quartil': price_col.quantile(0.75)
    }
    
    return stats

# Função para gerar gráficos
def create_plots(df):
    """Criar gráficos principais"""
    plots = []
    
    if 'PREÇO POR KG' not in df.columns:
        return plots
    
    # 1. Histograma de preços
    fig1 = px.histogram(
        df, x='PREÇO POR KG', 
        title='Distribuição de Preços por KG',
        labels={'PREÇO POR KG': 'Preço (R$/kg)', 'count': 'Frequência'}
    )
    plots.append(('Histograma de Preços', fig1))
    
    # 2. Box plot por Estado
    if 'ESTADO' in df.columns:
        fig2 = px.box(
            df, x='ESTADO', y='PREÇO POR KG',
            title='Preços por Estado'
        )
        plots.append(('Box Plot por Estado', fig2))
    
    # 3. Box plot por Raça
    if 'RAÇA' in df.columns:
        fig3 = px.box(
            df, x='RAÇA', y='PREÇO POR KG',
            title='Preços por Raça'
        )
        plots.append(('Box Plot por Raça', fig3))
    
    # 4. Scatter Peso vs Preço
    if 'PESO (KG)' in df.columns:
        fig4 = px.scatter(
            df, x='PESO (KG)', y='PREÇO POR KG',
            title='Relação Peso vs Preço',
            labels={'PESO (KG)': 'Peso (kg)', 'PREÇO POR KG': 'Preço (R$/kg)'}
        )
        plots.append(('Peso vs Preço', fig4))
    
    return plots

# Interface principal
st.title("🐂 TCC Gado Gordo - Versão Simplificada")
st.markdown("### Análise Estatística de Dados de Mercado de Bovinos")

# Sidebar para upload
st.sidebar.header("📁 Upload de Dados")

upload_option = st.sidebar.radio(
    "Escolha uma opção:",
    ["📊 Usar Dados de Exemplo", "📤 Fazer Upload de Arquivo"]
)

if upload_option == "📊 Usar Dados de Exemplo":
    if st.sidebar.button("Gerar Dados de Exemplo"):
        df = generate_sample_data()
        st.session_state['df'] = df
        st.success("✅ Dados de exemplo carregados com sucesso!")

elif upload_option == "📤 Fazer Upload de Arquivo":
    uploaded_file = st.sidebar.file_uploader(
        "Escolha um arquivo:",
        type=['csv', 'xlsx'],
        help="Formatos suportados: CSV, Excel (.xlsx)"
    )
    
    if uploaded_file is not None:
        try:
            if uploaded_file.name.endswith('.csv'):
                df = pd.read_csv(uploaded_file, encoding='utf-8')
            else:
                df = pd.read_excel(uploaded_file)
            
            df = clean_data(df)
            st.session_state['df'] = df
            st.success(f"✅ Arquivo carregado: {uploaded_file.name}")
            
        except Exception as e:
            st.error(f"❌ Erro ao carregar arquivo: {str(e)}")

# Mostrar dados se disponível
if 'df' in st.session_state:
    df = st.session_state['df']
    
    # Abas principais
    tab1, tab2, tab3 = st.tabs(["📊 Dados", "📈 Estatísticas", "📉 Gráficos"])
    
    with tab1:
        st.subheader("📋 Visualização dos Dados")
        
        # Filtros básicos
        col1, col2 = st.columns(2)
        
        with col1:
            if 'ESTADO' in df.columns:
                estados = ['Todos'] + list(df['ESTADO'].unique())
                estado_selecionado = st.selectbox("Filtrar por Estado:", estados)
                if estado_selecionado != 'Todos':
                    df = df[df['ESTADO'] == estado_selecionado]
        
        with col2:
            if 'RAÇA' in df.columns:
                racas = ['Todas'] + list(df['RAÇA'].unique())
                raca_selecionada = st.selectbox("Filtrar por Raça:", racas)
                if raca_selecionada != 'Todas':
                    df = df[df['RAÇA'] == raca_selecionada]
        
        st.dataframe(df, use_container_width=True)
        
        # Download CSV
        csv = df.to_csv(index=False)
        st.download_button(
            label="📥 Baixar CSV",
            data=csv,
            file_name=f"dados_bovinos_{datetime.now().strftime('%Y%m%d_%H%M%S')}.csv",
            mime="text/csv"
        )
    
    with tab2:
        st.subheader("📊 Estatísticas Descritivas")
        
        stats = get_descriptive_stats(df)
        
        if stats:
            # Métricas principais
            col1, col2, col3, col4 = st.columns(4)
            
            with col1:
                st.metric("Total de Registros", f"{stats['Total de Registros']:,}")
            
            with col2:
                st.metric("Preço Médio", f"R$ {stats['Média']:.2f}")
            
            with col3:
                st.metric("Preço Mediano", f"R$ {stats['Mediana']:.2f}")
            
            with col4:
                st.metric("Desvio Padrão", f"R$ {stats['Desvio Padrão']:.2f}")
            
            # Tabela completa
            st.subheader("📋 Estatísticas Detalhadas")
            
            stats_df = pd.DataFrame([
                {"Estatística": "Média", "Valor": f"R$ {stats['Média']:.2f}"},
                {"Estatística": "Mediana", "Valor": f"R$ {stats['Mediana']:.2f}"},
                {"Estatística": "Desvio Padrão", "Valor": f"R$ {stats['Desvio Padrão']:.2f}"},
                {"Estatística": "Mínimo", "Valor": f"R$ {stats['Mínimo']:.2f}"},
                {"Estatística": "Máximo", "Valor": f"R$ {stats['Máximo']:.2f}"},
                {"Estatística": "1º Quartil", "Valor": f"R$ {stats['Primeiro Quartil']:.2f}"},
                {"Estatística": "3º Quartil", "Valor": f"R$ {stats['Terceiro Quartil']:.2f}"},
            ])
            
            st.dataframe(stats_df, use_container_width=True)
        
        else:
            st.warning("⚠️ Não foi possível calcular estatísticas. Verifique se a coluna 'PREÇO POR KG' existe nos dados.")
    
    with tab3:
        st.subheader("📈 Gráficos e Visualizações")
        
        plots = create_plots(df)
        
        if plots:
            for title, fig in plots:
                st.plotly_chart(fig, use_container_width=True)
        else:
            st.warning("⚠️ Não foi possível gerar gráficos. Verifique se os dados contêm as colunas necessárias.")

else:
    # Página inicial
    st.markdown("""
    ## 🚀 Bem-vindo ao TCC Gado Gordo!
    
    Esta é a versão simplificada do aplicativo de análise de dados de mercado de bovinos.
    
    ### 📋 Como usar:
    
    1. **Upload de Dados**: Use o menu lateral para carregar seus dados
    2. **Dados de Exemplo**: Clique em "Usar Dados de Exemplo" para testar
    3. **Análise**: Explore os dados, estatísticas e gráficos nas abas
    
    ### 📊 Colunas esperadas:
    - **ANO, TRIMESTRE, ESTADO**
    - **RAÇA, GÊNERO, ERA, VIA**
    - **PESO (KG), VALOR, PREÇO POR KG**
    - **ARROBA GORDO, ARROBA MAGRO, % ÁGIO**
    
    ### ✨ Funcionalidades:
    - 📊 Visualização de dados com filtros
    - 📈 Estatísticas descritivas completas
    - 📉 Gráficos interativos (Plotly)
    - 📥 Download em CSV
    - 🇧🇷 Formatação brasileira
    
    ---
    **Versão**: Simplificada  
    **Status**: Estável e confiável
    """)

# Footer
st.sidebar.markdown("---")
st.sidebar.info("""
**TCC Gado Gordo**  
Versão Simplificada  
Análise de dados de bovinos
""")

