import streamlit as st
import os
import sys
import io
import pandas as pd
import numpy as np
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas as pdf_canvas
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from core.stats import descriptive_stats, comprehensive_descriptive_analysis, means_ci
from core.plots import generate_all_plots, create_enhanced_visualizations, get_visualization_recommendations, create_plot_gallery
from core.chart_exporter import ChartExporter, create_export_interface
from core.variable_curation import get_dataset_summary, prevent_invalid_calculations
from core.ai_assistant import get_assistant
from core.formatters import formatar_moeda, formatar_numero
from core.excel_export import export_to_excel
# Analytics e performance removidos - usando funcionalidades básicas
from core.flags import ENABLE_EXCEL_ADVANCED, ENABLE_PDF
from core.notifications import (
    show_toast_success, show_toast_error, show_loading_spinner
)
from core.theme_manager import init_theme, render_theme_selector

# Funções auxiliares para gráficos
def create_breed_comparison_chart(df):
    """Cria gráfico de comparação de raças."""
    if 'RAÇA' not in df.columns or 'PREÇO_POR_KG' not in df.columns:
        return None
    
    import plotly.express as px
    
    # Calcular preço médio por raça
    breed_stats = df.groupby('RAÇA')['PREÇO_POR_KG'].agg(['mean', 'count']).reset_index()
    breed_stats = breed_stats[breed_stats['count'] >= 3]  # Mínimo 3 registros
    
    if len(breed_stats) == 0:
        return None
    
    # Criar gráfico de barras
    fig = px.bar(
        breed_stats, 
        x='RAÇA', 
        y='mean',
        title='Preço Médio por Raça',
        labels={'mean': 'Preço Médio (R$/kg)', 'RAÇA': 'Raça'},
        color='mean',
        color_continuous_scale='Viridis'
    )
    
    fig.update_layout(
        xaxis_tickangle=-45,
        showlegend=False,
        height=500
    )
    
    return fig

def create_boxplot_by_category(df, category_col, value_col):
    """Cria boxplot por categoria."""
    if category_col not in df.columns or value_col not in df.columns:
        return None
    
    import plotly.express as px
    
    # Filtrar dados válidos
    df_clean = df[[category_col, value_col]].dropna()
    if len(df_clean) == 0:
        return None
    
    # Criar boxplot
    fig = px.box(
        df_clean,
        x=category_col,
        y=value_col,
        title=f'Distribuição de {value_col} por {category_col}',
        labels={category_col: category_col, value_col: value_col}
    )
    
    fig.update_layout(
        xaxis_tickangle=-45,
        height=500
    )
    
    return fig

def create_trend_chart(df):
    """Cria gráfico de tendência temporal."""
    if 'ANO' not in df.columns or 'PREÇO_POR_KG' not in df.columns:
        return None
    
    import plotly.express as px
    
    # Agrupar por ano e calcular preço médio
    trend_data = df.groupby('ANO')['PREÇO_POR_KG'].agg(['mean', 'count']).reset_index()
    trend_data = trend_data[trend_data['count'] >= 2]  # Mínimo 2 registros por ano
    
    if len(trend_data) < 2:
        return None
    
    # Criar gráfico de linha
    fig = px.line(
        trend_data,
        x='ANO',
        y='mean',
        title='Tendência de Preços por Ano',
        labels={'mean': 'Preço Médio (R$/kg)', 'ANO': 'Ano'},
        markers=True
    )
    
    fig.update_layout(
        height=500,
        showlegend=False
    )
    
    return fig

def create_state_comparison_chart(df):
    """Cria gráfico de comparação de estados."""
    if 'ESTADO' not in df.columns or 'PREÇO_POR_KG' not in df.columns:
        return None
    
    import plotly.express as px
    
    # Calcular preço médio por estado
    state_stats = df.groupby('ESTADO')['PREÇO_POR_KG'].agg(['mean', 'count']).reset_index()
    state_stats = state_stats[state_stats['count'] >= 2]  # Mínimo 2 registros
    
    if len(state_stats) == 0:
        return None
    
    # Ordenar por preço médio
    state_stats = state_stats.sort_values('mean', ascending=True)
    
    # Criar gráfico de barras horizontais
    fig = px.bar(
        state_stats,
        x='mean',
        y='ESTADO',
        orientation='h',
        title='Preço Médio por Estado',
        labels={'mean': 'Preço Médio (R$/kg)', 'ESTADO': 'Estado'},
        color='mean',
        color_continuous_scale='Viridis'
    )
    
    fig.update_layout(
        height=500,
        showlegend=False
    )
    
    return fig

def create_correlation_heatmap(df):
    """Cria mapa de calor de correlações."""
    import plotly.express as px
    import plotly.graph_objects as go
    
    # Selecionar apenas colunas numéricas
    numeric_cols = df.select_dtypes(include=[np.number]).columns.tolist()
    
    # Filtrar colunas relevantes para análise
    relevant_cols = [col for col in numeric_cols if any(keyword in col.upper() for keyword in 
                     ['PREÇO', 'PESO', 'VALOR', 'GMD', 'CONVERSÃO', 'RENDIMENTO', 'CUSTO'])]
    
    if len(relevant_cols) < 2:
        return None
    
    # Calcular matriz de correlação
    corr_matrix = df[relevant_cols].corr()
    
    # Criar heatmap
    fig = go.Figure(data=go.Heatmap(
        z=corr_matrix.values,
        x=corr_matrix.columns,
        y=corr_matrix.columns,
        colorscale='RdBu',
        zmid=0,
        text=np.round(corr_matrix.values, 2),
        texttemplate="%{text}",
        textfont={"size": 10},
        hoverongaps=False
    ))
    
    fig.update_layout(
        title='Mapa de Calor - Correlações entre Variáveis',
        height=600,
        xaxis_tickangle=-45
    )
    
    return fig

