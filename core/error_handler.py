"""
Enhanced Error Handling System for TCC Gado Gordo Application
Provides comprehensive error management, user-friendly messages, and recovery suggestions.
"""

import streamlit as st
import json
import traceback
import logging
from datetime import datetime
from typing import Optional, Dict, Any, Callable, Union
from enum import Enum
import functools

class ErrorSeverity(Enum):
    """Error severity levels."""
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"

class ErrorCategory(Enum):
    """Error categories for better organization."""
    VALIDATION = "validation"
    FILE_IO = "file_io"
    DATA_PROCESSING = "data_processing"
    AI_SERVICE = "ai_service"
    EXPORT = "export"
    NETWORK = "network"
    MEMORY = "memory"
    PERMISSION = "permission"
    UNKNOWN = "unknown"

class ErrorContext:
    """Context information for errors."""
    def __init__(self, page: str, action: str, user_id: Optional[str] = None):
        self.page = page
        self.action = action
        self.user_id = user_id or "anonymous"
        self.timestamp = datetime.utcnow()
        self.session_id = st.session_state.get('session_id', 'unknown')

class UserFriendlyError(Exception):
    """Custom exception for user-friendly error messages."""
    def __init__(self, message: str, category: ErrorCategory = ErrorCategory.UNKNOWN, 
                 severity: ErrorSeverity = ErrorSeverity.MEDIUM, 
                 recovery_suggestion: Optional[str] = None,
                 technical_details: Optional[str] = None):
        super().__init__(message)
        self.category = category
        self.severity = severity
        self.recovery_suggestion = recovery_suggestion
        self.technical_details = technical_details

