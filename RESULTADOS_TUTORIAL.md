# 📊 Resultados - Como Usar o App Tio ZooEstatisco

## 🎯 Objetivo
Este documento apresenta um tutorial completo de como usar o aplicativo Tio ZooEstatisco, incluindo screenshots das telas e exemplos práticos de uso.

## 🚀 Iniciando o Aplicativo

### 1. Acesso à Aplicação
```
URL: http://localhost:8501
Comando: streamlit run app.py
```

### 2. Tela Inicial
A primeira tela apresenta:
- **Título**: Tio ZooEstatisco
- **Descrição**: Análise Estatística de Dados de Mercado de Bovinos
- **Navegação**: Links para todas as páginas
- **Status**: Informações do sistema

![Tela Inicial](screenshots/tela_inicial.png)

## 📥 Página de Upload e Análise

### 1. Upload de Arquivos

#### Passo 1: Selecionar Arquivo
1. Clique em "Selecione um arquivo (.xlsx ou .csv)"
2. Escolha seu arquivo Excel ou CSV
3. Aguarde o processamento automático

#### Formatos Suportados
- **Excel (.xlsx)**: Formato recomendado
- **CSV (.csv)**: Com encoding UTF-8 ou Latin-1
- **Tamanho máximo**: 100MB

![Upload de Arquivo](screenshots/upload_arquivo.png)

#### Passo 2: Dados de Exemplo (Alternativa)
Se não tiver dados próprios:
1. Clique em "📥 Usar Dados de Exemplo"
2. Sistema gera 50 registros realistas
3. Dados incluem todas as variáveis necessárias

![Dados de Exemplo](screenshots/dados_exemplo.png)

### 2. Processamento e Limpeza

#### Feedback Visual
Durante o processamento, você verá:
- **Progress Bar**: Indicador de progresso
- **Mensagens de Status**: "Lendo arquivo...", "Limpando dados...", etc.
- **Resultados da Limpeza**: Número de registros e colunas

![Processamento](screenshots/processamento.png)

#### Relatório de Limpeza
```
✅ Dados limpos: 1.250 linhas, 12 colunas
💾 Memória otimizada: 15.2% de redução (2.3 MB economizados)
```

### 3. Sistema de Filtros

#### Filtros Simples
Interface intuitiva com:
- **Estado**: Dropdown com estados disponíveis
- **Ano**: Seleção de anos
- **Raça**: Lista de raças
- **Trimestre**: Filtro temporal
- **Faixa de Preço**: Slider interativo

![Filtros Simples](screenshots/filtros_simples.png)

#### Filtros Avançados
Para análises mais complexas:
- **Múltiplos Critérios**: Combinação de filtros
- **Presets**: Salvar configurações
- **Aplicação em Tempo Real**: Resultados instantâneos

![Filtros Avançados](screenshots/filtros_avancados.png)

#### Sistema de Presets
1. **Salvar Preset**: Nomeie sua configuração de filtros
2. **Carregar Preset**: Selecione configuração salva
3. **Gerenciar Presets**: Editar ou excluir

![Presets](screenshots/presets_filtros.png)

## 📊 Página de Resultados e Export

### 1. Curadoria de Variáveis

#### Identificação Automática
O sistema identifica automaticamente:
- **Variáveis Quantitativas**: Preço, peso, valor
- **Variáveis Categóricas**: Estado, raça, gênero
- **Recomendações**: Análises apropriadas para cada tipo

![Curadoria](screenshots/curadoria_variaveis.png)

#### Validação de Análises
```
✅ Todas as variáveis quantitativas podem ter estatísticas descritivas calculadas
⚠️ Atenção: Algumas variáveis não devem ter média calculada:
• ESTADO: Não é apropriado calcular média para variáveis do tipo categorical
```

### 2. Análise Descritiva

#### Para Variáveis Quantitativas
**Exemplo: PREÇO POR KG**
```
N: 1.250
Média: R$ 13,45
DP: R$ 2,18
Mediana: R$ 13,20
Mínimo: R$ 8,50
Máximo: R$ 21,30
```

