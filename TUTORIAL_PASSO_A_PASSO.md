# 📚 Tutorial Passo a Passo - Como Construir uma Aplicação Web para Análise de Dados

## 🎯 Objetivo
Este tutorial ensina como construir uma aplicação web completa para análise de dados de mercado de bovinos, utilizando tecnologias modernas e seguindo boas práticas de desenvolvimento.

## 📋 Pré-requisitos
- Conhecimento básico de Python
- Noções de programação web
- Entendimento básico de estatística descritiva

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Streamlit**: Framework Python para aplicações web interativas
- **Plotly**: Biblioteca para gráficos interativos
- **HTML/CSS**: Para customização da interface

### Backend
- **Python 3.8+**: Linguagem de programação principal
- **Pandas**: Manipulação e análise de dados
- **NumPy**: Computação numérica
- **SciPy**: Funções estatísticas

### Exportação e Relatórios
- **OpenPyXL/XlsxWriter**: Exportação para Excel
- **ReportLab**: Geração de relatórios PDF

### Inteligência Artificial
- **Ollama**: Modelo local de IA (recomendado)
- **Google Gemini**: API de IA da Google
- **OpenAI**: API da OpenAI (opcional)

## 🚀 Passo 1: Configuração do Ambiente

### 1.1 Instalação do Python
```bash
# Download do Python 3.8+ em: https://python.org
# Verificar instalação
python --version
pip --version
```

### 1.2 Criação do Ambiente Virtual
```bash
# Criar ambiente virtual
python -m venv tcc-gado-gordo

# Ativar ambiente virtual
# Windows:
tcc-gado-gordo\Scripts\activate
# Linux/Mac:
source tcc-gado-gordo/bin/activate
```

### 1.3 Instalação das Dependências
```bash
# Instalar dependências principais
pip install streamlit pandas numpy plotly scipy
pip install openpyxl xlsxwriter reportlab
pip install requests python-dotenv

# Para IA (opcional)
pip install ollama google-generativeai openai
```

## 🏗️ Passo 2: Estrutura do Projeto

### 2.1 Organização de Diretórios
```
tcc-gado-gordo/
├── app.py                          # Aplicação principal
├── requirements.txt                # Dependências
├── core/                          # Módulos principais
│   ├── cleaning.py                # Limpeza de dados
│   ├── stats.py                   # Análises estatísticas
│   ├── plots.py                   # Gráficos
│   ├── variable_curation.py       # Curadoria de variáveis
│   ├── ai_assistant.py            # Assistente IA
│   ├── formatters.py              # Formatação PT-BR
│   └── excel_export.py            # Export Excel
├── pages/                         # Páginas Streamlit
│   ├── 1_Upload_e_Analise.py      # Upload e análise
│   ├── 2_Resultados_e_Export.py   # Resultados
│   ├── 3_Assistente_IA.py         # Assistente IA
│   └── 4_Calculadoras.py          # Calculadoras
├── output/                        # Arquivos gerados
│   ├── figuras/                   # Gráficos salvos
│   ├── tabelas/                   # Tabelas exportadas
│   └── upload_history.json        # Histórico
└── static/                        # Arquivos estáticos
```

### 2.2 Arquivo Principal (app.py)
```python
import streamlit as st

st.set_page_config(
    page_title="Tio ZooEstatisco",
    page_icon="🐂",
    layout="wide"
)

st.title("🐂 Tio ZooEstatisco")
st.markdown("### Análise Estatística de Dados de Mercado de Bovinos")

# Navegação para páginas
st.markdown("""
### 🚀 Navegação
1. **Upload e Análise** - Carregue seus dados
2. **Resultados e Export** - Veja análises e gráficos
3. **Assistente IA** - Converse sobre os dados
4. **Calculadoras** - Ferramentas úteis
""")
```

## 📊 Passo 3: Implementação da Análise de Dados

