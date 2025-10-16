"""Base de conhecimento de Zootecnia (conceitos, termos e definições).

Fornece uma pequena ontologia/glossário interno e funções de recuperação
para apoiar respostas da IA com foco agropecuário.
"""

from typing import List, Tuple, Dict
import re

# Glossário expandido de Zootecnia e Agronegócio
GLOSSARIO: Dict[str, str] = {
    # Unidades e Medidas
    "arroba": "Unidade de massa usada no mercado pecuário; 1 arroba = 15 kg.",
    "@": "Símbolo frequentemente usado para representar arroba no comércio pecuário.",
    "ua": "Unidade Animal: equivale a um bovino de 450 kg de peso vivo.",
    "alqueire paulista": "Medida de área equivalente a 2,42 hectares.",
    "alqueire mineiro": "Medida de área equivalente a 4,84 hectares.",
    
    # Categorias de Gado
    "gado gordo": "Bovinos preparados para abate, prontos para venda aos frigoríficos.",
    "gado magro": "Animais em recria/engorda que ainda não atingiram peso de abate.",
    "boi gordo": "Macho castrado pronto para abate; referência de mercado.",
    "vaca gorda": "Fêmea pronta para abate.",
    "novilho": "Macho jovem, geralmente entre 2 e 3 anos.",
    "bezerro": "Bovino jovem, do nascimento até a desmama (6-8 meses).",
    "bezerro desmamado": "Animal recém-separado da mãe, pronto para recria.",
    "garrote": "Macho jovem entre 12 e 24 meses.",
    "novilha": "Fêmea jovem que ainda não pariu.",
    "matriz": "Fêmea destinada à reprodução no rebanho.",
    
    # Raças Zebuínas Brasileiras
    "nelore": "Raça zebuína mais popular no Brasil, adaptada ao clima tropical.",
    "gir": "Raça zebuína leiteira, também usada em cruzamentos para corte.",
    "guzerá": "Raça zebuína de dupla aptidão (leite e carne).",
    "tabapuã": "Raça zebuína brasileira desenvolvida em São Paulo.",
    "indubrasil": "Raça zebuína de grande porte, criada no Brasil.",
    "brahman": "Raça zebuína norte-americana, muito usada em cruzamentos.",
    
    # Raças Taurinas e Sintéticas
    "angus": "Raça taurina britânica, conhecida pela qualidade da carne.",
    "hereford": "Raça taurina britânica, adaptada a diversos climas.",
    "canchim": "Raça sintética brasileira (5/8 Charolês + 3/8 Zebu).",
    "brangus": "Raça sintética (3/8 Brahman + 5/8 Angus).",
    "senepol": "Raça taurina adaptada, sem chifres, tolerante ao calor.",
    
    # Sistemas de Produção
    "confinamento": "Sistema de engorda intensiva com dieta balanceada em curral.",
    "semiconfinamento": "Sistema misto: pastejo + suplementação no cocho.",
    "pastejo": "Alimentação em pastagem; base da pecuária extensiva.",
    "pasto rotacionado": "Sistema de divisão de pasto em piquetes com rotação planejada.",
    "integração lavoura-pecuária": "Sistema que alterna cultivo agrícola e pecuária na mesma área.",
    "ilpf": "Integração Lavoura-Pecuária-Floresta: sistema sustentável com árvores.",
    
    # Manejo e Produção
    "desmama": "Separação do bezerro da mãe, geralmente aos 6-8 meses.",
    "recria": "Fase entre desmama e engorda, dos 8 aos 18-24 meses.",
    "engorda": "Fase final antes do abate, foco em ganho de peso.",
    "terminação": "Etapa final da engorda, preparação para abate.",
    "ganho médio diário": "Evolução média do peso por dia (kg/dia); GMD.",
    "taxa de lotação": "Número de animais ou UA por hectare.",
    "capacidade de suporte": "Quantidade máxima de animais que o pasto suporta.",
    
    # Nutrição
    "suplementação mineral": "Fornecimento de sal mineral para suprir deficiências.",
    "volumoso": "Alimento rico em fibra: pasto, silagem, feno.",
    "concentrado": "Alimento rico em energia/proteína: ração, grãos.",
    "silagem": "Forragem conservada por fermentação anaeróbica.",
    "feno": "Forragem conservada por secagem.",
    "ureia": "Fonte de nitrogênio não-proteico usada na alimentação.",
    "eficiência alimentar": "Relação entre ganho de peso e consumo de matéria seca; conversão alimentar.",
    
    # Reprodução
    "inseminação artificial": "IA: técnica de reprodução sem monta natural.",
    "monta natural": "Reprodução com touro a campo.",
    "iatf": "Inseminação Artificial em Tempo Fixo: protocolo hormonal.",
    "taxa de prenhez": "Percentual de fêmeas que ficam prenhas.",
    "estação de monta": "Período definido para reprodução no rebanho.",
    "intervalo entre partos": "Tempo entre dois partos consecutivos (ideal: 12 meses).",
    
    # Sanidade
    "vacinação": "Imunização contra doenças: febre aftosa, brucelose, etc.",
    "vermifugação": "Controle de vermes intestinais.",
    "manejo sanitário": "Conjunto de práticas para prevenção de doenças.",
    "carrapaticida": "Produto para controle de carrapatos.",
    "quarentena": "Isolamento de animais recém-chegados para evitar doenças.",
    
    # Aspectos Econômicos
    "preço por kg": "Preço unitário por quilograma de carcaça/vivo; base para calcular arroba.",
    "preço por arroba": "Preço por 15 kg, referência comum em negociações de gado gordo.",
    "custo por arroba": "Custo total de produção dividido por arrobas produzidas.",
    "margem bruta": "Receita menos custos variáveis.",
    "ponto de equilíbrio": "Quantidade mínima a produzir para cobrir custos fixos e variáveis.",
    "arrobas por hectare": "Produtividade: quantidade de @ produzidas por ha/ano.",
    "reposição": "Animais comprados para engorda ou reposição de plantel.",
    
    # Mercado e Comercialização
    "frigorífico": "Indústria de abate e processamento de carne.",
    "leilão": "Venda de gado em hasta pública.",
    "boi na fazenda": "Preço do gado ainda na propriedade do produtor.",
    "boi na balança": "Preço do gado pesado no frigorífico.",
    "cepea": "Centro de Estudos Avançados em Economia Aplicada (USP/Esalq).",
    "indicador do boi gordo": "Índice de preço médio do boi no mercado brasileiro (Cepea).",
    
    # Abate e Carcaça
    "abate": "Processo industrial de processamento dos animais.",
    "carcaça quente": "Peso da carcaça imediatamente após o abate.",
    "carcaça fria": "Peso da carcaça após resfriamento (24h).",
    "rendimento de carcaça": "Percentual do peso vivo convertido em carcaça (ideal: 52-58%).",
    "ossatura": "Estrutura óssea do animal; afeta rendimento.",
    "acabamento": "Camada de gordura na carcaça; mínimo de 3mm ideal.",
    "conformação": "Formato e musculatura da carcaça; convexo, subconvexo, retilíneo.",
    "marmoreio": "Gordura intramuscular que melhora a qualidade da carne.",
}