#### Intervalos de Confiança a 95%
**Exemplo: Preço por Raça**
| Grupo | N | Média | DP | IC 95% Inf | IC 95% Sup |
|-------|---|-------|----|-----------|-----------| 
| Nelore | 450 | R$ 13,20 | R$ 2,10 | R$ 13,01 | R$ 13,39 |
| Angus | 320 | R$ 14,80 | R$ 2,45 | R$ 14,53 | R$ 15,07 |
| Hereford | 280 | R$ 12,90 | R$ 1,95 | R$ 12,67 | R$ 13,13 |

### 3. Visualizações

#### Gráficos por Tipo de Variável

##### Histogramas (Variáveis Quantitativas)
![Histograma](screenshots/histograma_preco.png)
- **Uso**: Mostrar distribuição de preços
- **Interpretação**: Forma da distribuição, centralidade

##### Boxplots (Comparações)
![Boxplot](screenshots/boxplot_raca.png)
- **Uso**: Comparar preços entre raças
- **Interpretação**: Mediana, quartis, outliers

##### Gráficos de Pizza (Categóricas)
![Pizza](screenshots/pizza_estados.png)
- **Uso**: Distribuição de estados
- **Interpretação**: Proporções relativas

##### Gráficos de Dispersão (Correlações)
![Dispersão](screenshots/dispersao_peso_preco.png)
- **Uso**: Relação entre peso e preço
- **Interpretação**: Correlação, tendência

##### Gráficos de Linha (Tendências)
![Linha](screenshots/linha_temporal.png)
- **Uso**: Evolução de preços ao longo do tempo
- **Interpretação**: Tendência temporal

### 4. Exportação de Dados

#### Exportação Excel
1. Clique em "📊 Exportar para Excel"
2. Aguarde o processamento
3. Download automático do arquivo

**Conteúdo do Excel**:
- **Aba "Dados"**: Dados originais formatados
- **Aba "Estatísticas"**: Estatísticas descritivas
- **Aba "Intervalos"**: Intervalos de confiança
- **Formatação**: Valores em R$, cores, bordas

![Export Excel](screenshots/export_excel.png)

#### Exportação PDF
1. Clique em "📄 Gerar Relatório PDF"
2. Sistema gera relatório completo
3. Download automático

**Conteúdo do PDF**:
- **Capa**: Título e informações
- **Resumo Executivo**: Principais achados
- **Estatísticas Descritivas**: Tabelas formatadas
- **Visualizações**: Gráficos em alta qualidade
- **Interpretações**: Análises e insights

![Export PDF](screenshots/export_pdf.png)

## 🤖 Página do Assistente IA

### 1. Configuração Inicial

#### Verificação de Modelos
O sistema detecta automaticamente:
- **Ollama**: Modelo local (recomendado)
- **Gemini**: API da Google
- **OpenAI**: API da OpenAI

![Configuração IA](screenshots/configuracao_ia.png)

#### Instalação do Ollama (Recomendado)
1. Baixe em: https://ollama.com/download
2. Instale o programa
3. Execute no terminal: `ollama run llama3.1`
4. Aguarde o download (5-15 minutos)

### 2. Chat Interativo

#### Interface de Chat
```
Usuário: Qual raça tem melhor preço médio?

IA: Com base nos dados carregados, a raça Angus apresenta o melhor preço médio:

📊 Preços Médios por Raça:
• Angus: R$ 14,80/kg
• Nelore: R$ 13,20/kg  
• Hereford: R$ 12,90/kg

A raça Angus tem um ágio de aproximadamente 12% sobre a Nelore, que é a raça mais comum no mercado brasileiro. Isso pode estar relacionado à qualidade da carne e à preferência do consumidor.
```

#### Funcionalidades do Chat
- **Contexto de Dados**: IA conhece os dados carregados
- **Histórico**: Manutenção da conversa
- **Streaming**: Respostas em tempo real
- **Limpeza**: Botão para limpar conversa

![Chat IA](screenshots/chat_ia.png)

### 3. Análise Automática

#### Resumo Automático
Clique em "📝 Gerar Resumo Automático dos Dados":