class ErrorHandler:
    """Centralized error handling system."""
    
    def __init__(self):
        self.error_patterns = self._load_error_patterns()
        self.recovery_strategies = self._load_recovery_strategies()
        self._setup_logging()
    
    def _setup_logging(self):
        """Setup logging configuration."""
        logging.basicConfig(
            level=logging.INFO,
            format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
            handlers=[
                logging.FileHandler('output/error_handler.log', encoding='utf-8'),
                logging.StreamHandler()
            ]
        )
        self.logger = logging.getLogger(__name__)
    
    def _load_error_patterns(self) -> Dict[str, Dict[str, Any]]:
        """Load error pattern mappings for user-friendly messages."""
        return {
            "FileNotFoundError": {
                "category": ErrorCategory.FILE_IO,
                "severity": ErrorSeverity.MEDIUM,
                "user_message": "Arquivo não encontrado",
                "recovery": "Verifique se o arquivo existe e você tem permissão para acessá-lo."
            },
            "PermissionError": {
                "category": ErrorCategory.PERMISSION,
                "severity": ErrorSeverity.HIGH,
                "user_message": "Sem permissão para acessar o arquivo",
                "recovery": "Verifique as permissões do arquivo ou execute como administrador."
            },
            "MemoryError": {
                "category": ErrorCategory.MEMORY,
                "severity": ErrorSeverity.HIGH,
                "user_message": "Memória insuficiente",
                "recovery": "Tente processar arquivos menores ou feche outros aplicativos."
            },
            "ValueError": {
                "category": ErrorCategory.VALIDATION,
                "severity": ErrorSeverity.MEDIUM,
                "user_message": "Dados inválidos",
                "recovery": "Verifique o formato dos dados e tente novamente."
            },
            "KeyError": {
                "category": ErrorCategory.DATA_PROCESSING,
                "severity": ErrorSeverity.MEDIUM,
                "user_message": "Coluna não encontrada",
                "recovery": "Verifique se a planilha contém as colunas necessárias."
            },
            "ConnectionError": {
                "category": ErrorCategory.NETWORK,
                "severity": ErrorSeverity.MEDIUM,
                "user_message": "Erro de conexão",
                "recovery": "Verifique sua conexão com a internet e tente novamente."
            },
            "TimeoutError": {
                "category": ErrorCategory.NETWORK,
                "severity": ErrorSeverity.MEDIUM,
                "user_message": "Tempo limite excedido",
                "recovery": "A operação demorou muito. Tente novamente ou use arquivos menores."
            }
        }
    
    def _load_recovery_strategies(self) -> Dict[ErrorCategory, list]:
        """Load recovery strategies for different error categories."""
        return {
            ErrorCategory.FILE_IO: [
                "Verificar se o arquivo existe",
                "Verificar permissões do arquivo",
                "Tentar um formato de arquivo diferente"
            ],
            ErrorCategory.DATA_PROCESSING: [
                "Verificar formato dos dados",
                "Limpar dados inválidos",
                "Usar dados de exemplo para teste"
            ],
            ErrorCategory.MEMORY: [
                "Fechar outros aplicativos",
                "Processar arquivos menores",
                "Usar processamento em lotes"
            ],
            ErrorCategory.AI_SERVICE: [
                "Verificar conexão com a internet",
                "Tentar novamente em alguns minutos",
                "Usar modo offline se disponível"
            ]
        }
    
    def handle_error(self, error: Exception, context: ErrorContext, 
                    show_toast: bool = True, log_error: bool = True) -> Dict[str, Any]:
        """Handle an error and return user-friendly information."""
        
        # Log the error
        if log_error:
            self._log_error(error, context)
        
        # Analyze the error
        error_info = self._analyze_error(error)
        
        # Create user-friendly message
        user_message = self._create_user_message(error, error_info, context)
        
        # Show toast notification if requested
        if show_toast:
            self._show_error_toast(user_message, error_info['severity'])
        
        # Return error information
        return {
            'user_message': user_message['message'],
            'recovery_suggestion': user_message['recovery'],
            'category': error_info['category'],
            'severity': error_info['severity'],
            'technical_details': error_info.get('technical_details'),
            'context': {
                'page': context.page,
                'action': context.action,
                'timestamp': context.timestamp.isoformat()
            }
        }
    
    def _analyze_error(self, error: Exception) -> Dict[str, Any]:
        """Analyze error and extract relevant information."""
        error_type = error.__class__.__name__
        
        # Check if it's a UserFriendlyError
        if isinstance(error, UserFriendlyError):
            return {
                'category': error.category,
                'severity': error.severity,
                'user_message': str(error),
                'recovery': error.recovery_suggestion,
                'technical_details': error.technical_details
            }
        
        # Check error patterns
        if error_type in self.error_patterns:
            pattern = self.error_patterns[error_type]
            return {
                'category': pattern['category'],
                'severity': pattern['severity'],
                'user_message': pattern['user_message'],
                'recovery': pattern['recovery'],
                'technical_details': str(error)
            }
        
        # Default handling for unknown errors
        return {
            'category': ErrorCategory.UNKNOWN,
            'severity': ErrorSeverity.MEDIUM,
            'user_message': "Ocorreu um erro inesperado",
            'recovery': "Tente novamente ou contate o suporte se o problema persistir.",
            'technical_details': str(error)
        }
    
    def _create_user_message(self, error: Exception, error_info: Dict[str, Any], 
                           context: ErrorContext) -> Dict[str, str]:
        """Create user-friendly error message."""
        
        # Base message
        message = error_info['user_message']
        
        # Add context-specific information
        if context.page == 'upload':
            if 'arquivo' in str(error).lower():
                message += " durante o upload"
            elif 'dados' in str(error).lower():
                message += " ao processar os dados"
        
        # Add recovery suggestions
        recovery = error_info['recovery']
        if error_info['category'] in self.recovery_strategies:
            additional_strategies = self.recovery_strategies[error_info['category']]
            recovery += f"\n\nOutras opções:\n" + "\n".join(f"• {strategy}" for strategy in additional_strategies[:3])
        
        return {
            'message': message,
            'recovery': recovery
        }
    
    def _show_error_toast(self, user_message: Dict[str, str], severity: ErrorSeverity):
        """Show error toast notification."""
        try:
            if severity == ErrorSeverity.CRITICAL:
                st.error(f"🚨 {user_message['message']}")
            elif severity == ErrorSeverity.HIGH:
                st.error(f"❌ {user_message['message']}")
            elif severity == ErrorSeverity.MEDIUM:
                st.warning(f"⚠️ {user_message['message']}")
            else:
                st.info(f"ℹ️ {user_message['message']}")
            
            # Show recovery suggestion in expander
            if user_message['recovery']:
                with st.expander("💡 Como resolver?", expanded=False):
                    st.markdown(user_message['recovery'])
        except Exception:
            # Fallback to simple error display
            st.error("Ocorreu um erro")
    
    def _log_error(self, error: Exception, context: ErrorContext):
        """Log error to file and console."""
        error_record = {
            "timestamp": context.timestamp.isoformat(),
            "session_id": context.session_id,
            "user_id": context.user_id,
            "page": context.page,
            "action": context.action,
            "error_type": error.__class__.__name__,
            "error_message": str(error),
            "traceback": traceback.format_exc(),
            "severity": self._analyze_error(error)['severity'].value
        }
        
        # Log to file
        try:
            import os
            os.makedirs('output', exist_ok=True)
            with open('output/error_log.jsonl', 'a', encoding='utf-8') as f:
                f.write(json.dumps(error_record, ensure_ascii=False) + "\n")
        except Exception:
            pass
        
        # Log to console
        self.logger.error(f"Error in {context.page}.{context.action}: {error}")

