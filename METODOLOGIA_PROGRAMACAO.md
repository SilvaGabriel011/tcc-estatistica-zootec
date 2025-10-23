# 💻 Metodologia de Programação - Tio ZooEstatisco

## 🎯 Objetivo
Este documento descreve a metodologia de programação utilizada no desenvolvimento da aplicação Tio ZooEstatisco, incluindo tecnologias, sintaxes, linguagens e padrões de desenvolvimento.

## 🛠️ Stack Tecnológico

### Linguagem Principal
- **Python 3.8+**: Linguagem de programação principal
- **Sintaxe**: PEP 8 (Python Enhancement Proposal 8)
- **Tipagem**: Type hints para melhor documentação e IDE support

### Framework Web
- **Streamlit**: Framework Python para aplicações web interativas
- **Versão**: 1.28.0+
- **Características**: 
  - Interface declarativa
  - Componentes interativos nativos
  - Cache automático para performance

### Bibliotecas de Dados
- **Pandas**: Manipulação e análise de dados estruturados
- **NumPy**: Computação numérica e arrays multidimensionais
- **SciPy**: Funções estatísticas e científicas

### Visualização
- **Plotly**: Gráficos interativos e dashboards
- **Matplotlib**: Gráficos estáticos para exportação
- **Seaborn**: Visualizações estatísticas (quando necessário)

### Processamento de Arquivos
- **OpenPyXL**: Leitura e escrita de arquivos Excel
- **XlsxWriter**: Criação avançada de arquivos Excel
- **ReportLab**: Geração de relatórios PDF

### Inteligência Artificial
- **Ollama**: Integração com modelos locais de IA
- **Google Generative AI**: API do Gemini
- **OpenAI**: API do GPT (opcional)

## 📁 Arquitetura do Projeto

### Estrutura de Diretórios
```
tcc-gado-gordo/
├── app.py                          # Ponto de entrada principal
├── requirements.txt                # Dependências do projeto
├── core/                          # Módulos principais
│   ├── __init__.py               # Inicialização do pacote
│   ├── cleaning.py               # Limpeza e processamento de dados
│   ├── stats.py                  # Análises estatísticas descritivas
│   ├── plots.py                  # Geração de gráficos
│   ├── variable_curation.py      # Curadoria de variáveis
│   ├── ai_assistant.py           # Assistente de IA
│   ├── formatters.py             # Formatação brasileira
│   ├── excel_export.py           # Exportação Excel
│   ├── pdf_report.py             # Relatórios PDF
│   ├── notifications.py          # Sistema de notificações
│   ├── theme_manager.py          # Gerenciamento de temas
│   └── flags.py                  # Feature flags
├── pages/                        # Páginas Streamlit
│   ├── 1_Upload_e_Analise.py     # Upload e análise
│   ├── 2_Resultados_e_Export.py  # Resultados e exportação
│   ├── 3_Assistente_IA.py        # Assistente IA
│   └── 4_Calculadoras.py         # Calculadoras
├── output/                       # Arquivos gerados
│   ├── figuras/                  # Gráficos salvos
│   ├── tabelas/                  # Tabelas exportadas
│   └── upload_history.json       # Histórico de uploads
└── static/                       # Arquivos estáticos
```

### Padrões de Nomenclatura

#### Arquivos Python
- **Convenção**: snake_case
- **Exemplos**: `variable_curation.py`, `excel_export.py`

#### Funções e Variáveis
- **Convenção**: snake_case
- **Exemplos**: `descriptive_stats()`, `create_scatter_plot()`

#### Classes
- **Convenção**: PascalCase
- **Exemplos**: `AIAssistant`, `ThemeManager`

#### Constantes
- **Convenção**: UPPER_SNAKE_CASE
- **Exemplos**: `ENABLE_EXCEL_ADVANCED`, `MAX_FILE_SIZE`

## 🔧 Padrões de Desenvolvimento

### 1. Estrutura de Funções

#### Template Básico
```python
def function_name(param1: type, param2: type) -> return_type:
    """
    Descrição clara da função.
    
    Args:
        param1 (type): Descrição do parâmetro
        param2 (type): Descrição do parâmetro
    
    Returns:
        return_type: Descrição do retorno
    
    Raises:
        ValueError: Quando parâmetros são inválidos
    """
    # Implementação
    pass
```

