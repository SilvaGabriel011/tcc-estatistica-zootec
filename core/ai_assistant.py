"""Modulo de Assistente IA - Versao Robusta"""
import os
import asyncio
import time
import json
from typing import Optional, Dict, List, AsyncGenerator
import pandas as pd
import streamlit as st
from dotenv import load_dotenv
# Performance monitor removido

load_dotenv()

# Imports condicionais
try:
    import google.generativeai as genai
    GEMINI_AVAILABLE = True
except ImportError:
    GEMINI_AVAILABLE = False

try:
    from openai import OpenAI
    OPENAI_AVAILABLE = True
except ImportError:
    OPENAI_AVAILABLE = False

try:
    import requests
    OLLAMA_AVAILABLE = True
except ImportError:
    OLLAMA_AVAILABLE = False

try:
    import aiohttp
    AIOSESSION_AVAILABLE = True
except ImportError:
    AIOSESSION_AVAILABLE = False

from .zootecnia_kb import contexto_kb
from .referencias import contexto_referencias, INSTRUCAO_CITACAO, obter_referencias_cientificas

# Cache configuration for AI context
@st.cache_data(ttl=1800)
def _hash_dataframe_for_ai(df):
    """Create hash for dataframe caching in AI context."""
    if df is None or df.empty:
        return "empty"
    try:
        return hash(tuple(df.values.tobytes()))
    except Exception:
        # Fallback for non-numeric data
        return hash(str(df.values.tobytes()))

@st.cache_data(ttl=1800)
def _build_context_cached(df_hash, stats_str, user_message):
    """Cache AI context building based on data hash."""
    context_parts = [
        "Voce e um assistente especializado em analise de dados do mercado de gado gordo brasileiro.",
        "Responda em PORTUGUES BRASILEIRO de forma clara, didatica e SEMPRE com referencias bibliograficas.",
        "",
        INSTRUCAO_CITACAO
    ]
    
    if df_hash != "empty":
        context_parts.append("\nTotal de registros: dados carregados")
    
    if stats_str and stats_str != "None":
        context_parts.append(f"\nEstatisticas: {stats_str}")
    
    return "\n".join(context_parts)

def _ollama_is_up(base_url: str) -> bool:
    """Verifica se o servidor Ollama esta rodando."""
    if not OLLAMA_AVAILABLE:
        return False
    try:
        resp = requests.get(f"{base_url}/api/tags", timeout=2)
        return resp.ok
    except Exception:
        return False

