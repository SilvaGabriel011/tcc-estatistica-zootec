"""Friendly error codes and messages mapping for user-facing toasts."""

ERROR_MESSAGES_PT = {
    "FILE_TOO_LARGE": "Arquivo muito grande. Reduza o tamanho ou compacte o arquivo.",
    "CSV_ENCODING_ERROR": "Falha ao ler CSV: verifique o encoding (UTF-8/Latin-1).",
    "API_TIMEOUT": "Tempo esgotado ao contatar o serviço. Tente novamente em instantes.",
    "API_RATE_LIMIT": "Muitas requisições. Aguarde alguns segundos e tente novamente.",
    "API_UNAVAILABLE": "Serviço temporariamente indisponível.",
    "MISSING_DEPENDENCY": "Dependência ausente. Reinstale os requisitos do projeto.",
}

def get_user_message(code: str, fallback: str = "Ocorreu um erro.") -> str:
    return ERROR_MESSAGES_PT.get(code, fallback)


