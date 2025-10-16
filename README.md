# 🐂 Tio ZooEstatisco 🇧🇷

Aplicação completa em Python + Streamlit para análise de dados de mercado de bovinos.  
**Totalmente em Português Brasileiro** com formatação e termos do agronegócio nacional.

## ✨ Funcionalidades

- **📥 Upload e Análise**: Upload, filtros múltiplos, busca rápida, dados de exemplo
- **📊 Resultados e Export**: Dashboard comparativo, gráficos Plotly interativos, export CSV/Excel/PDF
- **🤖 Assistente IA**: Chat com IA especializada (Ollama/Gemini/ChatGPT)
- **📚 Glossário**: 75+ termos de zootecnia com busca e 11 categorias
- **🧮 Calculadoras**: ROI completo, conversores, simulador de cenários
- **🎯 Insights Automáticos**: Estado mais caro, raça premium, tendências, melhor trimestre
- **🔍 Filtros Avançados**: Estado, raça, ano, trimestre, faixa de preço (persistem entre páginas)
- **💰 Formatação BR**: Moeda (R$ 1.234,56), datas (dd/mm/aaaa), números brasileiros

## 🚀 Como Executar

### 1. Instalar Dependências

```bash
pip install -r requirements.txt
```

### 2. Configurar IA (Recomendado)

**⭐ Opção 1: Ollama - GRATUITO e SEM LIMITES (Recomendado)**

```bash
# 1. Baixar e instalar
https://ollama.com/download

# 2. Executar modelo
ollama run llama3.1

# 3. Aguardar download inicial (~5-15 min)
# 4. Pronto! Funciona offline e sem limites

# Guia completo: INSTALAR_OLLAMA.md
```

**Opção 2: Gemini - Gratuito mas com limites**

```bash
# 1. Obter chave gratuita
https://aistudio.google.com/apikey

# 2. Criar .env na raiz
copy env_template.txt .env

# 3. Adicionar chave no .env
GEMINI_API_KEY=sua_chave_aqui

# 4. Reiniciar app
```

**⚠️ OpenAI:** Não recomendado (pago e com quotas)

### 3. Executar o App

```bash
streamlit run app.py
```

### 4. Acessar

Abra no navegador: **http://localhost:8501**

## 📊 Estrutura de Dados

O app aceita planilhas (.xlsx ou .csv) com colunas:
- ANO, TRIMESTRE, ESTADO
- RAÇA, GÊNERO, ERA, VIA, TIPO GADO GORDO
- PESO (KG), VALOR, PREÇO POR KG
- ARROBA GORDO, ARROBA MAGRO, % ÁGIO

### Derivações Automáticas
- PREÇO POR KG = VALOR / PESO (KG)
- ARROBA GORDO = PREÇO POR KG × 15
- % ÁGIO = (ARROBA MAGRO / ARROBA GORDO) - 1

## 📁 Estrutura do Projeto

```
tcc-gado-gordo/
├── app.py                          # Página principal com guia
├── requirements.txt                # Dependências
├── core/                           # Módulos principais
│   ├── cleaning.py                 # Limpeza de dados
│   ├── stats.py                    # Análises estatísticas
│   ├── plots.py                    # Gráficos
│   ├── zootecnia_kb.py             # Glossário 75+ termos
│   ├── ai_assistant.py             # Assistente IA (Ollama/Gemini/OpenAI)
│   ├── formatters.py               # Formatação PT-BR
│   ├── excel_export.py             # Export Excel formatado
│   └── sample_data.py              # Gerador de dados exemplo
├── pages/                          # Páginas Streamlit (5)
│   ├── 1_Upload_e_Analise.py       # Upload + histórico + prévia
│   ├── 2_Resultados_e_Export.py    # Métricas + gráficos + export
│   ├── 3_Assistente_IA.py          # Chat IA + resumo
│   ├── 4_Glossario.py              # Glossário interativo
│   └── 5_Calculadoras.py           # ROI + conversores
└── output/                         # Arquivos gerados
    ├── figuras/
    ├── tabelas/
    └── upload_history.json
```

## 🤖 Assistente de IA

O app inclui chat inteligente com IA, com foco agropecuário e glossário de Zootecnia.

**Opções de IA:**
- Gemini (gratuito com chave)
- OpenAI (pago)
- Ollama (LOCAL e GRATUITO, recomendado)

**Capacidades:**
- Análise de dados e interpretação
- Sugestões de testes estatísticos
- Resumos automáticos dos resultados
- Uso de conceitos de Zootecnia nas respostas

## 🧩 API

- `POST /api/upload` – envia arquivo e cria sessão
- `GET  /api/stats/{session_id}` – estatísticas e testes
- `GET  /api/plots/{session_id}` – gera gráficos
- `POST /api/chat` – conversa com IA
- `GET  /api/summary/{session_id}` – resumo textual (base + IA)

## 📖 Documentação

- **COMO_INSTALAR.txt**: Guia passo a passo
- **env_template.txt**: Template para API keys

## 💡 Dicas

- Use dados reais para melhores análises
- Prefira Ollama para IA local gratuita
- Exporte resultados em CSV/PDF

## ⚡ Teste Rápido

```bash
# 1. Instalar
pip install -r requirements.txt

# 2. Executar
streamlit run app.py

# 3. Abrir navegador
http://localhost:8501
```

## 🆘 Problemas?

Se o Streamlit não iniciar:
```bash
python -m streamlit run app.py
```

---

**Desenvolvido para análise de dados agropecuários** 🐂📊

