# 📊 Metodologia Estatística - Análise Descritiva de Dados

## 🎯 Objetivo
Este documento descreve a metodologia estatística utilizada na aplicação Tio ZooEstatisco, focando em análise descritiva conforme orientação acadêmica.

## 📋 Princípios Fundamentais

### 1. Curadoria de Variáveis
**Princípio**: Cada variável deve ser analisada de acordo com sua natureza (quantitativa ou categórica).

#### Variáveis Quantitativas
- **Definição**: Variáveis que representam quantidades mensuráveis
- **Exemplos**: Preço por kg, peso, valor, idade
- **Análises Apropriadas**:
  - Estatísticas descritivas (média, mediana, desvio padrão)
  - Intervalos de confiança a 95%
  - Histogramas e boxplots
  - Gráficos de dispersão

#### Variáveis Categóricas
- **Definição**: Variáveis que representam categorias ou grupos
- **Exemplos**: Raça, estado, tipo de gado, gênero
- **Análises Apropriadas**:
  - Frequências e percentuais
  - Gráficos de pizza e barras
  - Tabelas de contingência

### 2. Prevenção de Cálculos Inadequados
**Princípio**: Não calcular estatísticas que não fazem sentido para o tipo de variável.

#### ❌ Erros Comuns a Evitar
- Calcular média de variáveis categóricas (ex: "média de raças")
- Aplicar intervalos de confiança a variáveis categóricas
- Usar gráficos de dispersão para variáveis categóricas

#### ✅ Práticas Corretas
- Verificar o tipo de variável antes de aplicar análises
- Usar análises apropriadas para cada tipo
- Validar resultados estatísticos

## 📊 Metodologia de Análise

### 1. Análise Descritiva

#### Para Variáveis Quantitativas
```python
def descriptive_stats(series):
    """Calcula estatísticas descritivas básicas."""
    series_clean = series.dropna()
    return {
        'N': len(series_clean),                    # Tamanho da amostra
        'Média': series_clean.mean(),              # Média aritmética
        'DP': series_clean.std(ddof=1),           # Desvio padrão
        'Mediana': series_clean.median(),          # Mediana
        'Mínimo': series_clean.min(),              # Valor mínimo
        'Máximo': series_clean.max()               # Valor máximo
    }
```

#### Para Variáveis Categóricas
```python
def categorical_analysis(series):
    """Análise para variáveis categóricas."""
    freq = series.value_counts()
    return {
        'frequencia': freq,
        'percentual': (freq / len(series) * 100).round(2),
        'moda': freq.index[0] if len(freq) > 0 else None
    }
```

### 2. Intervalos de Confiança a 95%

#### Metodologia
Para variáveis quantitativas, calculamos intervalos de confiança usando a distribuição t de Student:

```python
def means_ci(df, group, y='PREÇO POR KG', confidence=0.95):
    """Calcula intervalos de confiança a 95% para médias."""
    df_clean = df[[group, y]].dropna()
    results = []
    
    for name, group_data in df_clean.groupby(group):
        values = group_data[y]
        n = len(values)
        mean = values.mean()
        std = values.std(ddof=1)
        se = std / np.sqrt(n)  # Erro padrão
        
        # Valor crítico da distribuição t
        t_crit = stats.t.ppf((1 + confidence) / 2, n - 1)
        
        # Intervalo de confiança
        ci_lower = mean - t_crit * se
        ci_upper = mean + t_crit * se
        
        results.append({
            'Grupo': name,
            'N': n,
            'Média': mean,
            'DP': std,
            'EP': se,
            'IC 95% Inf': ci_lower,
            'IC 95% Sup': ci_upper
        })
    
    return pd.DataFrame(results)
```

#### Interpretação
- **IC 95%**: Temos 95% de confiança de que a verdadeira média populacional está dentro do intervalo
- **Amplitude**: Intervalos mais estreitos indicam maior precisão
- **Tamanho da amostra**: Amostras maiores resultam em intervalos mais estreitos

### 3. Visualizações Apropriadas

#### Gráficos para Variáveis Quantitativas

##### Histograma
- **Uso**: Mostrar distribuição de uma variável quantitativa
- **Interpretação**: Forma da distribuição, centralidade, variabilidade

##### Boxplot
- **Uso**: Comparar distribuições entre grupos
- **Interpretação**: Mediana, quartis, outliers

##### Gráfico de Dispersão
- **Uso**: Relacionar duas variáveis quantitativas
- **Interpretação**: Correlação, tendência, outliers

#### Gráficos para Variáveis Categóricas

##### Gráfico de Pizza
- **Uso**: Mostrar proporções de uma variável categórica
- **Interpretação**: Frequência relativa de cada categoria

##### Gráfico de Barras
- **Uso**: Comparar frequências entre categorias
- **Interpretação**: Frequência absoluta ou relativa