def normalizar(texto: str) -> str:
    return re.sub(r"\s+", " ", texto.strip().lower())


def buscar_termos(consulta: str, limite: int = 5) -> List[Tuple[str, str, int]]:
    """Retorna lista de (termo, definicao, score simples) relevantes.

    O score é um contagem de ocorrências de palavras da consulta encontradas
    no termo/definição, para uma heurística simples porém eficaz.
    """
    consulta_norm = normalizar(consulta)
    palavras = [p for p in re.split(r"[^\w@]+", consulta_norm) if p]
    resultados: List[Tuple[str, str, int]] = []
    for termo, definicao in GLOSSARIO.items():
        alvo = normalizar(termo + " " + definicao)
        score = sum(alvo.count(p) for p in palavras)
        if score > 0:
            resultados.append((termo, definicao, score))
    resultados.sort(key=lambda x: x[2], reverse=True)
    return resultados[:limite]


def contexto_kb(consulta: str, limite: int = 5) -> str:
    """Constrói um pequeno contexto textual com termos da KB relacionados."""
    itens = buscar_termos(consulta, limite=limite)
    if not itens:
        return ""
    linhas = ["Contexto de Zootecnia (glossário):"]
    for termo, definicao, _ in itens:
        linhas.append(f"- {termo}: {definicao}")
    return "\n".join(linhas)