#### Exemplo Prático
```python
def descriptive_stats(series: pd.Series) -> Dict[str, float]:
    """
    Calcula estatísticas descritivas básicas de uma série.
    
    Args:
        series (pd.Series): Série de dados para análise
    
    Returns:
        Dict[str, float]: Dicionário com estatísticas descritivas
    
    Raises:
        ValueError: Se a série estiver vazia
    """
    series_clean = series.dropna()
    
    if len(series_clean) == 0:
        raise ValueError("Série não pode estar vazia")
    
    return {
        'N': len(series_clean),
        'Média': series_clean.mean(),
        'DP': series_clean.std(ddof=1),
        'Mediana': series_clean.median(),
        'Mínimo': series_clean.min(),
        'Máximo': series_clean.max()
    }
```

### 2. Tratamento de Erros

#### Padrão de Try-Catch
```python
def safe_function(data):
    """Função com tratamento robusto de erros."""
    try:
        # Operação principal
        result = process_data(data)
        return result
    except FileNotFoundError:
        st.error("Arquivo não encontrado")
        return None
    except pd.errors.EmptyDataError:
        st.warning("Arquivo está vazio")
        return None
    except Exception as e:
        st.error(f"Erro inesperado: {str(e)}")
        return None
```

### 3. Validação de Dados

#### Padrão de Validação
```python
def validate_dataframe(df: pd.DataFrame) -> bool:
    """Valida se DataFrame está em formato correto."""
    if df is None:
        st.error("DataFrame não pode ser None")
        return False
    
    if df.empty:
        st.warning("DataFrame está vazio")
        return False
    
    required_columns = ['ANO', 'ESTADO', 'RAÇA']
    missing_columns = [col for col in required_columns if col not in df.columns]
    
    if missing_columns:
        st.error(f"Colunas obrigatórias ausentes: {missing_columns}")
        return False
    
    return True
```

### 4. Cache e Performance

#### Cache do Streamlit
```python
@st.cache_data
def expensive_computation(data):
    """Função com cache para melhorar performance."""
    # Computação pesada
    result = complex_calculation(data)
    return result

@st.cache_resource
def load_large_dataset():
    """Carrega dataset grande com cache de recurso."""
    return pd.read_csv('large_dataset.csv')
```

## 📊 Padrões de Análise de Dados

### 1. Curadoria de Variáveis

#### Identificação de Tipos
```python
def analyze_variable_type(series: pd.Series) -> Dict[str, Any]:
    """Identifica tipo de variável e sugere análises."""
    if series.dtype == 'object' or series.dtype.name == 'category':
        return {
            'type': 'categorical',
            'analysis': ['frequency', 'pie_chart', 'bar_chart'],
            'avoid': ['mean', 'std', 'confidence_interval']
        }
    elif pd.api.types.is_numeric_dtype(series):
        return {
            'type': 'quantitative',
            'analysis': ['descriptive_stats', 'histogram', 'boxplot'],
            'avoid': ['frequency']
        }
```

### 2. Análise Descritiva

#### Estatísticas Básicas
```python
def comprehensive_descriptive_analysis(df: pd.DataFrame) -> Dict[str, Any]:
    """Análise descritiva abrangente baseada no tipo de variável."""
    results = {}
    
    for column in df.columns:
        var_info = analyze_variable_type(df[column])
        
        if var_info['type'] == 'quantitative':
            results[column] = {
                'type': 'quantitative',
                'descriptive_stats': descriptive_stats(df[column])
            }
        elif var_info['type'] == 'categorical':
            results[column] = {
                'type': 'categorical',
                'frequency': df[column].value_counts()
            }
    
    return results
```

### 3. Visualizações

#### Geração de Gráficos
```python
def create_appropriate_plot(df: pd.DataFrame, column: str) -> go.Figure:
    """Cria gráfico apropriado baseado no tipo de variável."""
    var_info = analyze_variable_type(df[column])
    
    if var_info['type'] == 'quantitative':
        return create_histogram(df[column])
    elif var_info['type'] == 'categorical':
        return create_pie_chart(df[column])
```