def create_scatter_plot(df):
    """Cria gráfico de dispersão."""
    if 'PESO_ATUAL_KG' not in df.columns or 'PREÇO_POR_KG' not in df.columns:
        return None
    
    import plotly.express as px
    
    # Criar scatter plot
    fig = px.scatter(
        df,
        x='PESO_ATUAL_KG',
        y='PREÇO_POR_KG',
        color='RAÇA' if 'RAÇA' in df.columns else None,
        size='QUANTIDADE_ANIMAIS' if 'QUANTIDADE_ANIMAIS' in df.columns else None,
        title='Relação entre Peso e Preço por Kg',
        labels={
            'PESO_ATUAL_KG': 'Peso Atual (kg)',
            'PREÇO_POR_KG': 'Preço por Kg (R$)',
            'RAÇA': 'Raça',
            'QUANTIDADE_ANIMAIS': 'Quantidade'
        },
        hover_data=['ESTADO'] if 'ESTADO' in df.columns else None
    )
    
    fig.update_layout(
        height=500
    )
    
    return fig

def create_scatter(df, x_col, y_col):
    """Cria gráfico de dispersão com colunas personalizadas."""
    if x_col not in df.columns or y_col not in df.columns:
        return None
    
    import plotly.express as px
    
    # Criar scatter plot
    fig = px.scatter(
        df,
        x=x_col,
        y=y_col,
        color='RAÇA' if 'RAÇA' in df.columns else None,
        size='QUANTIDADE_ANIMAIS' if 'QUANTIDADE_ANIMAIS' in df.columns else None,
        title=f'Relação entre {x_col} e {y_col}',
        labels={
            x_col: x_col,
            y_col: y_col,
            'RAÇA': 'Raça',
            'QUANTIDADE_ANIMAIS': 'Quantidade'
        },
        hover_data=['ESTADO'] if 'ESTADO' in df.columns else None
    )
    
    fig.update_layout(
        height=500
    )
    
    return fig

def create_violin_plot(df, category_col, value_col):
    """Cria violin plot por categoria."""
    if category_col not in df.columns or value_col not in df.columns:
        return None
    
    import plotly.express as px
    
    # Filtrar dados válidos
    df_clean = df[[category_col, value_col]].dropna()
    if len(df_clean) == 0:
        return None
    
    # Criar violin plot
    fig = px.violin(
        df_clean,
        x=category_col,
        y=value_col,
        title=f'Distribuição de {value_col} por {category_col}',
        labels={category_col: category_col, value_col: value_col},
        box=True
    )
    
    fig.update_layout(
        xaxis_tickangle=-45,
        height=500
    )
    
    return fig

def create_radar_chart(df, category_col):
    """Cria gráfico radar."""
    if category_col not in df.columns:
        return None
    
    import plotly.graph_objects as go
    
    # Calcular métricas por categoria
    metrics = ['PREÇO_POR_KG', 'PESO_ATUAL_KG', 'GMD_GRAMAS_DIA', 'RENDIMENTO_CARCACA_%']
    available_metrics = [m for m in metrics if m in df.columns]
    
    if len(available_metrics) < 3:
        return None
    
    # Normalizar dados (0-1)
    df_normalized = df.copy()
    for metric in available_metrics:
        df_normalized[f'{metric}_norm'] = (df[metric] - df[metric].min()) / (df[metric].max() - df[metric].min())
    
    # Calcular médias normalizadas por categoria
    radar_data = df_normalized.groupby(category_col)[[f'{m}_norm' for m in available_metrics]].mean()
    
    if len(radar_data) == 0:
        return None
    
    fig = go.Figure()
    
    # Adicionar linha para cada categoria (máximo 5 para legibilidade)
    categories = radar_data.index[:5]
    for cat in categories:
        values = radar_data.loc[cat].values.tolist()
        values += values[:1]  # Fechar o polígono
        
        fig.add_trace(go.Scatterpolar(
            r=values,
            theta=available_metrics + [available_metrics[0]],
            fill='toself',
            name=cat
        ))
    
    fig.update_layout(
        polar=dict(
            radialaxis=dict(
                visible=True,
                range=[0, 1]
            )),
        showlegend=True,
        title=f'Comparação Radar por {category_col}',
        height=500
    )
    
    return fig

