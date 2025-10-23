# 📊 Estrutura de Dados - Tio ZooEstatisco

## 🎯 Objetivo
Este documento descreve quais dados são analisados na aplicação Tio ZooEstatisco e como eles são processados, seguindo a metodologia de curadoria de variáveis.

## 📋 Dados Analisados

### Estrutura Base do Dataset
A aplicação foi desenvolvida para analisar dados de mercado de bovinos, com foco em preços, características dos animais e informações geográficas/temporais.

### Variáveis Principais

#### 1. Variáveis Temporais
- **ANO**: Ano da transação/venda
  - **Tipo**: Quantitativa (discreta)
  - **Análise**: Tendências temporais, gráficos de linha
  - **Exemplo**: 2023, 2024

- **TRIMESTRE**: Trimestre do ano
  - **Tipo**: Quantitativa (discreta)
  - **Análise**: Sazonalidade, comparações trimestrais
  - **Exemplo**: 1, 2, 3, 4

#### 2. Variáveis Geográficas
- **ESTADO**: Estado brasileiro onde ocorreu a transação
  - **Tipo**: Categórica
  - **Análise**: Frequências, gráficos de pizza/barras
  - **Exemplo**: SP, MG, GO, MT

#### 3. Variáveis dos Animais
- **RAÇA**: Raça do animal
  - **Tipo**: Categórica
  - **Análise**: Frequências, distribuição por categoria
  - **Exemplo**: Nelore, Angus, Hereford, Gir

- **GÊNERO**: Gênero do animal
  - **Tipo**: Categórica
  - **Análise**: Frequências, comparações
  - **Exemplo**: Macho, Fêmea

- **ERA**: Era/categoria do animal
  - **Tipo**: Categórica
  - **Análise**: Frequências, distribuição
  - **Exemplo**: Jovem, Adulto, Velho

- **VIA**: Via de comercialização
  - **Tipo**: Categórica
  - **Análise**: Frequências, padrões de venda
  - **Exemplo**: Direta, Intermediária

- **TIPO GADO GORDO**: Tipo específico do gado
  - **Tipo**: Categórica
  - **Análise**: Frequências, categorização
  - **Exemplo**: Boi Gordo, Vaca Gorda, Novilho

#### 4. Variáveis Físicas
- **PESO (KG)**: Peso do animal em quilogramas
  - **Tipo**: Quantitativa (contínua)
  - **Análise**: Estatísticas descritivas, intervalos de confiança
  - **Exemplo**: 350.5, 420.0, 480.2

#### 5. Variáveis Financeiras
- **VALOR**: Valor total da transação em reais
  - **Tipo**: Quantitativa (contínua)
  - **Análise**: Estatísticas descritivas, intervalos de confiança
  - **Exemplo**: 4550.00, 6300.00, 7200.50

- **PREÇO POR KG**: Preço por quilograma em reais
  - **Tipo**: Quantitativa (contínua)
  - **Análise**: Estatísticas descritivas, intervalos de confiança, correlações
  - **Exemplo**: 13.00, 15.50, 17.25

#### 6. Variáveis Derivadas (Calculadas Automaticamente)
- **ARROBA GORDO**: Preço por arroba (PREÇO POR KG × 15)
  - **Tipo**: Quantitativa (contínua)
  - **Análise**: Estatísticas descritivas, conversões
  - **Exemplo**: 195.00, 232.50, 258.75

- **ARROBA MAGRO**: Preço da arroba magra (quando disponível)
  - **Tipo**: Quantitativa (contínua)
  - **Análise**: Comparações com arroba gordo
  - **Exemplo**: 180.00, 210.00, 240.00

- **% ÁGIO**: Percentual de ágio (ARROBA MAGRO / ARROBA GORDO - 1)
  - **Tipo**: Quantitativa (contínua)
  - **Análise**: Estatísticas descritivas, tendências
  - **Exemplo**: 0.08, 0.12, 0.15

## 🔄 Processamento dos Dados

### 1. Upload e Validação

#### Formatos Suportados
- **Excel (.xlsx)**: Formato principal
- **CSV (.csv)**: Formato alternativo
- **Encoding**: UTF-8 (preferencial) ou Latin-1

#### Validação Inicial
```python
def validate_uploaded_data(df):
    """Valida estrutura básica dos dados."""
    required_columns = ['ANO', 'ESTADO', 'RAÇA', 'PESO (KG)', 'VALOR']
    
    # Verificar colunas obrigatórias
    missing_columns = [col for col in required_columns if col not in df.columns]
    if missing_columns:
        raise ValueError(f"Colunas obrigatórias ausentes: {missing_columns}")
    
    # Verificar tipos de dados
    validate_data_types(df)
    
    return True
```