# Global error handler instance
error_handler = ErrorHandler()

def handle_error_decorator(page: str, action: str, show_toast: bool = True):
    """Decorator for automatic error handling."""
    def decorator(func: Callable) -> Callable:
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            try:
                return func(*args, **kwargs)
            except Exception as e:
                context = ErrorContext(page, action)
                return error_handler.handle_error(e, context, show_toast)
        return wrapper
    return decorator

def safe_execute(func: Callable, *args, page: str = "unknown", 
                action: str = "unknown", default_return: Any = None,
                show_toast: bool = True, **kwargs) -> Any:
    """Safely execute a function with error handling."""
    try:
        return func(*args, **kwargs)
    except Exception as e:
        context = ErrorContext(page, action)
        error_handler.handle_error(e, context, show_toast)
        return default_return

def create_user_friendly_error(message: str, category: ErrorCategory = ErrorCategory.UNKNOWN,
                             severity: ErrorSeverity = ErrorSeverity.MEDIUM,
                             recovery: Optional[str] = None) -> UserFriendlyError:
    """Create a user-friendly error."""
    return UserFriendlyError(message, category, severity, recovery)

# Convenience functions for common error types
def file_not_found_error(file_path: str) -> UserFriendlyError:
    """Create file not found error."""
    return create_user_friendly_error(
        f"Arquivo não encontrado: {file_path}",
        ErrorCategory.FILE_IO,
        ErrorSeverity.MEDIUM,
        "Verifique se o caminho do arquivo está correto e se o arquivo existe."
    )

def validation_error(message: str, details: Optional[str] = None) -> UserFriendlyError:
    """Create validation error."""
    return create_user_friendly_error(
        message,
        ErrorCategory.VALIDATION,
        ErrorSeverity.MEDIUM,
        "Verifique os dados inseridos e tente novamente.",
        details
    )

def memory_error(operation: str) -> UserFriendlyError:
    """Create memory error."""
    return create_user_friendly_error(
        f"Memória insuficiente para {operation}",
        ErrorCategory.MEMORY,
        ErrorSeverity.HIGH,
        "Tente processar arquivos menores ou feche outros aplicativos."
    )

def network_error(service: str) -> UserFriendlyError:
    """Create network error."""
    return create_user_friendly_error(
        f"Erro de conexão com {service}",
        ErrorCategory.NETWORK,
        ErrorSeverity.MEDIUM,
        "Verifique sua conexão com a internet e tente novamente."
    )