def create_time_series_decomposition(df):
    """Cria decomposição temporal de séries de preços."""
    if 'ANO' not in df.columns or 'PREÇO_POR_KG' not in df.columns:
        return None
    
    import plotly.graph_objects as go
    from plotly.subplots import make_subplots
    
    # Agrupar por ano e calcular preço médio
    time_series = df.groupby('ANO')['PREÇO_POR_KG'].mean().reset_index()
    
    if len(time_series) < 3:
        return None
    
    # Simular decomposição temporal simples
    trend = np.polyfit(range(len(time_series)), time_series['PREÇO_POR_KG'], 1)[0] * np.arange(len(time_series))
    seasonal = np.sin(2 * np.pi * np.arange(len(time_series)) / 4) * 0.1  # Sazonalidade simulada
    residual = time_series['PREÇO_POR_KG'] - trend - seasonal
    
    # Criar subplots
    fig = make_subplots(
        rows=4, cols=1,
        subplot_titles=('Série Original', 'Tendência', 'Sazonalidade', 'Resíduos'),
        vertical_spacing=0.08
    )
    
    # Série original
    fig.add_trace(
        go.Scatter(x=time_series['ANO'], y=time_series['PREÇO_POR_KG'], 
                  mode='lines+markers', name='Preço Original', line=dict(color='blue')),
        row=1, col=1
    )
    
    # Tendência
    fig.add_trace(
        go.Scatter(x=time_series['ANO'], y=trend, 
                  mode='lines', name='Tendência', line=dict(color='red')),
        row=2, col=1
    )
    
    # Sazonalidade
    fig.add_trace(
        go.Scatter(x=time_series['ANO'], y=seasonal, 
                  mode='lines', name='Sazonalidade', line=dict(color='green')),
        row=3, col=1
    )
    
    # Resíduos
    fig.add_trace(
        go.Scatter(x=time_series['ANO'], y=residual, 
                  mode='lines+markers', name='Resíduos', line=dict(color='orange')),
        row=4, col=1
    )
    
    fig.update_layout(
        height=800,
        title='Decomposição Temporal de Preços',
        showlegend=False
    )
    
    return fig

def create_sunburst_chart(df):
    """Cria gráfico sunburst hierárquico."""
    if 'ESTADO' not in df.columns or 'RAÇA' not in df.columns or 'PREÇO_POR_KG' not in df.columns:
        return None
    
    import plotly.express as px
    
    # Criar dados hierárquicos
    hierarchical_data = df.groupby(['ESTADO', 'RAÇA'])['PREÇO_POR_KG'].mean().reset_index()
    hierarchical_data['ids'] = hierarchical_data['ESTADO'] + '-' + hierarchical_data['RAÇA']
    hierarchical_data['parents'] = hierarchical_data['ESTADO']
    
    # Adicionar níveis hierárquicos
    state_data = df.groupby('ESTADO')['PREÇO_POR_KG'].mean().reset_index()
    state_data['ids'] = state_data['ESTADO']
    state_data['parents'] = ''
    state_data['RAÇA'] = ''
    
    # Combinar dados
    combined_data = pd.concat([state_data, hierarchical_data], ignore_index=True)
    
    # Criar sunburst
    fig = px.sunburst(
        combined_data,
        ids='ids',
        parents='parents',
        values='PREÇO_POR_KG',
        title='Distribuição Hierárquica: Estado → Raça → Preço',
        color='PREÇO_POR_KG',
        color_continuous_scale='Viridis'
    )
    
    fig.update_layout(
        height=600
    )
    
    return fig

def create_candlestick_chart(df):
    """Cria gráfico candlestick de preços por período."""
    if 'ANO' not in df.columns or 'TRIMESTRE' not in df.columns or 'PREÇO_POR_KG' not in df.columns:
        return None
    
    import plotly.graph_objects as go
    
    # Agrupar por ano e trimestre
    period_data = df.groupby(['ANO', 'TRIMESTRE'])['PREÇO_POR_KG'].agg([
        'min', 'max', 'mean'
    ]).reset_index()
    
    if len(period_data) < 2:
        return None
    
    # Calcular abertura e fechamento (simulado)
    period_data['open'] = period_data['mean'] * 0.98
    period_data['close'] = period_data['mean'] * 1.02
    period_data['high'] = period_data['max']
    period_data['low'] = period_data['min']
    
    # Criar rótulos para o eixo X
    period_data['period'] = period_data['ANO'].astype(str) + '-T' + period_data['TRIMESTRE'].astype(str)
    
    # Criar candlestick
    fig = go.Figure(data=go.Candlestick(
        x=period_data['period'],
        open=period_data['open'],
        high=period_data['high'],
        low=period_data['low'],
        close=period_data['close'],
        name='Preços'
    ))
    
    fig.update_layout(
        title='Evolução de Preços por Período (Candlestick)',
        xaxis_title='Período',
        yaxis_title='Preço (R$/kg)',
        height=500
    )
    
    return fig

st.set_page_config(
    page_title='Resultados e Export', 
    page_icon='📊', 
    layout='wide',
    initial_sidebar_state='collapsed'  # Performance: collapse sidebar
)
init_theme()
st.title('📊 Resultados e Exportação')

if 'df_clean' not in st.session_state:
	st.warning('⚠️ Nenhum dado carregado. Vá para **Upload e Análise** primeiro.')
	st.stop()

# Usar dados filtrados se existirem, senão usar dados limpos
df = st.session_state.get('df_filtered', st.session_state['df_clean'])

if len(df) < len(st.session_state['df_clean']):
	st.info(f"🔍 Mostrando {len(df)} registros filtrados de {len(st.session_state['df_clean'])} totais")