### 2. Limpeza de Dados

#### Processos de Limpeza
1. **Remoção de Duplicatas**
   - Identificação de registros duplicados
   - Remoção ou flagging de duplicatas

2. **Tratamento de Valores Faltantes**
   - Identificação de campos vazios
   - Estratégias de preenchimento ou exclusão

3. **Validação de Ranges**
   - Peso: 200-800 kg (valores realistas)
   - Preço: R$ 5-50/kg (mercado brasileiro)
   - Ano: 2020-2025 (período atual)

4. **Padronização de Texto**
   - Maiúsculas/minúsculas
   - Acentos e caracteres especiais
   - Nomes de estados e raças

#### Código de Limpeza
```python
def clean_data(df):
    """Executa limpeza completa dos dados."""
    df_clean = df.copy()
    
    # Remover duplicatas
    df_clean = df_clean.drop_duplicates()
    
    # Tratar valores faltantes
    df_clean = handle_missing_values(df_clean)
    
    # Validar ranges
    df_clean = validate_ranges(df_clean)
    
    # Padronizar texto
    df_clean = standardize_text(df_clean)
    
    # Calcular variáveis derivadas
    df_clean = calculate_derived_variables(df_clean)
    
    return df_clean, cleaning_info
```

### 3. Curadoria de Variáveis

#### Identificação Automática de Tipos
```python
def curate_variables(df):
    """Aplica curadoria de variáveis ao dataset."""
    curation_results = {}
    
    for column in df.columns:
        var_info = analyze_variable_type(df[column])
        curation_results[column] = {
            'type': var_info['type'],
            'analysis_recommended': var_info['analysis'],
            'analysis_to_avoid': var_info['avoid'],
            'description': var_info['description']
        }
    
    return curation_results
```

#### Resultado da Curadoria
```python
# Exemplo de resultado para cada variável:
{
    'ANO': {
        'type': 'quantitative',
        'analysis_recommended': ['descriptive_stats', 'histogram', 'boxplot'],
        'analysis_to_avoid': ['frequency'],
        'description': 'Variável quantitativa - use estatísticas descritivas'
    },
    'ESTADO': {
        'type': 'categorical',
        'analysis_recommended': ['frequency', 'pie_chart', 'bar_chart'],
        'analysis_to_avoid': ['mean', 'std', 'confidence_interval'],
        'description': 'Variável categórica - use frequências e gráficos de pizza/barras'
    }
}
```

### 4. Cálculo de Variáveis Derivadas

#### Preço por KG
```python
def calculate_price_per_kg(df):
    """Calcula preço por quilograma."""
    if 'VALOR' in df.columns and 'PESO (KG)' in df.columns:
        df['PREÇO POR KG'] = df['VALOR'] / df['PESO (KG)']
    return df
```

#### Arroba Gordo
```python
def calculate_arroba_gordo(df):
    """Calcula preço por arroba (15 kg)."""
    if 'PREÇO POR KG' in df.columns:
        df['ARROBA GORDO'] = df['PREÇO POR KG'] * 15
    return df
```

#### Percentual de Ágio
```python
def calculate_agio_percentage(df):
    """Calcula percentual de ágio."""
    if 'ARROBA GORDO' in df.columns and 'ARROBA MAGRO' in df.columns:
        df['% ÁGIO'] = (df['ARROBA MAGRO'] / df['ARROBA GORDO']) - 1
    return df
```

## 📊 Análises Realizadas

### 1. Análise Descritiva por Tipo de Variável

#### Variáveis Quantitativas
- **Estatísticas Descritivas**:
  - N (tamanho da amostra)
  - Média aritmética
  - Desvio padrão
  - Mediana
  - Mínimo e máximo

- **Intervalos de Confiança a 95%**:
  - Para médias por grupo
  - Usando distribuição t de Student
  - Erro padrão calculado

- **Visualizações**:
  - Histogramas para distribuição
  - Boxplots para comparações
  - Gráficos de dispersão para correlações

#### Variáveis Categóricas
- **Frequências**:
  - Contagem absoluta
  - Percentuais relativos
  - Moda (categoria mais frequente)

- **Visualizações**:
  - Gráficos de pizza para proporções
  - Gráficos de barras para comparações
  - Tabelas de contingência

### 2. Análises Cruzadas

#### Quantitativa vs Categórica
- **Preço por KG por Raça**: Boxplot comparativo
- **Peso por Estado**: Estatísticas descritivas por grupo
- **Valor por Trimestre**: Tendências temporais

