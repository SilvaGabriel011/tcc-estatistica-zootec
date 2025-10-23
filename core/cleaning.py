"""Módulo de limpeza de dados com otimização de performance"""
import pandas as pd
import numpy as np
from unidecode import unidecode
import streamlit as st
from typing import Dict, Any, Tuple, Optional
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)
# Performance optimizer removido - usando funcionalidades básicas
def monitor_performance(func_name):
    """Decorator placeholder para monitoramento de performance."""
    def decorator(func):
        def wrapper(*args, **kwargs):
            # Simplesmente executar a função sem monitoramento
            return func(*args, **kwargs)
        return wrapper
    return decorator

def optimize_memory(df):
    """Otimização básica de memória."""
    if df is None or df.empty:
        return df
    
    df_optimized = df.copy()
    
    # Otimizar tipos de dados
    for col in df_optimized.columns:
        try:
            if df_optimized[col].dtype == 'object':
                # Tentar converter para categoria se tiver poucos valores únicos
                if df_optimized[col].nunique() / len(df_optimized) < 0.5:
                    df_optimized[col] = df_optimized[col].astype('category')
            elif df_optimized[col].dtype == 'int64':
                # Reduzir precisão de inteiros
                if df_optimized[col].min() >= -128 and df_optimized[col].max() <= 127:
                    df_optimized[col] = df_optimized[col].astype('int8')
                elif df_optimized[col].min() >= -32768 and df_optimized[col].max() <= 32767:
                    df_optimized[col] = df_optimized[col].astype('int16')
                elif df_optimized[col].min() >= -2147483648 and df_optimized[col].max() <= 2147483647:
                    df_optimized[col] = df_optimized[col].astype('int32')
            elif df_optimized[col].dtype == 'float64':
                # Reduzir precisão de floats
                df_optimized[col] = pd.to_numeric(df_optimized[col], downcast='float')
        except Exception as e:
            logger.warning(f"Erro ao otimizar coluna {col}: {str(e)}")
            continue
    
    return df_optimized

# Cache configuration for dataframes
@st.cache_data(ttl=3600)
def _hash_dataframe(df):
    """Create hash for dataframe caching."""
    if df is None or df.empty:
        return "empty"
    try:
        return hash(tuple(df.values.tobytes()))
    except Exception:
        # Fallback for non-numeric data
        return hash(str(df.values.tobytes()))

def normalize_columns(df):
    column_mapping = {
        'ano': 'ANO', 'trimestre': 'TRIMESTRE', 'estado': 'ESTADO',
        'raca': 'RAÇA', 'genero': 'GÊNERO', 'era': 'ERA', 'via': 'VIA',
        'tipo_gado_gordo': 'TIPO GADO GORDO', 'tipo': 'TIPO GADO GORDO',
        'peso': 'PESO (KG)', 'peso_kg': 'PESO (KG)', 'valor': 'VALOR',
        'preco_por_kg': 'PREÇO POR KG', 'preco_kg': 'PREÇO POR KG',
        'arroba_gordo': 'ARROBA GORDO', 'arroba_magro': 'ARROBA MAGRO',
        'agio': '% ÁGIO', 'perc_agio': '% ÁGIO',
    }
    df_clean = df.copy()
    new_columns = {}
    for col in df_clean.columns:
        normalized = unidecode(str(col)).lower().strip().replace(' ', '_').replace('(', '').replace(')', '').replace('%', 'perc')
        new_columns[col] = column_mapping.get(normalized, col)
    df_clean.rename(columns=new_columns, inplace=True)
    return df_clean

def derive_fields(df):
    df_clean = df.copy()
    if 'VALOR' in df_clean.columns and 'PESO (KG)' in df_clean.columns:
        if 'PREÇO POR KG' not in df_clean.columns:
            df_clean['PREÇO POR KG'] = df_clean['VALOR'] / df_clean['PESO (KG)']
    if 'PREÇO POR KG' in df_clean.columns:
        if 'ARROBA GORDO' not in df_clean.columns:
            df_clean['ARROBA GORDO'] = df_clean['PREÇO POR KG'] * 15
    if 'ARROBA MAGRO' in df_clean.columns and 'ARROBA GORDO' in df_clean.columns:
        if '% ÁGIO' not in df_clean.columns:
            df_clean['% ÁGIO'] = (df_clean['ARROBA MAGRO'] / df_clean['ARROBA GORDO']) - 1
    for col in ['PESO (KG)', 'PREÇO POR KG', 'VALOR', 'ARROBA GORDO', 'ARROBA MAGRO']:
        if col in df_clean.columns:
            df_clean.loc[df_clean[col] <= 0, col] = np.nan
    return df_clean