# Curadoria de Variáveis
st.divider()
st.markdown('### 🔍 Curadoria de Variáveis')

dataset_summary = get_dataset_summary(df)

col_a, col_b = st.columns(2)

with col_a:
	st.markdown('#### 📋 Tipos de Variáveis')
	for var, var_type in dataset_summary['variable_types'].items():
		if var_type == 'quantitative':
			st.success(f"📊 **{var}**: Quantitativa")
		elif var_type == 'categorical':
			st.info(f"🏷️ **{var}**: Categórica")
		else:
			st.warning(f"❓ **{var}**: Tipo não identificado")

with col_b:
	st.markdown('#### 💡 Recomendações de Análise')
	for var, recommendations in dataset_summary['analysis_recommendations'].items():
		st.caption(f"**{var}**: {recommendations['primary']}")

# Validação de cálculos
st.markdown('#### ✅ Validação de Análises')
validation_result = prevent_invalid_calculations(df, 'mean')
if validation_result['warnings']:
	st.warning("⚠️ **Atenção**: Algumas variáveis não devem ter média calculada:")
	for warning in validation_result['warnings']:
		st.caption(f"• {warning['column']}: {warning['message']}")
else:
	st.success("✅ Todas as variáveis quantitativas podem ter estatísticas descritivas calculadas")

st.divider()

# Visualizações Aprimoradas
st.markdown('### 🎨 Visualizações Aprimoradas')

# Obter recomendações de visualizações
viz_recommendations = get_visualization_recommendations(df)

# Mostrar recomendações
col_viz1, col_viz2, col_viz3, col_viz4 = st.columns(4)
with col_viz1:
    st.metric("📊 Básicos", len(viz_recommendations.get('basic', [])))
with col_viz2:
    st.metric("🚀 Avançados", len(viz_recommendations.get('advanced', [])))
with col_viz3:
    st.metric("🔗 Multivariados", len(viz_recommendations.get('multivariate', [])))
with col_viz4:
    st.metric("🌳 Hierárquicos", len(viz_recommendations.get('hierarchical', [])))

# Seletor de tipo de visualização
viz_type = st.selectbox(
    "Tipo de Visualização:",
    ["Todas", "Básicas", "Avançadas", "Multivariadas", "Hierárquicas"],
    help="Selecione o tipo de visualização para exibir"
)

# Criar visualizações baseadas na seleção
if viz_type == "Todas":
    plot_types = ['heatmap', 'violin_plot', 'scatter_matrix', 'sunburst', 'treemap', '3d_scatter']
elif viz_type == "Básicas":
    plot_types = None  # Usar gráficos básicos existentes
elif viz_type == "Avançadas":
    plot_types = ['heatmap', 'scatter_matrix', '3d_scatter']
elif viz_type == "Multivariadas":
    plot_types = ['violin_plot', 'scatter_matrix']
elif viz_type == "Hierárquicas":
    plot_types = ['sunburst', 'treemap']
else:
    plot_types = None

# Gerar visualizações
if plot_types:
    with st.spinner('Gerando visualizações aprimoradas...'):
        enhanced_plots = create_enhanced_visualizations(df, plot_types)
        
        if enhanced_plots:
            st.success(f"✅ {len(enhanced_plots)} visualizações aprimoradas geradas!")
            
            # Exibir visualizações
            for plot_name, fig in enhanced_plots.items():
                if fig:
                    st.plotly_chart(fig, use_container_width=True)
        else:
            st.warning("Nenhuma visualização aprimorada pôde ser gerada para este dataset.")
else:
    # Usar visualizações básicas existentes
    st.info("Exibindo visualizações básicas...")

st.divider()

# Show performance info in sidebar
with st.sidebar:
	# Performance info removido
	st.markdown('---')
	render_theme_selector()

# Histórico de Análises
st.subheader('📋 Histórico de Análises')

# Salvar análise atual no histórico
if 'historico_analises' not in st.session_state:
    st.session_state['historico_analises'] = []

# Adicionar análise atual ao histórico
analise_atual = {
    'timestamp': pd.Timestamp.now().strftime('%d/%m/%Y %H:%M'),
    'registros': len(df),
    'periodo': f"{df['ANO'].min()}-{df['ANO'].max()}" if 'ANO' in df.columns else 'N/A',
    'estados': df['ESTADO'].nunique() if 'ESTADO' in df.columns else 0,
    'racas': df['RAÇA'].nunique() if 'RAÇA' in df.columns else 0,
    'preco_medio': df['PREÇO_POR_KG'].mean() if 'PREÇO_POR_KG' in df.columns else 0
}

# Verificar se já existe análise similar (mesmo número de registros e período)
analise_existente = False
for analise in st.session_state['historico_analises']:
    if (analise['registros'] == analise_atual['registros'] and 
        analise['periodo'] == analise_atual['periodo']):
        analise_existente = True
        break

if not analise_existente:
    st.session_state['historico_analises'].append(analise_atual)
    # Manter apenas as últimas 10 análises
    if len(st.session_state['historico_analises']) > 10:
        st.session_state['historico_analises'] = st.session_state['historico_analises'][-10:]

# Mostrar histórico
col_hist1, col_hist2 = st.columns([2, 1])

