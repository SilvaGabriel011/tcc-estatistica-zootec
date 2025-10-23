# 🚀 Funcionalidades do App - Tio ZooEstatisco

## 🎯 Objetivo
Este documento descreve todas as funcionalidades implementadas na aplicação Tio ZooEstatisco, organizadas por páginas e módulos.

## 📱 Estrutura Geral da Aplicação

### Navegação Principal
A aplicação é organizada em páginas independentes acessíveis através da barra lateral do Streamlit:

1. **🏠 Página Inicial** (`app.py`)
2. **📥 Upload e Análise** (`pages/1_Upload_e_Analise.py`)
3. **📊 Resultados e Export** (`pages/2_Resultados_e_Export.py`)
4. **🤖 Assistente IA** (`pages/3_Assistente_IA.py`)
5. **🧮 Calculadoras** (`pages/4_Calculadoras.py`)

## 🏠 Página Inicial (app.py)

### Funcionalidades
- **Tela de Boas-vindas**: Apresentação da aplicação
- **Navegação**: Links para todas as páginas
- **Informações do Sistema**: Versão, status, dependências
- **Configuração Inicial**: Verificação de dependências

### Características Técnicas
```python
# Configuração da página
st.set_page_config(
    page_title="Tio ZooEstatisco",
    page_icon="🐂",
    layout="wide"
)

# Verificação de dependências
def _check_startup_dependencies():
    required_packages = ['pandas', 'plotly', 'statsmodels', 'openpyxl']
    # Verificação e alertas para pacotes ausentes
```

## 📥 Página de Upload e Análise

### Funcionalidades Principais

#### 1. Upload de Arquivos
- **Formatos Suportados**: Excel (.xlsx), CSV (.csv)
- **Validação de Arquivo**: Tamanho máximo (100MB), formato correto
- **Encoding Automático**: UTF-8 e Latin-1
- **Feedback Visual**: Progress bar e mensagens de status

```python
uploaded_file = st.file_uploader(
    'Selecione um arquivo (.xlsx ou .csv)', 
    type=['xlsx','csv'],
    help='Envie sua planilha com dados de bovinos'
)
```

#### 2. Dados de Exemplo
- **Gerador de Dados**: 50 registros de exemplo
- **Dados Realistas**: Baseados em padrões do mercado brasileiro
- **Variedade**: Diferentes raças, estados, preços

#### 3. Processamento e Limpeza
- **Limpeza Automática**: Remoção de duplicatas, tratamento de nulos
- **Validação de Dados**: Verificação de tipos e ranges
- **Otimização de Memória**: Redução do uso de RAM
- **Feedback Detalhado**: Relatório de limpeza

```python
def process_file(status_update=None):
    # Step 1: Read file
    # Step 2: Clean data
    # Step 3: Optimize memory
    # Step 4: Save to session state
```

#### 4. Sistema de Filtros

##### Filtros Simples
- **Estado**: Dropdown com todos os estados
- **Ano**: Seleção de anos disponíveis
- **Raça**: Lista de raças presentes
- **Trimestre**: Filtro por trimestre
- **Faixa de Preço**: Slider para preço por kg

##### Filtros Avançados
- **Múltiplos Critérios**: Combinação de filtros
- **Presets**: Salvar e carregar configurações de filtro
- **Aplicação em Tempo Real**: Filtros aplicados instantaneamente

```python
# Sistema de presets de filtros
def save_filter_preset(preset_name, filters):
    """Salva configuração de filtros."""
    
def load_filter_preset(preset_name):
    """Carrega configuração de filtros."""
```

#### 5. Histórico de Uploads
- **Registro de Arquivos**: Histórico dos últimos uploads
- **Informações Detalhadas**: Nome, tamanho, número de registros
- **Persistência**: Histórico salvo em arquivo JSON

### Funcionalidades Técnicas

#### Performance
- **Cache de Filtros**: Opções de filtro em cache
- **Processamento Assíncrono**: Upload não bloqueia interface
- **Otimização de Memória**: Redução automática do uso de RAM

#### Validação
- **Verificação de Integridade**: Validação de estrutura de dados
- **Tratamento de Erros**: Mensagens claras para problemas
- **Recuperação**: Tentativas automáticas de correção

