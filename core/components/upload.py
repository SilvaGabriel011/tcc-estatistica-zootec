"""
Streamlit wrapper for React upload component
"""

import streamlit.components.v1 as components
import os
from typing import Dict, Any, Optional

# Build path for the upload component
_BUILD_PATH = os.path.join(os.path.dirname(__file__), "..", "..", "frontend", "upload_component", "build")

def upload_component(
    max_file_size: int = 100 * 1024 * 1024,  # 100MB default
    allowed_types: list = ['.xlsx', '.csv'],
    chunk_size: int = 1024 * 1024,  # 1MB chunks
    key: Optional[str] = None
) -> Dict[str, Any]:
    """
    Enhanced file upload component with progress bar and drag-drop support.
    
    Args:
        max_file_size: Maximum file size in bytes (default: 100MB)
        allowed_types: List of allowed file extensions (default: ['.xlsx', '.csv'])
        chunk_size: Chunk size for upload progress (default: 1MB)
        key: Optional key for component state
    
    Returns:
        Dict containing file information and upload status
    """
    
    # Check if build directory exists
    if not os.path.exists(_BUILD_PATH):
        # Fallback to regular Streamlit file uploader
        import streamlit as st
        st.warning("⚠️ React upload component not built. Using fallback uploader.")
        return {
            "file": st.file_uploader(
                "Selecione um arquivo (.xlsx ou .csv)",
                type=['xlsx', 'csv'],
                key=key
            ),
            "status": "fallback"
        }
    
    # Component props
    props = {
        "maxFileSize": max_file_size,
        "allowedTypes": allowed_types,
        "chunkSize": chunk_size
    }
    
    # Render the React component
    result = components.declare_component(
        "upload_component",
        path=_BUILD_PATH,
        key=key
    )(**props)
    
    return result if result is not None else {"status": "no_file"}

def parse_upload_result(result: Dict[str, Any]) -> tuple:
    """
    Parse upload result to extract file data and metadata.
    
    Args:
        result: Result from upload_component
    
    Returns:
        Tuple of (file_data, file_info, status)
    """
    if not result or result.get("status") == "no_file":
        return None, None, "no_file"
    
    if result.get("status") == "fallback":
        return result.get("file"), None, "fallback"
    
    file_info = result.get("file", {})
    if not file_info:
        return None, None, "error"
    
    # Extract file data from base64
    file_data = file_info.get("data")
    if not file_data:
        return None, None, "error"
    
    # Convert base64 to bytes if needed
    if isinstance(file_data, str) and file_data.startswith('data:'):
        import base64
        header, data = file_data.split(',', 1)
        file_data = base64.b64decode(data)
    
    file_metadata = {
        "name": file_info.get("name"),
        "size": file_info.get("size"),
        "type": file_info.get("type")
    }
    
    return file_data, file_metadata, result.get("status", "completed")
