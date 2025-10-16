# 📚 Sistema de Referências Bibliográficas - v3.1.0

## 🎯 Objetivo

A IA agora **cita automaticamente referências bibliográficas** nas respostas, tornando o app adequado para trabalhos acadêmicos (TCC, dissertações, artigos).

---

## ✨ Como Funciona

### 1. Base de Referências
- **50+ referências** de zootecnia e agronegócio
- Livros, artigos, instituições, anuários, periódicos
- Organizadas por **40+ temas**
- Formato ABNT simplificado

### 2. Integração com IA
- IA recebe **contexto bibliográfico** automaticamente
- Referências relevantes são selecionadas baseadas na pergunta
- IA é instruída a **citar fontes** nas respostas
- Formato: (AUTOR, ANO) no texto + lista ao final

### 3. Página de Referências
- Nova página: **"6. Referências"** no menu
- 3 tabs: Buscar, Por Tema, Todas
- Busca por palavras-chave
- Navegação por 22 temas

---

## 📖 Referências Incluídas (20+)

### Livros Fundamentais
1. **PIRES (2010)** - Bovinocultura de Corte (2 volumes)
2. **EUCLIDES FILHO (2001)** - Melhoramento Genético
3. **PAZIANI et al. (2006)** - Confinamento
4. **VALADARES FILHO et al. (2017)** - BR-CORTE (Nutrição)
5. **NRC (2016)** - Nutrient Requirements
6. **RIET-CORREA et al. (2007)** - Doenças de Ruminantes
7. **GRANDIN & JOHNSON (2014)** - Bem-estar Animal
8. **VILELA et al. (2011)** - Forragicultura
9. **SAMPAIO (2002)** - Estatística Experimental
10. **LUCHIARI FILHO (2000)** - Pecuária da Carne Bovina
11. **SANTIAGO (1985)** - O Zebu no Brasil e no Mundo
12. **SANTOS et al. (2009)** - Manejo de Pastagens

### Instituições
13. **CEPEA/ESALQ (2024)** - Indicador do Boi Gordo
14. **EMBRAPA GADO DE CORTE (2022)** - Sistemas de Produção
15. **ABCZ (2024)** - Associação de Criadores de Zebu
16. **IBGE (2023)** - Pesquisa da Pecuária Municipal
17. **MAPA (2024)** - Ministério da Agricultura

### Artigos e Anuários
18. **ANUALPEC (2023)** - Anuário da Pecuária Brasileira
19. **BARUSELLI et al. (2018)** - Biotecnologias da Reprodução
20. **BALBINO et al. (2011)** - ILPF (Sustentabilidade)
21. **KOURY FILHO (2009)** - Cruzamentos
22. **CARVALHO & ZEN (2019)** - Cadeia de Pecuária
23. **FELÍCIO (2011)** - Qualidade da Carne
24. **LOPES & MAGALHÃES (2011)** - Rentabilidade

---

## 🎨 Como a IA Usa as Referências

### Exemplo de Pergunta
**Usuário:** "Qual a importância do ganho médio diário na engorda?"

### Resposta da IA (com referências):
```
O ganho médio diário (GMD) é um indicador fundamental para avaliar 
a eficiência da engorda de bovinos (PIRES, 2010). Em sistemas de 
confinamento, o GMD pode variar de 1,0 a 1,8 kg/dia dependendo da 
dieta e da genética do animal (PAZIANI et al., 2006).

Segundo VALADARES FILHO et al. (2017), as exigências nutricionais 
variam conforme o GMD desejado, sendo crucial ajustar a dieta para 
maximizar o desempenho.

REFERÊNCIAS:
- PIRES, A.V. Bovinocultura de Corte. Piracicaba: FEALQ, 2010.
- PAZIANI, S.F.; DUARTE, F.R.S.; NUSSIO, L.G. Manejo de Bovinos 
  de Corte em Confinamento. Jaboticabal: Funep, 2006.
- VALADARES FILHO, S.C. et al. BR-CORTE. 3. ed. Viçosa: UFV, 2017.
```

