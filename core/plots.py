"""Módulo de gráficos"""
import os
import numpy as np
import matplotlib.pyplot as plt
import matplotlib
matplotlib.use('Agg')
import plotly.graph_objects as go
from scipy.stats import norm

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

def generate_all_plots(df):
    plots = {}
    if 'PREÇO POR KG' in df.columns:
        plots['hist'] = hist_with_normal(df['PREÇO POR KG'])
    if 'RAÇA' in df.columns:
        plots['box_raca'] = box_preco_por_raca(df)
    if 'TIPO GADO GORDO' in df.columns:
        plots['box_tipo'] = box_preco_por_tipo(df)
    if 'ANO' in df.columns:
        plots['trend'] = trend_by_year(df)
        if '% ÁGIO' in df.columns:
            plots['agio'] = agio_by_year(df)
    return plots