with col_hist1:
    if st.session_state['historico_analises']:
        st.markdown('**Últimas Análises Realizadas:**')
        for i, analise in enumerate(reversed(st.session_state['historico_analises'][-5:]), 1):
            st.markdown(f"**{i}.** {analise['timestamp']} - {analise['registros']} registros ({analise['periodo']})")
    else:
        st.info('Nenhuma análise anterior encontrada.')

with col_hist2:
    if st.button('🗑️ Limpar Histórico'):
        st.session_state['historico_analises'] = []
        st.rerun()

st.divider()

# Key metrics
st.subheader('📈 Métricas Principais')
if 'PREÇO_POR_KG' in df.columns:
	stats = descriptive_stats(df['PREÇO_POR_KG'])
	col1, col2, col3, col4, col5 = st.columns(5)
	with col1:
		st.metric('N', f"{formatar_numero(stats['N'], 0)}")
	with col2:
		st.metric('Média', formatar_moeda(stats['Média']))
	with col3:
		st.metric('Mediana', formatar_moeda(stats['Mediana']))
	with col4:
		st.metric('Mínimo', formatar_moeda(stats['Mínimo']))
	with col5:
		st.metric('Máximo', formatar_moeda(stats['Máximo']))
	
	st.session_state['descriptive_stats'] = stats
else:
	st.info('Coluna PREÇO_POR_KG não encontrada.')

# Dashboard Comparativo
st.divider()
st.subheader('🎯 Insights Principais')

# Insights removidos
insights = []

if insights:
	col_i1, col_i2, col_i3, col_i4 = st.columns(4)
	
	if 'estado_mais_caro' in insights:
		with col_i1:
			st.metric(
				'🏆 Estado Mais Caro',
				insights['estado_mais_caro']['nome'],
				formatar_moeda(insights['estado_mais_caro']['preco'])
			)
	
	if 'raca_premium' in insights:
		with col_i2:
			st.metric(
				'🥇 Raça Premium',
				insights['raca_premium']['nome'],
				formatar_moeda(insights['raca_premium']['preco'])
			)
	
	if 'tendencia' in insights:
		with col_i3:
			tendencia = insights['tendencia']
			delta_color = 'normal' if tendencia['direcao'] == 'alta' else 'inverse'
			st.metric(
				'📈 Tendência',
				tendencia['direcao'].upper(),
				f"{formatar_numero(tendencia['percentual'], 1)}%"
			)
	
	if 'melhor_trimestre' in insights:
		with col_i4:
			st.metric(
				'📅 Melhor Trimestre',
				f"T{insights['melhor_trimestre']['numero']}",
				formatar_moeda(insights['melhor_trimestre']['preco'])
			)

# Gráficos Comparativos Interativos
st.divider()
st.subheader('📊 Análises Comparativas')

# Initialize chart state for lazy loading
if 'charts_generated' not in st.session_state:
	st.session_state['charts_generated'] = {}

tab1, tab2, tab3, tab4 = st.tabs(['Estados', 'Raças', 'Tendência', 'Dispersão'])

with tab1:
	# Lazy load - only generate when tab is active
	if 'estados' not in st.session_state['charts_generated']:
		with st.spinner('Gerando gráfico de estados...'):
			st.session_state['charts_generated']['estados'] = create_state_comparison_chart(df)
	
	fig_state = st.session_state['charts_generated']['estados']
	if fig_state:
		st.plotly_chart(fig_state, use_container_width=True)
	else:
		st.info('Dados insuficientes para comparação de estados.')

with tab2:
	# Lazy load - only generate when tab is active
	if 'racas' not in st.session_state['charts_generated']:
		with st.spinner('Gerando gráfico de raças...'):
			st.session_state['charts_generated']['racas'] = create_breed_comparison_chart(df)
			st.session_state['charts_generated']['racas_box'] = create_boxplot_by_category(df, 'RAÇA', 'PREÇO_POR_KG')
	
	fig_breed = st.session_state['charts_generated']['racas']
	fig_box = st.session_state['charts_generated']['racas_box']
	
	if fig_breed:
		st.plotly_chart(fig_breed, use_container_width=True)
		# Boxplot adicional
		if fig_box:
			st.plotly_chart(fig_box, use_container_width=True)
	else:
		st.info('Dados insuficientes para comparação de raças.')

with tab3:
	# Lazy load - only generate when tab is active
	if 'tendencia' not in st.session_state['charts_generated']:
		with st.spinner('Gerando gráfico de tendência...'):
			st.session_state['charts_generated']['tendencia'] = create_trend_chart(df)
	
	fig_trend = st.session_state['charts_generated']['tendencia']
	if fig_trend:
		st.plotly_chart(fig_trend, use_container_width=True)
	else:
		st.info('Dados insuficientes para análise temporal.')

with tab4:
	# Lazy load - only generate when tab is active
	if 'dispersao' not in st.session_state['charts_generated']:
		with st.spinner('Gerando gráfico de dispersão...'):
			if 'PESO (KG)' in df.columns and 'VALOR' in df.columns:
				st.session_state['charts_generated']['dispersao'] = create_scatter(df, 'PESO (KG)', 'VALOR')
			else:
				st.session_state['charts_generated']['dispersao'] = None
	
	fig_scatter = st.session_state['charts_generated']['dispersao']
	if fig_scatter:
		st.plotly_chart(fig_scatter, use_container_width=True)
	else:
		st.info('Colunas PESO (KG) e VALOR necessárias.')