---

## 📊 Temas Cobertos (22)

1. Nutrição
2. Manejo
3. Raças
4. Genética
5. Reprodução
6. Mercado
7. Economia
8. Confinamento
9. Pastagens
10. Estatística
11. Zebuínos
12. Sistemas de Produção
13. Carcaça
14. Qualidade de Carne
15. Sanidade
16. Bem-estar Animal
17. ILPF (Sustentabilidade)
18. Cruzamento
19. Forrageiras
20. Rentabilidade
21. Custos
22. Legislação

---

## 🔍 Busca Inteligente

### Funciona por:
1. **Tema**: palavras-chave nos temas (peso 3)
2. **Título**: palavras no título da referência (peso 2)
3. **Autor**: palavras nos nomes dos autores (peso 1)

### Exemplos de Busca

| Busca | Referências Encontradas |
|-------|-------------------------|
| "nutrição confinamento" | PAZIANI (2006), PIRES (2010), VALADARES (2017) |
| "nelore raças" | SANTIAGO (1985), ABCZ (2024), EUCLIDES (2001) |
| "economia mercado" | CEPEA (2024), ANUALPEC (2023), CARVALHO (2019) |
| "estatística anova" | SAMPAIO (2002) |
| "ilpf sustentabilidade" | BALBINO (2011), EMBRAPA (2022) |

---

## 💻 Como Usar

### No Streamlit App

#### 1. Visualizar Referências
```
Menu lateral → "6. Referências"
- Tab "Buscar": digite "nutrição"
- Tab "Por Tema": selecione tema
- Tab "Todas": veja lista completa
```

#### 2. IA com Referências
```
Menu lateral → "3. Assistente IA"
Pergunte: "Como melhorar a eficiência alimentar?"
→ IA responde citando PIRES (2010), VALADARES (2017), etc.
```

### Via API

```python
from core.referencias import (
    buscar_referencias_por_texto,
    buscar_referencias_por_tema,
    formatar_referencias
)

# Buscar por texto
refs = buscar_referencias_por_texto("nutrição confinamento", limite=3)

# Buscar por tema
refs = buscar_referencias_por_tema(["nutrição", "manejo"], limite=5)

# Formatar em ABNT
texto = formatar_referencias(refs)
print(texto)
```

---

## 🎓 Para Trabalhos Acadêmicos

### TCC/Dissertação

**Situação:** Precisa citar fontes nas análises

**Solução:**
1. Use o Assistente IA com toggle "Usar glossário" ATIVADO
2. Faça perguntas sobre os temas do seu trabalho
3. IA responde com citações (AUTOR, ANO)
4. Vá para "Referências" → copie citações completas
5. Cole na seção de referências do seu TCC

**Exemplo de fluxo:**
```
Você: "Qual a importância da raça Nelore no Brasil?"

IA: "A raça Nelore representa aproximadamente 80% do rebanho 
brasileiro de corte, devido à sua adaptação ao clima tropical 
(SANTIAGO, 1985). A ABCZ (2024) registra...

REFERÊNCIAS:
- SANTIAGO, A.A. O Zebu na Índia, no Brasil e no Mundo...
- ABCZ. Associação Brasileira dos Criadores de Zebu..."

Você: Copia as referências para seu TCC!
```

---

## 📝 Formato de Citação

### No Texto (In-text)
```
Autor único: (PIRES, 2010)
Dois autores: (CARVALHO; ZEN, 2019)
Três ou mais: (VALADARES FILHO et al., 2017)
Instituição: (CEPEA/ESALQ, 2024)
```