```
📊 RESUMO AUTOMÁTICO DOS DADOS

📈 Principais Achados:
• Dataset com 1.250 registros de bovinos
• Período analisado: 2020-2024
• Estados principais: SP (35%), MG (28%), GO (22%)
• Raças predominantes: Nelore (36%), Angus (26%), Hereford (22%)

💰 Análise de Preços:
• Preço médio geral: R$ 13,45/kg
• Variação por raça: R$ 12,90 a R$ 14,80/kg
• Tendência temporal: Crescimento de 8% ao ano
• Sazonalidade: Q4 com preços 12% superiores

🎯 Insights Principais:
• Raça Angus com maior valor agregado
• Mercado concentrado em 3 estados
• Crescimento sustentado de preços
• Oportunidade em Q4 para vendas
```

### 4. Perguntas Sugeridas

O sistema oferece perguntas pré-definidas:
- "Qual raça tem melhor preço médio?"
- "Como interpretar o p-valor?"
- "Quais análises fazer para TCC?"
- "O que é o tamanho de efeito?"
- "Explique o conceito de arroba"
- "Qual a diferença entre gado gordo e magro?"

![Perguntas Sugeridas](screenshots/perguntas_sugeridas.png)

## 🧮 Página de Calculadoras

### 1. Calculadora ROI

#### Interface de Entrada
```
💰 Calculadora de ROI (Retorno sobre Investimento)

ENTRADA:
• Custo do animal: R$ 3.000,00
• Peso inicial: 350 kg
• Outras despesas: R$ 500,00

SAÍDA:
• Peso final: 520 kg
• Preço de venda: R$ 13,00/kg
• Dias de engorda: 120
```

#### Resultados Calculados
```
📊 RESULTADOS:

Ganho de Peso: 170,0 kg
GMD: 1,417 kg/dia
Arrobas Ganhas: 11,33

Lucro: R$ 1.260,00
ROI: 36,0%
Custo/Arroba: R$ 309,09

✅ Operação lucrativa! Lucro de R$ 1.260,00 em 120 dias.
```

![Calculadora ROI](screenshots/calculadora_roi.png)

### 2. Conversores de Unidades

#### Conversão de Peso
```
Peso: kg ↔ Arroba

450 kg = 30,00 arrobas
30 @ = 450,0 kg
```

#### Conversão de Área
```
Área: Hectares ↔ Alqueires

10,0 ha = 4,13 alqueires (paulista)
5,0 alq (paulista) = 12,1 ha
```

#### Conversão de Preço
```
Preço: R$/kg ↔ R$/@

R$ 13,00/kg = R$ 195,00/@
```

![Conversores](screenshots/conversores.png)

### 3. Simulador de Cenários

#### Interface do Simulador
```
📊 Simulador de Cenários

Cenário Base:
Receita Total Atual: R$ 1.687.500,00

Variação de preço: 0% (slider -30% a +30%)

Nova Receita: R$ 1.687.500,00
Diferença: R$ 0,00 (0,0%)
Impacto: neutro
```

#### Exemplo de Variação
```
Variação: +10%

Nova Receita: R$ 1.856.250,00
Diferença: R$ 168.750,00 (+10,0%)
Impacto: positivo

✅ Com aumento de 10%, você ganharia R$ 168.750,00 a mais.
```

![Simulador](screenshots/simulador_cenarios.png)

### 4. Índices Zootécnicos

#### Interface de Cálculo
```
📈 Calculadora de Índices Zootécnicos

🐄 Dados do Animal:
• Peso ao nascer: 35 kg
• Peso atual: 400 kg
• Idade: 365 dias
• Consumo diário: 12,0 kg MS
• Peso desejado: 520 kg

🌱 Dados da Pastagem/Alimentação:
• Proteína Bruta: 12,0%
• Energia Digestível: 2,8 Mcal/kg
• NDF: 65,0%
• Custo MS: R$ 0,25/kg
• Área de pasto: 1,0 ha
```

#### Resultados dos Índices
```
📊 RESULTADOS DOS ÍNDICES:

GMD: 1000 g/dia
Peso 205 dias: 240 kg
Dias para peso final: 120 dias

Conversão Alimentar: 12,0 kg MS/kg ganho
Eficiência Alimentar: 8,3%
Custo diário: R$ 3,00

Custo/kg ganho: R$ 3,60
UA/hectare: 1,0
Rendimento carcaça: 270 kg
```

![Índices Zootécnicos](screenshots/indices_zootecnicos.png)