@st.cache_data(ttl=3600, hash_funcs={pd.DataFrame: _hash_dataframe})
@monitor_performance("clean_data")
def clean_data(df: pd.DataFrame, optimize_memory_flag: bool = True) -> Tuple[pd.DataFrame, Dict[str, Any]]:
    """Limpa e padroniza os dados com otimização de performance."""
    cleaning_info = {
        'original_rows': len(df),
        'original_columns': len(df.columns),
        'memory_before_mb': df.memory_usage(deep=True).sum() / 1024**2,
        'steps_completed': []
    }
    
    try:
        # 1. Normalizar colunas
        df_clean = normalize_columns(df)
        cleaning_info['steps_completed'].append('normalize_columns')
        
        # 2. Calcular campos derivados
        df_clean = derive_fields(df_clean)
        cleaning_info['steps_completed'].append('derive_fields')
        
        # 3. Otimizar memória se solicitado
        if optimize_memory_flag:
            df_clean = optimize_memory(df_clean)
            cleaning_info['steps_completed'].append('optimize_memory')
        
        # Final statistics
        memory_after_mb = df_clean.memory_usage(deep=True).sum() / 1024**2
        cleaning_info.update({
            'final_rows': len(df_clean),
            'final_columns': len(df_clean.columns),
            'memory_after_mb': memory_after_mb,
            'memory_reduction_mb': cleaning_info['memory_before_mb'] - memory_after_mb,
            'success': True
        })
        
        return df_clean, cleaning_info
        
    except Exception as e:
        cleaning_info.update({
            'success': False,
            'error': str(e),
            'error_type': e.__class__.__name__
        })
        raise

@st.cache_data(ttl=3600, hash_funcs={pd.DataFrame: _hash_dataframe})
def get_data_quality_report(df):
    """Gera relatório de qualidade dos dados."""
    expected_cols = ['ANO', 'TRIMESTRE', 'ESTADO', 'RAÇA', 'GÊNERO', 'ERA', 'VIA', 
                     'TIPO GADO GORDO', 'PESO (KG)', 'VALOR', 'PREÇO POR KG', 
                     'ARROBA GORDO', 'ARROBA MAGRO', '% ÁGIO']
    present = [col for col in expected_cols if col in df.columns]
    missing = [col for col in expected_cols if col not in df.columns]
    nan_counts = df.isnull().sum()
    
    # Análise mais detalhada
    quality_metrics = {
        'total_rows': len(df),
        'total_columns': len(df.columns),
        'recognized_columns': present,
        'missing_columns': missing,
        'nan_counts': nan_counts.to_dict(),
        'data_types': df.dtypes.to_dict(),
        'memory_usage_mb': df.memory_usage(deep=True).sum() / 1024**2,
        'duplicate_rows': df.duplicated().sum(),
        'column_stats': {}
    }
    
    # Estatísticas por coluna
    for col in df.columns:
        col_data = df[col]
        col_stats = {
            'dtype': str(col_data.dtype),
            'null_count': col_data.isnull().sum(),
            'null_percentage': (col_data.isnull().sum() / len(df)) * 100,
            'unique_count': col_data.nunique(),
            'unique_percentage': (col_data.nunique() / len(df)) * 100
        }
        
        # Estatísticas específicas por tipo
        if pd.api.types.is_numeric_dtype(col_data):
            col_stats.update({
                'mean': col_data.mean(),
                'std': col_data.std(),
                'min': col_data.min(),
                'max': col_data.max(),
                'median': col_data.median()
            })
        elif pd.api.types.is_string_dtype(col_data):
            col_stats.update({
                'most_common': col_data.value_counts().head(1).to_dict(),
                'avg_length': col_data.astype(str).str.len().mean()
            })
        
        quality_metrics['column_stats'][col] = col_stats
    
    return quality_metrics

def suggest_data_improvements(df, quality_report):
    """Sugere melhorias baseadas no relatório de qualidade."""
    suggestions = []
    
    # Sugestões baseadas em valores faltantes
    high_missing = [(col, stats['null_percentage']) 
                   for col, stats in quality_report['column_stats'].items() 
                   if stats['null_percentage'] > 30]
    
    if high_missing:
        suggestions.append({
            'type': 'missing_values',
            'message': f'Colunas com muitos valores faltantes: {[col for col, _ in high_missing]}',
            'action': 'Considerar remoção ou imputação de valores'
        })
    
    # Sugestões baseadas em duplicatas
    if quality_report['duplicate_rows'] > 0:
        suggestions.append({
            'type': 'duplicates',
            'message': f'{quality_report["duplicate_rows"]} linhas duplicadas encontradas',
            'action': 'Considerar remoção de duplicatas'
        })
    
    # Sugestões baseadas em tipos de dados
    object_cols = [col for col, stats in quality_report['column_stats'].items() 
                  if stats['dtype'] == 'object']
    
    for col in object_cols:
        col_data = df[col]
        # Verificar se pode ser convertido para numérico
        try:
            pd.to_numeric(col_data.dropna())
            suggestions.append({
                'type': 'data_type',
                'message': f'Coluna {col} pode ser convertida para numérico',
                'action': f'Converter {col} para tipo numérico'
            })
        except:
            pass
    
    return suggestions

def apply_suggested_improvements(df, suggestions, user_choices=None):
    """Aplica melhorias sugeridas baseadas nas escolhas do usuário."""
    if user_choices is None:
        user_choices = {}
    
    df_improved = df.copy()
    applied_changes = []
    
    for suggestion in suggestions:
        if suggestion['type'] == 'duplicates' and user_choices.get('remove_duplicates', False):
            initial_rows = len(df_improved)
            df_improved = df_improved.drop_duplicates()
            final_rows = len(df_improved)
            applied_changes.append(f'Removidas {initial_rows - final_rows} linhas duplicadas')
        
        elif suggestion['type'] == 'data_type':
            col = suggestion['message'].split("'")[1]
            if user_choices.get(f'convert_{col}', False):
                try:
                    df_improved[col] = pd.to_numeric(df_improved[col], errors='coerce')
                    applied_changes.append(f'Coluna {col} convertida para numérico')
                except Exception as e:
                    logger.error(f"Erro ao converter {col}: {str(e)}")
    
    return df_improved, applied_changes
