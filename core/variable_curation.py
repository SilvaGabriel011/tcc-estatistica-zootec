"""
Módulo de curadoria de variáveis
Identifica tipos de variáveis e sugere análises apropriadas
"""

import pandas as pd
import numpy as np
from typing import Dict, List, Any

def analyze_variable_type(series):
    """Identifica o tipo de variável e sugere análises apropriadas."""
    if series.dtype == 'object' or series.dtype.name == 'category':
        return {
            'type': 'categorical',
            'analysis': ['frequency', 'pie_chart', 'bar_chart'],
            'avoid': ['mean', 'std', 'confidence_interval'],
            'description': 'Variável categórica - use frequências e gráficos de pizza/barras'
        }
    elif pd.api.types.is_numeric_dtype(series):
        return {
            'type': 'quantitative',
            'analysis': ['descriptive_stats', 'histogram', 'boxplot', 'confidence_interval'],
            'avoid': ['frequency'],
            'description': 'Variável quantitativa - use estatísticas descritivas e intervalos de confiança'
        }
    else:
        return {
            'type': 'unknown',
            'analysis': ['basic_info'],
            'avoid': ['advanced_stats'],
            'description': 'Tipo de variável não identificado - análise básica recomendada'
        }

def get_appropriate_analysis(series):
    """Retorna as análises apropriadas para uma variável."""
    var_info = analyze_variable_type(series)
    return var_info

def validate_analysis_request(series, requested_analysis):
    """Valida se uma análise solicitada é apropriada para o tipo de variável."""
    var_info = analyze_variable_type(series)
    
    if requested_analysis in var_info['avoid']:
        return {
            'valid': False,
            'reason': f"Análise '{requested_analysis}' não é apropriada para variáveis do tipo {var_info['type']}",
            'suggested_alternatives': var_info['analysis']
        }
    elif requested_analysis in var_info['analysis']:
        return {
            'valid': True,
            'reason': f"Análise '{requested_analysis}' é apropriada para variáveis do tipo {var_info['type']}"
        }
    else:
        return {
            'valid': False,
            'reason': f"Análise '{requested_analysis}' não identificada",
            'suggested_alternatives': var_info['analysis']
        }

def get_dataset_summary(df):
    """Fornece um resumo do dataset com curadoria de variáveis."""
    summary = {
        'total_variables': len(df.columns),
        'total_observations': len(df),
        'variable_types': {},
        'analysis_recommendations': {}
    }
    
    for column in df.columns:
        var_info = analyze_variable_type(df[column])
        summary['variable_types'][column] = var_info['type']
        
        # Recomendações específicas
        if var_info['type'] == 'quantitative':
            summary['analysis_recommendations'][column] = {
                'primary': 'Estatísticas descritivas (média, mediana, desvio padrão)',
                'secondary': 'Intervalos de confiança a 95%',
                'visualizations': ['histograma', 'boxplot', 'gráfico de dispersão']
            }
        elif var_info['type'] == 'categorical':
            summary['analysis_recommendations'][column] = {
                'primary': 'Frequências e percentuais',
                'secondary': 'Distribuição por categorias',
                'visualizations': ['gráfico de pizza', 'gráfico de barras']
            }
    
    return summary

def prevent_invalid_calculations(df, operation='mean'):
    """Previne cálculos inadequados baseados no tipo de variável."""
    warnings = []
    valid_columns = []
    
    for column in df.columns:
        var_info = analyze_variable_type(df[column])
        
        if operation in var_info['avoid']:
            warnings.append({
                'column': column,
                'type': var_info['type'],
                'operation': operation,
                'message': f"Não é apropriado calcular {operation} para variáveis do tipo {var_info['type']}",
                'suggestion': f"Use: {', '.join(var_info['analysis'])}"
            })
        else:
            valid_columns.append(column)
    
    return {
        'valid_columns': valid_columns,
        'warnings': warnings,
        'operation': operation
    }

def get_cross_variable_analysis(df):
    """Sugere análises cruzadas apropriadas entre variáveis."""
    quantitative_cols = [col for col in df.columns if analyze_variable_type(df[col])['type'] == 'quantitative']
    categorical_cols = [col for col in df.columns if analyze_variable_type(df[col])['type'] == 'categorical']
    
    recommendations = []
    
    # Análises quantitativa vs categórica
    for q_col in quantitative_cols:
        for c_col in categorical_cols:
            recommendations.append({
                'type': 'quantitative_vs_categorical',
                'quantitative_var': q_col,
                'categorical_var': c_col,
                'analysis': [
                    'boxplot por categoria',
                    'estatísticas descritivas por grupo',
                    'intervalos de confiança por grupo'
                ]
            })
    
    # Análises quantitativa vs quantitativa
    for i, q_col1 in enumerate(quantitative_cols):
        for q_col2 in quantitative_cols[i+1:]:
            recommendations.append({
                'type': 'quantitative_vs_quantitative',
                'var1': q_col1,
                'var2': q_col2,
                'analysis': [
                    'gráfico de dispersão',
                    'correlação',
                    'regressão simples'
                ]
            })
    
    # Análises categórica vs categórica
    for i, c_col1 in enumerate(categorical_cols):
        for c_col2 in categorical_cols[i+1:]:
            recommendations.append({
                'type': 'categorical_vs_categorical',
                'var1': c_col1,
                'var2': c_col2,
                'analysis': [
                    'tabela de contingência',
                    'gráfico de barras agrupadas',
                    'percentuais por categoria'
                ]
            })
    
    return recommendations