class AIAssistant:
    def __init__(self):
        self.gemini_api_key = os.getenv('GEMINI_API_KEY')
        self.openai_api_key = os.getenv('OPENAI_API_KEY')
        self.preferred_model = os.getenv('PREFERRED_AI_MODEL', 'ollama')
        self.gemini_model = None
        self.gemini_model_name = None
        self.openai_client = None
        self.ollama_base_url = os.getenv('OLLAMA_BASE_URL', 'http://localhost:11434')
        self.ollama_model = os.getenv('OLLAMA_MODEL', 'llama3.1')
        self.conversation_history = []  # Track Q&A pairs for context
        self._initialize_models()
    
    def _initialize_models(self):
        """Inicializa modelos com fallbacks."""
        
        # Tentar OpenAI (mais confiavel)
        if OPENAI_AVAILABLE and self.openai_api_key:
            try:
                self.openai_client = OpenAI(api_key=self.openai_api_key)
                # Teste rapido
                list(self.openai_client.models.list().data)
            except Exception:
                self.openai_client = None
        
        # Tentar Gemini (pode ter problemas de API)
        if GEMINI_AVAILABLE and self.gemini_api_key:
            # Lista de modelos para tentar
            models_to_try = [
                'gemini-2.5-flash',
                'gemini-2.0-flash-exp',
                'gemini-2.0-flash',
                'gemini-flash-latest',
                'gemini-pro-latest',
            ]
            
            for model_name in models_to_try:
                try:
                    genai.configure(api_key=self.gemini_api_key)
                    model = genai.GenerativeModel(model_name)
                    # Teste simples
                    resp = model.generate_content("Oi")
                    if resp and resp.text:
                        self.gemini_model = model
                        self.gemini_model_name = model_name
                        break
                except Exception:
                    continue
    
    def is_available(self) -> bool:
        """Verifica se pelo menos uma IA esta disponivel."""
        ollama_up = _ollama_is_up(self.ollama_base_url)
        return (self.gemini_model is not None) or (self.openai_client is not None) or ollama_up
    
    def get_available_models(self) -> List[str]:
        """Lista modelos disponiveis."""
        models = []
        if _ollama_is_up(self.ollama_base_url):
            models.append(f"Ollama ({self.ollama_model})")
        if self.openai_client is not None:
            models.append('OpenAI (GPT-3.5)')
        if self.gemini_model is not None:
            models.append(f'Gemini ({self.gemini_model_name})')
        return models if models else ['Nenhum']
    
    def build_context(self, df: Optional[pd.DataFrame] = None, stats: Optional[Dict] = None) -> str:
        """Constroi contexto para a IA com cache otimizado."""
        
        start_time = time.time()
        # Performance monitor removido
        
        # Create cache keys
        df_hash = _hash_dataframe_for_ai(df) if df is not None else "empty"
        stats_str = str(stats) if stats else "None"
        
        # Get cached context
        base_context = _build_context_cached(df_hash, stats_str, "")
        
        # Add dynamic data that can't be cached
        context_parts = [base_context]
        
        if df is not None:
            context_parts.append(f"\nTotal de registros: {len(df)}")
            if 'PREÇO POR KG' in df.columns:
                # Otimizar cálculo de média
                try:
                    mean = df['PREÇO POR KG'].mean()
                    context_parts.append(f"Preco medio: R$ {mean:.2f}/kg")
                except Exception:
                    context_parts.append("Preco medio: N/A")
        
        if stats and isinstance(stats, dict):
            context_parts.append(f"\nEstatisticas (PRECO POR KG): Media={stats.get('Média', 'N/A')}, DP={stats.get('DP', 'N/A')}")
        
        # Rastrear métricas
        build_time = time.time() - start_time
        context_size = len("\n".join(context_parts))
        
        # Performance tracking removido
        
        return "\n".join(context_parts)
    
    def chat(self, user_message: str, context: str = "",
             conversation_history: Optional[List[Dict[str, str]]] = None, use_kb: bool = True) -> str:
        """Envia mensagem para IA e retorna resposta."""
        
        if not self.is_available():
            return """Nenhuma IA disponivel.

OPCOES GRATUITAS:

1. Ollama (Local - Recomendado):
   - Baixe: https://ollama.com/download
   - Execute: ollama run llama3.1
   - Reinicie o app

2. Gemini (Nuvem):
   - Chave: https://aistudio.google.com/apikey
   - Arquivo .env: GEMINI_API_KEY=sua_chave
   - Reinicie o app
"""
        
        # Garantir que context não seja None
        if context is None:
            context = ""
        
        # Adicionar contexto de Zootecnia
        if use_kb:
            kb_ctx = contexto_kb(user_message)
            if kb_ctx:
                if context:
                    context = context + "\n\n" + kb_ctx
                else:
                    context = kb_ctx
        
        # Adicionar referências bibliográficas relevantes
        refs_ctx = contexto_referencias(user_message, limite=3)
        if refs_ctx:
            if context:
                context = context + "\n\n" + refs_ctx
            else:
                context = refs_ctx
        
        # Add conversation history to context
        if self.conversation_history:
            history_context = "\n\nHistórico da conversa:\n"
            for entry in self.conversation_history[-5:]:  # Last 5 exchanges
                history_context += f"Usuário: {entry['user']}\n"
                history_context += f"Assistente: {entry['assistant']}\n\n"
            context += history_context
        
        full_prompt = context + "\n\n" + user_message if context else user_message
        
        # 1. Tentar Ollama primeiro (gratuito, local, sem limites)
        if _ollama_is_up(self.ollama_base_url):
            try:
                resp = requests.post(
                    f"{self.ollama_base_url}/api/generate",
                    json={"model": self.ollama_model, "prompt": full_prompt, "stream": False},
                    timeout=60
                )
                if resp.ok:
                    data = resp.json()
                    response = data.get("response", "")
                    self._add_to_conversation_history(user_message, response)
                    return response
            except Exception:
                pass
        
        # 2. Tentar Gemini (gratuito, nuvem)
        if self.gemini_model is not None:
            try:
                response = self.gemini_model.generate_content(full_prompt)
                response_text = response.text
                self._add_to_conversation_history(user_message, response_text)
                return response_text
            except Exception as e:
                error_msg = str(e)
                if "404" in error_msg:
                    pass  # Tenta proxima opcao
                else:
                    print(f"Gemini error: {error_msg}")
        
        # 3. Tentar OpenAI (pago - ultima opcao)
        if self.openai_client is not None:
            try:
                response = self.openai_client.chat.completions.create(
                    model="gpt-3.5-turbo",
                    messages=[
                        {"role": "system", "content": context},
                        {"role": "user", "content": user_message}
                    ],
                    temperature=0.7,
                    max_tokens=1000
                )
                response_text = response.choices[0].message.content
                self._add_to_conversation_history(user_message, response_text)
                return response_text
            except Exception as e:
                error_str = str(e)
                if "quota" in error_str.lower() or "429" in error_str:
                    return """Erro OpenAI: Quota excedida.

SUA CONTA OPENAI ATINGIU O LIMITE.

SOLUCAO GRATUITA (Recomendada):

1. Instale Ollama (IA local sem limites):
   - Baixe: https://ollama.com/download
   - Instale
   - Execute: ollama run llama3.1
   - Reinicie este app
   
2. Ollama e 100% gratuito e funciona offline!

OU obtenha creditos OpenAI em:
https://platform.openai.com/account/billing
"""
                return f"Erro OpenAI: {error_str}"
        
        return "Nenhuma IA respondeu. Instale Ollama: https://ollama.com/download"
    
    def _add_to_conversation_history(self, user_message: str, assistant_response: str):
        """Add Q&A pair to conversation history."""
        self.conversation_history.append({
            'user': user_message,
            'assistant': assistant_response,
            'timestamp': time.time()
        })
        
        # Keep only last 10 exchanges to avoid context overflow
        if len(self.conversation_history) > 10:
            self.conversation_history = self.conversation_history[-10:]
    
    def clear_conversation(self):
        """Clear conversation history."""
        self.conversation_history = []
    
    def get_conversation_history(self):
        """Get current conversation history."""
        return self.conversation_history.copy()
    
    def set_model(self, model_name: str):
        """Set preferred model."""
        if model_name in ['ollama', 'openai', 'gemini']:
            self.preferred_model = model_name
    
    def get_current_model(self):
        """Get current model info."""
        return {
            'preferred': self.preferred_model,
            'available_models': self.get_available_models()
        }
    
    def summarize_dataframe(self, df: pd.DataFrame) -> str:
        """Gera resumo textual dos dados."""
        if df is None or df.empty:
            return "Nao ha dados carregados."
        
        linhas = [
            f"Registros: {len(df)}",
            f"Colunas: {len(df.columns)}",
        ]
        
        if 'PRECO POR KG' in df.columns:
            s = df['PRECO POR KG'].dropna()
            if not s.empty:
                linhas.append(
                    f"Preco/kg - media: R$ {s.mean():.2f}, mediana: R$ {s.median():.2f}, "
                    f"min: R$ {s.min():.2f}, max: R$ {s.max():.2f}"
                )
        
        # Top categorias
        cat_cols = [c for c in df.columns if df[c].dtype == 'object']
        for c in cat_cols[:3]:
            top_vals = df[c].value_counts().head(3)
            linhas.append(f"Top {c}: {', '.join([str(v) for v in top_vals.index])}")
        
        return "\n".join(linhas)

    async def chat_stream(self, user_message: str, context: str = "", 
                         conversation_history: Optional[List[Dict[str, str]]] = None, 
                         use_kb: bool = True) -> AsyncGenerator[str, None]:
        """Stream chat response token by token."""
        
        if not self.is_available():
            yield "Nenhuma IA disponível. Configure Ollama, Gemini ou OpenAI."
            return
        
        # Garantir que context não seja None
        if context is None:
            context = ""
        
        # Adicionar contexto de Zootecnia
        if use_kb:
            kb_ctx = contexto_kb(user_message)
            if kb_ctx:
                if context:
                    context = context + "\n\n" + kb_ctx
                else:
                    context = kb_ctx
        
        # Adicionar referências bibliográficas relevantes
        refs_ctx = contexto_referencias(user_message, limite=3)
        if refs_ctx:
            if context:
                context = context + "\n\n" + refs_ctx
            else:
                context = refs_ctx
        
        # Add conversation history to context
        if self.conversation_history:
            history_context = "\n\nHistórico da conversa:\n"
            for entry in self.conversation_history[-5:]:  # Last 5 exchanges
                history_context += f"Usuário: {entry['user']}\n"
                history_context += f"Assistente: {entry['assistant']}\n\n"
            context += history_context
        
        full_prompt = context + "\n\n" + user_message if context else user_message
        
        # 1. Tentar Ollama primeiro (com streaming)
        if _ollama_is_up(self.ollama_base_url):
            try:
                async for token in self._stream_ollama(full_prompt, user_message):
                    yield token
                return
            except Exception as e:
                print(f"Ollama streaming error: {e}")
        
        # 2. Tentar Gemini (com streaming)
        if self.gemini_model is not None:
            try:
                async for token in self._stream_gemini(full_prompt, user_message):
                    yield token
                return
            except Exception as e:
                print(f"Gemini streaming error: {e}")
        
        # 3. Fallback para resposta não-streaming
        response = self.chat(user_message, context, conversation_history, use_kb)
        # Simular streaming enviando em chunks
        for chunk in response:
            yield chunk
            await asyncio.sleep(0.01)

    async def _stream_ollama(self, prompt: str, user_message: str = "") -> AsyncGenerator[str, None]:
        """Stream response from Ollama."""
        full_response = ""
        if not AIOSESSION_AVAILABLE:
            # Fallback para requests
            try:
                resp = requests.post(
                    f"{self.ollama_base_url}/api/generate",
                    json={"model": self.ollama_model, "prompt": prompt, "stream": True},
                    stream=True,
                    timeout=60
                )
                if resp.ok:
                    for line in resp.iter_lines():
                        if line:
                            try:
                                data = json.loads(line.decode('utf-8'))
                                if 'response' in data:
                                    token = data['response']
                                    full_response += token
                                    yield token
                                if data.get('done', False):
                                    if user_message:
                                        self._add_to_conversation_history(user_message, full_response)
                                    break
                            except json.JSONDecodeError:
                                continue
            except Exception as e:
                yield f"Erro Ollama: {str(e)}"
            return
        
        # Async implementation with aiohttp
        async with aiohttp.ClientSession() as session:
            try:
                async with session.post(
                    f"{self.ollama_base_url}/api/generate",
                    json={"model": self.ollama_model, "prompt": prompt, "stream": True},
                    timeout=aiohttp.ClientTimeout(total=60)
                ) as resp:
                    if resp.status == 200:
                        async for line in resp.content:
                            line_str = line.decode('utf-8').strip()
                            if line_str:
                                try:
                                    data = json.loads(line_str)
                                    if 'response' in data:
                                        token = data['response']
                                        full_response += token
                                        yield token
                                    if data.get('done', False):
                                        if user_message:
                                            self._add_to_conversation_history(user_message, full_response)
                                        break
                                except json.JSONDecodeError:
                                    continue
                    else:
                        yield f"Erro Ollama: HTTP {resp.status}"
            except Exception as e:
                yield f"Erro Ollama: {str(e)}"

    async def _stream_gemini(self, prompt: str, user_message: str = "") -> AsyncGenerator[str, None]:
        """Stream response from Gemini."""
        try:
            # Gemini não tem streaming nativo na API atual
            # Simular streaming enviando resposta em chunks
            response = self.gemini_model.generate_content(prompt)
            response_text = response.text
            
            # Add to conversation history
            if user_message:
                self._add_to_conversation_history(user_message, response_text)
            
            # Dividir em tokens simulados (palavras)
            tokens = response_text.split()
            for i, token in enumerate(tokens):
                yield token + (" " if i < len(tokens) - 1 else "")
                await asyncio.sleep(0.05)  # Simular delay de streaming
                
        except Exception as e:
            yield f"Erro Gemini: {str(e)}"


    def chat_com_referencias(self, user_message: str, context: str = "", 
                           conversation_history: Optional[List[Dict[str, str]]] = None, use_kb: bool = True) -> str:
        """Chat com referências científicas automáticas."""
        
        # Buscar referências científicas para o termo
        try:
            referencias_cientificas = obter_referencias_cientificas(user_message, limite_total=3)
            
            # Adicionar referências ao contexto
            if referencias_cientificas:
                refs_context = "\n\nREFERÊNCIAS CIENTÍFICAS DISPONÍVEIS:\n"
                for ref in referencias_cientificas:
                    refs_context += f"- {ref.get('citacao', ref.get('titulo', 'N/A'))}\n"
                    if ref.get('url'):
                        refs_context += f"  Link: {ref.get('url')}\n"
                context += refs_context
        except Exception:
            pass
        
        # Usar função de chat normal
        resposta = self.chat(user_message, context, conversation_history, use_kb)
        
        # Adicionar instrução para incluir referências na resposta
        instrucao_refs = "\n\nIMPORTANTE: Sempre cite as referências científicas fornecidas acima em sua resposta, incluindo links quando disponíveis."
        
        return resposta + instrucao_refs

def get_assistant() -> AIAssistant:
    """Retorna instancia do assistente."""
    return AIAssistant()