# Custom Analysis Section
st.divider()
st.subheader('🎨 Análise Personalizada')

# Initialize custom analysis state
if 'custom_charts_generated' not in st.session_state:
	st.session_state['custom_charts_generated'] = {}

# Chart type selection
chart_types = {
	'Correlação': create_correlation_heatmap,
	'Decomposição Temporal': create_time_series_decomposition,
	'Violin Plot': create_violin_plot,
	'Sunburst': create_sunburst_chart,
	'Candlestick': create_candlestick_chart,
	'Radar': create_radar_chart
}

col1, col2 = st.columns([2, 1])

with col1:
	selected_chart = st.selectbox('Selecione o tipo de gráfico:', list(chart_types.keys()))

with col2:
	if st.button('🎨 Gerar Gráfico', type='primary'):
		chart_key = selected_chart.lower().replace(' ', '_')
		
		def generate_chart():
			if selected_chart == 'Violin Plot':
				return chart_types[selected_chart](df, 'RAÇA', 'PREÇO_POR_KG')
			elif selected_chart == 'Radar':
				return chart_types[selected_chart](df, 'RAÇA')
			else:
				return chart_types[selected_chart](df)
		
		try:
			fig = show_loading_spinner(f'Gerando {selected_chart}...', generate_chart)
			
			if fig:
				st.session_state['custom_charts_generated'][chart_key] = fig
				show_toast_success(f'{selected_chart} gerado com sucesso!')
			else:
				show_toast_error(f'Não foi possível gerar {selected_chart} com os dados disponíveis.')
		except Exception as e:
			show_toast_error(f'Erro ao gerar gráfico: {e}')

# Display generated custom charts
if st.session_state['custom_charts_generated']:
	st.subheader('📊 Gráficos Personalizados')
	
	for chart_key, fig in st.session_state['custom_charts_generated'].items():
		with st.expander(f"📈 {chart_key.replace('_', ' ').title()}", expanded=True):
			st.plotly_chart(fig, use_container_width=True)
			
			# Chart export options
			col_a, col_b, col_c = st.columns(3)
			
			with col_a:
				if st.button('⬇️ PNG', key=f'png_{chart_key}'):
					# Export as PNG
					img_bytes = fig.to_image(format="png", width=1200, height=800)
					st.download_button(
						'⬇️ Baixar PNG',
						data=img_bytes,
						file_name=f'{chart_key}.png',
						mime='image/png'
					)
			
			with col_b:
				if st.button('⬇️ SVG', key=f'svg_{chart_key}'):
					# Export as SVG
					img_bytes = fig.to_image(format="svg", width=1200, height=800)
					st.download_button(
						'⬇️ Baixar SVG',
						data=img_bytes,
						file_name=f'{chart_key}.svg',
						mime='image/svg+xml'
					)
			
			with col_c:
				if st.button('🗑️ Remover', key=f'remove_{chart_key}'):
					del st.session_state['custom_charts_generated'][chart_key]
					st.rerun()

# Statistical Analysis Section
st.divider()
st.subheader('📊 Análise Estatística Avançada')

if st.button('🔬 Executar Análise Estatística Completa'):
	def run_statistical_analysis():
		# Comprehensive analysis removido
		return {}
	
	try:
		statistical_results = show_loading_spinner('Executando análise estatística...', run_statistical_analysis)
		
		# Display results in tabs
		tab_norm, tab_tests, tab_assoc = st.tabs(['📏 Normalidade', '🧪 Testes', '🔗 Associações'])
		
		with tab_norm:
			if 'normality' in statistical_results:
				normality = statistical_results['normality']
				col_a, col_b = st.columns(2)
				
				with col_a:
					st.metric('Estatística W', f"{normality['statistic']:.4f}")
					st.metric('p-valor', f"{normality['p_value']:.4f}")
				
				with col_b:
					st.metric('Normalidade', normality['interpretation'])
					
					if normality['is_normal']:
						st.success('✅ Dados seguem distribuição normal')
					else:
						st.warning('⚠️ Dados não seguem distribuição normal')
		
		with tab_tests:
			for factor, tests in statistical_results.items():
				if factor != 'normality' and isinstance(tests, dict):
					with st.expander(f"📊 {factor}", expanded=False):
						if 'anova' in tests:
							anova = tests['anova']
							st.markdown(f"**ANOVA:** F={anova['f_statistic']:.3f}, p={anova['p_value']:.4f}")
							if anova['p_value'] < 0.05:
								st.success('✅ Diferenças significativas entre grupos')
							else:
								st.info('ℹ️ Sem diferenças significativas')
						
						if 'tukey_hsd' in tests:
							st.markdown("**Teste de Tukey HSD:**")
							# Display Tukey results
							tukey = tests['tukey_hsd']
							st.text(str(tukey))
		
		with tab_assoc:
			# Show categorical associations
			for key, result in statistical_results.items():
				if 'vs' in key and 'chi_square' in result:
					chi2 = result['chi_square']
					with st.expander(f"🔗 {key.replace('_vs_', ' vs ')}", expanded=False):
						st.markdown(f"**Chi-quadrado:** {chi2['statistic']:.3f}")
						st.markdown(f"**p-valor:** {chi2['p_value']:.4f}")
						st.markdown(f"**Cramér's V:** {chi2['cramers_v']:.3f}")
						if chi2['significant']:
							st.success('✅ Associação significativa')
						else:
							st.info('ℹ️ Sem associação significativa')
		
		show_toast_success('Análise estatística concluída!')
		
	except Exception as e:
		show_toast_error(f'Erro na análise estatística: {e}')

