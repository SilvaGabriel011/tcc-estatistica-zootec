"""
Streamlit wrapper for React chat component with WebSocket streaming
"""

import streamlit.components.v1 as components
import os
import uuid
from typing import Dict, Any, Optional, List

# Build path for the chat component
_BUILD_PATH = os.path.join(os.path.dirname(__file__), "..", "..", "frontend", "chat_component", "build")

def chat_component(
    websocket_url: str = "ws://localhost:8000/ws/chat",
    session_id: Optional[str] = None,
    initial_messages: Optional[List[Dict[str, Any]]] = None,
    key: Optional[str] = None
) -> Dict[str, Any]:
    """
    Enhanced chat component with WebSocket streaming support.
    
    Args:
        websocket_url: WebSocket URL for chat streaming
        session_id: Session ID for chat persistence
        initial_messages: Initial messages to display
        key: Optional key for component state
    
    Returns:
        Dict containing chat events and messages
    """
    
    # Generate session ID if not provided
    if session_id is None:
        session_id = str(uuid.uuid4())
    
    # Check if build directory exists
    if not os.path.exists(_BUILD_PATH):
        # Fallback to regular Streamlit chat interface
        import streamlit as st
        st.warning("⚠️ React chat component not built. Using fallback chat interface.")
        return _fallback_chat_interface(key)
    
    # Component props
    props = {
        "websocketUrl": websocket_url,
        "sessionId": session_id,
        "initialMessages": initial_messages or []
    }
    
    # Render the React component
    result = components.declare_component(
        "chat_component",
        path=_BUILD_PATH,
        key=key
    )(**props)
    
    return result if result is not None else {"status": "no_action"}

def _fallback_chat_interface(key: Optional[str] = None) -> Dict[str, Any]:
    """Fallback to regular Streamlit chat interface when React component is not available."""
    import streamlit as st
    from core.ai_assistant import get_assistant
    
    # Initialize chat history in session state
    if 'chat_history' not in st.session_state:
        st.session_state.chat_history = []
    
    # Chat interface
    st.markdown("### 🤖 Assistente IA")
    
    # Display chat history
    for message in st.session_state.chat_history:
        with st.chat_message(message["role"]):
            st.write(message["content"])
    
    # Chat input
    if prompt := st.chat_input("Digite sua pergunta...", key=f"{key}_input" if key else "chat_input"):
        # Add user message to history
        st.session_state.chat_history.append({"role": "user", "content": prompt})
        
        # Display user message
        with st.chat_message("user"):
            st.write(prompt)
        
        # Get AI response
        assistant = get_assistant()
        if assistant.is_available():
            with st.chat_message("assistant"):
                with st.spinner("Pensando..."):
                    response = assistant.chat(prompt)
                    st.write(response)
                    
                    # Add AI response to history
                    st.session_state.chat_history.append({"role": "assistant", "content": response})
        else:
            with st.chat_message("assistant"):
                st.error("IA não disponível. Configure Ollama, Gemini ou OpenAI.")
    
    # Clear chat button
    if st.button("🗑️ Limpar Chat", key=f"{key}_clear" if key else "clear_chat"):
        st.session_state.chat_history = []
        st.rerun()
    
    return {"status": "fallback", "message_count": len(st.session_state.chat_history)}

def get_chat_history(session_id: str) -> List[Dict[str, Any]]:
    """Get chat history for a specific session."""
    # This would integrate with a proper session store in production
    # For now, return empty list
    return []

def save_chat_message(session_id: str, role: str, content: str) -> None:
    """Save a chat message to session history."""
    # This would integrate with a proper session store in production
    # For now, just log the message
    print(f"Chat message saved: {session_id} - {role}: {content[:50]}...")

def export_chat_history(session_id: str, format: str = "txt") -> str:
    """Export chat history for a session."""
    history = get_chat_history(session_id)
    
    if format == "txt":
        content = []
        for msg in history:
            timestamp = msg.get("timestamp", "")
            role = msg.get("role", "")
            content_text = msg.get("content", "")
            content.append(f"[{timestamp}] {role.upper()}: {content_text}\n")
        return "\n".join(content)
    
    elif format == "json":
        import json
        return json.dumps(history, ensure_ascii=False, indent=2)
    
    else:
        raise ValueError(f"Unsupported format: {format}")

def get_chat_statistics(session_id: str) -> Dict[str, Any]:
    """Get chat statistics for a session."""
    history = get_chat_history(session_id)
    
    if not history:
        return {
            "total_messages": 0,
            "user_messages": 0,
            "assistant_messages": 0,
            "average_response_length": 0,
            "session_duration": 0
        }
    
    user_messages = [msg for msg in history if msg.get("role") == "user"]
    assistant_messages = [msg for msg in history if msg.get("role") == "assistant"]
    
    total_length = sum(len(msg.get("content", "")) for msg in assistant_messages)
    avg_length = total_length / len(assistant_messages) if assistant_messages else 0
    
    # Calculate session duration
    if len(history) >= 2:
        first_msg = history[0].get("timestamp", "")
        last_msg = history[-1].get("timestamp", "")
        # This would need proper datetime parsing in a real implementation
        session_duration = 0  # Placeholder
    else:
        session_duration = 0
    
    return {
        "total_messages": len(history),
        "user_messages": len(user_messages),
        "assistant_messages": len(assistant_messages),
        "average_response_length": round(avg_length, 2),
        "session_duration": session_duration
    }