### Na Lista de Referências
```
ABNT Simplificado:
AUTOR. Título. Edição. Local: Editora, Ano.

Exemplos já formatados:
- PIRES, A.V. Bovinocultura de Corte. Piracicaba: FEALQ, 2010.
- SANTIAGO, A.A. O Zebu na Índia, no Brasil e no Mundo. Campinas: Editora dos Criadores, 1985.
- CEPEA/ESALQ/USP. Indicador do Boi Gordo. Piracicaba: CEPEA, 2024.
```

---

## 🔧 Arquivos do Sistema

### Módulos
- `core/referencias.py` - Base de 20+ referências
- `core/ai_assistant.py` - Integra referências no chat

### Páginas
- `pages/6_Referencias.py` - Visualização e busca

### Dados
- 20+ referências completas
- 22 temas indexados
- Busca inteligente por relevância

---

## ➕ Adicionar Novas Referências

Para adicionar mais referências, edite `core/referencias.py`:

```python
REFERENCIAS: Dict[str, Dict] = {
    # ...existentes...
    
    "sua_referencia2024": {
        "tipo": "livro",  # ou "artigo", "instituicao", etc.
        "autores": "AUTOR, A.B.",
        "titulo": "Título do Trabalho",
        "editora": "Editora",
        "ano": 2024,
        "temas": ["tema1", "tema2"],
        "citacao": "AUTOR, A.B. Título. Local: Editora, 2024."
    },
}

# Adicionar ao índice
INDICE_POR_TEMA["tema1"].append("sua_referencia2024")
```

---

## 📊 Estatísticas

- **Total de referências:** 20+
- **Temas cobertos:** 22
- **Período:** 1985-2024 (39 anos)
- **Instituições:** CEPEA, Embrapa, IBGE, MAPA, ABCZ
- **Autores nacionais:** 90%+
- **Formato:** ABNT simplificado

---

## 💡 Casos de Uso

### Caso 1: Estudante Escrevendo TCC
```
1. Assistente IA → "Explique ANOVA"
2. IA responde citando SAMPAIO (2002)
3. Referências → buscar "sampaio"
4. Copiar citação completa para TCC
```

### Caso 2: Pecuarista Consultando Técnicas
```
1. Assistente IA → "Como melhorar GMD?"
2. IA cita PIRES (2010), PAZIANI (2006)
3. Referências fornecidas são confiáveis
4. Pode buscar os livros para aprofundar
```

### Caso 3: Pesquisador Analisando Mercado
```
1. Assistente IA → "Tendências de preço no Brasil"
2. IA cita CEPEA (2024), ANUALPEC (2023)
3. URLs fornecidas para acessar dados oficiais
4. Base sólida para análise
```

---

## 🏆 Diferenciais

### Vs. ChatGPT Padrão
- ❌ ChatGPT: Respostas sem fontes
- ✅ TCC Gado Gordo: Respostas com citações ABNT

### Vs. Google/Busca Manual
- ❌ Google: Você pesquisa e formata manualmente
- ✅ TCC Gado Gordo: Referências já formatadas em ABNT

### Vs. Apps Genéricos
- ❌ Genéricos: Referências gerais ou inexistentes
- ✅ TCC Gado Gordo: Referências **específicas de zootecnia brasileira**

---

## 📖 Autores Importantes Incluídos

- **Albano Pires** - Nutrição e manejo (USP/ESALQ)
- **Sebastião Valadares** - Nutrição de zebuínos (UFV)
- **Pedro Felício** - Qualidade de carne (Unicamp)
- **Américo Santiago** - História do Zebu no Brasil
- **Pietro Baruselli** - Reprodução (USP)
- **Temple Grandin** - Bem-estar animal
- **Embrapa** - Instituição referência nacional
- **CEPEA/ESALQ** - Indicadores de mercado

---

## ✅ Pronto para Usar!

**No app:**
1. Menu lateral → "Assistente IA"
2. Faça qualquer pergunta técnica
3. IA responde com citações
4. Menu lateral → "Referências"
5. Busque e copie citações completas

