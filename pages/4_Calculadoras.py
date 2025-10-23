import streamlit as st
import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from core.formatters import (
	formatar_moeda, formatar_numero, converter_kg_arroba, 
	converter_arroba_kg, converter_alqueire
)

st.set_page_config(page_title='Calculadoras', page_icon='🧮', layout='wide')
st.title('🧮 Calculadoras e Conversores')
st.markdown('Ferramentas úteis para pecuaristas e analistas.')

# Tabs
tab1, tab2, tab3, tab4, tab5 = st.tabs([
    '💰 ROI & Financeiro', 
    '🔄 Conversores', 
    '📊 Simulador', 
    '📈 Índices Zootécnicos',
    '🔬 Análise de Performance'
])

with tab1:
	st.subheader('💰 Calculadora de ROI (Retorno sobre Investimento)')
	st.markdown('Calcule o lucro estimado da engorda.')
	
	col1, col2 = st.columns(2)
	
	with col1:
		st.markdown('#### Entrada')
		custo_animal = st.number_input('Custo do animal (R$)', value=3000.0, step=100.0, help='Preço de compra do boi magro')
		peso_inicial = st.number_input('Peso inicial (kg)', value=350.0, step=10.0)
		outras_despesas = st.number_input('Outras despesas (R$)', value=500.0, step=50.0, help='Alimentação, sanidade, etc.')
	
	with col2:
		st.markdown('#### Saída')
		peso_final = st.number_input('Peso final (kg)', value=520.0, step=10.0)
		preco_venda_kg = st.number_input('Preço de venda (R$/kg)', value=13.0, step=0.5)
		dias_engorda = st.number_input('Dias de engorda', value=120, step=10)
	
	if st.button('🧮 Calcular ROI'):
		# Cálculos
		ganho_peso = peso_final - peso_inicial
		gmd = ganho_peso / dias_engorda if dias_engorda > 0 else 0
		arrobas_ganhas = converter_kg_arroba(ganho_peso)
		
		receita = peso_final * preco_venda_kg
		custo_total = custo_animal + outras_despesas
		lucro = receita - custo_total
		roi_percentual = (lucro / custo_total) * 100 if custo_total > 0 else 0
		
		custo_por_arroba = custo_total / converter_kg_arroba(peso_final) if peso_final > 0 else 0
		
		st.divider()
		st.markdown('### 📊 Resultados')
		
		col_a, col_b, col_c, col_d = st.columns(4)
		with col_a:
			st.metric('Ganho de Peso', f'{formatar_numero(ganho_peso, 1)} kg')
			st.caption(f'GMD: {formatar_numero(gmd, 3)} kg/dia')
		with col_b:
			st.metric('Arrobas Ganhas', formatar_numero(arrobas_ganhas, 2))
		with col_c:
			st.metric('Lucro', formatar_moeda(lucro))
			delta_color = 'normal' if lucro >= 0 else 'inverse'
			st.caption(f'ROI: {formatar_numero(roi_percentual, 1)}%')
		with col_d:
			st.metric('Custo/Arroba', formatar_moeda(custo_por_arroba))
		
		if lucro > 0:
			st.success(f'✅ **Operação lucrativa!** Lucro de {formatar_moeda(lucro)} em {dias_engorda} dias.')
		else:
			st.error(f'❌ **Operação não lucrativa.** Prejuízo de {formatar_moeda(abs(lucro))}.')

