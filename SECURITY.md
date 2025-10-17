# 🔐 Segurança - Chaves de API

## ⚠️ IMPORTANTE: Nunca commite chaves de API reais!

Este projeto está configurado para usar variáveis de ambiente para proteger suas chaves de API.

## 🔧 Como configurar suas chaves

### 1. Copie o arquivo template
```bash
cp env_template.txt .env
```

### 2. Edite o arquivo `.env` com suas chaves reais
```bash
# Google Gemini API Key (GRATUITO)
GEMINI_API_KEY=sua_chave_gemini_real_aqui

# OpenAI API Key (PAGO)
OPENAI_API_KEY=sua_chave_openai_real_aqui
```

### 3. O arquivo `.env` já está no `.gitignore`
✅ O arquivo `.env` é automaticamente ignorado pelo Git, então suas chaves nunca serão enviadas para o GitHub.

## 🛡️ Verificação de segurança

Execute o teste para verificar se suas chaves estão configuradas:
```bash
python testar_ia.py
```

## 📋 O que está protegido

- ✅ Arquivo `.env` está no `.gitignore`
- ✅ Chaves removidas do `env_template.txt`
- ✅ Código usa `os.getenv()` para carregar chaves
- ✅ Nenhuma chave hardcoded no código

## 🚨 Se você viu este aviso

Se você viu este arquivo porque encontrou chaves expostas:
1. **IMEDIATAMENTE** revogue as chaves no painel da API
2. Gere novas chaves
3. Configure-as no arquivo `.env` local
4. Nunca commite o arquivo `.env`

