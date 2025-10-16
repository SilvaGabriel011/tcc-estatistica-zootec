"""Gerador de dados de exemplo para bovinos."""
import pandas as pd
import numpy as np
import streamlit as st

@st.cache_data
def generate_sample_bovinos(n_rows=200):
	"""Gera dados de exemplo de bovinos para demonstração."""
	np.random.seed(42)
	
	# Dados básicos
	estados = ['SP', 'MG', 'GO', 'MT', 'MS', 'PR', 'RS', 'BA', 'TO', 'PI']
	racas = ['Nelore', 'Angus', 'Hereford', 'Brahman', 'Gir', 'Guzerá', 'Tabapuã', 'Canchim', 'Senepol', 'Indubrasil']
	generos = ['Macho', 'Fêmea']
	eras = ['Bezerro (0-12m)', 'Novilho (12-24m)', 'Novilha (12-24m)', 'Touro (24m+)', 'Vaca (24m+)']
	vias = ['Leilão', 'Particular', 'Cooperativa', 'Frigorífico', 'Feira']
	tipos = ['Gordo', 'Magro', 'Superprecoce']
	sistemas = ['Confinamento', 'Semi-confinamento', 'Pastagem', 'ILPF']
	origens = ['Criador', 'Comerciante', 'Fazenda', 'Cooperativa']
	documentacoes = ['Com Documentação', 'Sem Documentação', 'Parcial']
	
	data = {
		# Dados temporais e geográficos com mais variação
		'ANO': np.random.choice([2022, 2023, 2024], n_rows, p=[0.2, 0.4, 0.4]),
		'TRIMESTRE': np.random.choice([1, 2, 3, 4], n_rows),
		'MÊS': np.random.choice(['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'], n_rows),
		'ESTADO': np.random.choice(estados, n_rows, p=[0.15, 0.15, 0.12, 0.12, 0.10, 0.10, 0.08, 0.08, 0.05, 0.05]),
		'REGIÃO': np.random.choice(['Sudeste', 'Centro-Oeste', 'Sul', 'Nordeste', 'Norte'], n_rows, p=[0.35, 0.25, 0.20, 0.15, 0.05]),
		
		# Características do animal
		'RAÇA': np.random.choice(racas, n_rows),
		'GÊNERO': np.random.choice(generos, n_rows),
		'ERA': np.random.choice(eras, n_rows),
		'IDADE_MESES': np.random.randint(6, 48, n_rows),
		'PESO_NASCIMENTO_KG': np.random.normal(35, 5, n_rows).round(1),
		
		# Características físicas e produtivas
		'PESO_ATUAL_KG': np.random.normal(400, 80, n_rows).round(0),
		'PESO (KG)': 0,  # Será calculado (alias para PESO_ATUAL_KG)
		'ALTURA_CMCERRO': np.random.normal(130, 15, n_rows).round(1),
		'PERIMETRO_TORACICO_CM': np.random.normal(180, 20, n_rows).round(1),
		'ESCORE_CORPORAL': np.random.choice([1, 2, 3, 4, 5], n_rows, p=[0.05, 0.15, 0.4, 0.3, 0.1]),
		'RENDIMENTO_CARCACA_%': np.random.normal(52, 3, n_rows).round(1),
		
		# Informações de saúde e manejo
		'VACINACAO': np.random.choice(['Completa', 'Parcial', 'Não vacinado'], n_rows, p=[0.7, 0.2, 0.1]),
		'VERMIFUGACAO': np.random.choice(['Atualizada', 'Desatualizada', 'Não realizada'], n_rows, p=[0.8, 0.15, 0.05]),
		'CERTIFICACAO_ORGANICA': np.random.choice(['Sim', 'Não'], n_rows, p=[0.15, 0.85]),
		'BRANDING': np.random.choice(['Marcado', 'Não marcado'], n_rows, p=[0.6, 0.4]),
		
		# Sistema de produção
		'SISTEMA_PRODUCAO': np.random.choice(sistemas, n_rows),
		'DIETA_PRINCIPAL': np.random.choice(['Pastagem', 'Concentrado', 'Mista', 'Silagem'], n_rows),
		'CONSUMO_DIARIO_KG': np.random.normal(12, 3, n_rows).round(1),
		'GMD_GRAMAS_DIA': np.random.normal(800, 200, n_rows).round(0),
		
		# Informações comerciais
		'VIA': np.random.choice(vias, n_rows),
		'VIA_COMPRA': 0,  # Será calculado (alias para VIA)
		'ORIGEM_VENDEDOR': np.random.choice(origens, n_rows),
		'DOCUMENTACAO': np.random.choice(documentacoes, n_rows),
		'GARANTIA_MESES': np.random.choice([0, 1, 3, 6, 12], n_rows, p=[0.3, 0.2, 0.3, 0.15, 0.05]),
		
		# Valores financeiros com variação por região e raça
		'VALOR': np.random.uniform(2800, 9200, n_rows).round(2),
		'VALOR_UNITARIO_R$': 0,  # Será calculado (alias para VALOR)
		'QUANTIDADE_ANIMAIS': np.random.randint(1, 50, n_rows),
		'VALOR_TOTAL_R$': 0,  # Será calculado
		'TAXA_NEGOCIACAO_%': np.random.uniform(0, 5, n_rows).round(2),
		
		# Informações de transporte
		'TRANSPORTE_INCLUIDO': np.random.choice(['Sim', 'Não'], n_rows, p=[0.4, 0.6]),
		'DISTANCIA_TRANSPORTE_KM': np.random.randint(10, 500, n_rows),
		'CUSTO_TRANSPORTE_R$': np.random.uniform(0, 300, n_rows).round(2),
		
		# Indicadores de qualidade
		'CLASSIFICACAO_CARCACA': np.random.choice(['Primeira', 'Segunda', 'Terceira'], n_rows, p=[0.6, 0.3, 0.1]),
		'MARBING_SCORE': np.random.choice([1, 2, 3, 4, 5], n_rows, p=[0.1, 0.2, 0.4, 0.2, 0.1]),
		'ACABAMENTO_GORDURA': np.random.choice(['Excelente', 'Bom', 'Regular', 'Ruim'], n_rows, p=[0.3, 0.4, 0.25, 0.05]),
		
		# Informações de mercado
		'PREÇO_MERCADO_LOCAL_R$': np.random.uniform(2400, 8200, n_rows).round(2),
		'DIFERENCIAL_PRECO_%': 0,  # Será calculado
		'SAZONALIDADE': np.random.choice(['Alta', 'Média', 'Baixa'], n_rows),
	}
	
	df = pd.DataFrame(data)
	
	# Ajustar preços por região (regiões mais desenvolvidas têm preços mais altos)
	regiao_multiplier = {
		'Sudeste': 1.15,
		'Sul': 1.10,
		'Centro-Oeste': 1.05,
		'Nordeste': 0.95,
		'Norte': 0.90
	}
	df['VALOR_UNITARIO_R$'] = df.apply(lambda row: row['VALOR_UNITARIO_R$'] * regiao_multiplier.get(row['REGIÃO'], 1.0), axis=1)
	
	# Ajustar preços por raça (raças premium têm preços mais altos)
	raca_multiplier = {
		'Angus': 1.25,
		'Hereford': 1.20,
		'Canchim': 1.15,
		'Senepol': 1.10,
		'Nelore': 1.05,
		'Brahman': 1.02,
		'Gir': 1.00,
		'Guzerá': 0.98,
		'Tabapuã': 0.95,
		'Indubrasil': 0.93
	}
	df['VALOR_UNITARIO_R$'] = df.apply(lambda row: row['VALOR_UNITARIO_R$'] * raca_multiplier.get(row['RAÇA'], 1.0), axis=1)
	
	# Ajustar preços por ano (inflação e tendências de mercado)
	ano_multiplier = {2022: 0.95, 2023: 1.0, 2024: 1.08}
	df['VALOR_UNITARIO_R$'] = df.apply(lambda row: row['VALOR_UNITARIO_R$'] * ano_multiplier.get(row['ANO'], 1.0), axis=1)
	
	# Cálculos automáticos
	df['VALOR_UNITARIO_R$'] = df['VALOR']  # Alias
	df['VIA_COMPRA'] = df['VIA']  # Alias
	df['PESO (KG)'] = df['PESO_ATUAL_KG']  # Alias
	
	df['VALOR_TOTAL_R$'] = (df['VALOR_UNITARIO_R$'] * df['QUANTIDADE_ANIMAIS']).round(2)
	df['PREÇO_POR_KG'] = (df['VALOR_UNITARIO_R$'] / df['PESO_ATUAL_KG']).round(2)
	df['PREÇO POR KG'] = df['PREÇO_POR_KG']  # Alias
	df['DIFERENCIAL_PRECO_%'] = (((df['VALOR_UNITARIO_R$'] - df['PREÇO_MERCADO_LOCAL_R$']) / df['PREÇO_MERCADO_LOCAL_R$']) * 100).round(2)
	
	# Adicionar colunas faltantes
	df['TIPO GADO GORDO'] = np.random.choice(tipos, n_rows, p=[0.7, 0.2, 0.1])
	
	# Calcular preços por arroba (1 arroba = 15 kg)
	df['ARROBA_GORDO_R$'] = (df['PREÇO_POR_KG'] * 15).round(2)
	df['ARROBA GORDO'] = df['ARROBA_GORDO_R$']  # Alias
	
	df['ARROBA_MAGRO_R$'] = (df['PREÇO_POR_KG'] * 15 * 0.85).round(2)  # 15% mais barato
	df['ARROBA MAGRO'] = df['ARROBA_MAGRO_R$']  # Alias
	
	# Calcular % Ágio (diferença entre preço pago e preço de mercado)
	df['% ÁGIO'] = df['DIFERENCIAL_PRECO_%']  # Alias
	
	# Indicadores zootécnicos calculados
	df['GMD_MENSAL_KG'] = (df['GMD_GRAMAS_DIA'] * 30 / 1000).round(2)
	df['CONVERSÃO_ALIMENTAR'] = (df['CONSUMO_DIARIO_KG'] / (df['GMD_GRAMAS_DIA'] / 1000)).round(2)
	df['PESO_AJUSTADO_205_DIAS'] = (df['PESO_NASCIMENTO_KG'] + (df['GMD_GRAMAS_DIA'] / 1000 * 205)).round(1)
	df['RENDIMENTO_FINANCEIRO_R$'] = (df['VALOR_UNITARIO_R$'] * df['RENDIMENTO_CARCACA_%'] / 100).round(2)
	
	# Índices de qualidade
	df['SCORE_QUALIDADE'] = (df['ESCORE_CORPORAL'] * 0.3 + df['RENDIMENTO_CARCACA_%'] * 0.02 + df['MARBING_SCORE'] * 0.5).round(1)
	
	# Custo-benefício
	df['CUSTO_TOTAL_R$'] = (df['VALOR_TOTAL_R$'] + df['CUSTO_TRANSPORTE_R$']).round(2)
	df['CUSTO_POR_KG_R$'] = (df['CUSTO_TOTAL_R$'] / (df['PESO_ATUAL_KG'] * df['QUANTIDADE_ANIMAIS'])).round(2)
	
	return df

