# 🧪 Teste Rápido - v3.1.0

## ⚡ 5 Minutos de Teste

### 1. Instalar (2 min)
```bash
pip install -r requirements.txt
```

### 2. Iniciar (30 seg)
```bash
streamlit run app.py
# Navegador abre em http://localhost:8501
```

### 3. Testar Funcionalidades (2 min)

#### ✅ Upload e Análise
```
1. Menu lateral → "Upload e Análise"
2. Clique: "📥 Usar Dados de Exemplo"
3. Aguarde: "✅ Dados carregados: 50 registros"
4. Expanda: "Aplicar Filtros"
5. Selecione: Estado = SP
6. Veja: métricas atualizarem
7. Digite na busca: "Nelore"
8. Confirme: R$ 1.234,56 (formatação BR)
```

#### ✅ Resultados e Export
```
1. Menu lateral → "Resultados e Export"
2. Veja: 4 insights (Estado Mais Caro, Raça Premium, etc.)
3. Tab "Estados": hover no gráfico
4. Tab "Raças": veja boxplot
5. Tab "Tendência": zoom no gráfico (arrastar)
6. Clique: "📊 Gerar Excel"
7. Baixe e abra: relatorio_bovinos.xlsx
8. Confirme: 3 abas + formatação R$
```

#### ✅ Glossário
```
1. Menu lateral → "Glossário"
2. Busque: "nelore"
3. Expanda resultado
4. Navegue: Raças Zebuínas
5. Confirme: 75+ termos
```

#### ✅ Calculadoras
```
1. Menu lateral → "Calculadoras"
2. Tab ROI:
   - Custo: 3000
   - Peso inicial: 350
   - Peso final: 520
   - Dias: 120
   - Clique "Calcular"
   - Veja: lucro, GMD, custo/@
3. Tab Conversores:
   - 450 kg → veja arrobas
   - Confirme: formatação BR
```

#### ✅ Assistente IA (se configurado)
```
1. Menu lateral → "Assistente IA"
2. Clique pergunta sugerida
3. Aguarde resposta
4. Ou: "Gerar Resumo Automático"
```

---

## ✅ Checklist Rápido

- [ ] App abre no navegador
- [ ] Guia de uso aparece na home
- [ ] "Usar Dados de Exemplo" carrega 50 registros
- [ ] Filtros funcionam (Estado, Raça, etc.)
- [ ] Busca encontra registros
- [ ] Dashboard mostra 4 insights
- [ ] Gráficos são interativos (hover funciona)
- [ ] Excel gera 3 abas formatadas
- [ ] Valores em R$ 1.234,56 (vírgula decimal)
- [ ] Glossário tem 75+ termos
- [ ] Busca no glossário funciona
- [ ] Calculadora ROI calcula corretamente
- [ ] Conversores: 450 kg = 30 @ ✅
- [ ] Simulador mostra impacto
- [ ] IA responde (se configurada)

---

## 🎯 Teste de Performance

### Dados de Exemplo (50 linhas)
- ⚡ Upload: < 1 segundo
- ⚡ Filtros: instantâneo
- ⚡ Gráficos: 1-2 segundos
- ⚡ Excel: 2-3 segundos
- ⚡ PDF: 1-2 segundos

### Dados Grandes (10.000 linhas)
- ⚡ Upload: 2-5 segundos
- ⚡ Filtros: < 1 segundo
- ⚡ Gráficos: 3-5 segundos
- ⚡ Excel: 5-10 segundos
- ⚡ PDF: 3-5 segundos

---

## 🐛 Se Algo Não Funcionar

### Sintomas Comuns

**"ModuleNotFoundError"**
```bash
pip install --upgrade -r requirements.txt
```

**"Port 8501 in use"**
```bash
streamlit run app.py --server.port 8502
```

**Excel não gera**
```bash
pip install xlsxwriter openpyxl
```

**Gráficos não aparecem**
```bash
pip install plotly
```

**IA não funciona**
- Instale Ollama OU
- Configure Gemini no .env OU
- Use app sem IA (funciona!)

---

## ✅ Teste BEM-SUCEDIDO?

Parabéns! Você tem agora:
- 📊 Sistema completo de análise de bovinos
- 🇧🇷 100% localizado para Brasil
- 📚 75+ termos de zootecnia
- 🧮 Calculadoras profissionais
- 📈 Gráficos interativos
- 🤖 IA especializada (opcional)

**Próximo passo:** Use com seus dados reais!

---

**Tempo total de teste:** 5 minutos  
**Resultado esperado:** ✅ Tudo funcionando  
**Versão testada:** 3.1.0 🇧🇷