## 📊 Página de Resultados e Export

### Funcionalidades Principais

#### 1. Curadoria de Variáveis
- **Identificação Automática**: Tipo de variável (quantitativa/categórica)
- **Recomendações de Análise**: Sugestões baseadas no tipo
- **Prevenção de Erros**: Validação de cálculos inadequados
- **Visualização Clara**: Interface mostrando tipos e recomendações

```python
# Curadoria automática
dataset_summary = get_dataset_summary(df)

# Validação de análises
validation_result = prevent_invalid_calculations(df, 'mean')
```

#### 2. Análise Descritiva

##### Para Variáveis Quantitativas
- **Estatísticas Básicas**: N, média, desvio padrão, mediana, min/max
- **Intervalos de Confiança**: IC 95% para médias por grupo
- **Visualizações**: Histogramas, boxplots, gráficos de dispersão

##### Para Variáveis Categóricas
- **Frequências**: Contagem absoluta e percentuais
- **Visualizações**: Gráficos de pizza, barras, tabelas

```python
# Análise descritiva automática
for column in df.columns:
    var_info = analyze_variable_type(df[column])
    if var_info['type'] == 'quantitative':
        stats = descriptive_stats(df[column])
        # Intervalos de confiança se houver grupos
        ci_result = means_ci(df, group_col, column)
    elif var_info['type'] == 'categorical':
        freq = df[column].value_counts()
        # Gráficos apropriados
```

#### 3. Visualizações Interativas

##### Gráficos por Tipo de Variável
- **Quantitativas**: Histogramas, boxplots, dispersão
- **Categóricas**: Pizza, barras, tabelas
- **Temporais**: Linhas, tendências
- **Comparações**: Boxplots por grupo, barras comparativas

##### Gráficos Disponíveis
1. **Histogramas**: Distribuição de variáveis quantitativas
2. **Boxplots**: Comparação entre grupos
3. **Gráficos de Dispersão**: Correlações entre variáveis
4. **Gráficos de Pizza**: Proporções de variáveis categóricas
5. **Gráficos de Barras**: Comparações entre categorias
6. **Gráficos de Linha**: Tendências temporais

```python
# Geração automática de gráficos
plots = generate_all_plots(df)
for plot_name, plot_fig in plots.items():
    if plot_fig:
        st.plotly_chart(plot_fig, use_container_width=True)
```

#### 4. Exportação de Dados

##### Exportação Excel
- **Múltiplas Abas**: Dados, estatísticas, gráficos
- **Formatação Brasileira**: Moeda, números, datas
- **Formatação Avançada**: Cores, bordas, headers
- **Relatório Completo**: Análises e visualizações

##### Exportação PDF
- **Relatório Estruturado**: Seções organizadas
- **Gráficos Incluídos**: Visualizações em alta qualidade
- **Formatação Profissional**: Layout limpo e organizado
- **Dados Resumidos**: Estatísticas principais

```python
# Exportação Excel
excel_data = export_to_excel(df, stats)

# Exportação PDF
pdf_data = generate_pdf_report(df, stats, plots)
```

#### 5. Histórico de Análises
- **Registro de Análises**: Histórico das análises realizadas
- **Metadados**: Timestamp, número de registros, período
- **Comparações**: Análises anteriores para comparação
- **Persistência**: Histórico mantido na sessão

### Funcionalidades Técnicas

#### Performance
- **Cache de Análises**: Resultados em cache para reutilização
- **Processamento Otimizado**: Análises eficientes
- **Lazy Loading**: Carregamento sob demanda

#### Qualidade
- **Validação de Resultados**: Verificação de cálculos
- **Controle de Erros**: Tratamento robusto de exceções
- **Feedback Visual**: Indicadores de progresso

## 🤖 Página do Assistente IA

### Funcionalidades Principais

#### 1. Integração com Múltiplos Modelos
- **Ollama (Local)**: Modelo gratuito e privado
- **Google Gemini**: API da Google
- **OpenAI**: API da OpenAI (opcional)

#### 2. Chat Interativo
- **Interface Conversacional**: Chat em tempo real
- **Contexto de Dados**: IA conhece os dados carregados
- **Histórico de Conversa**: Manutenção do contexto
- **Streaming de Respostas**: Respostas em tempo real

