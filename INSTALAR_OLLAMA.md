# 🤖 Como Instalar Ollama (IA Gratuita e Local)

## ⚡ Por Que Ollama?

- ✅ **100% GRATUITO** (sem limites de uso)
- ✅ **Funciona OFFLINE** (não precisa de internet)
- ✅ **PRIVADO** (seus dados não saem do PC)
- ✅ **RÁPIDO** (depois do download inicial)
- ✅ **SEM QUOTAS** (use quanto quiser)

**Vs. OpenAI:** Sua conta atingiu o limite e cobra por uso  
**Vs. Gemini:** Pode ter instabilidade e limites de requisições  
**Ollama:** Sem limites, sem custos, sempre funciona!

---

## 🚀 Instalação (5 minutos)

### Passo 1: Baixar Ollama

**Windows:**
1. Acesse: https://ollama.com/download
2. Clique em "Download for Windows"
3. Execute o instalador `OllamaSetup.exe`
4. Siga o assistente (Next → Next → Install)

**Outras plataformas:**
- Mac: `brew install ollama`
- Linux: `curl https://ollama.ai/install.sh | sh`

### Passo 2: Baixar um Modelo

Abra o **PowerShell** ou **CMD** e execute:

```bash
ollama run llama3.1
```

**O que acontece:**
- ⬇️ Download do modelo (~4.7 GB)
- ⏳ Leva 5-15 minutos dependendo da internet
- ✅ Após download, o modelo fica pronto

**Primeira vez:**
```
pulling manifest
pulling 8eeb52dfb3bb... 100% ████████████ 4.7 GB
verifying sha256 digest
writing manifest
success
```

**Teste:**
```
>>> Hello
Olá! Como posso ajudar?

>>> /bye
```

### Passo 3: Deixar Rodando

Ollama roda como **serviço em background** automaticamente.

**Verificar se está rodando:**
```bash
ollama list
```

Deve mostrar:
```
NAME            SIZE
llama3.1:latest 4.7 GB
```

**Status do servidor:**
```bash
# Acessar no navegador
http://localhost:11434
```

Deve mostrar: `Ollama is running`

---

## ✅ Pronto! Agora Use no App

### No TCC Gado Gordo:

```bash
# 1. Reiniciar o app
streamlit run app.py

# 2. Ir para "Assistente IA"
# 3. Agora vai funcionar!
```

**O que muda:**
- ✅ Chat IA funciona
- ✅ Resumo automático funciona
- ✅ Respostas em português
- ✅ SEM CUSTO, SEM LIMITES

---

## 🧪 Testar Ollama

### Teste no terminal:

```bash
ollama run llama3.1
>>> Qual a diferença entre gado gordo e gado magro?
```

Deve responder em português explicando!

```bash
>>> /bye
```

### Teste via API:

```bash
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.1",
  "prompt": "Olá, você fala português?",
  "stream": false
}'
```

---

## 🔧 Comandos Úteis

### Ver modelos instalados:
```bash
ollama list
```

### Baixar outro modelo:
```bash
ollama pull llama3.2        # Mais leve (3B)
ollama pull mistral         # Alternativa
ollama pull codellama       # Para código
```

### Remover modelo:
```bash
ollama rm llama3.1
```

### Parar servidor (se necessário):
```bash
# Windows: Task Manager → Ollama → Finalizar
```

### Iniciar servidor manualmente:
```bash
ollama serve
```

---

## ⚙️ Configuração Avançada (Opcional)

### Arquivo `.env` do TCC Gado Gordo:

```env
# Priorizar Ollama
PREFERRED_AI_MODEL=ollama

# Configurações Ollama (padrão já funciona)
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_MODEL=llama3.1

# Deixe OpenAI vazio se excedeu quota
OPENAI_API_KEY=

# Gemini como fallback (se tiver chave válida)
GEMINI_API_KEY=sua_chave_gemini
```

---

## 💡 Dicas

### Primeira Vez
1. Execute `ollama run llama3.1` (baixa e testa)
2. Saia com `/bye`
3. Servidor continua rodando em background
4. Use no app normalmente

### Performance
- **Primeira resposta:** ~5-10 segundos (carrega modelo na RAM)
- **Respostas seguintes:** ~2-3 segundos (modelo já carregado)
- **RAM necessária:** 8GB recomendado (4GB mínimo)

### Modelos Alternativos

**Mais leve (PCs fracos):**
```bash
ollama run llama3.2:1b    # 1.3 GB, rápido
```

**Português otimizado:**
```bash
ollama run gemma2:2b      # Bom em PT-BR
```

**Melhor qualidade:**
```bash
ollama run llama3.1:70b   # 40 GB, muito melhor
```

---

## 🆘 Solução de Problemas

### "Command not found: ollama"

**Solução Windows:**
1. Feche e reabra o PowerShell
2. Ou reinicie o computador
3. PATH deve ser atualizado automaticamente

### "Error: connection refused"

**Solução:**
```bash
ollama serve
```

Deixe este terminal aberto.

### "Model not found"

**Solução:**
```bash
ollama pull llama3.1
```

### App não detecta Ollama

**Verificações:**
1. `http://localhost:11434` deve responder "Ollama is running"
2. `ollama list` deve mostrar llama3.1
3. Reinicie o Streamlit

---

## ✅ Checklist

Após instalação:
- [ ] `ollama --version` mostra versão
- [ ] `ollama list` mostra llama3.1
- [ ] http://localhost:11434 responde
- [ ] `ollama run llama3.1` funciona
- [ ] Streamlit detecta (veja "IA Ativa: OLLAMA")
- [ ] Chat funciona no app

---

## 🎉 Vantagens do Ollama

| Recurso | OpenAI | Gemini | Ollama |
|---------|--------|--------|--------|
| Custo | Pago | Grátis* | Grátis |
| Limites | Quota | RPM | Nenhum |
| Internet | Sim | Sim | Não |
| Privacidade | Nuvem | Nuvem | Local |
| Velocidade | Rápido | Médio | Rápido** |
| Instalação | API key | API key | Download |

*Gemini tem limites de requisições por minuto  
**Depois do download inicial

---

## 📞 Suporte Ollama

- **Documentação:** https://ollama.com/docs
- **Modelos:** https://ollama.com/library
- **GitHub:** https://github.com/ollama/ollama

---

## 🚀 Instalação Rápida (Resumo)

```bash
# 1. Baixar e instalar
https://ollama.com/download

# 2. Executar modelo
ollama run llama3.1

# 3. Aguardar download (~5-15 min)

# 4. Testar
>>> Ola, voce fala portugues?

# 5. Sair
>>> /bye

# 6. Usar no app
streamlit run app.py
```

**Pronto! IA gratuita e ilimitada!** 🎉

---

**Recomendação:** Use Ollama como padrão e deixe OpenAI/Gemini apenas como backup.

**Tempo total:** 20 minutos (incluindo download)  
**Custo:** R$ 0,00  
**Limite de uso:** Infinito ∞

