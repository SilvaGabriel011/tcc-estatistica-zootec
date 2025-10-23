"""Módulo de gráficos"""
import os
import numpy as np
import matplotlib.pyplot as plt
import matplotlib
matplotlib.use('Agg')
import plotly.graph_objects as go
import plotly.express as px
from scipy.stats import norm
import pandas as pd
import streamlit as st

os.makedirs('output/figuras', exist_ok=True)

def hist_with_normal(series, output_path='output/figuras/fig_hist_preco_kg.png'):
    series_clean = series.dropna()
    if len(series_clean) == 0:
        return None
    mean = series_clean.mean()
    std = series_clean.std(ddof=1)
    fig, ax = plt.subplots(figsize=(10, 6))
    n, bins, patches = ax.hist(series_clean, bins=30, density=True, 
                                alpha=0.7, color='steelblue', edgecolor='black')
    x = np.linspace(series_clean.min(), series_clean.max(), 100)
    ax.plot(x, norm.pdf(x, mean, std), 'r-', linewidth=2, 
            label=f'Normal (μ={mean:.2f}, σ={std:.2f})')
    ax.set_xlabel('Preço por KG (R$)', fontsize=12)
    ax.set_ylabel('Densidade', fontsize=12)
    ax.set_title('Histograma do Preço por KG com Curva Normal', fontsize=14, fontweight='bold')
    ax.legend()
    ax.grid(True, alpha=0.3)
    plt.tight_layout()
    plt.savefig(output_path, dpi=300, bbox_inches='tight')
    plt.close()
    return fig

def box_by(df, group, y='PREÇO POR KG', output_path=None):
    if group not in df.columns or y not in df.columns:
        return None
    df_clean = df[[group, y]].dropna()
    if len(df_clean) == 0:
        return None
    group_order = df_clean.groupby(group)[y].median().sort_values(ascending=False).index.tolist()
    fig, ax = plt.subplots(figsize=(12, 6))
    data_to_plot = [df_clean[df_clean[group] == g][y].values for g in group_order]
    bp = ax.boxplot(data_to_plot, labels=group_order, patch_artist=True)
    for patch in bp['boxes']:
        patch.set_facecolor('lightblue')
        patch.set_alpha(0.7)
    ax.set_xlabel(group, fontsize=12)
    ax.set_ylabel('Preço por KG (R$)', fontsize=12)
    ax.set_title(f'Boxplot do Preço por KG por {group}', fontsize=14, fontweight='bold')
    ax.grid(True, alpha=0.3, axis='y')
    plt.xticks(rotation=45, ha='right')
    plt.tight_layout()
    if output_path:
        plt.savefig(output_path, dpi=300, bbox_inches='tight')
    plt.close()
    return fig

def box_preco_por_raca(df, output_path='output/figuras/fig_box_preco_por_raca.png'):
    return box_by(df, 'RAÇA', output_path=output_path)

def box_preco_por_tipo(df, output_path='output/figuras/fig_box_preco_por_tipo.png'):
    return box_by(df, 'TIPO GADO GORDO', output_path=output_path)

def trend_by_year(df, y='PREÇO POR KG', output_path='output/figuras/fig_trend_ano.png'):
    if 'ANO' not in df.columns or y not in df.columns:
        return None
    df_clean = df[['ANO', y]].dropna()
    if len(df_clean) == 0:
        return None
    yearly_mean = df_clean.groupby('ANO')[y].mean().reset_index()
    yearly_mean.columns = ['ANO', 'Média']
    fig_mpl, ax = plt.subplots(figsize=(10, 6))
    ax.plot(yearly_mean['ANO'], yearly_mean['Média'], 
            marker='o', linewidth=3, markersize=8, color='steelblue')
    ax.set_xlabel('Ano', fontsize=12)
    ax.set_ylabel('Preço por KG (R$)', fontsize=12)
    ax.set_title('Média Anual do Preço por KG', fontsize=14, fontweight='bold')
    ax.grid(True, alpha=0.3)
    plt.tight_layout()
    plt.savefig(output_path, dpi=300, bbox_inches='tight')
    plt.close()
    fig = go.Figure()
    fig.add_trace(go.Scatter(
        x=yearly_mean['ANO'], y=yearly_mean['Média'],
        mode='lines+markers', name='Média anual',
        line=dict(color='steelblue', width=3), marker=dict(size=8)
    ))
    fig.update_layout(
        title='Média Anual do Preço por KG',
        xaxis_title='Ano', yaxis_title='Preço por KG (R$)',
        hovermode='x unified', template='plotly_white', font=dict(size=12)
    )
    return fig