##### Gráfico de Colunas
- **Uso**: Comparar médias de variável quantitativa por categoria
- **Interpretação**: Diferenças entre grupos

## 🔍 Metodologia de Curadoria

### 1. Identificação Automática de Tipos

```python
def analyze_variable_type(series):
    """Identifica automaticamente o tipo de variável."""
    if series.dtype == 'object' or series.dtype.name == 'category':
        return {
            'type': 'categorical',
            'analysis': ['frequency', 'pie_chart', 'bar_chart'],
            'avoid': ['mean', 'std', 'confidence_interval']
        }
    elif pd.api.types.is_numeric_dtype(series):
        return {
            'type': 'quantitative',
            'analysis': ['descriptive_stats', 'histogram', 'boxplot', 'confidence_interval'],
            'avoid': ['frequency']
        }
```

### 2. Validação de Análises

```python
def validate_analysis_request(series, requested_analysis):
    """Valida se uma análise é apropriada para o tipo de variável."""
    var_info = analyze_variable_type(series)
    
    if requested_analysis in var_info['avoid']:
        return {
            'valid': False,
            'reason': f"Análise '{requested_analysis}' não é apropriada para variáveis do tipo {var_info['type']}",
            'suggestion': f"Use: {', '.join(var_info['analysis'])}"
        }
```

## 📈 Exemplos Práticos

### Exemplo 1: Análise de Preços por Raça

#### Dados
- **Variável Quantitativa**: Preço por kg
- **Variável Categórica**: Raça

#### Análise Apropriada
1. **Estatísticas descritivas** do preço por kg
2. **Intervalos de confiança a 95%** para preço médio por raça
3. **Boxplot** comparando preços entre raças
4. **Gráfico de colunas** com preço médio por raça

#### Código
```python
# Estatísticas descritivas
stats = descriptive_stats(df['PREÇO POR KG'])

# Intervalos de confiança por raça
ci_raca = means_ci(df, 'RAÇA', 'PREÇO POR KG')

# Boxplot por raça
fig_box = box_by(df, 'RAÇA', 'PREÇO POR KG')

# Gráfico de colunas
fig_col = create_column_chart(df, 'RAÇA', 'PREÇO POR KG')
```

### Exemplo 2: Distribuição de Estados

#### Dados
- **Variável Categórica**: Estado

#### Análise Apropriada
1. **Frequências** por estado
2. **Percentuais** por estado
3. **Gráfico de pizza** da distribuição
4. **Gráfico de barras** com frequências

#### Código
```python
# Frequências
freq = df['ESTADO'].value_counts()

# Percentuais
percent = (freq / len(df) * 100).round(2)

# Gráfico de pizza
fig_pie = create_pie_chart(df, 'ESTADO')

# Gráfico de barras
fig_bar = create_bar_chart(df, 'ESTADO')
```

## 🚫 O que NÃO Fazer

### 1. Estatística Inferencial Avançada
- **ANOVA**: Removido conforme orientação
- **Testes de normalidade**: Não necessário para análise descritiva
- **Testes de hipóteses**: Foco apenas em descrição

### 2. Cálculos Inadequados
- **Média de variáveis categóricas**: Não faz sentido estatístico
- **Intervalos de confiança para categóricas**: Aplicável apenas a quantitativas
- **Correlação entre categóricas**: Usar tabelas de contingência

### 3. Gráficos Inadequados
- **Histograma para categóricas**: Usar gráfico de barras
- **Scatter plot para categóricas**: Usar gráfico de colunas
- **Boxplot para categóricas**: Não aplicável

## ✅ Checklist de Validação

### Para Cada Análise Realizada
- [ ] Tipo de variável identificado corretamente
- [ ] Análise apropriada para o tipo de variável
- [ ] Gráfico adequado para o tipo de dados
- [ ] Interpretação estatística correta
- [ ] Intervalos de confiança calculados (quando aplicável)

### Para o Dataset Completo
- [ ] Todas as variáveis categorizadas corretamente
- [ ] Análises descritivas completas
- [ ] Visualizações apropriadas implementadas
- [ ] Validação de cálculos realizada
- [ ] Documentação das análises

## 📚 Referências Metodológicas

1. **Estatística Descritiva**: Métodos para resumir e descrever dados
2. **Intervalos de Confiança**: Estimativas de parâmetros populacionais
3. **Visualização de Dados**: Representação gráfica apropriada
4. **Curadoria de Dados**: Classificação e validação de variáveis

## 🎯 Conclusão

Esta metodologia garante que as análises estatísticas sejam apropriadas para cada tipo de variável, evitando erros comuns e fornecendo interpretações corretas dos dados. O foco em análise descritiva permite uma compreensão clara dos dados sem a complexidade da estatística inferencial avançada.