```python
class AIAssistant:
    def __init__(self):
        self.model = self._detect_available_model()
    
    def chat(self, message, context=""):
        """Envia mensagem para IA com contexto."""
```

#### 3. Análise Automática de Dados
- **Resumo Automático**: Análise dos dados carregados
- **Insights Inteligentes**: Descoberta de padrões
- **Interpretação de Gráficos**: Explicação de visualizações
- **Recomendações**: Sugestões de análises adicionais

#### 4. Especialização em Zootecnia
- **Base de Conhecimento**: Glossário de 75+ termos
- **Contexto Agrícola**: Conhecimento do mercado brasileiro
- **Interpretação Técnica**: Explicações especializadas
- **Recomendações Práticas**: Sugestões aplicáveis

#### 5. Configuração e Personalização
- **Seleção de Modelo**: Escolha do modelo de IA
- **Configuração de Contexto**: Controle do uso de dados
- **Limpeza de Conversa**: Reset do histórico
- **Preferências**: Configurações personalizadas

### Funcionalidades Técnicas

#### Integração com APIs
```python
# Configuração de modelos
def _ollama_chat(self, message, context):
    """Chat via Ollama local."""
    
def _gemini_chat(self, message, context):
    """Chat via Google Gemini."""
    
def _openai_chat(self, message, context):
    """Chat via OpenAI."""
```

#### Tratamento de Erros
- **Fallback de Modelos**: Alternância automática
- **Tratamento de Timeout**: Retry automático
- **Mensagens de Erro**: Feedback claro para usuário

## 🧮 Página de Calculadoras

### Funcionalidades Principais

#### 1. Calculadora ROI (Retorno sobre Investimento)
- **Cálculo Completo**: Entrada, saída, lucro, ROI
- **Métricas Zootécnicas**: GMD, arrobas ganhas
- **Análise de Viabilidade**: Lucratividade da operação
- **Formatação Brasileira**: Valores em R$ com formatação correta

```python
def calculate_roi(custo_animal, peso_inicial, peso_final, 
                  preco_venda, dias_engorda, outras_despesas):
    """Calcula ROI completo da engorda."""
    ganho_peso = peso_final - peso_inicial
    gmd = ganho_peso / dias_engorda
    receita = peso_final * preco_venda
    custo_total = custo_animal + outras_despesas
    lucro = receita - custo_total
    roi_percentual = (lucro / custo_total) * 100
    return lucro, roi_percentual, gmd
```

#### 2. Conversores de Unidades
- **Peso**: kg ↔ arroba (15 kg)
- **Área**: hectares ↔ alqueires (paulista, mineiro, goiano)
- **Preço**: R$/kg ↔ R$/arroba
- **Conversões Precisas**: Fórmulas corretas para cada unidade

#### 3. Simulador de Cenários
- **Variação de Preços**: Impacto de mudanças de preço
- **Análise de Sensibilidade**: Diferentes cenários
- **Visualização de Impacto**: Gráficos de variação
- **Comparação**: Cenário base vs. cenários alternativos

#### 4. Índices Zootécnicos
- **GMD (Ganho Médio Diário)**: Cálculo em g/dia
- **Conversão Alimentar**: Eficiência alimentar
- **Peso 205 dias**: Padrão da indústria
- **Interpretação**: Comparação com benchmarks

#### 5. Análise de Performance Detalhada
- **Eficiência Reprodutiva**: Taxas de prenhez e desmama
- **Produtividade por Hectare**: kg/ha produzidos
- **Análise Financeira**: ROI, payback, margens
- **Benchmarking**: Comparação com padrões da indústria

### Funcionalidades Técnicas

#### Cálculos Precisos
```python
# Conversões precisas
def converter_kg_arroba(kg):
    return kg / 15

def converter_arroba_kg(arroba):
    return arroba * 15

def converter_alqueire(hectares, tipo):
    conversoes = {
        "paulista": 2.42,
        "mineiro": 4.84,
        "goiano": 4.84
    }
    return hectares / conversoes[tipo]
```

#### Validação de Entradas
- **Ranges Realistas**: Valores dentro de faixas esperadas
- **Validação de Tipos**: Verificação de dados numéricos
- **Feedback Imediato**: Alertas para valores inválidos