**Resultado:** Respostas academicamente embasadas! 📚✅

---

**Total:** 50+ referências  
**Temas:** 40+  
**Formato:** ABNT  
**Uso:** Automático na IA

---

## 🚀 Expansão V3.2 - Novas Referências

### 📚 Adições Recentes (30+ referências)

#### Livros Técnicos
- SILVA & QUEIROZ (2015) - Análise de Alimentos
- LANA (2009) - Sistema Viçosa de Formulação
- VASCONCELOS (2005) - Inseminação Artificial
- TORRES & MADALENA (2012) - Genética Animal Aplicada
- ALVIM & BOTREL (2007) - Pastagens no Cerrado
- RIBEIRO & LANGONI (2013) - Sanidade Animal
- PARANHOS DA COSTA (2010) - Bem-estar de Bovinos
- MACHADO & CAMPOS (2014) - Qualidade da Carne
- STEEL & TORRIE (2009) - Estatística Experimental
- FERREIRA (2014) - Estatística Multivariada

#### Artigos Científicos
- MERTENS (2002) - Análise de Fibra
- RESTLE et al. (2000) - Suplementação em Pastagem
- SARTORI & GUERREIRO (2010) - Biotecnologias Reprodutivas
- FERRAZ & FELÍCIO (2008) - Sistemas de Produção
- MADALENA & TEIXEIRA (2008) - Cruzamentos
- MARTHA JÚNIOR et al. (2012) - Fertilização no Cerrado
- PEREIRA & PIRES (2016) - Brachiaria
- LEITE & FERREIRA (2009) - Controle de Parasitos
- GRISI et al. (2014) - Impacto Econômico de Parasitos
- MOLENTO (2017) - Bem-estar Multidisciplinar
- RAMOS & GOMIDE (2009) - Qualidade de Carne
- MACHADO & ASSIS (2016) - Sistemas Silvipastoris
- BALBINO & CORDEIRO (2012) - ILPF
- BARROS & SILVA (2011) - Economia da Pecuária
- SILVA & SILVA (2020) - Tecnologias Digitais
- OLIVEIRA & FREITAS (2019) - Blockchain
- CERRI et al. (2016) - Emissões de Gases
- BUSTAMANTE et al. (2020) - Sustentabilidade

#### Instituições e Organizações
- ABIEC - Associação Brasileira das Indústrias Exportadoras
- CONAB - Companhia Nacional de Abastecimento
- EMBRAPA PECUÁRIA SUDESTE - Pesquisa em Pecuária
- FAZU - Faculdades Associadas de Uberaba
- Revista Brasileira de Zootecnia - Periódico científico
- Ciência Rural - Periódico científico

#### Normas e Legislação
- ABNT NBR 14724 - Trabalhos Acadêmicos
- MAPA IN 62 - Qualidade do Leite

### 🎯 Novos Temas (40+ total)

#### Categorias Expandidas
- **💻 Tecnologia:** precisão, digital, blockchain, rastreabilidade
- **🌍 Sustentabilidade:** gases, meio ambiente, pecuária
- **📊 Estatística:** multivariada, experimental, metodologia
- **🏛️ Instituições:** pesquisa, educação, desenvolvimento
- **📋 Legislação:** normas, documentação, acadêmico
- **📰 Periódicos:** ciência, rural

#### Temas Detalhados
- **Nutrição:** formulação, análise, fibra, suplementação
- **Genética:** melhoramento, heterose, cruzamentos
- **Reprodução:** biotecnologia, inseminação, IATF
- **Pastagens:** cerrado, brachiaria, fertilização, forragem
- **Sanidade:** parasitos, controle, diagnóstico, doenças
- **Bem-estar:** avaliação, multidisciplinar
- **Sistemas:** silvipastoril, integração, ILPF
- **Qualidade:** carcaça, carne, fundamentos
- **Mercado:** exportação, safra, política, abastecimento