### 3.1 Curadoria de Variáveis (core/variable_curation.py)
```python
def analyze_variable_type(series):
    """Identifica o tipo de variável e sugere análises apropriadas."""
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

### 3.2 Análise Estatística Descritiva (core/stats.py)
```python
def descriptive_stats(series):
    """Calcula estatísticas descritivas básicas."""
    series_clean = series.dropna()
    return {
        'N': len(series_clean),
        'Média': series_clean.mean(),
        'DP': series_clean.std(ddof=1),
        'Mediana': series_clean.median(),
        'Mínimo': series_clean.min(),
        'Máximo': series_clean.max()
    }

def means_ci(df, group, y='PREÇO POR KG', confidence=0.95):
    """Calcula intervalos de confiança a 95%."""
    # Implementação dos intervalos de confiança
    pass
```

### 3.3 Visualizações (core/plots.py)
```python
def create_pie_chart(df, column):
    """Cria gráfico de pizza para variáveis categóricas."""
    import plotly.express as px
    value_counts = df[column].value_counts()
    fig = px.pie(values=value_counts.values, names=value_counts.index)
    return fig

def create_scatter_plot(df, x_col, y_col):
    """Cria gráfico de dispersão para variáveis quantitativas."""
    import plotly.express as px
    fig = px.scatter(df, x=x_col, y=y_col)
    return fig
```

## 🔧 Passo 4: Implementação das Páginas

### 4.1 Página de Upload (pages/1_Upload_e_Analise.py)
```python
import streamlit as st
import pandas as pd
from core.cleaning import clean_data
from core.variable_curation import analyze_variable_type

st.title('📥 Upload e Análise de Dados')

# Upload de arquivo
uploaded_file = st.file_uploader('Selecione um arquivo (.xlsx ou .csv)', 
                                type=['xlsx','csv'])

if uploaded_file is not None:
    # Carregar dados
    if uploaded_file.name.endswith('.csv'):
        df = pd.read_csv(uploaded_file)
    else:
        df = pd.read_excel(uploaded_file)
    
    # Limpeza de dados
    df_clean, cleaning_info = clean_data(df)
    
    # Curadoria de variáveis
    st.subheader('📊 Curadoria de Variáveis')
    for column in df_clean.columns:
        var_info = analyze_variable_type(df_clean[column])
        st.write(f"**{column}**: {var_info['description']}")
```

### 4.2 Página de Resultados (pages/2_Resultados_e_Export.py)
```python
import streamlit as st
from core.stats import descriptive_stats, means_ci
from core.plots import generate_all_plots

st.title('📊 Resultados e Export')

if 'df_clean' in st.session_state:
    df = st.session_state['df_clean']
    
    # Análise descritiva
    st.subheader('📈 Análise Descritiva')
    quantitative_cols = [col for col in df.columns if pd.api.types.is_numeric_dtype(df[col])]
    
    for col in quantitative_cols:
        st.write(f"**{col}**")
        stats = descriptive_stats(df[col])
        st.write(stats)
        
        # Intervalos de confiança se houver grupos
        categorical_cols = [c for c in df.columns if df[c].dtype == 'object']
        for group_col in categorical_cols:
            ci_result = means_ci(df, group_col, col)
            if not ci_result.empty:
                st.write(f"Intervalos de Confiança por {group_col}")
                st.dataframe(ci_result)
    
    # Gráficos
    st.subheader('📊 Visualizações')
    plots = generate_all_plots(df)
    for plot_name, plot_fig in plots.items():
        if plot_fig:
            st.plotly_chart(plot_fig, use_container_width=True)
```

## 🤖 Passo 5: Integração com IA

### 5.1 Assistente IA (core/ai_assistant.py)
```python
class AIAssistant:
    def __init__(self):
        self.model = "ollama"  # ou "gemini" ou "openai"
    
    def chat(self, message, context=""):
        """Envia mensagem para o assistente IA."""
        if self.model == "ollama":
            return self._ollama_chat(message, context)
        elif self.model == "gemini":
            return self._gemini_chat(message, context)
        # Implementação dos diferentes modelos
```

### 5.2 Configuração da IA
```python
# Configurar no arquivo .env
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_MODEL=llama3.1

