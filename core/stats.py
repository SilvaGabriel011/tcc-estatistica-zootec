"""Módulo de análises estatísticas descritivas"""
import pandas as pd
import numpy as np
from scipy import stats

def means_ci(df, group, y='PREÇO POR KG', confidence=0.95):
    if group not in df.columns or y not in df.columns:
        return pd.DataFrame()
    df_clean = df[[group, y]].dropna()
    results = []
    for name, group_data in df_clean.groupby(group):
        values = group_data[y]
        n = len(values)
        mean = values.mean()
        std = values.std(ddof=1)
        se = std / np.sqrt(n)
        t_crit = stats.t.ppf((1 + confidence) / 2, n - 1)
        ci_lower = mean - t_crit * se
        ci_upper = mean + t_crit * se
        results.append({
            'Grupo': name, 'N': n, 'Média': mean, 'DP': std,
            'EP': se, 'IC 95% Inf': ci_lower, 'IC 95% Sup': ci_upper
        })
    return pd.DataFrame(results)

# Funções de estatística avançada removidas conforme orientação da orientadora
# Mantendo apenas análise descritiva e intervalos de confiança

def descriptive_stats(series):
    series_clean = series.dropna()
    return {
        'N': len(series_clean),
        'Média': series_clean.mean(),
        'DP': series_clean.std(ddof=1),
        'Mediana': series_clean.median(),
        'Mínimo': series_clean.min(),
        'Máximo': series_clean.max()
    }

# =============================================================================
# FUNÇÕES DE ANÁLISE DESCRITIVA E CUARDORIA DE VARIÁVEIS
# =============================================================================

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

def comprehensive_descriptive_analysis(df):
    """Análise descritiva abrangente baseada no tipo de variável."""
    results = {}
    
    for column in df.columns:
        var_info = analyze_variable_type(df[column])
        results[column] = {
            'type': var_info['type'],
            'description': var_info['description'],
            'recommended_analysis': var_info['analysis'],
            'avoid': var_info['avoid']
        }
        
        # Aplicar análises recomendadas
        if var_info['type'] == 'quantitative':
            results[column]['descriptive_stats'] = descriptive_stats(df[column])
            
            # Calcular intervalos de confiança se houver grupos
            categorical_cols = [col for col in df.columns 
                              if analyze_variable_type(df[col])['type'] == 'categorical']
            
            for group_col in categorical_cols:
                ci_result = means_ci(df, group_col, column)
                if not ci_result.empty:
                    results[column][f'confidence_intervals_by_{group_col}'] = ci_result
        
        elif var_info['type'] == 'categorical':
            # Frequências para variáveis categóricas
            freq = df[column].value_counts()
            results[column]['frequency'] = freq
            results[column]['percentage'] = (freq / len(df) * 100).round(2)
    
    return results
