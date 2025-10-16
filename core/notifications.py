"""Utility functions for progress bars, toast notifications, and error handling/logging."""
import streamlit as st
import time
import json
import traceback
from datetime import datetime
from typing import Optional, Callable, Any

# ---------- Error logging helpers ----------
def _ensure_output_dir():
    import os
    os.makedirs('output', exist_ok=True)

def log_error(page: str, action: str, err: Exception, extra: Optional[dict] = None) -> None:
    """Append a structured error record to output/error_log.jsonl."""
    _ensure_output_dir()
    record = {
        "timestamp": datetime.utcnow().isoformat() + "Z",
        "page": page,
        "action": action,
        "error": str(err),
        "type": err.__class__.__name__,
        "traceback": traceback.format_exc(limit=3),
        "extra": extra or {},
    }
    try:
        with open('output/error_log.jsonl', 'a', encoding='utf-8') as f:
            f.write(json.dumps(record, ensure_ascii=False) + "\n")
    except Exception:
        # Avoid raising during logging
        pass

def show_progress(message: str, current: int, total: int, 
                  progress_bar: Optional[Any] = None) -> Any:
    """Display progress bar with message."""
    if progress_bar is None:
        progress_bar = st.progress(0)
    
    progress = current / total if total > 0 else 0
    progress_bar.progress(progress)
    
    # Update message
    if 'progress_message' in st.session_state:
        st.session_state['progress_message'].markdown(
            f"**{message}** - {current}/{total} ({progress:.1%})"
        )
    else:
        st.session_state['progress_message'] = st.empty()
        st.session_state['progress_message'].markdown(
            f"**{message}** - {current}/{total} ({progress:.1%})"
        )
    
    return progress_bar

def show_toast_success(message: str, duration: int = 3):
    """Show success toast notification."""
    st.success(f"✅ {message}")
    
    # Auto-dismiss after duration
    if duration > 0:
        time.sleep(duration)
        st.empty()

def show_toast_error(message: str, duration: int = 5):
    """Show error toast notification."""
    st.error(f"❌ {message}")
    
    # Auto-dismiss after duration (longer for errors)
    if duration > 0:
        time.sleep(duration)
        st.empty()

def show_toast_info(message: str, duration: int = 3):
    """Show info toast notification."""
    st.info(f"ℹ️ {message}")
    
    # Auto-dismiss after duration
    if duration > 0:
        time.sleep(duration)
        st.empty()

def show_toast_warning(message: str, duration: int = 4):
    """Show warning toast notification."""
    st.warning(f"⚠️ {message}")
    
    # Auto-dismiss after duration
    if duration > 0:
        time.sleep(duration)
        st.empty()

def with_progress(message: str, operation: Callable, *args, **kwargs):
    """Execute operation with progress indication."""
    progress_bar = st.progress(0)
    message_container = st.empty()
    
    def update_progress(current: int, total: int):
        progress = current / total if total > 0 else 0
        progress_bar.progress(progress)
        message_container.markdown(f"**{message}** - {current}/{total} ({progress:.1%})")
    
    try:
        # Pass progress callback to operation
        if 'progress_callback' in kwargs:
            kwargs['progress_callback'] = update_progress
        
        result = operation(*args, **kwargs)
        
        # Complete progress
        progress_bar.progress(1.0)
        message_container.markdown(f"**{message}** - ✅ Concluído!")
        
        # Clear after delay
        time.sleep(1)
        progress_bar.empty()
        message_container.empty()
        
        return result
        
    except Exception as e:
        progress_bar.empty()
        message_container.empty()
        show_toast_error(f"Erro em {message}: {str(e)}")
        raise

def show_loading_spinner(message: str, operation: Callable, *args, **kwargs):
    """Execute operation with loading spinner."""
    with st.spinner(message):
        try:
            result = operation(*args, **kwargs)
            show_toast_success(f"{message} - Concluído!")
            return result
        except Exception as e:
            show_toast_error(f"Erro em {message}: {str(e)}")
            raise

# ---------- Toastified execution helpers ----------
def toast_try(label: str, func: Callable[..., Any], *args, page: str = "", action: str = "", 
              enable_recovery: bool = True, **kwargs) -> Any:
    """Run a function with enhanced error handling and recovery options."""
    try:
        with st.spinner(f"{label}..."):
            result = func(*args, **kwargs)
        show_toast_success(f"{label} concluído!")
        return result
    except Exception as err:
        # Log the error
        log_error(page or "app", action or label, err, {"args": str(args), "kwargs": list(kwargs.keys())})
        
        # Try recovery if enabled
        if enable_recovery:
            try:
                from core.error_handler import ErrorContext, error_handler
                from core.error_recovery import auto_recover
                
                context = ErrorContext(page or "app", action or label)
                error_info = error_handler.handle_error(err, context, show_toast=False)
                
                # Attempt automatic recovery
                recovery_result = auto_recover(err, {
                    'page': page or "app",
                    'action': action or label,
                    'error_info': error_info,
                    'label': label,
                    **kwargs
                })
                
                if recovery_result is not None:
                    show_toast_success(f"{label} - Recuperação automática bem-sucedida!")
                    return recovery_result
                
            except Exception as recovery_error:
                log_error(page or "app", f"{action or label}_recovery", recovery_error)
        
        # Show error toast
        show_toast_error(f"Falha em {label}: {err}")
        raise