## 🤖 Integração com IA

### 1. Configuração de Modelos

#### Classe Assistente IA
```python
class AIAssistant:
    def __init__(self):
        self.model = self._detect_available_model()
        self.context = ""
    
    def _detect_available_model(self) -> str:
        """Detecta qual modelo de IA está disponível."""
        if self._ollama_available():
            return "ollama"
        elif self._gemini_available():
            return "gemini"
        else:
            return "none"
    
    def chat(self, message: str, context: str = "") -> str:
        """Envia mensagem para o assistente IA."""
        if self.model == "ollama":
            return self._ollama_chat(message, context)
        elif self.model == "gemini":
            return self._gemini_chat(message, context)
        else:
            return "IA não disponível"
```

### 2. Configuração de APIs

#### Arquivo .env
```env
# Configurações de IA
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_MODEL=llama3.1

GEMINI_API_KEY=sua_chave_gemini
OPENAI_API_KEY=sua_chave_openai

# Configurações da aplicação
ENABLE_AI=true
ENABLE_EXCEL_ADVANCED=true
ENABLE_PDF=true
```

## 📤 Exportação e Relatórios

### 1. Exportação Excel

#### Função de Exportação
```python
def export_to_excel(df: pd.DataFrame, stats: Dict = None) -> bytes:
    """Exporta dados e estatísticas para Excel."""
    output = io.BytesIO()
    
    with pd.ExcelWriter(output, engine='xlsxwriter') as writer:
        # Dados originais
        df.to_excel(writer, sheet_name='Dados', index=False)
        
        # Estatísticas descritivas
        if stats:
            stats_df = pd.DataFrame(stats).T
            stats_df.to_excel(writer, sheet_name='Estatísticas')
        
        # Formatação
        workbook = writer.book
        format_header = workbook.add_format({'bold': True})
        
        # Aplicar formatação
        worksheet = writer.sheets['Dados']
        for col_num, value in enumerate(df.columns.values):
            worksheet.write(0, col_num, value, format_header)
    
    return output.getvalue()
```

### 2. Relatórios PDF

#### Geração de PDF
```python
def generate_pdf_report(df: pd.DataFrame, stats: Dict, plots: Dict) -> bytes:
    """Gera relatório PDF com análises."""
    buffer = io.BytesIO()
    doc = SimpleDocTemplate(buffer, pagesize=A4)
    
    story = []
    
    # Título
    story.append(Paragraph("Relatório de Análise de Dados", style='Title'))
    story.append(Spacer(1, 12))
    
    # Estatísticas
    story.append(Paragraph("Estatísticas Descritivas", style='Heading1'))
    for var, stat in stats.items():
        story.append(Paragraph(f"{var}: {stat}", style='Normal'))
    
    doc.build(story)
    return buffer.getvalue()
```

## 🧪 Testes e Validação

### 1. Testes de Funções

#### Template de Teste
```python
import unittest
import pandas as pd
from core.stats import descriptive_stats

class TestStats(unittest.TestCase):
    def test_descriptive_stats(self):
        """Testa função de estatísticas descritivas."""
        data = pd.Series([1, 2, 3, 4, 5])
        result = descriptive_stats(data)
        
        self.assertEqual(result['N'], 5)
        self.assertEqual(result['Média'], 3.0)
        self.assertEqual(result['Mínimo'], 1)
        self.assertEqual(result['Máximo'], 5)
    
    def test_empty_series(self):
        """Testa comportamento com série vazia."""
        data = pd.Series([])
        
        with self.assertRaises(ValueError):
            descriptive_stats(data)
```

### 2. Validação de Dados

#### Testes de Integração
```python
def test_data_pipeline():
    """Testa pipeline completo de processamento."""
    # Carregar dados de teste
    df = pd.read_csv('test_data.csv')
    
    # Validar estrutura
    assert validate_dataframe(df), "DataFrame inválido"
    
    # Processar dados
    df_clean, info = clean_data(df)
    
    # Validar resultado
    assert not df_clean.empty, "Dados limpos estão vazios"
    assert info['success'], "Limpeza falhou"
    
    # Análise estatística
    stats = comprehensive_descriptive_analysis(df_clean)
    
    # Validar estatísticas
    assert len(stats) > 0, "Nenhuma estatística calculada"
```

