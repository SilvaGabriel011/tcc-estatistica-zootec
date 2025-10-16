"""Script para testar configuracao de IA."""
import os
from dotenv import load_dotenv

load_dotenv()

print("=" * 60)
print("TESTE DE CONFIGURACAO DE IA")
print("=" * 60)

# Verificar variaveis de ambiente
print("\n[1] Verificando arquivo .env:")
if os.path.exists('.env'):
	print("   [OK] Arquivo .env encontrado")
	with open('.env', 'r', encoding='utf-8') as f:
		lines = f.readlines()
		for line in lines:
			if 'API_KEY' in line and '=' in line:
				key_name = line.split('=')[0].strip()
				key_value = line.split('=')[1].strip()
				if key_value and len(key_value) > 10:
					print(f"   [OK] {key_name}: configurada ({len(key_value)} caracteres)")
				else:
					print(f"   [AVISO] {key_name}: vazia ou invalida")
else:
	print("   [AVISO] Arquivo .env nao encontrado")

# Testar Ollama
print("\n[2] Testando Ollama (Local):")
try:
	import requests
	ollama_url = os.getenv('OLLAMA_BASE_URL', 'http://localhost:11434')
	resp = requests.get(f"{ollama_url}/api/tags", timeout=3)
	if resp.ok:
		models = resp.json().get('models', [])
		print(f"   [OK] Ollama ativo em {ollama_url}")
		if models:
			print(f"   [OK] Modelos: {', '.join([m['name'] for m in models])}")
		else:
			print("   [AVISO] Nenhum modelo. Execute: ollama run llama3.1")
	else:
		print(f"   [ERRO] Ollama nao respondeu (status: {resp.status_code})")
except Exception:
	print("   [ERRO] Ollama nao esta rodando")
	print("   [DICA] Instale em: https://ollama.com/download")
	print("   [DICA] Execute: ollama run llama3.1")

# Testar Gemini
print("\n[3] Testando Gemini (Google):")
try:
	import google.generativeai as genai
	api_key = os.getenv('GEMINI_API_KEY')
	
	if not api_key:
		print("   [AVISO] GEMINI_API_KEY nao configurada no .env")
		print("   [DICA] Obtenha em: https://aistudio.google.com/apikey")
	else:
		print(f"   [OK] Chave configurada ({len(api_key)} caracteres)")
		
		# Testar modelos
		genai.configure(api_key=api_key)
		
		models_to_test = [
			'gemini-2.5-flash',
			'gemini-2.0-flash-exp',
			'gemini-2.0-flash',
			'gemini-flash-latest',
			'gemini-pro-latest'
		]
		
		working_model = None
		for model_name in models_to_test:
			try:
				model = genai.GenerativeModel(model_name)
				response = model.generate_content("Oi", request_options={"timeout": 5})
				if response.text:
					print(f"   [OK] Modelo funcionando: {model_name}")
					working_model = model_name
					break
			except Exception as e:
				error_str = str(e)
				if "404" in error_str:
					print(f"   [ERRO] {model_name}: nao encontrado (404)")
				elif "SAFETY" in error_str:
					print(f"   [OK] {model_name}: bloqueado por seguranca mas funciona")
					working_model = model_name
					break
				else:
					print(f"   [ERRO] {model_name}: {error_str[:60]}")
		
		if working_model:
			print(f"\n   [SUCESSO] Use modelo: {working_model}")
			print(f"   [DICA] Adicione no .env: GEMINI_MODEL={working_model}")
		else:
			print("\n   [ERRO] Nenhum modelo Gemini funcionou")
			print("   [DICA] Solucao:")
			print("      1. Obtenha nova chave: https://aistudio.google.com/apikey")
			print("      2. Atualize .env com a nova chave")

except ImportError:
	print("   [ERRO] google-generativeai nao instalada")
	print("   [DICA] Execute: pip install google-generativeai")
except Exception as e:
	print(f"   [ERRO] {e}")

# Testar OpenAI
print("\n[4] Testando OpenAI (ChatGPT):")
try:
	from openai import OpenAI
	api_key = os.getenv('OPENAI_API_KEY')
	
	if not api_key:
		print("   [AVISO] OPENAI_API_KEY nao configurada (opcional)")
	else:
		client = OpenAI(api_key=api_key)
		models = client.models.list()
		print("   [OK] OpenAI conectada")
		print("   [OK] Modelos disponiveis")
except ImportError:
	print("   [AVISO] openai nao instalada (opcional)")
except Exception as e:
	print(f"   [ERRO] {str(e)[:80]}")

# Resumo final
print("\n" + "=" * 60)
print("RESUMO FINAL")
print("=" * 60)

from core.ai_assistant import get_assistant

assistant = get_assistant()
if assistant.is_available():
	models = assistant.get_available_models()
	print("[SUCESSO] IA DISPONIVEL!")
	print(f"Modelos ativos: {', '.join(models)}")
	print("\nVoce pode usar o Assistente IA no app!")
else:
	print("[AVISO] NENHUMA IA DISPONIVEL")
	print("\nRecomendacao:")
	print("  1. Instale Ollama: https://ollama.com/download")
	print("  2. Execute: ollama run llama3.1")
	print("  3. Reinicie o app")
	print("\nO app funciona normalmente sem IA")
	print("(apenas chat e resumo ficam indisponiveis)")

print("=" * 60)
