"""
Error Recovery System for TCC Gado Gordo Application
Provides automatic and manual recovery strategies for common errors.
"""

import streamlit as st
import pandas as pd
import os
import tempfile
from typing import Optional, Dict, Any, List, Callable
from dataclasses import dataclass
from enum import Enum
import traceback

class RecoveryAction(Enum):
    """Types of recovery actions."""
    RETRY = "retry"
    FALLBACK = "fallback"
    SKIP = "skip"
    MANUAL = "manual"
    ABORT = "abort"

@dataclass
class RecoveryOption:
    """Represents a recovery option."""
    action: RecoveryAction
    description: str
    handler: Callable
    success_message: str
    failure_message: str

class ErrorRecovery:
    """Error recovery system with automatic and manual strategies."""
    
    def __init__(self):
        self.recovery_strategies = self._initialize_recovery_strategies()
        self.session_state = st.session_state
    
    def _initialize_recovery_strategies(self) -> Dict[str, List[RecoveryOption]]:
        """Initialize recovery strategies for different error types."""
        return {
            "FileNotFoundError": [
                RecoveryOption(
                    action=RecoveryAction.FALLBACK,
                    description="Usar dados de exemplo",
                    handler=self._use_sample_data,
                    success_message="Carregados dados de exemplo com sucesso",
                    failure_message="Falha ao carregar dados de exemplo"
                ),
                RecoveryOption(
                    action=RecoveryAction.MANUAL,
                    description="Selecionar outro arquivo",
                    handler=self._request_file_selection,
                    success_message="Arquivo selecionado com sucesso",
                    failure_message="Nenhum arquivo foi selecionado"
                )
            ],
            "MemoryError": [
                RecoveryOption(
                    action=RecoveryAction.FALLBACK,
                    description="Processar em lotes menores",
                    handler=self._process_in_batches,
                    success_message="Processamento em lotes iniciado",
                    failure_message="Falha no processamento em lotes"
                ),
                RecoveryOption(
                    action=RecoveryAction.FALLBACK,
                    description="Usar dados de exemplo",
                    handler=self._use_sample_data,
                    success_message="Dados de exemplo carregados",
                    failure_message="Falha ao carregar dados de exemplo"
                )
            ],
            "ValueError": [
                RecoveryOption(
                    action=RecoveryAction.FALLBACK,
                    description="Aplicar limpeza automática",
                    handler=self._auto_clean_data,
                    success_message="Limpeza automática aplicada",
                    failure_message="Falha na limpeza automática"
                ),
                RecoveryOption(
                    action=RecoveryAction.MANUAL,
                    description="Revisar dados manualmente",
                    handler=self._show_data_review,
                    success_message="Revisão manual concluída",
                    failure_message="Revisão manual cancelada"
                )
            ],
            "KeyError": [
                RecoveryOption(
                    action=RecoveryAction.FALLBACK,
                    description="Mapear colunas automaticamente",
                    handler=self._auto_map_columns,
                    success_message="Mapeamento automático aplicado",
                    failure_message="Falha no mapeamento automático"
                ),
                RecoveryOption(
                    action=RecoveryAction.MANUAL,
                    description="Definir colunas manualmente",
                    handler=self._manual_column_mapping,
                    success_message="Mapeamento manual concluído",
                    failure_message="Mapeamento manual cancelado"
                )
            ]
        }
    
    def show_recovery_options(self, error: Exception, context: Dict[str, Any]) -> Optional[Any]:
        """Show recovery options to the user."""
        error_type = error.__class__.__name__
        
        if error_type not in self.recovery_strategies:
            st.error("Não há opções de recuperação disponíveis para este erro.")
            return None
        
        strategies = self.recovery_strategies[error_type]
        
        st.error(f"❌ Erro: {str(error)}")
        st.info("💡 Opções de recuperação disponíveis:")
        
        selected_option = None
        for i, strategy in enumerate(strategies):
            col1, col2 = st.columns([3, 1])
            
            with col1:
                st.write(f"**{i+1}.** {strategy.description}")
            
            with col2:
                if st.button("Tentar", key=f"recovery_{i}"):
                    selected_option = strategy
                    break
        
        if selected_option:
            return self._execute_recovery(selected_option, context)
        
        return None
    
    def _execute_recovery(self, option: RecoveryOption, context: Dict[str, Any]) -> Any:
        """Execute a recovery option."""
        try:
            with st.spinner(f"Executando: {option.description}..."):
                result = option.handler(context)
                st.success(option.success_message)
                return result
        except Exception as e:
            st.error(f"{option.failure_message}: {str(e)}")
            return None
    
    def _use_sample_data(self, context: Dict[str, Any]) -> pd.DataFrame:
        """Use sample data as fallback."""
        from core.sample_data import generate_sample_data
        
        sample_df = generate_sample_data(50)
        
        # Store in session state
        st.session_state['df_clean'] = sample_df
        st.session_state['data_source'] = 'sample'
        
        return sample_df
    
    def _request_file_selection(self, context: Dict[str, Any]) -> Optional[pd.DataFrame]:
        """Request user to select another file."""
        st.info("Por favor, selecione outro arquivo:")
        
        uploaded_file = st.file_uploader(
            "Escolha um arquivo CSV ou Excel",
            type=['csv', 'xlsx', 'xls'],
            key="recovery_file_upload"
        )
        
        if uploaded_file:
            # Process the new file
            from core.cleaning import clean_data
            import io
            
            try:
                if uploaded_file.name.endswith('.csv'):
                    df = pd.read_csv(uploaded_file, encoding='utf-8')
                else:
                    df = pd.read_excel(uploaded_file)
                
                df_clean = clean_data(df)
                st.session_state['df_clean'] = df_clean
                st.session_state['data_source'] = 'upload'
                
                return df_clean
            except Exception as e:
                st.error(f"Erro ao processar o arquivo: {str(e)}")
                return None
        
        return None
    
    def _process_in_batches(self, context: Dict[str, Any]) -> Optional[Dict[str, Any]]:
        """Process data in smaller batches."""
        if 'df_clean' not in st.session_state:
            return None
        
        df = st.session_state['df_clean']
        
        # Configure batch processing
        batch_size = st.slider(
            "Tamanho do lote",
            min_value=100,
            max_value=1000,
            value=500,
            step=100
        )
        
        total_rows = len(df)
        num_batches = (total_rows + batch_size - 1) // batch_size
        
        st.info(f"Processando {total_rows} linhas em {num_batches} lotes de {batch_size} linhas")
        
        # Process batches
        processed_batches = []
        progress_bar = st.progress(0)
        
        for i in range(num_batches):
            start_idx = i * batch_size
            end_idx = min((i + 1) * batch_size, total_rows)
            
            batch = df.iloc[start_idx:end_idx]
            
            # Process batch (placeholder for actual processing)
            processed_batches.append(batch)
            
            progress_bar.progress((i + 1) / num_batches)
            st.write(f"Lote {i+1}/{num_batches} processado")
        
        # Combine processed batches
        if processed_batches:
            combined_df = pd.concat(processed_batches, ignore_index=True)
            st.session_state['df_clean'] = combined_df
            st.session_state['processing_mode'] = 'batch'
            
            return {
                'dataframe': combined_df,
                'batch_size': batch_size,
                'num_batches': num_batches
            }
        
        return None
    
    def _auto_clean_data(self, context: Dict[str, Any]) -> Optional[pd.DataFrame]:
        """Apply automatic data cleaning."""
        if 'df_clean' not in st.session_state:
            return None
        
        df = st.session_state['df_clean']
        
        # Apply automatic cleaning
        from core.cleaning import clean_data
        
        try:
            cleaned_df = clean_data(df)
            st.session_state['df_clean'] = cleaned_df
            st.session_state['cleaning_applied'] = True
            
            return cleaned_df
        except Exception as e:
            st.error(f"Erro na limpeza automática: {str(e)}")
            return None
    
    def _show_data_review(self, context: Dict[str, Any]) -> Optional[pd.DataFrame]:
        """Show data review interface."""
        if 'df_clean' not in st.session_state:
            return None
        
        df = st.session_state['df_clean']
        
        st.subheader("📊 Revisão dos Dados")
        
        # Show data preview
        st.write("**Prévia dos dados:**")
        st.dataframe(df.head(10))
        
        # Show data info
        st.write("**Informações dos dados:**")
        st.write(f"- Linhas: {len(df)}")
        st.write(f"- Colunas: {len(df.columns)}")
        st.write(f"- Valores ausentes: {df.isnull().sum().sum()}")
        
        # Manual cleaning options
        st.write("**Opções de limpeza:**")
        
        col1, col2 = st.columns(2)
        
        with col1:
            if st.button("Remover linhas com valores ausentes"):
                df_clean = df.dropna()
                st.session_state['df_clean'] = df_clean
                st.success(f"Removidas {len(df) - len(df_clean)} linhas")
                return df_clean
        
        with col2:
            if st.button("Preencher valores ausentes"):
                df_clean = df.fillna(method='ffill').fillna(method='bfill')
                st.session_state['df_clean'] = df_clean
                st.success("Valores ausentes preenchidos")
                return df_clean
        
        return df
    
    def _auto_map_columns(self, context: Dict[str, Any]) -> Optional[pd.DataFrame]:
        """Automatically map columns to expected format."""
        if 'df_clean' not in st.session_state:
            return None
        
        df = st.session_state['df_clean']
        
        # Define expected column mappings
        column_mappings = {
            'PREÇO POR KG': ['preco', 'preço', 'price', 'valor_kg', 'preco_kg'],
            'PESO (KG)': ['peso', 'weight', 'kg', 'peso_kg'],
            'ESTADO': ['estado', 'state', 'uf'],
            'RAÇA': ['raca', 'raça', 'breed', 'tipo'],
            'ANO': ['ano', 'year', 'ano_venda'],
            'TRIMESTRE': ['trimestre', 'quarter', 'q']
        }
        
        # Try to map columns
        mapped_df = df.copy()
        mapping_applied = False
        
        for target_col, possible_names in column_mappings.items():
            for possible_name in possible_names:
                # Case-insensitive search
                matching_cols = [col for col in df.columns 
                               if possible_name.lower() in col.lower()]
                
                if matching_cols and target_col not in mapped_df.columns:
                    mapped_df[target_col] = mapped_df[matching_cols[0]]
                    mapping_applied = True
                    break
        
        if mapping_applied:
            st.session_state['df_clean'] = mapped_df
            st.session_state['column_mapping_applied'] = True
            st.success("Mapeamento automático de colunas aplicado")
            return mapped_df
        else:
            st.warning("Não foi possível mapear colunas automaticamente")
            return None
    
    def _manual_column_mapping(self, context: Dict[str, Any]) -> Optional[pd.DataFrame]:
        """Manual column mapping interface."""
        if 'df_clean' not in st.session_state:
            return None
        
        df = st.session_state['df_clean']
        
        st.subheader("🗺️ Mapeamento Manual de Colunas")
        
        # Show available columns
        st.write("**Colunas disponíveis:**")
        for i, col in enumerate(df.columns):
            st.write(f"{i+1}. {col}")
        
        # Expected columns
        expected_columns = [
            'PREÇO POR KG', 'PESO (KG)', 'ESTADO', 'RAÇA', 
            'ANO', 'TRIMESTRE', 'VALOR'
        ]
        
        st.write("**Mapear para colunas esperadas:**")
        
        column_mapping = {}
        for expected_col in expected_columns:
            available_cols = [''] + list(df.columns)
            selected_col = st.selectbox(
                f"Mapear '{expected_col}' para:",
                available_cols,
                key=f"map_{expected_col}"
            )
            
            if selected_col:
                column_mapping[expected_col] = selected_col
        
        if st.button("Aplicar Mapeamento"):
            if column_mapping:
                mapped_df = df.copy()
                
                for target_col, source_col in column_mapping.items():
                    if source_col in df.columns:
                        mapped_df[target_col] = df[source_col]
                
                st.session_state['df_clean'] = mapped_df
                st.session_state['manual_mapping_applied'] = True
                st.success("Mapeamento manual aplicado com sucesso")
                return mapped_df
            else:
                st.warning("Selecione pelo menos uma coluna para mapear")
                return None
        
        return None

# Global recovery instance
error_recovery = ErrorRecovery()

def show_recovery_interface(error: Exception, context: Dict[str, Any] = None) -> Optional[Any]:
    """Show recovery interface for an error."""
    if context is None:
        context = {}
    
    return error_recovery.show_recovery_options(error, context)

def auto_recover(error: Exception, context: Dict[str, Any] = None) -> Optional[Any]:
    """Attempt automatic recovery for common errors."""
    if context is None:
        context = {}
    
    error_type = error.__class__.__name__
    recovery = error_recovery
    
    # Try automatic recovery based on error type
    if error_type == "FileNotFoundError":
        try:
            return recovery._use_sample_data(context)
        except Exception:
            pass
    
    elif error_type == "MemoryError":
        try:
            return recovery._process_in_batches(context)
        except Exception:
            pass
    
    elif error_type == "ValueError":
        try:
            return recovery._auto_clean_data(context)
        except Exception:
            pass
    
    # If automatic recovery fails, show manual options
    return recovery.show_recovery_options(error, context)
