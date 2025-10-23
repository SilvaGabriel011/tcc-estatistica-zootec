#!/usr/bin/env python3
"""
Script para configurar chaves de API de forma segura.
"""

import os
import shutil
from pathlib import Path

def main():
    print("🔐 Configuração de Chaves de API - Tio ZooEstatisco")
    print("=" * 60)
    
    # Verificar se .env já existe
    env_file = Path('.env')
    if env_file.exists():
        print("⚠️  Arquivo .env já existe!")
        response = input("Deseja sobrescrever? (s/N): ").lower()
        if response != 's':
            print("❌ Operação cancelada.")
            return
    
    # Verificar se template existe
    template_file = Path('config_example.txt')
    if not template_file.exists():
        print("❌ Arquivo config_example.txt não encontrado!")
        return
    
    # Copiar template
    try:
        shutil.copy(template_file, env_file)
        print("✅ Arquivo .env criado com sucesso!")
    except Exception as e:
        print(f"❌ Erro ao criar .env: {e}")
        return
    
    print("\n📝 Próximos passos:")
    print("1. Edite o arquivo .env com suas chaves reais")
    print("2. Execute: python check_secrets.py (para verificar segurança)")
    print("3. Execute: python testar_ia.py (para testar configuração)")
    
    print("\n💡 Dicas:")
    print("- O arquivo .env está no .gitignore (seguro para commit)")
    print("- Use Ollama para IA gratuita e sem limites")
    print("- Gemini é gratuito mas tem quotas diárias")
    print("- OpenAI é pago")

if __name__ == '__main__':
    main()