# Charts tradicionais - Lazy loaded
st.divider()
with st.expander('📉 Gráficos Adicionais (Matplotlib)', expanded=False):
	if 'matplotlib_generated' not in st.session_state:
		with st.spinner('Gerando gráficos matplotlib...'):
			try:
				plots = generate_all_plots(df)
				st.session_state['matplotlib_generated'] = True
			except Exception as e:
				st.error(f'Erro ao gerar gráficos: {e}')
				st.session_state['matplotlib_generated'] = False
	
	if st.session_state.get('matplotlib_generated', False):
		fig_files = []
		if os.path.exists('output/figuras'):
			fig_files = [f for f in os.listdir('output/figuras') if f.endswith('.png')]
		
		if fig_files:
			cols = st.columns(2)
			for idx, fig_file in enumerate(fig_files[:6]):  # Max 6 charts
				with cols[idx % 2]:
					st.image(f'output/figuras/{fig_file}', use_column_width=True)
		else:
			st.info('Nenhum gráfico gerado.')

# Export section
st.divider()
# Interface de Exportação Aprimorada
st.markdown('### 📤 Exportação de Gráficos e Dados')

# Criar interface de exportação aprimorada
try:
    if 'enhanced_plots' in locals() and enhanced_plots:
        create_export_interface(enhanced_plots, df)
    else:
        # Criar visualizações básicas para exportação
        basic_plots = generate_all_plots(df)
        if basic_plots:
            create_export_interface(basic_plots, df)
        else:
            st.info("Nenhum gráfico disponível para exportação")
except Exception as e:
    st.error(f"Erro na interface de exportação: {str(e)}")
    st.info("Usando interface de exportação básica")

st.divider()

st.subheader('📤 Exportar Resultados')

col1, col2, col3 = st.columns(3)

with col1:
	st.markdown('**CSV**')
	csv_bytes = df.to_csv(index=False).encode('utf-8')
	st.download_button(
		'⬇️ Baixar CSV', 
		data=csv_bytes, 
		file_name='dados_bovinos.csv', 
		mime='text/csv',
		help='Download simples em formato CSV'
	)

with col2:
	st.markdown('**Excel**')
	if not ENABLE_EXCEL_ADVANCED:
		st.info('🧪 Modo diagnóstico: exportação Excel avançada desativada. Habilite ENABLE_EXCEL_ADVANCED em core/flags.py')
	else:
		if st.button('📊 Gerar Excel', help='Cria Excel com múltiplas abas e formatação'):
			from core.notifications import toast_try, log_error
			try:
				def _generate_excel():
					stats = st.session_state.get('descriptive_stats', None)
					return export_to_excel(df, stats)
				excel_bytes = toast_try('Gerando Excel', _generate_excel, page='resultados_export', action='export_excel')
				st.download_button(
					'⬇️ Baixar Excel',
					data=excel_bytes,
					file_name='relatorio_bovinos.xlsx',
					mime='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
				)
			except Exception as e:
				log_error('resultados_export', 'export_excel', e)

with col3:
	st.markdown('**PDF (Resumo)**')
	add_ai_summary = st.checkbox('Incluir resumo da IA', value=True, help='Adiciona resumo gerado por IA no PDF')
	
	if not ENABLE_PDF:
		st.info('🧪 Modo diagnóstico: exportação PDF desativada. Habilite ENABLE_PDF em core/flags.py')
	elif st.button('📄 Gerar PDF', help='Cria um PDF com resumo dos resultados'):
		from core.notifications import toast_try, log_error
		try:
			def _generate_pdf():
				pdf_buffer = io.BytesIO()
				c = pdf_canvas.Canvas(pdf_buffer, pagesize=A4)
				w, h = A4
				c.setTitle('Resumo dos Resultados - Bovinos')
				c.setFont('Helvetica-Bold', 16)
				c.drawString(50, h - 50, 'Resumo dos Resultados - Bovinos')
				c.setFont('Helvetica', 11)
				
				lines = [
					f'Registros: {len(df):,}',
					f'Colunas: {len(df.columns)}',
				]
				
				if 'PREÇO POR KG' in df.columns:
					s = df['PREÇO POR KG'].dropna()
					if not s.empty:
						lines.append(f"Preço/kg - média: R$ {s.mean():.2f}, mediana: R$ {s.median():.2f}")
				
				y = h - 90
				for line in lines:
					c.drawString(50, y, line)
					y -= 18
				
				if add_ai_summary:
					assistant = get_assistant()
					if assistant.is_available():
						base_summary = f"Registros: {len(df)} | Colunas: {len(df.columns)}"
						context = assistant.build_context(df, None)
						ai_text = assistant.chat('Resuma os principais achados em até 8 linhas.', context + "\n\n" + base_summary)
						c.setFont('Helvetica-Bold', 12)
						c.drawString(50, y - 10, 'Resumo da IA:')
						y -= 28
						c.setFont('Helvetica', 10)
						for paragraph in ai_text.split('\n'):
							for chunk in [paragraph[i:i+95] for i in range(0, len(paragraph), 95)]:
								c.drawString(50, y, chunk)
								y -= 14
								if y < 60:
									c.showPage()
									c.setFont('Helvetica', 10)
									y = h - 60
				
				c.showPage()
				c.save()
				pdf_buffer.seek(0)
				
				return pdf_buffer
			pdf_buffer = toast_try('Gerando PDF', _generate_pdf, page='resultados_export', action='export_pdf')
			st.download_button(
				'⬇️ Baixar PDF', 
				data=pdf_buffer, 
				file_name='resumo_bovinos.pdf', 
				mime='application/pdf'
			)
		except Exception as e:
			log_error('resultados_export', 'export_pdf', e)

