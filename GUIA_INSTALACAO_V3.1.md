# 🚀 Guia de Instalação - TCC Gado Gordo v3.1.0 🇧🇷

## Instalação Rápida (Windows)

### Opção 1: Atalho Automático ⚡
```
1. Duplo-clique em: INSTALAR_DEPENDENCIAS.bat
2. Aguarde a instalação (2-5 minutos)
3. Duplo-clique em: INICIAR_APP.bat
4. Navegador abre automaticamente!
```

### Opção 2: Manual 🛠️

```bash
# 1. Navegar até o diretório
cd C:\Users\Gabriel\tcc-gado-gordo

# 2. Instalar dependências
pip install -r requirements.txt

# 3. Iniciar aplicação
streamlit run app.py
```

---

## 📦 Dependências (20 bibliotecas)

### Essenciais (sempre instaladas)
```
streamlit          # Framework web
pandas             # Análise de dados
numpy              # Computação numérica
scipy              # Estatística
matplotlib         # Gráficos estáticos
plotly             # Gráficos interativos ⭐ NOVO!
openpyxl           # Ler Excel
xlsxwriter         # Escrever Excel formatado ⭐ NOVO!
```

### Formatação e Localização
```
babel              # Formatação PT-BR ⭐ NOVO!
unidecode          # Normalização de texto
```

### Exportação
```
reportlab          # Geração de PDF
jinja2             # Templates
```

### IA e API
```
python-dotenv      # Variáveis de ambiente
google-generativeai # Gemini (opcional)
openai             # ChatGPT (opcional)
requests           # HTTP (Ollama)
```

### API REST
```
fastapi            # Framework API
uvicorn            # Servidor ASGI
python-multipart   # Upload de arquivos
```

---

## 🤖 Configurar IA (Opcional mas Recomendado)

### Opção 1: Ollama (Local, Gratuito) ⭐ RECOMENDADO

```bash
# 1. Baixar e instalar
# https://ollama.com/download

# 2. Iniciar modelo
ollama run llama3.1

# 3. Pronto! App detecta automaticamente
```

**Vantagens:**
- ✅ Totalmente gratuito
- ✅ Funciona offline
- ✅ Privacidade (dados não saem do PC)
- ✅ Rápido após download do modelo

### Opção 2: Gemini (Nuvem, Gratuito)

```bash
# 1. Obter chave gratuita
# https://makersuite.google.com/app/apikey

# 2. Copiar template
copy env_template.txt .env

# 3. Editar .env e colar chave:
GEMINI_API_KEY=sua_chave_aqui

# 4. Reiniciar app
```

### Opção 3: ChatGPT (Pago)

```bash
# 1. Obter chave em
# https://platform.openai.com/api-keys

# 2. Editar .env:
OPENAI_API_KEY=sua_chave_aqui

# 3. Reiniciar app
```

---

## ✅ Verificar Instalação

### Teste Rápido

```bash
# 1. Testar imports
# Validação integrada no app - não precisa de script separado

# 2. Se OK, iniciar app
streamlit run app.py

# 3. No navegador (http://localhost:8501):
# - Clique em "Upload e Análise"
# - Clique "📥 Usar Dados de Exemplo"
# - Explore as 5 páginas
```

### Checklist
- [ ] App abre no navegador
- [ ] Botão "Usar Dados de Exemplo" funciona
- [ ] Métricas aparecem formatadas: R$ 1.234,56
- [ ] Gráficos Plotly são interativos (hover funciona)
- [ ] Export Excel gera arquivo .xlsx
- [ ] Glossário tem 75+ termos
- [ ] Calculadoras funcionam (ROI, conversores)
- [ ] IA responde (se configurada)

---

## 🆘 Solução de Problemas

### Erro: "ModuleNotFoundError"
```bash
# Reinstalar dependências
pip install --upgrade -r requirements.txt
```

### Erro: "Port 8501 already in use"
```bash
# Usar porta diferente
streamlit run app.py --server.port 8502
```

### Erro: reportlab warnings
```bash
# Apenas warnings, pode ignorar
# Ou instalar explicitamente:
pip install reportlab
```

### Erro: "IA não configurada"
- **Solução 1**: Instalar Ollama (gratuito e local)
- **Solução 2**: Configurar Gemini no .env
- **Nota**: App funciona sem IA (apenas chat não disponível)