def agio_by_year(df, output_path='output/figuras/fig_mean_agio_pct_ano.png'):
    if 'ANO' not in df.columns or '% ÁGIO' not in df.columns:
        return None
    df_clean = df[['ANO', '% ÁGIO']].dropna()
    if len(df_clean) == 0:
        return None
    yearly_agio = df_clean.groupby('ANO')['% ÁGIO'].mean().reset_index()
    yearly_agio['% ÁGIO (p.p.)'] = yearly_agio['% ÁGIO'] * 100
    fig_mpl, ax = plt.subplots(figsize=(10, 6))
    ax.plot(yearly_agio['ANO'], yearly_agio['% ÁGIO (p.p.)'], 
            marker='o', linewidth=3, markersize=8, color='darkorange')
    ax.axhline(y=0, linestyle='--', color='gray', alpha=0.5)
    ax.set_xlabel('Ano', fontsize=12)
    ax.set_ylabel('% Ágio (p.p.)', fontsize=12)
    ax.set_title('Média Anual do % Ágio (pontos percentuais)', fontsize=14, fontweight='bold')
    ax.grid(True, alpha=0.3)
    plt.tight_layout()
    plt.savefig(output_path, dpi=300, bbox_inches='tight')
    plt.close()
    fig = go.Figure()
    fig.add_trace(go.Scatter(
        x=yearly_agio['ANO'], y=yearly_agio['% ÁGIO (p.p.)'],
        mode='lines+markers', name='% Ágio médio',
        line=dict(color='darkorange', width=3), marker=dict(size=8)
    ))
    fig.update_layout(
        title='Média Anual do % Ágio (pontos percentuais)',
        xaxis_title='Ano', yaxis_title='% Ágio (p.p.)',
        hovermode='x unified', template='plotly_white', font=dict(size=12)
    )
    fig.add_hline(y=0, line_dash="dash", line_color="gray", opacity=0.5)
    return fig

def create_scatter_plot(df, x_col, y_col, title=None):
    """Cria gráfico de dispersão para variáveis quantitativas."""
    if x_col not in df.columns or y_col not in df.columns:
        return None
    
    import plotly.express as px
    
    df_clean = df[[x_col, y_col]].dropna()
    if len(df_clean) == 0:
        return None
    
    fig = px.scatter(
        df_clean,
        x=x_col,
        y=y_col,
        title=title or f'Dispersão: {x_col} vs {y_col}',
        labels={x_col: x_col, y_col: y_col}
    )
    
    fig.update_layout(height=500)
    return fig

def create_pie_chart(df, column, title=None):
    """Cria gráfico de pizza para variáveis categóricas."""
    if column not in df.columns:
        return None
    
    import plotly.express as px
    
    # Contar frequências
    value_counts = df[column].value_counts()
    
    if len(value_counts) == 0:
        return None
    
    fig = px.pie(
        values=value_counts.values,
        names=value_counts.index,
        title=title or f'Distribuição de {column}'
    )
    
    fig.update_layout(height=500)
    return fig