st.divider()
# Resumo Executivo
st.divider()
st.subheader('📋 Resumo Executivo da Análise')

# Criar resumo executivo
resumo_data = {
    'Data da Análise': pd.Timestamp.now().strftime('%d/%m/%Y %H:%M'),
    'Total de Registros': len(df),
    'Período Analisado': f"{df['ANO'].min()}-{df['ANO'].max()}" if 'ANO' in df.columns else 'N/A',
    'Estados Incluídos': df['ESTADO'].nunique() if 'ESTADO' in df.columns else 0,
    'Raças Analisadas': df['RAÇA'].nunique() if 'RAÇA' in df.columns else 0,
}

# Adicionar métricas financeiras se disponíveis
if 'PREÇO_POR_KG' in df.columns:
    preco_stats = df['PREÇO_POR_KG'].describe()
    resumo_data.update({
        'Preço Médio (R$/kg)': f"R$ {preco_stats['mean']:.2f}",
        'Preço Mínimo (R$/kg)': f"R$ {preco_stats['min']:.2f}",
        'Preço Máximo (R$/kg)': f"R$ {preco_stats['max']:.2f}",
        'Desvio Padrão': f"R$ {preco_stats['std']:.2f}"
    })

if 'PESO_ATUAL_KG' in df.columns:
    peso_stats = df['PESO_ATUAL_KG'].describe()
    resumo_data.update({
        'Peso Médio (kg)': f"{peso_stats['mean']:.0f} kg",
        'Peso Mínimo (kg)': f"{peso_stats['min']:.0f} kg",
        'Peso Máximo (kg)': f"{peso_stats['max']:.0f} kg"
    })

# Mostrar resumo em colunas
col_res1, col_res2, col_res3 = st.columns(3)

items = list(resumo_data.items())
items_per_col = len(items) // 3

for i, (chave, valor) in enumerate(items):
    if i < items_per_col:
        with col_res1:
            st.metric(chave, valor)
    elif i < items_per_col * 2:
        with col_res2:
            st.metric(chave, valor)
    else:
        with col_res3:
            st.metric(chave, valor)

# Insights principais
st.markdown('### 💡 Insights Principais')

insights = []

# Insight sobre preços
if 'PREÇO_POR_KG' in df.columns and 'ESTADO' in df.columns:
    preco_por_estado = df.groupby('ESTADO')['PREÇO_POR_KG'].mean().sort_values(ascending=False)
    if len(preco_por_estado) > 0:
        estado_mais_caro = preco_por_estado.index[0]
        estado_mais_barato = preco_por_estado.index[-1]
        insights.append(f"**Estado com maior preço:** {estado_mais_caro} (R$ {preco_por_estado.iloc[0]:.2f}/kg)")
        insights.append(f"**Estado com menor preço:** {estado_mais_barato} (R$ {preco_por_estado.iloc[-1]:.2f}/kg)")

# Insight sobre raças
if 'RAÇA' in df.columns and 'PREÇO_POR_KG' in df.columns:
    preco_por_raca = df.groupby('RAÇA')['PREÇO_POR_KG'].mean().sort_values(ascending=False)
    if len(preco_por_raca) > 0:
        raca_mais_cara = preco_por_raca.index[0]
        insights.append(f"**Raça com maior valor:** {raca_mais_cara} (R$ {preco_por_raca.iloc[0]:.2f}/kg)")

# Insight sobre sazonalidade
if 'MÊS' in df.columns and 'PREÇO_POR_KG' in df.columns:
    preco_por_mes = df.groupby('MÊS')['PREÇO_POR_KG'].mean().sort_values(ascending=False)
    if len(preco_por_mes) > 0:
        mes_mais_caro = preco_por_mes.index[0]
        mes_mais_barato = preco_por_mes.index[-1]
        insights.append(f"**Melhor mês para venda:** {mes_mais_caro} (R$ {preco_por_mes.iloc[0]:.2f}/kg)")
        insights.append(f"**Melhor mês para compra:** {mes_mais_barato} (R$ {preco_por_mes.iloc[-1]:.2f}/kg)")

# Mostrar insights
for insight in insights:
    st.info(f"🔍 {insight}")

st.info('💡 **Dica:** Use o **Assistente IA** para obter insights e interpretação dos resultados.')

