"""
Sistema de cache avançado para otimização de performance
"""

import json
import hashlib
import time
from typing import Any, Dict, Optional, Callable
from functools import wraps
import streamlit as st

try:
    import redis
    REDIS_AVAILABLE = True
except ImportError:
    REDIS_AVAILABLE = False

class PerformanceCache:
    """Sistema de cache multi-camada para otimização de performance."""
    
    def __init__(self, redis_url: Optional[str] = None):
        self.memory_cache: Dict[str, Dict[str, Any]] = {}
        self.redis_client = None
        
        # Configurar Redis se disponível
        if REDIS_AVAILABLE and redis_url:
            try:
                self.redis_client = redis.from_url(redis_url, decode_responses=True)
                self.redis_client.ping()  # Testar conexão
            except Exception as e:
                print(f"Redis não disponível: {e}")
                self.redis_client = None
    
    def _generate_key(self, func_name: str, args: tuple, kwargs: dict) -> str:
        """Gerar chave de cache única."""
        key_data = {
            'func': func_name,
            'args': args,
            'kwargs': sorted(kwargs.items())
        }
        key_str = json.dumps(key_data, sort_keys=True, default=str)
        return hashlib.md5(key_str.encode()).hexdigest()
    
    def get(self, key: str) -> Optional[Any]:
        """Obter valor do cache (memória primeiro, depois Redis)."""
        # Tentar cache de memória primeiro
        if key in self.memory_cache:
            cached_item = self.memory_cache[key]
            if time.time() < cached_item['expires_at']:
                return cached_item['value']
            else:
                # Expirou, remover da memória
                del self.memory_cache[key]
        
        # Tentar Redis se disponível
        if self.redis_client:
            try:
                cached_data = self.redis_client.get(f"cache:{key}")
                if cached_data:
                    cached_item = json.loads(cached_data)
                    if time.time() < cached_item['expires_at']:
                        # Cachear na memória também
                        self.memory_cache[key] = cached_item
                        return cached_item['value']
                    else:
                        # Expirou no Redis
                        self.redis_client.delete(f"cache:{key}")
            except Exception as e:
                print(f"Erro ao acessar Redis: {e}")
        
        return None
    
    def set(self, key: str, value: Any, ttl: int = 3600) -> None:
        """Definir valor no cache (memória e Redis)."""
        expires_at = time.time() + ttl
        cached_item = {
            'value': value,
            'expires_at': expires_at,
            'created_at': time.time()
        }
        
        # Cachear na memória
        self.memory_cache[key] = cached_item
        
        # Cachear no Redis se disponível
        if self.redis_client:
            try:
                self.redis_client.setex(
                    f"cache:{key}",
                    ttl,
                    json.dumps(cached_item, default=str)
                )
            except Exception as e:
                print(f"Erro ao salvar no Redis: {e}")
    
    def delete(self, key: str) -> None:
        """Remover valor do cache."""
        # Remover da memória
        if key in self.memory_cache:
            del self.memory_cache[key]
        
        # Remover do Redis
        if self.redis_client:
            try:
                self.redis_client.delete(f"cache:{key}")
            except Exception as e:
                print(f"Erro ao deletar do Redis: {e}")
    
    def clear(self) -> None:
        """Limpar todo o cache."""
        self.memory_cache.clear()
        if self.redis_client:
            try:
                # Limpar apenas chaves do nosso cache
                keys = self.redis_client.keys("cache:*")
                if keys:
                    self.redis_client.delete(*keys)
            except Exception as e:
                print(f"Erro ao limpar Redis: {e}")
    
    def get_stats(self) -> Dict[str, Any]:
        """Obter estatísticas do cache."""
        memory_items = len(self.memory_cache)
        memory_size = sum(
            len(json.dumps(item, default=str))
            for item in self.memory_cache.values()
        )
        
        redis_items = 0
        if self.redis_client:
            try:
                redis_items = len(self.redis_client.keys("cache:*"))
            except:
                pass
        
        return {
            'memory_items': memory_items,
            'memory_size_bytes': memory_size,
            'redis_items': redis_items,
            'redis_available': self.redis_client is not None
        }

# Instância global do cache
_cache_instance = None

def get_cache() -> PerformanceCache:
    """Obter instância global do cache."""
    global _cache_instance
    if _cache_instance is None:
        _cache_instance = PerformanceCache()
    return _cache_instance

def cached_with_ttl(ttl: int = 3600, cache_key_prefix: str = ""):
    """Decorator para cache de funções com TTL."""
    def decorator(func: Callable):
        @wraps(func)
        def wrapper(*args, **kwargs):
            cache = get_cache()
            
            # Gerar chave de cache
            key = cache._generate_key(
                f"{cache_key_prefix}{func.__name__}", 
                args, 
                kwargs
            )
            
            # Tentar obter do cache
            cached_result = cache.get(key)
            if cached_result is not None:
                return cached_result
            
            # Executar função e cachear resultado
            result = func(*args, **kwargs)
            cache.set(key, result, ttl)
            
            return result
        
        return wrapper
    return decorator

