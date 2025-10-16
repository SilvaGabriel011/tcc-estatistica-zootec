"""
Streamlit wrapper for React filter component
"""

import streamlit.components.v1 as components
import pandas as pd
import os
from typing import Dict, Any, Optional, List

# Build path for the filter component
_BUILD_PATH = os.path.join(os.path.dirname(__file__), "..", "..", "frontend", "filter_component", "build")

def filter_component(
    df: pd.DataFrame,
    filters_config: Optional[List[Dict[str, Any]]] = None,
    initial_values: Optional[Dict[str, Any]] = None,
    key: Optional[str] = None
) -> Dict[str, Any]:
    """
    Enhanced filter component with real-time updates and persistence.
    
    Args:
        df: DataFrame to create filters for
        filters_config: Custom filter configuration (optional)
        initial_values: Initial filter values (optional)
        key: Optional key for component state
    
    Returns:
        Dict containing applied filter values
    """
    
    # Check if build directory exists
    if not os.path.exists(_BUILD_PATH):
        # Fallback to regular Streamlit filters
        import streamlit as st
        st.warning("⚠️ React filter component not built. Using fallback filters.")
        return _fallback_filters(df, key)
    
    # Auto-generate filters if not provided
    if filters_config is None:
        filters_config = _generate_filters_config(df)
    
    # Component props
    props = {
        "filters": filters_config,
        "initialValues": initial_values or {}
    }
    
    # Render the React component
    result = components.declare_component(
        "filter_component",
        path=_BUILD_PATH,
        key=key
    )(**props)
    
    return result if result is not None else {}

def _generate_filters_config(df: pd.DataFrame) -> List[Dict[str, Any]]:
    """Generate filter configuration based on DataFrame columns."""
    filters = []
    
    for column in df.columns:
        if column.upper() in ['ESTADO', 'RAÇA', 'GÊNERO', 'VIA', 'TIPO GADO GORDO']:
            # Categorical filters
            unique_values = df[column].dropna().unique()
            options = [{"value": str(val), "label": str(val), "count": int((df[column] == val).sum())} 
                      for val in sorted(unique_values)]
            
            filters.append({
                "column": column,
                "type": "select",
                "options": options
            })
            
        elif column.upper() in ['ANO', 'TRIMESTRE']:
            # Numeric categorical
            unique_values = df[column].dropna().unique()
            options = [{"value": str(val), "label": str(val), "count": int((df[column] == val).sum())} 
                      for val in sorted(unique_values)]
            
            filters.append({
                "column": column,
                "type": "select",
                "options": options
            })
            
        elif column.upper() in ['PREÇO POR KG', 'PESO (KG)', 'VALOR']:
            # Range filters
            min_val = float(df[column].min()) if not df[column].isna().all() else 0
            max_val = float(df[column].max()) if not df[column].isna().all() else 100
            step = (max_val - min_val) / 100 if max_val > min_val else 1
            
            filters.append({
                "column": column,
                "type": "range",
                "min": min_val,
                "max": max_val,
                "step": step
            })
    
    return filters

def _fallback_filters(df: pd.DataFrame, key: Optional[str] = None) -> Dict[str, Any]:
    """Fallback to regular Streamlit filters when React component is not available."""
    import streamlit as st
    
    filters = {}
    
    # Basic filters using Streamlit widgets
    col1, col2 = st.columns(2)
    
    with col1:
        if 'ESTADO' in df.columns:
            estados = ['Todos'] + sorted(df['ESTADO'].dropna().unique().tolist())
            estado_sel = st.selectbox('Estado:', estados, key=f"{key}_estado" if key else "estado")
            if estado_sel != 'Todos':
                filters['ESTADO'] = estado_sel
        
        if 'ANO' in df.columns:
            anos = ['Todos'] + sorted(df['ANO'].dropna().unique().tolist())
            ano_sel = st.selectbox('Ano:', anos, key=f"{key}_ano" if key else "ano")
            if ano_sel != 'Todos':
                filters['ANO'] = ano_sel
    
    with col2:
        if 'RAÇA' in df.columns:
            racas = ['Todas'] + sorted(df['RAÇA'].dropna().unique().tolist())
            raca_sel = st.selectbox('Raça:', racas, key=f"{key}_raca" if key else "raca")
            if raca_sel != 'Todas':
                filters['RAÇA'] = raca_sel
        
        if 'TRIMESTRE' in df.columns:
            trimestres = ['Todos'] + sorted(df['TRIMESTRE'].dropna().unique().tolist())
            trim_sel = st.selectbox('Trimestre:', trimestres, key=f"{key}_trimestre" if key else "trimestre")
            if trim_sel != 'Todos':
                filters['TRIMESTRE'] = trim_sel
    
    # Range filter for price
    if 'PREÇO POR KG' in df.columns:
        preco_min = float(df['PREÇO POR KG'].min())
        preco_max = float(df['PREÇO POR KG'].max())
        faixa_preco = st.slider(
            'Faixa de Preço (R$/kg):',
            preco_min, preco_max,
            (preco_min, preco_max),
            step=0.1,
            key=f"{key}_preco" if key else "preco"
        )
        if faixa_preco[0] > preco_min or faixa_preco[1] < preco_max:
            filters['PREÇO POR KG'] = faixa_preco
    
    return filters

def apply_filters_from_component(df: pd.DataFrame, filter_result: Dict[str, Any]) -> pd.DataFrame:
    """
    Apply filters from React component to DataFrame.
    
    Args:
        df: Original DataFrame
        filter_result: Result from filter_component
    
    Returns:
        Filtered DataFrame
    """
    if not filter_result or not filter_result.get('filters'):
        return df
    
    filters = filter_result['filters']
    filtered_df = df.copy()
    
    for column, value in filters.items():
        if column not in filtered_df.columns:
            continue
            
        if value is None or value == '' or (isinstance(value, list) and len(value) == 0):
            continue
        
        if isinstance(value, list) and len(value) == 2:
            # Range filter
            min_val, max_val = value
            mask = (filtered_df[column] >= min_val) & (filtered_df[column] <= max_val)
            filtered_df = filtered_df[mask]
            
        elif isinstance(value, list):
            # Multi-select filter
            mask = filtered_df[column].isin(value)
            filtered_df = filtered_df[mask]
            
        else:
            # Single value filter
            mask = filtered_df[column] == value
            filtered_df = filtered_df[mask]
    
    return filtered_df