## 🚀 Deploy e Distribuição

### 1. Arquivo requirements.txt
```
streamlit>=1.28.0
pandas>=1.5.0
numpy>=1.24.0
plotly>=5.15.0
scipy>=1.10.0
openpyxl>=3.1.0
xlsxwriter>=3.1.0
reportlab>=4.0.0
requests>=2.31.0
python-dotenv>=1.0.0
ollama>=0.1.0
google-generativeai>=0.3.0
openai>=1.0.0
```

### 2. Script de Execução
```bash
#!/bin/bash
# Script para executar a aplicação

# Verificar Python
if ! command -v python &> /dev/null; then
    echo "Python não encontrado. Instale Python 3.8+ primeiro."
    exit 1
fi

# Verificar dependências
if ! pip show streamlit &> /dev/null; then
    echo "Instalando dependências..."
    pip install -r requirements.txt
fi

# Executar aplicação
echo "Iniciando aplicação..."
streamlit run app.py
```

## 📚 Documentação de Código

### 1. Docstrings
```python
def complex_function(param1: str, param2: int) -> Dict[str, Any]:
    """
    Função complexa que faz várias operações.
    
    Esta função realiza uma análise complexa dos dados fornecidos,
    aplicando múltiplas transformações e retornando um dicionário
    com os resultados.
    
    Args:
        param1 (str): Primeiro parâmetro - descrição detalhada
        param2 (int): Segundo parâmetro - deve ser positivo
    
    Returns:
        Dict[str, Any]: Dicionário contendo:
            - 'result': Resultado principal da análise
            - 'metadata': Informações adicionais sobre o processamento
            - 'errors': Lista de erros encontrados (se houver)
    
    Raises:
        ValueError: Se param2 for negativo
        TypeError: Se param1 não for string
    
    Example:
        >>> result = complex_function("dados", 10)
        >>> print(result['result'])
        'Análise concluída'
    
    Note:
        Esta função pode demorar para processar grandes volumes de dados.
        Considere usar cache para melhorar performance.
    """
    pass
```

### 2. Comentários no Código
```python
# Configuração inicial do Streamlit
st.set_page_config(
    page_title="Tio ZooEstatisco",
    page_icon="🐂",
    layout="wide"
)

# Verificar se dados foram carregados
if 'df_clean' not in st.session_state:
    st.warning('⚠️ Nenhum dado carregado. Vá para **Upload e Análise** primeiro.')
    st.stop()

# TODO: Implementar cache para melhorar performance
# FIXME: Corrigir bug na exportação Excel com caracteres especiais
# NOTE: Esta função pode ser otimizada usando vectorização do NumPy
```

## ✅ Boas Práticas Implementadas

### 1. Código Limpo
- ✅ Nomes descritivos para variáveis e funções
- ✅ Funções pequenas e focadas
- ✅ Comentários explicativos
- ✅ Tratamento robusto de erros

### 2. Performance
- ✅ Cache do Streamlit para operações pesadas
- ✅ Processamento em chunks para arquivos grandes
- ✅ Otimização de memória com tipos apropriados
- ✅ Lazy loading de componentes

### 3. Manutenibilidade
- ✅ Separação de responsabilidades
- ✅ Módulos bem organizados
- ✅ Configuração externa (arquivos .env)
- ✅ Logs detalhados para debugging

### 4. Usabilidade
- ✅ Interface intuitiva
- ✅ Mensagens de erro claras
- ✅ Validação de entrada
- ✅ Feedback visual para o usuário

## 🎯 Conclusão

Esta metodologia de programação garante que o código seja:
- **Legível**: Fácil de entender e manter
- **Robusto**: Tratamento adequado de erros
- **Performático**: Otimizado para grandes volumes de dados
- **Extensível**: Fácil de adicionar novas funcionalidades
- **Testável**: Estrutura que facilita testes automatizados

O projeto segue as melhores práticas da comunidade Python e está preparado para crescimento e manutenção a longo prazo.
