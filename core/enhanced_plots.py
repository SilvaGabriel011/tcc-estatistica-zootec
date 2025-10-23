"""Módulo de visualizações aprimoradas com novos tipos de gráficos."""
import pandas as pd
import numpy as np
import plotly.express as px
import plotly.graph_objects as go
from plotly.subplots import make_subplots
import streamlit as st
from typing import Dict, Any, List, Optional, Tuple
import io
import base64

class EnhancedPlotter:
    """Classe para criar visualizações aprimoradas."""
    
    def __init__(self):
        self.plot_config = {
            'displayModeBar': True,
            'displaylogo': False,
            'modeBarButtonsToRemove': ['pan2d', 'lasso2d', 'select2d']
        }
    
    def create_violin_plot(self, df: pd.DataFrame, x_col: str, y_col: str, 
                          title: str = None, color_col: str = None) -> go.Figure:
        """Cria gráfico de violino para mostrar distribuições."""
        try:
            if title is None:
                title = f'Distribuição de {y_col} por {x_col}'
            
            fig = px.violin(
                df, 
                x=x_col, 
                y=y_col,
                color=color_col,
                title=title,
                box=True,  # Mostra boxplot dentro do violino
                points='all'  # Mostra todos os pontos
            )
            
            fig.update_layout(
                height=500,
                showlegend=True if color_col else False,
                title_x=0.5
            )
            
            return fig
            
        except Exception as e:
            st.error(f"Erro ao criar gráfico de violino: {str(e)}")
            return None
    
    def create_heatmap(self, df: pd.DataFrame, columns: List[str] = None, 
                      title: str = None, correlation: bool = True) -> go.Figure:
        """Cria mapa de calor para correlações ou dados categóricos."""
        try:
            if columns is None:
                # Selecionar colunas numéricas automaticamente
                numeric_cols = df.select_dtypes(include=[np.number]).columns.tolist()
                if len(numeric_cols) < 2:
                    st.warning("Necessário pelo menos 2 colunas numéricas para heatmap")
                    return None
                columns = numeric_cols
            
            if correlation:
                # Mapa de calor de correlação
                corr_matrix = df[columns].corr()
                
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
                
                title = title or "Mapa de Calor - Correlações"
                
            else:
                # Mapa de calor de dados categóricos
                pivot_data = df.groupby(columns[:2]).size().unstack(fill_value=0)
                
                fig = go.Figure(data=go.Heatmap(
                    z=pivot_data.values,
                    x=pivot_data.columns,
                    y=pivot_data.index,
                    colorscale='Blues',
                    text=pivot_data.values,
                    texttemplate="%{text}",
                    textfont={"size": 10}
                ))
                
                title = title or f"Mapa de Calor - {columns[0]} vs {columns[1]}"
            
            fig.update_layout(
                title=title,
                height=600,
                title_x=0.5
            )
            
            return fig
            
        except Exception as e:
            st.error(f"Erro ao criar heatmap: {str(e)}")
            return None
    
    def create_scatter_matrix(self, df: pd.DataFrame, columns: List[str] = None,
                             color_col: str = None, title: str = None) -> go.Figure:
        """Cria matriz de dispersão para análise multivariada."""
        try:
            if columns is None:
                numeric_cols = df.select_dtypes(include=[np.number]).columns.tolist()
                if len(numeric_cols) < 2:
                    st.warning("Necessário pelo menos 2 colunas numéricas para scatter matrix")
                    return None
                columns = numeric_cols[:4]  # Limitar a 4 colunas para performance
            
            fig = px.scatter_matrix(
                df,
                dimensions=columns,
                color=color_col,
                title=title or "Matriz de Dispersão",
                opacity=0.7
            )
            
            fig.update_traces(diagonal_visible=False)
            fig.update_layout(height=800)
            
            return fig
            
        except Exception as e:
            st.error(f"Erro ao criar scatter matrix: {str(e)}")
            return None
    
    def create_sunburst(self, df: pd.DataFrame, path_columns: List[str],
                       values_col: str = None, title: str = None) -> go.Figure:
        """Cria gráfico sunburst para dados hierárquicos."""
        try:
            if values_col is None:
                # Usar contagem se não especificado
                df_sunburst = df.groupby(path_columns).size().reset_index(name='count')
                values_col = 'count'
            else:
                df_sunburst = df.groupby(path_columns)[values_col].sum().reset_index()
            
            fig = px.sunburst(
                df_sunburst,
                path=path_columns,
                values=values_col,
                title=title or f"Hierarquia - {' → '.join(path_columns)}"
            )
            
            fig.update_layout(height=600)
            
            return fig
            
        except Exception as e:
            st.error(f"Erro ao criar sunburst: {str(e)}")
            return None
    
    def create_treemap(self, df: pd.DataFrame, path_columns: List[str],
                      values_col: str = None, title: str = None) -> go.Figure:
        """Cria treemap para visualizar dados hierárquicos."""
        try:
            if values_col is None:
                df_treemap = df.groupby(path_columns).size().reset_index(name='count')
                values_col = 'count'
            else:
                df_treemap = df.groupby(path_columns)[values_col].sum().reset_index()
            
            fig = px.treemap(
                df_treemap,
                path=path_columns,
                values=values_col,
                title=title or f"Treemap - {' → '.join(path_columns)}"
            )
            
            fig.update_layout(height=600)
            
            return fig
            
        except Exception as e:
            st.error(f"Erro ao criar treemap: {str(e)}")
            return None
    
    def create_parallel_coordinates(self, df: pd.DataFrame, columns: List[str] = None,
                                   color_col: str = None, title: str = None) -> go.Figure:
        """Cria gráfico de coordenadas paralelas para análise multivariada."""
        try:
            if columns is None:
                numeric_cols = df.select_dtypes(include=[np.number]).columns.tolist()
                if len(numeric_cols) < 3:
                    st.warning("Necessário pelo menos 3 colunas numéricas para coordenadas paralelas")
                    return None
                columns = numeric_cols[:6]  # Limitar para performance
            
            fig = px.parallel_coordinates(
                df,
                dimensions=columns,
                color=color_col,
                title=title or "Coordenadas Paralelas"
            )
            
            fig.update_layout(height=500)
            
            return fig
            
        except Exception as e:
            st.error(f"Erro ao criar coordenadas paralelas: {str(e)}")
            return None
    
    def create_3d_scatter(self, df: pd.DataFrame, x_col: str, y_col: str, z_col: str,
                         color_col: str = None, size_col: str = None, title: str = None) -> go.Figure:
        """Cria gráfico de dispersão 3D."""
        try:
            fig = px.scatter_3d(
                df,
                x=x_col,
                y=y_col,
                z=z_col,
                color=color_col,
                size=size_col,
                title=title or f"Scatter 3D - {x_col} vs {y_col} vs {z_col}",
                opacity=0.7
            )
            
            fig.update_layout(height=600)
            
            return fig
            
        except Exception as e:
            st.error(f"Erro ao criar scatter 3D: {str(e)}")
            return None
    
    def create_animated_plot(self, df: pd.DataFrame, x_col: str, y_col: str,
                            animation_col: str, color_col: str = None, title: str = None) -> go.Figure:
        """Cria gráfico animado para mostrar evolução temporal."""
        try:
            fig = px.scatter(
                df,
                x=x_col,
                y=y_col,
                color=color_col,
                animation_frame=animation_col,
                title=title or f"Evolução - {x_col} vs {y_col} por {animation_col}",
                range_x=[df[x_col].min(), df[x_col].max()],
                range_y=[df[y_col].min(), df[y_col].max()]
            )
            
            fig.update_layout(height=600)
            
            return fig
            
        except Exception as e:
            st.error(f"Erro ao criar gráfico animado: {str(e)}")
            return None
    
    def export_chart_as_image(self, fig: go.Figure, format: str = 'png', 
                             width: int = 800, height: int = 600) -> str:
        """Exporta gráfico como imagem em base64."""
        try:
            img_bytes = fig.to_image(format=format, width=width, height=height)
            img_base64 = base64.b64encode(img_bytes).decode()
            return img_base64
        except Exception as e:
            st.error(f"Erro ao exportar gráfico: {str(e)}")
            return None
    
    def get_chart_data(self, fig: go.Figure) -> pd.DataFrame:
        """Extrai dados do gráfico para export."""
        try:
            # Esta função seria implementada baseada no tipo de gráfico
            # Por simplicidade, retornamos um DataFrame vazio
            return pd.DataFrame()
        except Exception as e:
            st.error(f"Erro ao extrair dados do gráfico: {str(e)}")
            return pd.DataFrame()