#### Quantitativa vs Quantitativa
- **Preço vs Peso**: Gráfico de dispersão e correlação
- **Valor vs Preço por KG**: Relação linear

#### Categórica vs Categórica
- **Estado vs Raça**: Tabela de contingência
- **Gênero vs Tipo**: Distribuições cruzadas

### 3. Análises Temporais

#### Tendências Anuais
- Evolução de preços ao longo dos anos
- Sazonalidade por trimestre
- Comparações interanuais

#### Padrões Sazonais
- Variações trimestrais de preços
- Identificação de períodos de alta/baixa
- Análise de sazonalidade por região

## 🔍 Exemplos de Análise

### Exemplo 1: Análise de Preços por Raça

#### Dados de Entrada
```python
# Dataset com variáveis:
# - RAÇA (categórica): Nelore, Angus, Hereford
# - PREÇO POR KG (quantitativa): 12.50, 15.00, 13.25
```

#### Análise Apropriada
1. **Para RAÇA (categórica)**:
   - Frequências: Nelore (45%), Angus (35%), Hereford (20%)
   - Gráfico de pizza da distribuição
   - Gráfico de barras com frequências

2. **Para PREÇO POR KG (quantitativa)**:
   - Estatísticas descritivas: Média=13.58, DP=1.25
   - Intervalos de confiança por raça
   - Boxplot comparativo por raça

#### Código de Exemplo
```python
# Estatísticas descritivas do preço
stats = descriptive_stats(df['PREÇO POR KG'])

# Intervalos de confiança por raça
ci_raca = means_ci(df, 'RAÇA', 'PREÇO POR KG')

# Boxplot por raça
fig_box = box_by(df, 'RAÇA', 'PREÇO POR KG')

# Frequências de raça
freq_raca = df['RAÇA'].value_counts()
```

### Exemplo 2: Análise Temporal de Preços

#### Dados de Entrada
```python
# Dataset com variáveis:
# - ANO (quantitativa): 2020, 2021, 2022, 2023
# - PREÇO POR KG (quantitativa): Preços por ano
```

#### Análise Apropriada
1. **Tendência temporal**:
   - Gráfico de linha com preços médios por ano
   - Identificação de tendência crescente/decrescente

2. **Estatísticas por ano**:
   - Média, mediana, desvio padrão por ano
   - Intervalos de confiança para cada ano

#### Código de Exemplo
```python
# Tendência temporal
trend_data = df.groupby('ANO')['PREÇO POR KG'].mean()
fig_trend = create_line_chart(df, 'ANO', 'PREÇO POR KG')

# Estatísticas por ano
stats_por_ano = df.groupby('ANO')['PREÇO POR KG'].agg(['mean', 'std', 'count'])
```

## ⚠️ Validações e Controles de Qualidade

### 1. Validação de Tipos
- Verificação automática de tipos de dados
- Conversão quando necessário e apropriado
- Alertas para conversões que podem causar perda de informação

### 2. Validação de Ranges
- Valores dentro de faixas realistas
- Identificação de outliers extremos
- Sugestões de correção ou exclusão

### 3. Validação de Consistência
- Verificação de relações lógicas entre variáveis
- Validação de cálculos derivados
- Controle de qualidade dos dados

### 4. Prevenção de Erros Estatísticos
- Verificação de tipo de variável antes de aplicar análises
- Prevenção de cálculos inadequados (ex: média de categóricas)
- Sugestões de análises apropriadas

## 📈 Métricas de Qualidade dos Dados

### 1. Completude
- Percentual de valores não nulos por variável
- Identificação de padrões de valores faltantes
- Estratégias de tratamento

### 2. Consistência
- Verificação de valores dentro de ranges esperados
- Validação de relações lógicas
- Identificação de inconsistências

### 3. Precisão
- Validação de cálculos derivados
- Verificação de arredondamentos
- Controle de precisão numérica

### 4. Temporalidade
- Verificação de sequência temporal
- Identificação de gaps temporais
- Validação de dados atuais

## 🎯 Conclusão

A estrutura de dados do Tio ZooEstatisco foi projetada para:

1. **Suportar análises apropriadas** para cada tipo de variável
2. **Prevenir erros estatísticos** através de curadoria automática
3. **Facilitar interpretações corretas** dos resultados
4. **Garantir qualidade** através de validações robustas
5. **Permitir extensibilidade** para novos tipos de dados

O sistema de curadoria de variáveis garante que cada análise seja estatisticamente apropriada, evitando erros comuns como calcular médias de variáveis categóricas ou aplicar intervalos de confiança incorretamente.