def cached_streamlit(ttl: int = 3600, show_spinner: bool = True):
    """Decorator para cache de funções Streamlit com spinner."""
    def decorator(func: Callable):
        @wraps(func)
        def wrapper(*args, **kwargs):
            cache = get_cache()
            
            # Gerar chave de cache
            key = cache._generate_key(func.__name__, args, kwargs)
            
            # Tentar obter do cache
            cached_result = cache.get(key)
            if cached_result is not None:
                return cached_result
            
            # Executar com spinner se necessário
            if show_spinner:
                with st.spinner(f"Processando {func.__name__}..."):
                    result = func(*args, **kwargs)
            else:
                result = func(*args, **kwargs)
            
            # Cachear resultado
            cache.set(key, result, ttl)
            
            return result
        
        return wrapper
    return decorator

# Cache especializado para diferentes tipos de dados
class DataCache:
    """Cache especializado para dados de análise."""
    
    def __init__(self):
        self.cache = get_cache()
    
    def cache_dataframe(self, key: str, df, ttl: int = 1800) -> None:
        """Cachear DataFrame com compressão."""
        
        # Converter para formato otimizado
        cache_data = {
            'data': df.to_json(orient='records'),
            'shape': df.shape,
            'columns': list(df.columns),
            'dtypes': {col: str(dtype) for col, dtype in df.dtypes.items()}
        }
        
        self.cache.set(f"df:{key}", cache_data, ttl)
    
    def get_dataframe(self, key: str):
        """Obter DataFrame do cache."""
        cached_data = self.cache.get(f"df:{key}")
        if cached_data is None:
            return None
        
        import pandas as pd
        
        # Reconstruir DataFrame
        df = pd.read_json(cached_data['data'], orient='records')
        
        # Restaurar tipos de dados
        for col, dtype_str in cached_data['dtypes'].items():
            if col in df.columns:
                df[col] = df[col].astype(dtype_str)
        
        return df
    
    def cache_filter_options(self, key: str, options: dict, ttl: int = 3600) -> None:
        """Cachear opções de filtros."""
        self.cache.set(f"filters:{key}", options, ttl)
    
    def get_filter_options(self, key: str) -> Optional[dict]:
        """Obter opções de filtros do cache."""
        return self.cache.get(f"filters:{key}")
    
    def cache_ai_response(self, key: str, response: str, ttl: int = 7200) -> None:
        """Cachear resposta da IA."""
        self.cache.set(f"ai:{key}", response, ttl)
    
    def get_ai_response(self, key: str) -> Optional[str]:
        """Obter resposta da IA do cache."""
        return self.cache.get(f"ai:{key}")

# Instância global do cache de dados
_data_cache = None

def get_data_cache() -> DataCache:
    """Obter instância global do cache de dados."""
    global _data_cache
    if _data_cache is None:
        _data_cache = DataCache()
    return _data_cache

# Funções utilitárias para cache
def invalidate_cache_pattern(pattern: str) -> None:
    """Invalidar cache por padrão."""
    cache = get_cache()
    
    # Invalidar na memória
    keys_to_remove = [key for key in cache.memory_cache.keys() if pattern in key]
    for key in keys_to_remove:
        del cache.memory_cache[key]
    
    # Invalidar no Redis
    if cache.redis_client:
        try:
            redis_keys = cache.redis_client.keys(f"cache:*{pattern}*")
            if redis_keys:
                cache.redis_client.delete(*redis_keys)
        except Exception as e:
            print(f"Erro ao invalidar padrão no Redis: {e}")

def get_cache_performance_report() -> Dict[str, Any]:
    """Obter relatório de performance do cache."""
    cache = get_cache()
    stats = cache.get_stats()
    
    return {
        'cache_stats': stats,
        'recommendations': _get_cache_recommendations(stats),
        'memory_usage_mb': round(stats['memory_size_bytes'] / 1024 / 1024, 2),
        'hit_rate_estimate': _estimate_hit_rate(stats)
    }

def _get_cache_recommendations(stats: Dict[str, Any]) -> list:
    """Gerar recomendações baseadas nas estatísticas do cache."""
    recommendations = []
    
    if stats['memory_size_bytes'] > 50 * 1024 * 1024:  # 50MB
        recommendations.append("Considerar limpeza do cache de memória")
    
    if stats['memory_items'] > 1000:
        recommendations.append("Cache de memória com muitos itens - considerar TTL menor")
    
    if not stats['redis_available']:
        recommendations.append("Redis não disponível - cache limitado à memória")
    
    return recommendations

def _estimate_hit_rate(stats: Dict[str, Any]) -> float:
    """Estimar taxa de hit do cache."""
    # Estimativa simples baseada no número de itens
    if stats['memory_items'] == 0:
        return 0.0
    
    # Fórmula simplificada - em produção seria baseada em métricas reais
    estimated_hits = min(stats['memory_items'] * 10, 1000)
    estimated_misses = max(stats['memory_items'], 100)
    
    return round(estimated_hits / (estimated_hits + estimated_misses), 2)