def create_interactive_dashboard(df: pd.DataFrame) -> Dict[str, go.Figure]:
    """Cria dashboard interativo com múltiplas visualizações."""
    plotter = EnhancedPlotter()
    plots = {}
    
    try:
        # Identificar colunas numéricas e categóricas
        numeric_cols = df.select_dtypes(include=[np.number]).columns.tolist()
        categorical_cols = df.select_dtypes(include=['object', 'category']).columns.tolist()
        
        # 1. Heatmap de correlação (se houver colunas numéricas)
        if len(numeric_cols) >= 2:
            plots['heatmap_correlation'] = plotter.create_heatmap(
                df, columns=numeric_cols, correlation=True,
                title="Mapa de Calor - Correlações"
            )
        
        # 2. Scatter matrix (se houver colunas numéricas)
        if len(numeric_cols) >= 2:
            plots['scatter_matrix'] = plotter.create_scatter_matrix(
                df, columns=numeric_cols[:4], title="Matriz de Dispersão"
            )
        
        # 3. Gráficos de violino por categoria
        if len(categorical_cols) > 0 and len(numeric_cols) > 0:
            for cat_col in categorical_cols[:2]:  # Máximo 2 categorias
                for num_col in numeric_cols[:2]:  # Máximo 2 numéricas
                    key = f'violin_{cat_col}_{num_col}'
                    plots[key] = plotter.create_violin_plot(
                        df, cat_col, num_col,
                        title=f'Distribuição de {num_col} por {cat_col}'
                    )
        
        # 4. Sunburst para dados hierárquicos
        if len(categorical_cols) >= 2:
            plots['sunburst_hierarchy'] = plotter.create_sunburst(
                df, categorical_cols[:3],
                title="Hierarquia dos Dados"
            )
        
        # 5. Treemap
        if len(categorical_cols) >= 2:
            plots['treemap'] = plotter.create_treemap(
                df, categorical_cols[:2],
                title="Treemap dos Dados"
            )
        
        return plots
        
    except Exception as e:
        st.error(f"Erro ao criar dashboard: {str(e)}")
        return {}