### 5. Análise de Performance

#### Interface de Análise
```
🔬 Análise de Performance Detalhada

📊 Dados do Rebanho:
• Número de animais: 100
• Taxa de prenhez: 85,0%
• Taxa de desmama: 90,0%
• Idade primeiro parto: 36,0 meses
• Intervalo entre partos: 14,0 meses

💰 Dados Financeiros:
• Custo produção: R$ 8,50/kg
• Preço venda: R$ 12,00/kg
• Receita/hectare: R$ 1.500,00
• Custo/hectare: R$ 1.200,00
• Área total: 100,0 hectares
```

#### Resultados da Análise
```
📊 RESULTADOS DA ANÁLISE:

Eficiência Reprodutiva: 76,5%
Produtividade/ha: 765,0 kg/ha
Margem/kg: R$ 3,50

Margem Total: R$ 267.750,00
Margem/hectare: R$ 300,00
ROI Produção: 25,0%

Payback: 4,0 anos
Produção anual: 76.500,0 kg
Bezerros/ha: 0,8
```

#### Benchmarking
```
🎯 BENCHMARKING COM PADRÕES DA INDÚSTRIA:

✅ Taxa Prenhez: 85,0 vs 85,0 (Meta da indústria: 85%) - Excelente!
✅ Eficiência Reprodutiva: 76,5 vs 76,5 (Meta da indústria: 76,5%) - Excelente!
✅ Produtividade/ha: 765,0 vs 150,0 (Meta da indústria: 150 kg/ha) - Excelente!
✅ ROI: 25,0 vs 15,0 (Meta da indústria: 15%) - Excelente!
```

![Análise Performance](screenshots/analise_performance.png)

## 📋 Histórico de Análises

### Visualização do Histórico
```
📋 Histórico de Análises

13/12/2024 14:30 - 1.250 registros (2020-2024) - 8 estados, 5 raças - R$ 13,45/kg
12/12/2024 16:45 - 980 registros (2021-2024) - 6 estados, 4 raças - R$ 12,80/kg
11/12/2024 09:15 - 1.100 registros (2020-2023) - 7 estados, 5 raças - R$ 13,20/kg
```

## 🎯 Dicas de Uso

### 1. Para Análises Básicas
1. **Carregue seus dados** na página de Upload
2. **Aplique filtros** se necessário
3. **Veja os resultados** na página de Resultados
4. **Exporte** em Excel ou PDF

### 2. Para Análises Avançadas
1. **Use o Assistente IA** para insights automáticos
2. **Experimente diferentes filtros** para comparações
3. **Salve presets** de filtros para reutilização
4. **Gere relatórios** para apresentações

### 3. Para Cálculos Específicos
1. **Use as Calculadoras** para ROI e conversões
2. **Simule cenários** com diferentes preços
3. **Calcule índices zootécnicos** para performance
4. **Compare com benchmarks** da indústria

## 🚨 Solução de Problemas

### Problemas Comuns

#### 1. "Nenhum dado carregado"
- **Solução**: Vá para a página de Upload e carregue um arquivo

#### 2. "Erro ao ler arquivo"
- **Solução**: Verifique se o arquivo está em formato Excel ou CSV

#### 3. "IA não disponível"
- **Solução**: Configure Ollama ou adicione chave do Gemini

#### 4. "Gráficos não aparecem"
- **Solução**: Verifique se há dados suficientes para visualização

### Contato e Suporte
- **Documentação**: Consulte os arquivos de documentação
- **Tutorial**: Siga este guia passo a passo
- **Exemplos**: Use os dados de exemplo para testar

## 🎉 Conclusão

O Tio ZooEstatisco oferece uma interface intuitiva e poderosa para análise de dados de mercado de bovinos. Com suas funcionalidades de curadoria de variáveis, análise descritiva apropriada e assistente IA especializado, você pode realizar análises profissionais e obter insights valiosos sobre o mercado.

### Próximos Passos
1. **Explore todas as funcionalidades** usando os dados de exemplo
2. **Carregue seus próprios dados** para análises reais
3. **Use o Assistente IA** para descoberta de insights
4. **Gere relatórios** para apresentações e documentos
5. **Experimente as Calculadoras** para análises específicas

Boa análise! 🐂📊
