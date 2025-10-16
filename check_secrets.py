#!/usr/bin/env python3
"""
Script para verificar se há chaves de API ou informações sensíveis expostas no código.
Execute este script antes de fazer commit para garantir que não há dados sensíveis.
"""

import os
import re
from pathlib import Path

# Padrões de chaves sensíveis
SENSITIVE_PATTERNS = [
    r'AIza[0-9A-Za-z-_]{35}',  # Google API Key
    r'sk-[A-Za-z0-9]{48}',     # OpenAI API Key
    r'pk_[A-Za-z0-9]{24}',     # Stripe public key
    r'sk_[A-Za-z0-9]{24}',     # Stripe secret key
    r'[A-Za-z0-9+/]{40}={0,2}', # Generic base64 key
    r'[0-9a-f]{32}',           # MD5 hash
    r'[0-9a-f]{40}',           # SHA1 hash
    r'[0-9a-f]{64}',           # SHA256 hash
]

# Extensões de arquivo para verificar
FILE_EXTENSIONS = ['.py', '.js', '.ts', '.json', '.md', '.txt', '.yml', '.yaml']

# Arquivos/diretórios para ignorar
IGNORE_PATHS = [
    '__pycache__',
    'node_modules',
    '.git',
    '.streamlit',
    'output',
    'build',
    'dist',
    '.env',
    'check_secrets.py',  # Este próprio arquivo
    'package-lock.json',  # Arquivos de lock do npm
    'yarn.lock'
]

def is_ignored_path(path):
    """Verifica se o caminho deve ser ignorado."""
    path_str = str(path)
    for ignore in IGNORE_PATHS:
        if ignore in path_str:
            return True
    return False

def check_file_for_secrets(file_path):
    """Verifica um arquivo em busca de chaves sensíveis."""
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
            lines = content.split('\n')
            
        issues = []
        for i, line in enumerate(lines, 1):
            for pattern in SENSITIVE_PATTERNS:
                matches = re.findall(pattern, line)
                for match in matches:
                    # Ignorar se está em comentário explicativo
                    if not (line.strip().startswith('#') and 'example' in line.lower()):
                        issues.append({
                            'line': i,
                            'content': line.strip(),
                            'match': match,
                            'pattern': pattern
                        })
        
        return issues
    except Exception as e:
        return [{'error': f'Erro ao ler arquivo: {e}'}]

def main():
    """Função principal."""
    print("🔍 Verificando chaves sensíveis no código...")
    print("=" * 60)
    
    project_root = Path('.')
    total_issues = 0
    
    for file_path in project_root.rglob('*'):
        if (file_path.is_file() and 
            not is_ignored_path(file_path) and
            file_path.suffix in FILE_EXTENSIONS):
            
            issues = check_file_for_secrets(file_path)
            if issues:
                print(f"\n🚨 {file_path}")
                for issue in issues:
                    if 'error' in issue:
                        print(f"   ❌ {issue['error']}")
                    else:
                        print(f"   ⚠️  Linha {issue['line']}: {issue['content']}")
                        print(f"       Match: {issue['match']}")
                total_issues += len(issues)
    
    print("\n" + "=" * 60)
    if total_issues == 0:
        print("✅ Nenhuma chave sensível encontrada!")
        print("✅ Seu código está seguro para commit.")
    else:
        print(f"🚨 {total_issues} problema(s) encontrado(s)!")
        print("❌ NÃO faça commit até resolver estes problemas.")
        print("\n💡 Dicas:")
        print("   - Use variáveis de ambiente para chaves")
        print("   - Adicione .env ao .gitignore")
        print("   - Use exemplos genéricos em documentação")
    
    return total_issues == 0

if __name__ == '__main__':
    success = main()
    exit(0 if success else 1)