def get_available_plot_types(df: pd.DataFrame) -> Dict[str, List[str]]:
    """Retorna tipos de gráficos disponíveis baseados nos dados."""
    numeric_cols = df.select_dtypes(include=[np.number]).columns.tolist()
    categorical_cols = df.select_dtypes(include=['object', 'category']).columns.tolist()
    
    available_plots = {
        'basic': ['histogram', 'boxplot', 'scatter', 'bar_chart', 'line_chart'],
        'advanced': [],
        'multivariate': [],
        'hierarchical': []
    }
    
    # Gráficos avançados
    if len(numeric_cols) >= 2:
        available_plots['advanced'].extend(['heatmap', 'violin_plot'])
    
    if len(numeric_cols) >= 3:
        available_plots['advanced'].extend(['scatter_matrix', 'parallel_coordinates'])
    
    if len(numeric_cols) >= 3:
        available_plots['advanced'].append('3d_scatter')
    
    # Gráficos multivariados
    if len(numeric_cols) >= 2 and len(categorical_cols) >= 1:
        available_plots['multivariate'].extend(['violin_by_category', 'box_by_category'])
    
    # Gráficos hierárquicos
    if len(categorical_cols) >= 2:
        available_plots['hierarchical'].extend(['sunburst', 'treemap'])
    
    # Gráficos animados
    if len(categorical_cols) >= 1 and len(numeric_cols) >= 2:
        available_plots['advanced'].append('animated_plot')
    
    return available_plots

# Função utilitária para uso no Streamlit
@st.cache_data(ttl=3600)
def create_enhanced_visualizations(df: pd.DataFrame, plot_types: List[str] = None) -> Dict[str, go.Figure]:
    """Função cached para criar visualizações aprimoradas."""
    if plot_types is None:
        plot_types = ['heatmap', 'violin_plot', 'scatter_matrix']
    
    plotter = EnhancedPlotter()
    plots = {}
    
    for plot_type in plot_types:
        try:
            if plot_type == 'heatmap':
                plots['heatmap'] = plotter.create_heatmap(df)
            elif plot_type == 'violin_plot':
                # Criar violino para primeira coluna categórica vs numérica
                cat_cols = df.select_dtypes(include=['object', 'category']).columns.tolist()
                num_cols = df.select_dtypes(include=[np.number]).columns.tolist()
                if cat_cols and num_cols:
                    plots['violin_plot'] = plotter.create_violin_plot(df, cat_cols[0], num_cols[0])
            elif plot_type == 'scatter_matrix':
                plots['scatter_matrix'] = plotter.create_scatter_matrix(df)
        except Exception as e:
            st.error(f"Erro ao criar {plot_type}: {str(e)}")
    
    return plots