with tab2:
	st.subheader('🔄 Conversores de Unidades')
	
	conv_col1, conv_col2 = st.columns(2)
	
	with conv_col1:
		st.markdown('#### Peso: kg ↔ Arroba')
		opcao_peso = st.radio('Converter de:', ['kg → @', '@ → kg'], horizontal=True)
		
		if opcao_peso == 'kg → @':
			kg_input = st.number_input('Quilogramas (kg)', value=450.0, step=10.0, key='kg')
			arrobas = converter_kg_arroba(kg_input)
			st.success(f'**{formatar_numero(kg_input, 1)} kg = {formatar_numero(arrobas, 2)} arrobas**')
		else:
			arroba_input = st.number_input('Arrobas (@)', value=30.0, step=1.0, key='arroba')
			kg = converter_arroba_kg(arroba_input)
			st.success(f'**{formatar_numero(arroba_input, 2)} @ = {formatar_numero(kg, 1)} kg**')
	
	with conv_col2:
		st.markdown('#### Área: Hectares ↔ Alqueires')
		tipo_alq = st.selectbox('Tipo de alqueire:', ['paulista', 'mineiro', 'goiano'])
		opcao_area = st.radio('Converter de:', ['ha → alq', 'alq → ha'], horizontal=True, key='area')
		
		if opcao_area == 'ha → alq':
			ha_input = st.number_input('Hectares (ha)', value=10.0, step=1.0, key='ha')
			alq = converter_alqueire(ha_input, tipo_alq)
			st.success(f'**{formatar_numero(ha_input, 1)} ha = {formatar_numero(alq, 2)} alqueires ({tipo_alq})**')
		else:
			alq_input = st.number_input(f'Alqueires ({tipo_alq})', value=5.0, step=0.5, key='alq')
			conversoes = {"paulista": 2.42, "mineiro": 4.84, "goiano": 4.84}
			ha = alq_input * conversoes[tipo_alq]
			st.success(f'**{formatar_numero(alq_input, 2)} alq ({tipo_alq}) = {formatar_numero(ha, 1)} ha**')
	
	st.divider()
	st.markdown('#### Preço: R$/kg ↔ R$/@')
	preco_kg = st.number_input('Preço por kg (R$/kg)', value=13.0, step=0.5)
	preco_arroba = preco_kg * 15
	st.success(f'**{formatar_moeda(preco_kg)}/kg = {formatar_moeda(preco_arroba)}/@**')

with tab3:
	st.subheader('📊 Simulador de Cenários')
	st.markdown('Veja o impacto de variações de preço no seu lucro.')
	
	if 'df_clean' not in st.session_state:
		st.info('Carregue dados na página "Upload e Análise" para usar o simulador.')
	else:
		df = st.session_state['df_clean']
		
		if 'VALOR' in df.columns:
			receita_atual = df['VALOR'].sum()
			
			st.markdown('#### Cenário Base')
			st.metric('Receita Total Atual', formatar_moeda(receita_atual))
			
			st.markdown('#### Simular Variação de Preço')
			variacao = st.slider('Variação de preço (%)', -30, 30, 0, 1)
			
			nova_receita = receita_atual * (1 + variacao/100)
			diferenca = nova_receita - receita_atual
			
			col_s1, col_s2, col_s3 = st.columns(3)
			with col_s1:
				st.metric('Nova Receita', formatar_moeda(nova_receita))
			with col_s2:
				st.metric('Diferença', formatar_moeda(diferenca), delta=f'{variacao:+.1f}%')
			with col_s3:
				impacto = "positivo" if diferenca >= 0 else "negativo"
				st.caption(f'Impacto: {impacto}')
			
			if variacao > 0:
				st.success(f'✅ Com aumento de {variacao}%, você ganharia {formatar_moeda(diferenca)} a mais.')
			elif variacao < 0:
				st.warning(f'⚠️ Com queda de {abs(variacao)}%, você perderia {formatar_moeda(abs(diferenca))}.')
		else:
			st.info('Coluna VALOR não encontrada nos dados.')

