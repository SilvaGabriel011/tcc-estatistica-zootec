"""Módulo de limpeza de dados com otimização de performance"""
import pandas as pd
import numpy as np
from unidecode import unidecode
import streamlit as st
from typing import Dict, Any, Tuple, Optional
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
    
    # Otimizar tipos de dados
    for col in df.columns:
        if df[col].dtype == 'object':
            # Tentar converter para categoria se tiver poucos valores únicos
            if df[col].nunique() / len(df) < 0.5:
                df[col] = df[col].astype('category')
        elif df[col].dtype == 'int64':
            # Reduzir precisão de inteiros
            if df[col].min() >= -128 and df[col].max() <= 127:
                df[col] = df[col].astype('int8')
            elif df[col].min() >= -32768 and df[col].max() <= 32767:
                df[col] = df[col].astype('int16')
            elif df[col].min() >= -2147483648 and df[col].max() <= 2147483647:
                df[col] = df[col].astype('int32')
        elif df[col].dtype == 'float64':
            # Reduzir precisão de floats
            df[col] = pd.to_numeric(df[col], downcast='float')
    
    return df

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
def clean_data(df: pd.DataFrame, optimize_memory: bool = True) -> Tuple[pd.DataFrame, Dict[str, Any]]:
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
        if optimize_memory:
            df_clean, mem_info = optimize_memory(df_clean, aggressive=True)
            cleaning_info['memory_optimization'] = mem_info
            cleaning_info['steps_completed'].append('optimize_memory')
        
        # Final statistics
        cleaning_info.update({
            'final_rows': len(df_clean),
            'final_columns': len(df_clean.columns),
            'memory_after_mb': df_clean.memory_usage(deep=True).sum() / 1024**2,
            'memory_reduction_mb': cleaning_info['memory_before_mb'] - cleaning_info['memory_after_mb'],
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
    expected_cols = ['ANO', 'TRIMESTRE', 'ESTADO', 'RAÇA', 'GÊNERO', 'ERA', 'VIA', 
                     'TIPO GADO GORDO', 'PESO (KG)', 'VALOR', 'PREÇO POR KG', 
                     'ARROBA GORDO', 'ARROBA MAGRO', '% ÁGIO']
    present = [col for col in expected_cols if col in df.columns]
    missing = [col for col in expected_cols if col not in df.columns]
    nan_counts = df.isnull().sum()
    return {
        'total_rows': len(df),
        'total_columns': len(df.columns),
        'recognized_columns': present,
        'missing_columns': missing,
        'nan_counts': nan_counts.to_dict()
    }
