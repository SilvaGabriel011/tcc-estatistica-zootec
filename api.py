"""
API REST para TCC Gado Gordo - Integração com Landing Page V0
FastAPI backend para consumo pela landing page Next.js
"""

import logging
from fastapi import FastAPI, File, UploadFile, HTTPException, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from typing import Optional, List, Dict, Any
import pandas as pd
import io
import os
import json
import asyncio
from datetime import datetime

from core.cleaning import clean_data, get_data_quality_report
from core.stats import descriptive_stats, summary_tests
from core.plots import generate_all_plots
from core.ai_assistant import get_assistant

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('api.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

app = FastAPI(
	title="TCC Gado Gordo API",
	description="API REST para análise de dados de mercado de bovinos",
	version="2.0.0"
)

# CORS - Permitir requisições da landing page
app.add_middleware(
	CORSMiddleware,
	allow_origins=[
		"http://localhost:3000",  # Development frontend
		"http://localhost:8501",  # Streamlit development
		"https://yourdomain.com",  # Production domain - UPDATE THIS
		"https://*.yourdomain.com"  # Subdomains - UPDATE THIS
	],
	allow_credentials=True,
	allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
	allow_headers=["*"],
)

# Static files mount removido (PWA features removidos)

# Armazenamento temporário de dados (em produção, use Redis ou DB)
data_store = {}

# WebSocket connection manager otimizado
class OptimizedConnectionManager:
    def __init__(self):
        self.active_connections: Dict[str, WebSocket] = {}
        self.session_data: Dict[str, Dict[str, Any]] = {}
        self.message_queues: Dict[str, List[Dict[str, Any]]] = {}
        self.heartbeat_interval = 30  # segundos
        self.max_queue_size = 100
        self.compression_threshold = 1024  # bytes

    async def connect(self, websocket: WebSocket, session_id: str):
        await websocket.accept()
        self.active_connections[session_id] = websocket
        self.message_queues[session_id] = []
        
        if session_id not in self.session_data:
            self.session_data[session_id] = {
                "conversation_history": [],
                "last_activity": datetime.now(),
                "message_count": 0,
                "bytes_sent": 0
            }
        
        # Enviar mensagem de boas-vindas
        await self.send_message(session_id, {
            "type": "connection_established",
            "session_id": session_id,
            "timestamp": datetime.now().isoformat()
        })

    def disconnect(self, session_id: str):
        if session_id in self.active_connections:
            del self.active_connections[session_id]
        
        # Limpar queue de mensagens
        if session_id in self.message_queues:
            del self.message_queues[session_id]

    async def send_message(self, session_id: str, message: Dict[str, Any]):
        if session_id not in self.active_connections:
            return
        
        websocket = self.active_connections[session_id]
        
        try:
            # Serializar mensagem
            message_str = json.dumps(message, ensure_ascii=False)
            message_bytes = message_str.encode('utf-8')
            
            # Comprimir se necessário
            if len(message_bytes) > self.compression_threshold:
                import gzip
                compressed = gzip.compress(message_bytes)
                await websocket.send_bytes(compressed)
            else:
                await websocket.send_text(message_str)
            
            # Atualizar estatísticas
            if session_id in self.session_data:
                self.session_data[session_id]["message_count"] += 1
                self.session_data[session_id]["bytes_sent"] += len(message_bytes)
                self.session_data[session_id]["last_activity"] = datetime.now()
                
        except ConnectionResetError as e:
            logger.warning(f"Connection reset for session {session_id}: {e}")
            self.disconnect(session_id)
        except WebSocketDisconnect as e:
            logger.info(f"WebSocket disconnected for session {session_id}: {e}")
            self.disconnect(session_id)
        except json.JSONEncodeError as e:
            logger.error(f"JSON encoding error for session {session_id}: {e}")
            # Try to send error message
            try:
                await websocket.send_text(json.dumps({
                    "type": "error",
                    "message": "Erro na serialização da mensagem"
                }))
            except:
                self.disconnect(session_id)
        except Exception as e:
            logger.error(f"Unexpected error sending message to {session_id}: {e}")
            # Desconectar se erro persistente
            self.disconnect(session_id)

    async def send_message_batch(self, session_id: str, messages: List[Dict[str, Any]]):
        """Enviar múltiplas mensagens em batch para reduzir overhead."""
        if not messages:
            return
        
        batch_message = {
            "type": "batch",
            "messages": messages,
            "count": len(messages),
            "timestamp": datetime.now().isoformat()
        }
        
        await self.send_message(session_id, batch_message)

    async def queue_message(self, session_id: str, message: Dict[str, Any]):
        """Adicionar mensagem à queue para envio em batch."""
        if session_id not in self.message_queues:
            self.message_queues[session_id] = []
        
        self.message_queues[session_id].append(message)
        
        # Enviar batch se queue estiver cheia
        if len(self.message_queues[session_id]) >= 10:  # Batch size
            await self.flush_queue(session_id)

    async def flush_queue(self, session_id: str):
        """Enviar todas as mensagens da queue."""
        if session_id not in self.message_queues or not self.message_queues[session_id]:
            return
        
        messages = self.message_queues[session_id].copy()
        self.message_queues[session_id].clear()
        
        await self.send_message_batch(session_id, messages)

    def get_conversation_history(self, session_id: str) -> List[Dict[str, str]]:
        return self.session_data.get(session_id, {}).get("conversation_history", [])

    def add_to_conversation(self, session_id: str, role: str, content: str):
        if session_id not in self.session_data:
            self.session_data[session_id] = {
                "conversation_history": [], 
                "last_activity": datetime.now(),
                "message_count": 0,
                "bytes_sent": 0
            }
        
        # Limitar histórico para evitar uso excessivo de memória
        conversation = self.session_data[session_id]["conversation_history"]
        if len(conversation) > 50:  # Manter apenas últimas 50 mensagens
            conversation = conversation[-50:]
            self.session_data[session_id]["conversation_history"] = conversation
        
        conversation.append({
            "role": role,
            "content": content,
            "timestamp": datetime.now().isoformat()
        })
        
        self.session_data[session_id]["last_activity"] = datetime.now()

    def get_session_stats(self, session_id: str) -> Dict[str, Any]:
        """Obter estatísticas da sessão."""
        if session_id not in self.session_data:
            return {}
        
        data = self.session_data[session_id]
        return {
            "message_count": data.get("message_count", 0),
            "bytes_sent": data.get("bytes_sent", 0),
            "last_activity": data.get("last_activity", datetime.now()).isoformat(),
            "conversation_length": len(data.get("conversation_history", []))
        }

    async def cleanup_inactive_sessions(self, max_idle_minutes: int = 30):
        """Limpar sessões inativas."""
        current_time = datetime.now()
        inactive_sessions = []
        
        for session_id, data in self.session_data.items():
            last_activity = data.get("last_activity", current_time)
            idle_minutes = (current_time - last_activity).total_seconds() / 60
            
            if idle_minutes > max_idle_minutes:
                inactive_sessions.append(session_id)
        
        for session_id in inactive_sessions:
            self.disconnect(session_id)
            logger.info(f"Sessão inativa removida: {session_id}")

manager = OptimizedConnectionManager()

# Modelos Pydantic
class ChatRequest(BaseModel):
	message: str
	session_id: Optional[str] = "default"

class AnalysisRequest(BaseModel):
	session_id: str = "default"

# === ENDPOINTS ===

@app.get("/")
async def root():
	"""Health check e informações da API"""
	return {
		"status": "online",
		"app": "TCC Gado Gordo API",
		"version": "2.0.0",
		"endpoints": {
			"upload": "/api/upload",
			"stats": "/api/stats",
			"plots": "/api/plots",
			"chat": "/api/chat",
			"summary": "/api/summary"
		}
	}

@app.post("/api/upload")
async def upload_file(file: UploadFile = File(...), session_id: str = "default"):
	"""
	Upload e limpeza de arquivo .xlsx ou .csv
	
	Returns:
		- quality_report: Relatório de qualidade dos dados
		- preview: Primeiras 10 linhas dos dados limpos
		- session_id: ID da sessão para próximas requisições
	"""
	# Input validation
	if not file.filename:
		raise HTTPException(status_code=400, detail="Nome do arquivo não fornecido")
	
	if not file.filename.lower().endswith(('.csv', '.xlsx')):
		raise HTTPException(status_code=400, detail="Formato não suportado. Use .csv ou .xlsx")
	
	if len(session_id) > 100:
		raise HTTPException(status_code=400, detail="Session ID muito longo")
	
	logger.info(f"Upload iniciado: {file.filename} para sessão {session_id}")
	
	try:
		# Ler arquivo
		contents = await file.read()
		
		if file.filename.endswith('.csv'):
			try:
				df = pd.read_csv(io.BytesIO(contents), encoding='utf-8')
			except (UnicodeDecodeError, pd.errors.ParserError):
				try:
					df = pd.read_csv(io.BytesIO(contents), encoding='latin-1', sep=None, engine='python')
				except Exception:
					raise HTTPException(status_code=400, detail="Falha ao ler CSV. Verifique o formato.")
		elif file.filename.endswith('.xlsx'):
			try:
				df = pd.read_excel(io.BytesIO(contents))
			except Exception:
				raise HTTPException(status_code=400, detail="Falha ao ler Excel. Arquivo pode estar corrompido.")
		else:
			raise HTTPException(status_code=400, detail="Formato não suportado. Use .csv ou .xlsx")
		
		# Limite de segurança: máximo 1 milhão de linhas
		if len(df) > 1_000_000:
			raise HTTPException(status_code=413, detail="Arquivo muito grande. Limite: 1 milhão de linhas.")
		
		# Limpar dados
		df_clean = clean_data(df)
		quality_report = get_data_quality_report(df_clean)
		
		# Armazenar na sessão
		data_store[session_id] = {
			'df': df_clean,
			'quality_report': quality_report
		}
		
		return {
			"status": "success",
			"session_id": session_id,
			"filename": file.filename,
			"quality_report": {
				"total_rows": quality_report['total_rows'],
				"total_columns": quality_report['total_columns'],
				"recognized_columns": quality_report['recognized_columns'],
				"missing_columns": quality_report['missing_columns']
			},
			"preview": df_clean.head(10).to_dict(orient='records')
		}
	
	except UnicodeDecodeError as e:
		raise HTTPException(status_code=400, detail=f"Erro de codificação do arquivo: {str(e)}")
	except pd.errors.ParserError as e:
		raise HTTPException(status_code=400, detail=f"Erro ao processar arquivo: {str(e)}")
	except MemoryError as e:
		raise HTTPException(status_code=413, detail="Arquivo muito grande para processar")
	except Exception as e:
		raise HTTPException(status_code=500, detail=f"Erro interno do servidor: {str(e)}")

@app.get("/api/stats/{session_id}")
async def get_stats(session_id: str = "default"):
	"""
	Obter estatísticas descritivas dos dados
	
	Returns:
		- descriptive: Estatísticas descritivas (N, média, DP, etc.)
		- summary_tests: Resultados dos testes (ANOVA, Kruskal-Wallis)
	"""
	try:
		if session_id not in data_store:
			raise HTTPException(status_code=404, detail="Sessão não encontrada. Faça upload primeiro.")
		
		df = data_store[session_id]['df']
		
		if 'PREÇO POR KG' not in df.columns:
			raise HTTPException(status_code=400, detail="Coluna 'PREÇO POR KG' não encontrada")
		
		# Estatísticas descritivas
		desc_stats = descriptive_stats(df['PREÇO POR KG'])
		
		# Testes estatísticos
		summary = summary_tests(df)
		
		# Armazenar para uso posterior
		data_store[session_id]['descriptive_stats'] = desc_stats
		data_store[session_id]['summary_tests'] = summary
		
		return {
			"status": "success",
			"descriptive": desc_stats,
			"summary_tests": summary.to_dict(orient='records') if not summary.empty else []
		}
	
	except HTTPException:
		raise
	except Exception as e:
		raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/plots/{session_id}")
async def generate_plots(session_id: str = "default"):
	"""
	Gerar todos os gráficos
	
	Returns:
		- plots: Lista de caminhos dos gráficos gerados
	"""
	try:
		if session_id not in data_store:
			raise HTTPException(status_code=404, detail="Sessão não encontrada")
		
		df = data_store[session_id]['df']
		
		# Gerar gráficos
		plots = generate_all_plots(df)
		
		# Lista de gráficos gerados
		plot_files = []
		if os.path.exists('output/figuras'):
			plot_files = [f for f in os.listdir('output/figuras') if f.endswith('.png')]
		
		return {
			"status": "success",
			"plots_generated": len(plot_files),
			"plots": plot_files,
			"base_url": "/api/image/"
		}
	
	except HTTPException:
		raise
	except Exception as e:
		raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/image/{filename}")
async def get_image(filename: str):
	"""Servir imagens dos gráficos"""
	filepath = f"output/figuras/{filename}"
	if not os.path.exists(filepath):
		raise HTTPException(status_code=404, detail="Imagem não encontrada")
	return FileResponse(filepath)

@app.post("/api/chat")
async def chat_with_ai(request: ChatRequest):
	"""
	Chat com assistente de IA
	
	Body:
		- message: Mensagem do usuário
		- session_id: ID da sessão (opcional)
	
	Returns:
		- response: Resposta da IA
	"""
	try:
		assistant = get_assistant()
		
		if not assistant.is_available():
			return {
				"status": "error",
				"message": "IA não configurada. Configure API keys no arquivo .env"
			}
		
		# Construir contexto se houver dados
		context = ""
		if request.session_id in data_store:
			df = data_store[request.session_id]['df']
			stats = data_store[request.session_id].get('descriptive_stats', None)
			context = assistant.build_context(df, stats)
		
		# Obter resposta
		response = assistant.chat(request.message, context)
		
		return {
			"status": "success",
			"response": response,
			"models_available": assistant.get_available_models()
		}
	
	except Exception as e:
		raise HTTPException(status_code=500, detail=str(e))

@app.websocket("/ws/chat/{session_id}")
async def websocket_chat(websocket: WebSocket, session_id: str):
	"""WebSocket endpoint para chat com IA em tempo real."""
	await manager.connect(websocket, session_id)
	
	try:
		while True:
			# Receber mensagem do cliente
			data = await websocket.receive_text()
			message_data = json.loads(data)
			
			user_message = message_data.get("message", "")
			if not user_message:
				await manager.send_message(session_id, {
					"type": "error",
					"message": "Mensagem vazia"
				})
				continue
			
			# Adicionar ao histórico
			manager.add_to_conversation(session_id, "user", user_message)
			
			# Enviar confirmação de recebimento
			await manager.send_message(session_id, {
				"type": "message_received",
				"message": "Mensagem recebida, processando..."
			})
			
			try:
				# Obter assistente IA
				assistant = get_assistant()
				if not assistant.is_available():
					await manager.send_message(session_id, {
						"type": "error",
						"message": "IA não disponível. Verifique a configuração."
					})
					continue
				
				# Obter contexto se houver dados
				context = ""
				if session_id in data_store and "df" in data_store[session_id]:
					df = data_store[session_id]["df"]
					context = assistant.build_context(df)
				
				# Obter histórico da conversa
				conversation_history = manager.get_conversation_history(session_id)[:-1]  # Excluir mensagem atual
				
				# Stream da resposta da IA
				await manager.send_message(session_id, {
					"type": "stream_start",
					"message": "Iniciando resposta da IA..."
				})
				
				# Usar streaming se disponível
				if hasattr(assistant, 'chat_stream'):
					# Streaming response
					full_response = ""
					async for token in assistant.chat_stream(
						user_message,
						context=context,
						conversation_history=conversation_history
					):
						full_response += token
						await manager.send_message(session_id, {
							"type": "token",
							"token": token,
							"partial_response": full_response
						})
						# Pequena pausa para evitar sobrecarga
						await asyncio.sleep(0.01)
					
					# Finalizar stream
					await manager.send_message(session_id, {
						"type": "stream_end",
						"full_response": full_response
					})
					
					# Adicionar resposta ao histórico
					manager.add_to_conversation(session_id, "assistant", full_response)
					
				else:
					# Fallback para resposta não-streaming
					response = assistant.chat(
						user_message,
						context=context,
						conversation_history=conversation_history
					)
					
					# Simular streaming enviando em chunks
					chunk_size = 50
					for i in range(0, len(response), chunk_size):
						chunk = response[i:i+chunk_size]
						await manager.send_message(session_id, {
							"type": "token",
							"token": chunk,
							"partial_response": response[:i+chunk_size]
						})
						await asyncio.sleep(0.05)
					
					await manager.send_message(session_id, {
						"type": "stream_end",
						"full_response": response
					})
					
					# Adicionar resposta ao histórico
					manager.add_to_conversation(session_id, "assistant", response)
				
			except Exception as e:
				error_msg = f"Erro na IA: {str(e)}"
				await manager.send_message(session_id, {
					"type": "error",
					"message": error_msg
				})
				logger.error(f"Erro no WebSocket chat: {e}")
			
        except WebSocketDisconnect:
            logger.info(f"WebSocket disconnected for session {session_id}")
            manager.disconnect(session_id)
        except json.JSONDecodeError as e:
            logger.error(f"JSON decode error in WebSocket {session_id}: {e}")
            await manager.send_message(session_id, {
                "type": "error",
                "message": "Formato de mensagem inválido"
            })
        except ConnectionError as e:
            logger.error(f"Connection error in WebSocket {session_id}: {e}")
            manager.disconnect(session_id)
        except Exception as e:
            logger.error(f"Unexpected error in WebSocket {session_id}: {e}")
            manager.disconnect(session_id)

@app.get("/api/summary/{session_id}")
async def get_summary(session_id: str = "default"):
	"""Gera um resumo textual dos dados carregados na sessão."""
	try:
		if session_id not in data_store:
			raise HTTPException(status_code=404, detail="Sessão não encontrada. Faça upload primeiro.")
		assistant = get_assistant()
		df = data_store[session_id]['df']
		base_summary = assistant.summarize_dataframe(df)
		context = assistant.build_context(df, None)
		ai_summary = assistant.chat("Resuma os principais achados dos dados acima em até 10 linhas.", context + "\n\n" + base_summary)
		return {
			"status": "success",
			"base_summary": base_summary,
			"ai_summary": ai_summary
		}
	except HTTPException:
		raise
	except Exception as e:
		raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/sessions")
async def list_sessions():
	"""Listar sessões ativas"""
	return {
		"status": "success",
		"sessions": list(data_store.keys()),
		"total": len(data_store)
	}

@app.delete("/api/session/{session_id}")
async def delete_session(session_id: str):
	"""Deletar sessão"""
	if session_id in data_store:
		del data_store[session_id]
		return {"status": "success", "message": f"Sessão {session_id} deletada"}
	raise HTTPException(status_code=404, detail="Sessão não encontrada")

# Executar com: uvicorn api:app --reload --port 8000
if __name__ == "__main__":
	import uvicorn
	uvicorn.run(app, host="0.0.0.0", port=8000)