def create_line_chart(df, x_col, y_col, title=None):
    """Cria gráfico de linha para tendências temporais."""
    if x_col not in df.columns or y_col not in df.columns:
        return None
    
    import plotly.express as px
    
    # Agrupar por x_col e calcular média de y_col
    trend_data = df.groupby(x_col)[y_col].agg(['mean', 'count']).reset_index()
    trend_data = trend_data[trend_data['count'] >= 2]  # Mínimo 2 registros
    
    if len(trend_data) < 2:
        return None
    
    fig = px.line(
        trend_data,
        x=x_col,
        y='mean',
        title=title or f'Tendência de {y_col} por {x_col}',
        labels={'mean': f'Média de {y_col}', x_col: x_col},
        markers=True
    )
    
    fig.update_layout(height=500)
    return fig

def create_column_chart(df, x_col, y_col, title=None):
    """Cria gráfico de colunas para comparações."""
    if x_col not in df.columns or y_col not in df.columns:
        return None
    
    import plotly.express as px
    
    # Calcular estatísticas por grupo
    group_stats = df.groupby(x_col)[y_col].agg(['mean', 'count']).reset_index()
    group_stats = group_stats[group_stats['count'] >= 2]
    
    if len(group_stats) == 0:
        return None
    
    fig = px.bar(
        group_stats,
        x=x_col,
        y='mean',
        title=title or f'Comparação de {y_col} por {x_col}',
        labels={'mean': f'Média de {y_col}', x_col: x_col},
        color='mean',
        color_continuous_scale='Viridis'
    )
    
    fig.update_layout(height=500)
    return fig

def generate_all_plots(df):
    """Gera todos os gráficos apropriados baseados no tipo de variável."""
    plots = {}
    
    # Análise de variáveis quantitativas
    quantitative_cols = [col for col in df.columns if pd.api.types.is_numeric_dtype(df[col])]
    categorical_cols = [col for col in df.columns if df[col].dtype == 'object' or df[col].dtype.name == 'category']
    
    # Gráficos para variáveis quantitativas
    for col in quantitative_cols:
        if col == 'PREÇO POR KG':
            plots[f'hist_{col}'] = hist_with_normal(df[col])
        
        # Boxplots por variáveis categóricas
        for cat_col in categorical_cols:
            plots[f'box_{col}_by_{cat_col}'] = box_by(df, cat_col, col)
        
        # Gráficos de dispersão entre variáveis quantitativas
        for other_col in quantitative_cols:
            if col != other_col:
                plots[f'scatter_{col}_vs_{other_col}'] = create_scatter_plot(df, col, other_col)
    
    # Gráficos para variáveis categóricas
    for col in categorical_cols:
        # Gráfico de pizza
        plots[f'pie_{col}'] = create_pie_chart(df, col)
        
        # Gráfico de colunas se houver variável quantitativa
        if quantitative_cols:
            y_col = quantitative_cols[0]  # Usar primeira variável quantitativa
            plots[f'column_{y_col}_by_{col}'] = create_column_chart(df, col, y_col)
    
    # Gráficos temporais se houver coluna de ano
    if 'ANO' in df.columns:
        for col in quantitative_cols:
            plots[f'line_{col}_by_year'] = create_line_chart(df, 'ANO', col)
    
    return plots