## 🔧 Funcionalidades Técnicas Gerais

### 1. Sistema de Temas
- **Tema Claro/Escuro**: Alternância visual
- **Persistência**: Preferência salva na sessão
- **Customização**: Cores e estilos personalizados

### 2. Sistema de Notificações
- **Toasts**: Notificações não intrusivas
- **Alertas**: Mensagens de erro e sucesso
- **Feedback Visual**: Indicadores de progresso

### 3. Gerenciamento de Estado
- **Session State**: Persistência de dados na sessão
- **Cache**: Otimização de performance
- **Sincronização**: Estado consistente entre páginas

### 4. Tratamento de Erros
- **Validação Robusta**: Verificação de dados
- **Recuperação**: Tentativas automáticas
- **Feedback Claro**: Mensagens de erro compreensíveis

### 5. Performance e Otimização
- **Cache Inteligente**: Cache de operações pesadas
- **Lazy Loading**: Carregamento sob demanda
- **Otimização de Memória**: Uso eficiente de RAM

## 📊 Funcionalidades de Análise

### 1. Análise Descritiva
- **Estatísticas Básicas**: Para variáveis quantitativas
- **Frequências**: Para variáveis categóricas
- **Intervalos de Confiança**: IC 95% para médias

### 2. Visualizações
- **Gráficos Apropriados**: Baseados no tipo de variável
- **Interatividade**: Zoom, hover, filtros
- **Exportação**: Gráficos em alta qualidade

### 3. Curadoria de Variáveis
- **Identificação Automática**: Tipo de variável
- **Recomendações**: Análises apropriadas
- **Prevenção de Erros**: Validação de cálculos

## 🎯 Funcionalidades de Exportação

### 1. Excel Avançado
- **Múltiplas Abas**: Dados, estatísticas, gráficos
- **Formatação**: Cores, bordas, headers
- **Formatação Brasileira**: Moeda, números, datas

### 2. PDF Profissional
- **Relatório Estruturado**: Seções organizadas
- **Gráficos Incluídos**: Visualizações em alta qualidade
- **Layout Profissional**: Design limpo e organizado

### 3. Dados Brutos
- **CSV**: Exportação simples
- **JSON**: Formato estruturado
- **Dados Filtrados**: Apenas dados selecionados

## 🚀 Funcionalidades de IA

### 1. Chat Inteligente
- **Contexto de Dados**: IA conhece os dados
- **Especialização**: Conhecimento em zootecnia
- **Streaming**: Respostas em tempo real

### 2. Análise Automática
- **Resumos**: Análise automática dos dados
- **Insights**: Descoberta de padrões
- **Recomendações**: Sugestões de análises

### 3. Interpretação
- **Explicação de Gráficos**: Interpretação de visualizações
- **Contexto Técnico**: Explicações especializadas
- **Recomendações Práticas**: Sugestões aplicáveis

## ✅ Checklist de Funcionalidades

### Upload e Análise
- [x] Upload de arquivos Excel/CSV
- [x] Validação de dados
- [x] Limpeza automática
- [x] Sistema de filtros
- [x] Dados de exemplo
- [x] Histórico de uploads

### Resultados e Export
- [x] Curadoria de variáveis
- [x] Análise descritiva
- [x] Visualizações apropriadas
- [x] Intervalos de confiança
- [x] Exportação Excel/PDF
- [x] Histórico de análises

### Assistente IA
- [x] Chat interativo
- [x] Múltiplos modelos
- [x] Contexto de dados
- [x] Especialização em zootecnia
- [x] Análise automática

### Calculadoras
- [x] ROI completo
- [x] Conversores de unidades
- [x] Simulador de cenários
- [x] Índices zootécnicos
- [x] Análise de performance

### Funcionalidades Técnicas
- [x] Sistema de temas
- [x] Notificações
- [x] Gerenciamento de estado
- [x] Tratamento de erros
- [x] Otimização de performance

## 🎉 Conclusão

O Tio ZooEstatisco oferece uma solução completa para análise de dados de mercado de bovinos, com funcionalidades que cobrem desde o upload de dados até análises avançadas e exportação de relatórios. Todas as funcionalidades foram desenvolvidas seguindo as melhores práticas de desenvolvimento e com foco na experiência do usuário.
