"""
Enhanced AI Context Manager for TCC Gado Gordo Application
Provides intelligent context management, conversation history, and error recovery for AI interactions.
"""

import streamlit as st
import json
import hashlib
from typing import Dict, List, Optional, Any, Tuple
from dataclasses import dataclass, asdict
from datetime import datetime, timedelta
from enum import Enum
import os

class ConversationState(Enum):
    """Conversation states."""
    ACTIVE = "active"
    PAUSED = "paused"
    COMPLETED = "completed"
    ERROR = "error"

class MessageRole(Enum):
    """Message roles in conversation."""
    USER = "user"
    ASSISTANT = "assistant"
    SYSTEM = "system"

@dataclass
class Message:
    """Represents a message in the conversation."""
    role: MessageRole
    content: str
    timestamp: datetime
    metadata: Optional[Dict[str, Any]] = None
    
    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary for serialization."""
        return {
            'role': self.role.value,
            'content': self.content,
            'timestamp': self.timestamp.isoformat(),
            'metadata': self.metadata or {}
        }
    
    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> 'Message':
        """Create from dictionary."""
        return cls(
            role=MessageRole(data['role']),
            content=data['content'],
            timestamp=datetime.fromisoformat(data['timestamp']),
            metadata=data.get('metadata')
        )

@dataclass
class ConversationContext:
    """Context for AI conversations."""
    conversation_id: str
    user_id: str
    page: str
    action: str
    data_context: Optional[str] = None
    statistical_context: Optional[str] = None
    zootecnia_context: Optional[str] = None
    references_context: Optional[str] = None
    created_at: datetime = None
    last_updated: datetime = None
    state: ConversationState = ConversationState.ACTIVE
    message_count: int = 0
    
    def __post_init__(self):
        if self.created_at is None:
            self.created_at = datetime.now()
        if self.last_updated is None:
            self.last_updated = datetime.now()

class AIContextManager:
    """Manages AI conversation context and history."""
    
    def __init__(self, max_conversations: int = 10, max_messages_per_conversation: int = 50):
        self.max_conversations = max_conversations
        self.max_messages_per_conversation = max_messages_per_conversation
        self.conversations: Dict[str, List[Message]] = {}
        self.contexts: Dict[str, ConversationContext] = {}
        self._ensure_storage_dir()
    
    def _ensure_storage_dir(self):
        """Ensure storage directory exists."""
        os.makedirs('output/ai_context', exist_ok=True)
    
    def _generate_conversation_id(self, user_id: str, page: str, action: str) -> str:
        """Generate unique conversation ID."""
        content = f"{user_id}_{page}_{action}_{datetime.now().strftime('%Y%m%d_%H%M')}"
        return hashlib.md5(content.encode()).hexdigest()[:12]
    
    def start_conversation(self, user_id: str, page: str, action: str, 
                          data_context: Optional[str] = None,
                          statistical_context: Optional[str] = None) -> str:
        """Start a new conversation and return conversation ID."""
        conversation_id = self._generate_conversation_id(user_id, page, action)
        
        context = ConversationContext(
            conversation_id=conversation_id,
            user_id=user_id,
            page=page,
            action=action,
            data_context=data_context,
            statistical_context=statistical_context
        )
        
        self.contexts[conversation_id] = context
        self.conversations[conversation_id] = []
        
        # Add system message
        system_message = Message(
            role=MessageRole.SYSTEM,
            content=f"Conversa iniciada em {page} - {action}",
            timestamp=datetime.now()
        )
        self.add_message(conversation_id, system_message)
        
        # Save to file
        self._save_conversation(conversation_id)
        
        return conversation_id
    
    def add_message(self, conversation_id: str, message: Message):
        """Add a message to the conversation."""
        if conversation_id not in self.conversations:
            self.conversations[conversation_id] = []
        
        self.conversations[conversation_id].append(message)
        
        # Update context
        if conversation_id in self.contexts:
            self.contexts[conversation_id].last_updated = datetime.now()
            self.contexts[conversation_id].message_count = len(self.conversations[conversation_id])
        
        # Trim conversation if too long
        if len(self.conversations[conversation_id]) > self.max_messages_per_conversation:
            # Keep system message and recent messages
            system_messages = [msg for msg in self.conversations[conversation_id] 
                             if msg.role == MessageRole.SYSTEM]
            recent_messages = self.conversations[conversation_id][-self.max_messages_per_conversation+len(system_messages):]
            self.conversations[conversation_id] = system_messages + recent_messages
        
        # Save to file
        self._save_conversation(conversation_id)
    
    def get_conversation_history(self, conversation_id: str, 
                                include_system: bool = False) -> List[Message]:
        """Get conversation history."""
        if conversation_id not in self.conversations:
            return []
        
        messages = self.conversations[conversation_id]
        if not include_system:
            messages = [msg for msg in messages if msg.role != MessageRole.SYSTEM]
        
        return messages
    
    def get_context_summary(self, conversation_id: str) -> str:
        """Get a summary of the conversation context."""
        if conversation_id not in self.contexts:
            return ""
        
        context = self.contexts[conversation_id]
        summary_parts = []
        
        if context.data_context:
            summary_parts.append(f"Dados: {context.data_context[:200]}...")
        
        if context.statistical_context:
            summary_parts.append(f"Estatísticas: {context.statistical_context[:200]}...")
        
        if context.zootecnia_context:
            summary_parts.append(f"Zootecnia: {context.zootecnia_context[:200]}...")
        
        if context.references_context:
            summary_parts.append(f"Referências: {context.references_context[:200]}...")
        
        return "\n".join(summary_parts)
    
    def update_context(self, conversation_id: str, **kwargs):
        """Update conversation context."""
        if conversation_id in self.contexts:
            context = self.contexts[conversation_id]
            for key, value in kwargs.items():
                if hasattr(context, key):
                    setattr(context, key, value)
            context.last_updated = datetime.now()
            self._save_conversation(conversation_id)
    
    def end_conversation(self, conversation_id: str, state: ConversationState = ConversationState.COMPLETED):
        """End a conversation."""
        if conversation_id in self.contexts:
            self.contexts[conversation_id].state = state
            self._save_conversation(conversation_id)
    
    def get_active_conversations(self, user_id: str) -> List[str]:
        """Get active conversations for a user."""
        active = []
        for conv_id, context in self.contexts.items():
            if (context.user_id == user_id and 
                context.state == ConversationState.ACTIVE and
                context.last_updated > datetime.now() - timedelta(hours=24)):
                active.append(conv_id)
        return active
    
    def cleanup_old_conversations(self, days: int = 7):
        """Clean up old conversations."""
        cutoff_date = datetime.now() - timedelta(days=days)
        
        to_remove = []
        for conv_id, context in self.contexts.items():
            if context.last_updated < cutoff_date:
                to_remove.append(conv_id)
        
        for conv_id in to_remove:
            del self.contexts[conv_id]
            if conv_id in self.conversations:
                del self.conversations[conv_id]
            self._delete_conversation_file(conv_id)
    
    def _save_conversation(self, conversation_id: str):
        """Save conversation to file."""
        try:
            file_path = f'output/ai_context/{conversation_id}.json'
            
            data = {
                'context': asdict(self.contexts[conversation_id]) if conversation_id in self.contexts else {},
                'messages': [msg.to_dict() for msg in self.conversations.get(conversation_id, [])]
            }
            
            # Convert datetime objects to strings
            if 'context' in data and data['context']:
                for key, value in data['context'].items():
                    if isinstance(value, datetime):
                        data['context'][key] = value.isoformat()
                    elif isinstance(value, ConversationState):
                        data['context'][key] = value.value
            
            with open(file_path, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
                
        except Exception as e:
            # Log error but don't fail
            print(f"Error saving conversation {conversation_id}: {e}")
    
    def _delete_conversation_file(self, conversation_id: str):
        """Delete conversation file."""
        try:
            file_path = f'output/ai_context/{conversation_id}.json'
            if os.path.exists(file_path):
                os.remove(file_path)
        except Exception:
            pass
    
    def load_conversation(self, conversation_id: str) -> bool:
        """Load conversation from file."""
        try:
            file_path = f'output/ai_context/{conversation_id}.json'
            if not os.path.exists(file_path):
                return False
            
            with open(file_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            # Load context
            if 'context' in data and data['context']:
                context_data = data['context']
                # Convert string dates back to datetime
                for key, value in context_data.items():
                    if key in ['created_at', 'last_updated'] and isinstance(value, str):
                        context_data[key] = datetime.fromisoformat(value)
                    elif key == 'state' and isinstance(value, str):
                        context_data[key] = ConversationState(value)
                
                self.contexts[conversation_id] = ConversationContext(**context_data)
            
            # Load messages
            if 'messages' in data:
                messages = []
                for msg_data in data['messages']:
                    messages.append(Message.from_dict(msg_data))
                self.conversations[conversation_id] = messages
            
            return True
            
        except Exception as e:
            print(f"Error loading conversation {conversation_id}: {e}")
            return False
    
    def get_conversation_stats(self, user_id: str) -> Dict[str, Any]:
        """Get conversation statistics for a user."""
        user_conversations = [ctx for ctx in self.contexts.values() if ctx.user_id == user_id]
        
        if not user_conversations:
            return {}
        
        total_conversations = len(user_conversations)
        active_conversations = len([ctx for ctx in user_conversations 
                                  if ctx.state == ConversationState.ACTIVE])
        total_messages = sum(ctx.message_count for ctx in user_conversations)
        
        # Average conversation length
        avg_length = total_messages / total_conversations if total_conversations > 0 else 0
        
        # Most active pages
        page_counts = {}
        for ctx in user_conversations:
            page_counts[ctx.page] = page_counts.get(ctx.page, 0) + 1
        
        most_active_page = max(page_counts.items(), key=lambda x: x[1]) if page_counts else ("", 0)
        
        return {
            'total_conversations': total_conversations,
            'active_conversations': active_conversations,
            'total_messages': total_messages,
            'average_length': avg_length,
            'most_active_page': most_active_page[0],
            'page_activity': page_counts
        }

class AIErrorRecovery:
    """AI-specific error recovery strategies."""
    
    @staticmethod
    def get_recovery_suggestions(error_type: str, error_message: str) -> List[str]:
        """Get recovery suggestions based on error type."""
        suggestions = []
        
        if "timeout" in error_message.lower():
            suggestions.extend([
                "⏱️ **Timeout:** A resposta demorou muito. Tente uma pergunta mais simples.",
                "🔄 **Retry:** Clique em 'Tentar Novamente' para refazer a pergunta.",
                "📝 **Reformular:** Reformule sua pergunta de forma mais concisa."
            ])
        
        elif "connection" in error_message.lower() or "network" in error_message.lower():
            suggestions.extend([
                "🌐 **Conexão:** Verifique sua conexão com a internet.",
                "🔄 **Retry:** Tente novamente em alguns segundos.",
                "🏠 **Local:** Use Ollama local se disponível."
            ])
        
        elif "quota" in error_message.lower() or "limit" in error_message.lower():
            suggestions.extend([
                "📊 **Limite:** Você atingiu o limite de uso. Tente novamente mais tarde.",
                "🏠 **Local:** Use Ollama local para uso ilimitado.",
                "⏰ **Esperar:** Aguarde alguns minutos antes de tentar novamente."
            ])
        
        elif "model" in error_message.lower() or "not found" in error_message.lower():
            suggestions.extend([
                "🤖 **Modelo:** O modelo de IA não está disponível. Tente outro modelo.",
                "🔄 **Reiniciar:** Reinicie o aplicativo para recarregar os modelos.",
                "⚙️ **Configurar:** Verifique as configurações de IA."
            ])
        
        else:
            suggestions.extend([
                "🔄 **Retry:** Tente novamente com a mesma pergunta.",
                "📝 **Reformular:** Reformule sua pergunta de forma diferente.",
                "🏠 **Local:** Use Ollama local se disponível.",
                "📊 **Dados:** Continue analisando seus dados sem IA."
            ])
        
        return suggestions
    
    @staticmethod
    def should_auto_retry(error_type: str, error_message: str, retry_count: int) -> bool:
        """Determine if we should auto-retry based on error and retry count."""
        if retry_count >= 3:  # Max 3 retries
            return False
        
        # Auto-retry for these error types
        auto_retry_errors = ["timeout", "connection", "network", "temporary"]
        
        for error_keyword in auto_retry_errors:
            if error_keyword in error_message.lower():
                return True
        
        return False
    
    @staticmethod
    def get_fallback_response(user_message: str, data_context: Optional[str] = None) -> str:
        """Get a fallback response when AI is unavailable."""
        fallback_responses = [
            "🤖 **IA Temporariamente Indisponível**\n\n",
            "Embora a IA não esteja funcionando no momento, você pode continuar analisando seus dados:\n\n",
            "📊 **Análise de Dados:** Use os gráficos e estatísticas disponíveis\n",
            "📈 **Visualizações:** Explore os gráficos interativos\n",
            "📋 **Exportação:** Gere relatórios em Excel ou PDF\n",
            "🔍 **Filtros:** Use os filtros avançados para explorar os dados\n\n",
            "💡 **Dica:** A análise de dados funciona independentemente da IA!"
        ]
        
        if data_context:
            fallback_responses.append(f"\n📋 **Contexto dos Dados:** {data_context[:200]}...")
        
        return "".join(fallback_responses)

# Global instances
ai_context_manager = AIContextManager()
ai_error_recovery = AIErrorRecovery()

# Convenience functions
def start_ai_conversation(user_id: str, page: str, action: str, 
                         data_context: Optional[str] = None,
                         statistical_context: Optional[str] = None) -> str:
    """Start a new AI conversation."""
    return ai_context_manager.start_conversation(user_id, page, action, data_context, statistical_context)

def add_ai_message(conversation_id: str, role: MessageRole, content: str, 
                  metadata: Optional[Dict[str, Any]] = None):
    """Add a message to AI conversation."""
    message = Message(role=role, content=content, timestamp=datetime.now(), metadata=metadata)
    ai_context_manager.add_message(conversation_id, message)

def get_ai_conversation_history(conversation_id: str, include_system: bool = False) -> List[Message]:
    """Get AI conversation history."""
    return ai_context_manager.get_conversation_history(conversation_id, include_system)

def end_ai_conversation(conversation_id: str, state: ConversationState = ConversationState.COMPLETED):
    """End an AI conversation."""
    ai_context_manager.end_conversation(conversation_id, state)

def get_ai_recovery_suggestions(error_type: str, error_message: str) -> List[str]:
    """Get AI error recovery suggestions."""
    return ai_error_recovery.get_recovery_suggestions(error_type, error_message)