with tab4:
	st.subheader('📈 Calculadora de Índices Zootécnicos')
	st.markdown('Calcule indicadores de performance animal e produtividade.')
	
	col1, col2 = st.columns(2)
	
	with col1:
		st.markdown('#### 🐄 Dados do Animal')
		peso_nascimento = st.number_input('Peso ao nascer (kg)', value=35.0, step=1.0, key='peso_nasc')
		peso_atual = st.number_input('Peso atual (kg)', value=400.0, step=10.0, key='peso_atu')
		idade_dias = st.number_input('Idade (dias)', value=365, step=10, key='idade_dias')
		consumo_diario = st.number_input('Consumo diário (kg MS)', value=12.0, step=0.5, key='cons_dia')
		peso_desejado = st.number_input('Peso desejado (kg)', value=520.0, step=10.0, key='peso_des')
	
	with col2:
		st.markdown('#### 🌱 Dados da Pastagem/Alimentação')
		proteina_bruta = st.number_input('Proteína Bruta (%)', value=12.0, step=0.5, key='pb')
		energia_digestivel = st.number_input('Energia Digestível (Mcal/kg)', value=2.8, step=0.1, key='ed')
		ndf = st.number_input('NDF (%)', value=65.0, step=1.0, key='ndf')
		custo_kg_ms = st.number_input('Custo MS (R$/kg)', value=0.25, step=0.01, key='custo_ms')
		area_pasto = st.number_input('Área de pasto (ha)', value=1.0, step=0.1, key='area_pasto')
	
	if st.button('📊 Calcular Índices Zootécnicos'):
		# Cálculos básicos
		gmd = (peso_atual - peso_nascimento) / idade_dias * 1000  # g/dia
		peso_205_dias = peso_nascimento + (gmd / 1000 * 205)
		dias_para_peso_final = (peso_desejado - peso_atual) / (gmd / 1000)
		
		# Conversão alimentar
		conversao_alimentar = consumo_diario / (gmd / 1000) if gmd > 0 else 0
		
		# Armazenar na sessão para uso posterior
		st.session_state['conversao_alimentar'] = conversao_alimentar
		
		# Eficiência alimentar
		eficiencia_alimentar = (gmd / 1000) / consumo_diario * 100 if consumo_diario > 0 else 0
		
		# Custos
		custo_diario = consumo_diario * custo_kg_ms
		custo_por_kg_gasto = custo_diario / (gmd / 1000) if gmd > 0 else 0
		
		# Densidade animal
		ua_por_hectare = 1 / area_pasto if area_pasto > 0 else 0
		
		# Rendimento esperado
		rendimento_carcaca = peso_desejado * 0.52  # 52% rendimento médio
		
		st.divider()
		st.markdown('### 📊 Resultados dos Índices')
		
		col_r1, col_r2, col_r3 = st.columns(3)
		
		with col_r1:
			st.metric('GMD', f"{gmd:.0f} g/dia")
			st.metric('Peso 205 dias', f"{peso_205_dias:.0f} kg")
			st.metric('Dias para peso final', f"{dias_para_peso_final:.0f} dias")
		
		with col_r2:
			st.metric('Conversão Alimentar', f"{conversao_alimentar:.1f} kg MS/kg ganho")
			st.metric('Eficiência Alimentar', f"{eficiencia_alimentar:.1f}%")
			st.metric('Custo diário', f"R$ {custo_diario:.2f}")
		
		with col_r3:
			st.metric('Custo/kg ganho', f"R$ {custo_por_kg_gasto:.2f}")
			st.metric('UA/hectare', f"{ua_por_hectare:.1f}")
			st.metric('Rendimento carcaça', f"{rendimento_carcaca:.0f} kg")
		
		# Interpretação
		st.divider()
		st.markdown('### 📋 Interpretação dos Resultados')
		
		if gmd >= 1000:
			st.success('✅ **GMD Excelente**: Ganho de peso acima de 1000g/dia é considerado excelente.')
		elif gmd >= 800:
			st.info('ℹ️ **GMD Bom**: Ganho de peso entre 800-1000g/dia é considerado bom.')
		else:
			st.warning('⚠️ **GMD Baixo**: Ganho de peso abaixo de 800g/dia pode indicar problemas nutricionais.')
		
		if conversao_alimentar <= 6:
			st.success('✅ **Conversão Excelente**: Conversão alimentar abaixo de 6:1 é excelente.')
		elif conversao_alimentar <= 8:
			st.info('ℹ️ **Conversão Boa**: Conversão alimentar entre 6-8:1 é boa.')
		else:
			st.warning('⚠️ **Conversão Alta**: Conversão alimentar acima de 8:1 indica baixa eficiência.')