### Erro: Excel não gera
```bash
# Verificar xlsxwriter
pip install xlsxwriter openpyxl
```

### Erro: Formatação BR não aparece
```bash
# Instalar babel
pip install babel
```

---

## 🎯 Primeira Vez no App

### Passo a Passo para Iniciantes

**1. Instalar (uma vez)**
```
Duplo-clique: INSTALAR_DEPENDENCIAS.bat
Aguarde conclusão
```

**2. Iniciar**
```
Duplo-clique: INICIAR_APP.bat
Navegador abre automaticamente
```

**3. Testar com Dados de Exemplo**
```
Menu lateral → "Upload e Análise"
Clique: "📥 Usar Dados de Exemplo"
Aguarde: "✅ Dados carregados: 50 registros"
```

**4. Ver Resultados**
```
Menu lateral → "Resultados e Export"
Veja: métricas, insights, gráficos comparativos
```

**5. Explorar Ferramentas**
```
Menu lateral → "Calculadoras"
Tab ROI: calcule lucro da engorda
Tab Conversores: kg ↔ arroba, ha ↔ alqueire
```

**6. Consultar Glossário**
```
Menu lateral → "Glossário"
Busque: "nelore", "arroba", "confinamento"
Navegue pelas 11 categorias
```

**7. Conversar com IA (se configurada)**
```
Menu lateral → "Assistente IA"
Clique pergunta sugerida ou digite a sua
```

---

## 📊 Estrutura de Dados Esperada

### Colunas Essenciais (mínimo)
- **PREÇO POR KG** ou **PESO (KG) + VALOR**

### Colunas Recomendadas
- ANO, TRIMESTRE (para análise temporal)
- ESTADO (para comparação regional)
- RAÇA (para comparação de raças)
- GÊNERO, ERA, VIA

### Formato Aceito
- `.xlsx` (Excel)
- `.csv` (UTF-8 ou Latin-1, qualquer separador)

### Exemplo de Planilha
```
ANO | TRIMESTRE | ESTADO | RAÇA    | PESO (KG) | VALOR   | PREÇO POR KG
2024| 1         | SP     | Nelore  | 520       | 6760.00 | 13.00
2024| 1         | MG     | Angus   | 480       | 6480.00 | 13.50
2024| 2         | GO     | Brahman | 500       | 6250.00 | 12.50
```

---

## 🆕 Novidades da Versão 3.1.0

### Formatação Brasileira
- R$ 1.234,56 (moeda)
- 1.234,56 (números)
- 13/12/2024 (datas)

### Glossário Expandido
- 75+ termos de zootecnia
- 11 categorias organizadas
- Busca rápida

### Export Excel
- 3 abas: Dados, Estatísticas, Resumo
- Formatação profissional
- Valores em R$

### Análises Comparativas
- Dashboard com 4 insights principais
- Gráficos Plotly interativos
- 4 tabs: Estados, Raças, Tendência, Dispersão

### Filtros Avançados
- Múltiplos filtros simultâneos
- Busca em qualquer coluna
- Persistência entre páginas

### Calculadoras
- ROI da engorda
- Conversores (kg↔@, ha↔alqueire)
- Simulador de impacto de preços

---

## 💡 Dicas

1. **Primeira vez?** Use dados de exemplo
2. **Precisa de IA?** Instale Ollama (gratuito)
3. **Quer exportar?** Excel tem mais recursos que CSV
4. **Tem dúvida?** Consulte o Glossário (75+ termos)
5. **Quer calcular ROI?** Use a Calculadora na página 5

---

## 📞 Suporte

### Documentação
- `README.md` - Visão geral
- `HISTORICO_VERSOES.md` - Changelog PT-BR
- `MELHORIAS_V3.1.md` - Detalhes técnicos
- `RESUMO_IMPLEMENTACAO.md` - Guia rápido

### Arquivos de Ajuda
- `.env_template.txt` - Template para IA
- `COMO_INSTALAR.txt` - Instruções originais

---

## ✅ Pronto para Usar!

Após instalação:
```
1. Duplo-clique: INICIAR_APP.bat
2. Aguarde navegador abrir
3. Siga o guia da página inicial
4. Comece com "Usar Dados de Exemplo"
```

**Boa análise! 🐂📊🇧🇷**

