"""Formatadores para padrão brasileiro (PT-BR)."""
from datetime import datetime
from typing import Union
import locale

# Tentar configurar locale brasileiro
try:
    locale.setlocale(locale.LC_ALL, 'pt_BR.UTF-8')
except:
    try:
        locale.setlocale(locale.LC_ALL, 'Portuguese_Brazil.1252')
    except:
        pass

def formatar_moeda(valor: Union[float, int]) -> str:
    """Formata valor como moeda brasileira: R$ 1.234,56"""
    try:
        return f"R$ {valor:,.2f}".replace(",", "X").replace(".", ",").replace("X", ".")
    except:
        return f"R$ {valor}"

def formatar_numero(valor: Union[float, int], casas_decimais: int = 2) -> str:
    """Formata número no padrão brasileiro: 1.234,56"""
    try:
        formato = f"{{:,.{casas_decimais}f}}"
        return formato.format(valor).replace(",", "X").replace(".", ",").replace("X", ".")
    except:
        return str(valor)

def formatar_data(data: Union[datetime, str], formato: str = "%d/%m/%Y") -> str:
    """Formata data no padrão brasileiro: dd/mm/aaaa"""
    if isinstance(data, str):
        try:
            # Tentar parsear ISO format
            if 'T' in data or 'Z' in data:
                data = datetime.fromisoformat(data.replace('Z', '+00:00'))
            else:
                return data
        except:
            return data
    
    if isinstance(data, datetime):
        return data.strftime(formato)
    
    return str(data)

def formatar_percentual(valor: float, casas_decimais: int = 2) -> str:
    """Formata percentual: 12,34%"""
    try:
        return f"{formatar_numero(valor * 100, casas_decimais)}%"
    except:
        return f"{valor}%"

def formatar_arroba(valor_kg: float) -> str:
    """Converte R$/kg para R$/@ (arroba = 15kg)"""
    return formatar_moeda(valor_kg * 15)

def converter_kg_arroba(kg: float) -> float:
    """Converte kg para arrobas"""
    return kg / 15

def converter_arroba_kg(arrobas: float) -> float:
    """Converte arrobas para kg"""
    return arrobas * 15

def converter_alqueire(hectares: float, tipo: str = "paulista") -> float:
    """
    Converte hectares para alqueires.
    
    Tipos:
    - paulista: 1 alqueire = 2,42 hectares
    - mineiro: 1 alqueire = 4,84 hectares  
    - goiano: 1 alqueire = 4,84 hectares (mesmo que mineiro)
    """
    conversoes = {
        "paulista": 2.42,
        "mineiro": 4.84,
        "goiano": 4.84
    }
    return hectares / conversoes.get(tipo, 2.42)

def formatar_unidade_animal(cab_ha: float) -> str:
    """Formata lotação em UA/ha (1 UA = 450kg de peso vivo)"""
    return f"{formatar_numero(cab_ha, 2)} UA/ha"