GEMINI_API_KEY=sua_chave_gemini
OPENAI_API_KEY=sua_chave_openai
```

## 📤 Passo 6: Exportação e Relatórios

### 6.1 Exportação Excel (core/excel_export.py)
```python
def export_to_excel(df, stats=None):
    """Exporta dados e estatísticas para Excel."""
    output = io.BytesIO()
    
    with pd.ExcelWriter(output, engine='xlsxwriter') as writer:
        # Dados originais
        df.to_excel(writer, sheet_name='Dados', index=False)
        
        # Estatísticas descritivas
        if stats:
            stats_df = pd.DataFrame(stats).T
            stats_df.to_excel(writer, sheet_name='Estatísticas')
    
    return output.getvalue()
```

### 6.2 Relatórios PDF (core/pdf_report.py)
```python
def generate_pdf_report(df, stats, plots):
    """Gera relatório PDF com análises."""
    from reportlab.lib.pagesizes import A4
    from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
    
    buffer = io.BytesIO()
    doc = SimpleDocTemplate(buffer, pagesize=A4)
    
    story = []
    story.append(Paragraph("Relatório de Análise de Dados", style='Title'))
    
    # Adicionar estatísticas e gráficos
    # Implementação completa...
    
    doc.build(story)
    return buffer.getvalue()
```

## 🚀 Passo 7: Execução da Aplicação

### 7.1 Executar o Streamlit
```bash
# No diretório do projeto
streamlit run app.py

# Acessar no navegador: http://localhost:8501
```

### 7.2 Configuração da IA (Opcional)
```bash
# Instalar Ollama
# Download: https://ollama.com/download

# Executar modelo
ollama run llama3.1

# Testar no terminal
ollama run llama3.1
>>> Qual a diferença entre gado gordo e gado magro?
>>> /bye
```

## 🎯 Passo 8: Testes e Validação

### 8.1 Teste com Dados de Exemplo
```python
# Gerar dados de exemplo
from core.sample_data import generate_sample_bovinos

df_sample = generate_sample_bovinos(100)
st.session_state['df_clean'] = df_sample
```

### 8.2 Validação das Análises
- Verificar se as estatísticas descritivas estão corretas
- Confirmar que gráficos são apropriados para cada tipo de variável
- Testar intervalos de confiança
- Validar exportação de dados

## 📚 Passo 9: Documentação e Tutoriais

### 9.1 Criar Documentação
- README.md com instruções de instalação
- Tutorial de uso para usuários finais
- Documentação da API (se aplicável)

### 9.2 Screenshots e Exemplos
- Capturas de tela de cada funcionalidade
- Exemplos de uso com dados reais
- Casos de uso típicos

## 🔧 Passo 10: Deploy e Distribuição

### 10.1 Preparação para Deploy
```bash
# Criar requirements.txt
pip freeze > requirements.txt

# Criar Dockerfile (opcional)
# Configurar variáveis de ambiente
```

### 10.2 Distribuição
- Criar arquivo executável (.exe) com PyInstaller
- Deploy em servidor web
- Distribuição via GitHub/GitLab

## ✅ Checklist Final

- [ ] Aplicação executa sem erros
- [ ] Upload de dados funciona corretamente
- [ ] Análise descritiva implementada
- [ ] Gráficos apropriados para cada tipo de variável
- [ ] Intervalos de confiança calculados
- [ ] Exportação Excel/PDF funcionando
- [ ] IA integrada (se configurada)
- [ ] Documentação completa
- [ ] Testes realizados

## 🎉 Conclusão

Este tutorial fornece uma base sólida para construir uma aplicação web completa de análise de dados. O sistema implementado segue as melhores práticas de desenvolvimento e oferece uma interface intuitiva para análise estatística descritiva de dados de mercado de bovinos.

### Próximos Passos
1. Personalizar para seus dados específicos
2. Adicionar novas funcionalidades conforme necessário
3. Implementar melhorias de performance
4. Expandir a documentação
5. Adicionar mais testes automatizados