# Funções aprimoradas de visualização
def create_enhanced_visualizations(df: pd.DataFrame, plot_types: list = None) -> dict:
    """Cria visualizações aprimoradas baseadas nos tipos de dados."""
    if plot_types is None:
        plot_types = ['heatmap', 'violin_plot', 'scatter_matrix', 'sunburst']
    
    plots = {}
    
    try:
        # Importar EnhancedPlotter
        from core.enhanced_plots import EnhancedPlotter
        plotter = EnhancedPlotter()
        
        # Identificar colunas
        numeric_cols = df.select_dtypes(include=[np.number]).columns.tolist()
        categorical_cols = df.select_dtypes(include=['object', 'category']).columns.tolist()
        
        # Criar visualizações baseadas nos tipos disponíveis
        for plot_type in plot_types:
            try:
                if plot_type == 'heatmap' and len(numeric_cols) >= 2:
                    plots['heatmap'] = plotter.create_heatmap(
                        df, columns=numeric_cols, correlation=True
                    )
                
                elif plot_type == 'violin_plot' and categorical_cols and numeric_cols:
                    # Criar violino para primeira combinação categórica-numérica
                    cat_col = categorical_cols[0]
                    num_col = numeric_cols[0]
                    plots['violin_plot'] = plotter.create_violin_plot(
                        df, cat_col, num_col
                    )
                
                elif plot_type == 'scatter_matrix' and len(numeric_cols) >= 2:
                    plots['scatter_matrix'] = plotter.create_scatter_matrix(
                        df, columns=numeric_cols[:4]
                    )
                
                elif plot_type == 'sunburst' and len(categorical_cols) >= 2:
                    plots['sunburst'] = plotter.create_sunburst(
                        df, categorical_cols[:3]
                    )
                
                elif plot_type == 'treemap' and len(categorical_cols) >= 2:
                    plots['treemap'] = plotter.create_treemap(
                        df, categorical_cols[:2]
                    )
                
                elif plot_type == '3d_scatter' and len(numeric_cols) >= 3:
                    plots['3d_scatter'] = plotter.create_3d_scatter(
                        df, numeric_cols[0], numeric_cols[1], numeric_cols[2]
                    )
                
            except Exception as e:
                st.warning(f"Não foi possível criar {plot_type}: {str(e)}")
                continue
        
        return plots
        
    except ImportError:
        st.warning("Módulo enhanced_plots não disponível. Usando visualizações básicas.")
        return generate_all_plots(df)
    except Exception as e:
        st.error(f"Erro ao criar visualizações aprimoradas: {str(e)}")
        return generate_all_plots(df)

def get_visualization_recommendations(df: pd.DataFrame) -> dict:
    """Retorna recomendações de visualizações baseadas nos dados."""
    numeric_cols = df.select_dtypes(include=[np.number]).columns.tolist()
    categorical_cols = df.select_dtypes(include=['object', 'category']).columns.tolist()
    
    recommendations = {
        'basic': [],
        'advanced': [],
        'multivariate': [],
        'hierarchical': []
    }
    
    # Recomendações básicas
    if numeric_cols:
        recommendations['basic'].append('histogram')
        recommendations['basic'].append('boxplot')
    
    if categorical_cols:
        recommendations['basic'].append('bar_chart')
        recommendations['basic'].append('pie_chart')
    
    # Recomendações avançadas
    if len(numeric_cols) >= 2:
        recommendations['advanced'].append('heatmap')
        recommendations['advanced'].append('scatter_matrix')
    
    if len(numeric_cols) >= 3:
        recommendations['advanced'].append('3d_scatter')
        recommendations['advanced'].append('parallel_coordinates')
    
    # Recomendações multivariadas
    if numeric_cols and categorical_cols:
        recommendations['multivariate'].append('violin_plot')
        recommendations['multivariate'].append('box_by_category')
    
    # Recomendações hierárquicas
    if len(categorical_cols) >= 2:
        recommendations['hierarchical'].append('sunburst')
        recommendations['hierarchical'].append('treemap')
    
    return recommendations

def export_plot_as_image(fig, format='png', width=800, height=600):
    """Exporta gráfico Plotly como imagem."""
    try:
        import base64
        img_bytes = fig.to_image(format=format, width=width, height=height)
        img_base64 = base64.b64encode(img_bytes).decode()
        return img_base64
    except Exception as e:
        st.error(f"Erro ao exportar gráfico: {str(e)}")
        return None

def create_plot_gallery(df: pd.DataFrame) -> dict:
    """Cria galeria de gráficos com todas as visualizações disponíveis."""
    plots = {}
    
    # Gráficos básicos
    plots.update(generate_all_plots(df))
    
    # Gráficos aprimorados
    try:
        enhanced_plots = create_enhanced_visualizations(df)
        plots.update(enhanced_plots)
    except Exception as e:
        st.warning(f"Alguns gráficos aprimorados não puderam ser criados: {str(e)}")
    
    return plots
