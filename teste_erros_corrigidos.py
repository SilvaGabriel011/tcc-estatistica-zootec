# -*- coding: utf-8 -*-
"""
Script para testar se os erros foram corrigidos
"""

import sys
import os

def test_imports():
    """Testar imports principais"""
    print("🔍 Testando imports...")
    
    try:
        import streamlit as st
        print("✅ streamlit: OK")
    except ImportError as e:
        print(f"❌ streamlit: {e}")
        return False
    
    try:
        import pandas as pd
        print("✅ pandas: OK")
    except ImportError as e:
        print(f"❌ pandas: {e}")
        return False
    
    try:
        import plotly.express as px
        print("✅ plotly: OK")
    except ImportError as e:
        print(f"❌ plotly: {e}")
        return False
    
    return True

def test_core_modules():
    """Testar módulos core"""
    print("\n🔍 Testando módulos core...")
    
    # Adicionar path
    sys.path.append('.')
    
    try:
        from core.ai_assistant import get_assistant
        print("✅ core.ai_assistant: OK")
    except Exception as e:
        print(f"❌ core.ai_assistant: {e}")
        return False
    
    try:
        from core.cleaning import clean_data
        print("✅ core.cleaning: OK")
    except Exception as e:
        print(f"❌ core.cleaning: {e}")
        return False
    
    try:
        from core.stats import descriptive_stats
        print("✅ core.stats: OK")
    except Exception as e:
        print(f"❌ core.stats: {e}")
        return False
    
    return True

def test_app_loading():
    """Testar carregamento do app"""
    print("\n🔍 Testando carregamento do app...")
    
    try:
        # Simular carregamento do app sem executar
        with open('app.py', 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Verificar se não há erros de sintaxe
        compile(content, 'app.py', 'exec')
        print("✅ app.py: Sintaxe OK")
        
    except SyntaxError as e:
        print(f"❌ app.py: Erro de sintaxe - {e}")
        return False
    except Exception as e:
        print(f"❌ app.py: Erro - {e}")
        return False
    
    return True

def test_simple_app():
    """Testar app simplificado"""
    print("\n🔍 Testando app simplificado...")
    
    try:
        with open('app_simple.py', 'r', encoding='utf-8') as f:
            content = f.read()
        
        compile(content, 'app_simple.py', 'exec')
        print("✅ app_simple.py: Sintaxe OK")
        
    except SyntaxError as e:
        print(f"❌ app_simple.py: Erro de sintaxe - {e}")
        return False
    except Exception as e:
        print(f"❌ app_simple.py: Erro - {e}")
        return False
    
    return True

def main():
    """Função principal"""
    print("=" * 60)
    print("    TESTE DE CORREÇÃO DE ERROS - TCC Gado Gordo")
    print("=" * 60)
    
    all_tests_passed = True
    
    # Testar imports básicos
    if not test_imports():
        all_tests_passed = False
    
    # Testar módulos core
    if not test_core_modules():
        all_tests_passed = False
    
    # Testar app principal
    if not test_app_loading():
        all_tests_passed = False
    
    # Testar app simplificado
    if not test_simple_app():
        all_tests_passed = False
    
    print("\n" + "=" * 60)
    if all_tests_passed:
        print("🎉 TODOS OS TESTES PASSARAM!")
        print("✅ Os erros foram corrigidos com sucesso!")
        print("\n📋 Próximos passos:")
        print("1. Execute: streamlit run app.py")
        print("2. Ou use a versão simplificada: streamlit run app_simple.py")
    else:
        print("❌ ALGUNS TESTES FALHARAM!")
        print("⚠️  Verifique os erros acima e corrija antes de usar o app.")
    
    print("=" * 60)

if __name__ == "__main__":
    main()