def toastify(label: str, page: str = "", action: str = ""):
    """Decorator to wrap a function with toast_try behavior."""
    def _decorator(fn: Callable[..., Any]):
        def _wrapped(*args, **kwargs):
            return toast_try(label, fn, *args, page=page, action=action or fn.__name__, **kwargs)
        return _wrapped
    return _decorator

def show_progress_steps(steps: list, operations: list):
    """Execute multiple operations with step-by-step progress."""
    if len(steps) != len(operations):
        raise ValueError("Steps and operations must have the same length")
    
    progress_bar = st.progress(0)
    message_container = st.empty()
    results = []
    
    try:
        for i, (step, operation) in enumerate(zip(steps, operations)):
            # Update progress
            progress = (i + 1) / len(steps)
            progress_bar.progress(progress)
            message_container.markdown(f"**{step}** - {i+1}/{len(steps)} ({progress:.1%})")
            
            # Execute operation
            result = operation()
            results.append(result)
            
            # Small delay for visual feedback
            time.sleep(0.5)
        
        # Complete
        progress_bar.progress(1.0)
        message_container.markdown("✅ **Todos os passos concluídos!**")
        
        # Clear after delay
        time.sleep(2)
        progress_bar.empty()
        message_container.empty()
        
        return results
        
    except Exception as e:
        progress_bar.empty()
        message_container.empty()
        show_toast_error(f"Erro no passo {step}: {str(e)}")
        raise

def create_progress_container():
    """Create a container for progress indicators."""
    return st.container()

def clear_progress():
    """Clear all progress indicators."""
    if 'progress_message' in st.session_state:
        st.session_state['progress_message'].empty()
        del st.session_state['progress_message']

# Toast notification with custom styling
def show_custom_toast(message: str, toast_type: str = "success", duration: int = 3):
    """Show custom styled toast notification."""
    
    # Define colors and icons
    styles = {
        "success": {"color": "#4CAF50", "icon": "✅", "bg": "#E8F5E8"},
        "error": {"color": "#F44336", "icon": "❌", "bg": "#FFEBEE"},
        "warning": {"color": "#FF9800", "icon": "⚠️", "bg": "#FFF3E0"},
        "info": {"color": "#2196F3", "icon": "ℹ️", "bg": "#E3F2FD"}
    }
    
    style = styles.get(toast_type, styles["info"])
    
    # Create custom toast with HTML
    toast_html = f"""
    <div style="
        background-color: {style['bg']};
        border-left: 4px solid {style['color']};
        padding: 12px 16px;
        margin: 8px 0;
        border-radius: 4px;
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 14px;
        color: {style['color']};
        display: flex;
        align-items: center;
    ">
        <span style="margin-right: 8px; font-size: 16px;">{style['icon']}</span>
        <span>{message}</span>
    </div>
    """
    
    st.markdown(toast_html, unsafe_allow_html=True)
    
    # Auto-dismiss
    if duration > 0:
        time.sleep(duration)
        st.empty()

# Batch operation progress
def show_batch_progress(total_items: int, operation_name: str = "Processando"):
    """Show progress for batch operations."""
    progress_bar = st.progress(0)
    status_text = st.empty()
    stats_container = st.empty()
    
    processed = 0
    errors = 0
    start_time = time.time()
    
    def update_progress():
        nonlocal processed, errors
        
        progress = processed / total_items if total_items > 0 else 0
        progress_bar.progress(progress)
        
        elapsed = time.time() - start_time
        rate = processed / elapsed if elapsed > 0 else 0
        
        status_text.markdown(
            f"**{operation_name}** - {processed}/{total_items} "
            f"({progress:.1%}) - {rate:.1f} itens/seg"
        )
        
        if processed > 0:
            stats_container.markdown(
                f"📊 **Estatísticas:** {processed} processados, "
                f"{errors} erros, {elapsed:.1f}s decorridos"
            )
    
    def increment(success: bool = True):
        nonlocal processed, errors
        processed += 1
        if not success:
            errors += 1
        update_progress()
    
    def finish():
        elapsed = time.time() - start_time
        progress_bar.progress(1.0)
        status_text.markdown(
            f"✅ **{operation_name} concluído!** "
            f"{processed} itens em {elapsed:.1f}s"
        )
        
        if errors > 0:
            stats_container.warning(f"⚠️ {errors} itens com erro")
        else:
            stats_container.success("✅ Todos os itens processados com sucesso!")
        
        # Clear after delay
        time.sleep(3)
        progress_bar.empty()
        status_text.empty()
        stats_container.empty()
    
    return increment, finish