with tab5:
	st.subheader('🔬 Análise de Performance Detalhada')
	st.markdown('Análise avançada de performance e benchmarking.')
	
	col1, col2 = st.columns(2)
	
	with col1:
		st.markdown('#### 📊 Dados do Rebanho')
		num_animais = st.number_input('Número de animais', value=100, step=1, key='num_anim')
		taxa_prenhez = st.number_input('Taxa de prenhez (%)', value=85.0, step=1.0, key='taxa_pren')
		taxa_desmama = st.number_input('Taxa de desmama (%)', value=90.0, step=1.0, key='taxa_desm')
		idade_primeiro_parto = st.number_input('Idade primeiro parto (meses)', value=36.0, step=1.0, key='idade_pp')
		intervalo_parto = st.number_input('Intervalo entre partos (meses)', value=14.0, step=0.5, key='int_part')
	
	with col2:
		st.markdown('#### 💰 Dados Financeiros')
		custo_producao_kg = st.number_input('Custo produção (R$/kg)', value=8.50, step=0.10, key='custo_prod')
		preco_venda_kg = st.number_input('Preço venda (R$/kg)', value=12.00, step=0.10, key='preco_vend')
		receita_hectare = st.number_input('Receita/hectare (R$)', value=1500.0, step=50.0, key='receita_ha')
		custo_hectare = st.number_input('Custo/hectare (R$)', value=1200.0, step=50.0, key='custo_ha')
		area_total = st.number_input('Área total (hectares)', value=100.0, step=1.0, key='area_tot')
	
	if st.button('🔬 Analisar Performance'):
		# Cálculos de eficiência reprodutiva
		bezerros_nascidos = num_animais * (taxa_prenhez / 100)
		bezerros_desmamados = bezerros_nascidos * (taxa_desmama / 100)
		producao_anual_kg = bezerros_desmamados * peso_atual
		
		# Indicadores de eficiência
		eficiencia_reprodutiva = (taxa_prenhez * taxa_desmama) / 100
		produtividade_hectare = producao_anual_kg / area_total
		
		# Análise financeira
		margem_kg = preco_venda_kg - custo_producao_kg
		margem_total = producao_anual_kg * margem_kg
		margem_hectare = receita_hectare - custo_hectare
		
		# ROI e índices financeiros
		roi_producao = (margem_total / (custo_hectare * area_total)) * 100 if area_total > 0 else 0
		payback_anos = (custo_hectare * area_total) / margem_total if margem_total > 0 else 0
		
		st.divider()
		st.markdown('### 📊 Resultados da Análise')
		
		col_a1, col_a2, col_a3 = st.columns(3)
		
		with col_a1:
			st.metric('Eficiência Reprodutiva', f"{eficiencia_reprodutiva:.1f}%")
			st.metric('Produtividade/ha', f"{produtividade_hectare:.0f} kg/ha")
			st.metric('Margem/kg', f"R$ {margem_kg:.2f}")
		
		with col_a2:
			st.metric('Margem Total', f"R$ {margem_total:,.0f}")
			st.metric('Margem/hectare', f"R$ {margem_hectare:.0f}")
			st.metric('ROI Produção', f"{roi_producao:.1f}%")
		
		with col_a3:
			st.metric('Payback', f"{payback_anos:.1f} anos")
			st.metric('Produção anual', f"{producao_anual_kg:,.0f} kg")
			st.metric('Bezerros/ha', f"{bezerros_desmamados/area_total:.1f}")
		
		# Benchmarking
		st.divider()
		st.markdown('### 🎯 Benchmarking com Padrões da Indústria')
		
		benchmarks = {
			'Taxa Prenhez': (taxa_prenhez, 85, 'Meta da indústria: 85%'),
			'Eficiência Reprodutiva': (eficiencia_reprodutiva, 76.5, 'Meta da indústria: 76.5%'),
			'Produtividade/ha': (produtividade_hectare, 150, 'Meta da indústria: 150 kg/ha'),
			'ROI': (roi_producao, 15, 'Meta da indústria: 15%')
		}
		
		for indicador, (valor_atual, meta, descricao) in benchmarks.items():
			performance = (valor_atual / meta * 100) if meta > 0 else 0
			
			if performance >= 100:
				st.success(f'✅ **{indicador}**: {valor_atual:.1f} vs {meta:.1f} ({descricao}) - **Excelente!**')
			elif performance >= 80:
				st.info(f'ℹ️ **{indicador}**: {valor_atual:.1f} vs {meta:.1f} ({descricao}) - **Bom**')
			else:
				st.warning(f'⚠️ **{indicador}**: {valor_atual:.1f} vs {meta:.1f} ({descricao}) - **Abaixo da meta**')
		
		# Recomendações
		st.divider()
		st.markdown('### 💡 Recomendações')
		
		if taxa_prenhez < 80:
			st.info('🔬 **Reprodução**: Considere melhorar manejo reprodutivo e nutrição das matrizes.')
		
		# Conversão alimentar só está disponível se os índices zootécnicos foram calculados
		# Verificar se existe na sessão
		if 'conversao_alimentar' in st.session_state and st.session_state['conversao_alimentar'] > 8:
			st.info('🌱 **Nutrição**: Otimize a qualidade da alimentação para melhorar conversão.')
		
		if roi_producao < 10:
			st.info('💰 **Financeiro**: Revise custos de produção e preços de venda.')
		
		if produtividade_hectare < 120:
			st.info('🏞️ **Pastagem**: Melhore manejo de pastagens e lotação animal.')

st.divider()
st.caption('💡 **Dica:** Use a Calculadora ROI para avaliar viabilidade de investimentos em engorda.')

