"""
Script de teste de performance para TCC Gado Gordo
"""

import time
import pandas as pd
import numpy as np
from concurrent.futures import ThreadPoolExecutor, as_completed
import sys
import os

# Adicionar diretório raiz ao path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from core.performance_monitor import get_performance_monitor
from core.cache import get_cache, get_data_cache

class PerformanceTester:
    """Classe para testes de performance."""
    
    def __init__(self):
        self.monitor = get_performance_monitor()
        self.cache = get_cache()
        self.data_cache = get_data_cache()
        self.results = {}
    
    def test_cache_performance(self, iterations: int = 100):
        """Testar performance do sistema de cache."""
        print(f"\nTestando Cache Performance ({iterations} iteracoes)...")
        
        start_time = time.time()
        
        # Teste de escrita
        write_start = time.time()
        for i in range(iterations):
            key = f"test_key_{i}"
            value = f"test_value_{i}" * 100  # Valor maior para teste
            self.cache.set(key, value, ttl=60)
        write_time = time.time() - write_start
        
        # Teste de leitura
        read_start = time.time()
        for i in range(iterations):
            key = f"test_key_{i}"
            self.cache.get(key)
        read_time = time.time() - read_start
        
        total_time = time.time() - start_time
        
        # Calcular métricas
        write_ops_per_sec = iterations / write_time
        read_ops_per_sec = iterations / read_time
        total_ops_per_sec = (iterations * 2) / total_time
        
        self.results['cache'] = {
            'write_ops_per_sec': write_ops_per_sec,
            'read_ops_per_sec': read_ops_per_sec,
            'total_ops_per_sec': total_ops_per_sec,
            'write_time': write_time,
            'read_time': read_time,
            'total_time': total_time
        }
        
        print(f"Cache - Escrita: {write_ops_per_sec:.0f} ops/s, Leitura: {read_ops_per_sec:.0f} ops/s")
        
        # Rastrear métricas
        self.monitor.track_metric("cache_write_ops_per_sec", write_ops_per_sec, "ops/s")
        self.monitor.track_metric("cache_read_ops_per_sec", read_ops_per_sec, "ops/s")
    
    def test_dataframe_operations(self, size: int = 10000):
        """Testar performance de operações com DataFrame."""
        print(f"\n Testando DataFrame Operations ({size:,} registros)...")
        
        # Criar DataFrame de teste
        data = {
            'id': range(size),
            'valor': np.random.normal(100, 20, size),
            'categoria': np.random.choice(['A', 'B', 'C'], size),
            'data': pd.date_range('2023-01-01', periods=size, freq='H')
        }
        df = pd.DataFrame(data)
        
        # Teste de operações
        operations = {
            'filter': lambda: df[df['valor'] > 120],
            'groupby': lambda: df.groupby('categoria')['valor'].mean(),
            'sort': lambda: df.sort_values('valor'),
            'describe': lambda: df.describe(),
            'memory_usage': lambda: df.memory_usage(deep=True).sum()
        }
        
        for op_name, operation in operations.items():
            start_time = time.time()
            try:
                result = operation()
                execution_time = time.time() - start_time
                
                self.results[f'dataframe_{op_name}'] = {
                    'execution_time': execution_time,
                    'success': True
                }
                
                print(f" {op_name}: {execution_time:.4f}s")
                
                # Rastrear métrica
                self.monitor.track_metric(f"dataframe_{op_name}_time", execution_time, "seconds")
                
            except Exception as e:
                print(f" {op_name}: Erro - {e}")
                self.results[f'dataframe_{op_name}'] = {
                    'execution_time': 0,
                    'success': False,
                    'error': str(e)
                }
    
    def test_concurrent_requests(self, num_requests: int = 50):
        """Testar requisições concorrentes."""
        print(f"\n Testando Requisições Concorrentes ({num_requests} requisições)...")
        
        def make_request(i):
            """Fazer uma requisição de teste."""
            start_time = time.time()
            try:
                # Simular requisição (substituir por endpoint real se disponível)
                time.sleep(0.01)  # Simular processamento
                response_time = time.time() - start_time
                return {'success': True, 'response_time': response_time, 'request_id': i}
            except Exception as e:
                return {'success': False, 'error': str(e), 'request_id': i}
        
        # Executar requisições concorrentes
        start_time = time.time()
        
        with ThreadPoolExecutor(max_workers=10) as executor:
            futures = [executor.submit(make_request, i) for i in range(num_requests)]
            results = [future.result() for future in as_completed(futures)]
        
        total_time = time.time() - start_time
        
        # Analisar resultados
        successful_requests = [r for r in results if r['success']]
        failed_requests = [r for r in results if not r['success']]
        
        if successful_requests:
            avg_response_time = sum(r['response_time'] for r in successful_requests) / len(successful_requests)
            max_response_time = max(r['response_time'] for r in successful_requests)
            min_response_time = min(r['response_time'] for r in successful_requests)
        else:
            avg_response_time = max_response_time = min_response_time = 0
        
        requests_per_sec = num_requests / total_time
        success_rate = len(successful_requests) / num_requests * 100
        
        self.results['concurrent_requests'] = {
            'total_requests': num_requests,
            'successful_requests': len(successful_requests),
            'failed_requests': len(failed_requests),
            'success_rate': success_rate,
            'requests_per_sec': requests_per_sec,
            'avg_response_time': avg_response_time,
            'max_response_time': max_response_time,
            'min_response_time': min_response_time,
            'total_time': total_time
        }
        
        print(f" Taxa de Sucesso: {success_rate:.1f}%")
        print(f" Requisições/s: {requests_per_sec:.1f}")
        print(f" Tempo Médio de Resposta: {avg_response_time:.4f}s")
        
        # Rastrear métricas
        self.monitor.track_metric("concurrent_requests_per_sec", requests_per_sec, "req/s")
        self.monitor.track_metric("concurrent_avg_response_time", avg_response_time, "seconds")
        self.monitor.track_metric("concurrent_success_rate", success_rate, "percent")
    
    def test_memory_usage(self):
        """Testar uso de memória."""
        print("\n Testando Uso de Memória...")
        
        import psutil
        process = psutil.Process()
        
        # Medir uso inicial
        initial_memory = process.memory_info().rss / 1024 / 1024  # MB
        
        # Criar estruturas de dados grandes
        large_data = []
        for i in range(1000):
            large_data.append({
                'id': i,
                'data': 'x' * 1000,  # 1KB por item
                'numbers': list(range(100))
            })
        
        # Medir uso após criação
        peak_memory = process.memory_info().rss / 1024 / 1024  # MB
        
        # Limpar dados
        del large_data
        
        # Medir uso após limpeza
        final_memory = process.memory_info().rss / 1024 / 1024  # MB
        
        memory_increase = peak_memory - initial_memory
        memory_cleanup = peak_memory - final_memory
        
        self.results['memory'] = {
            'initial_memory_mb': initial_memory,
            'peak_memory_mb': peak_memory,
            'final_memory_mb': final_memory,
            'memory_increase_mb': memory_increase,
            'memory_cleanup_mb': memory_cleanup
        }
        
        print(f" Memória Inicial: {initial_memory:.1f} MB")
        print(f" Pico de Memória: {peak_memory:.1f} MB")
        print(f" Memória Final: {final_memory:.1f} MB")
        print(f" Aumento de Memória: {memory_increase:.1f} MB")
        print(f" Limpeza de Memória: {memory_cleanup:.1f} MB")
        
        # Rastrear métricas
        self.monitor.track_metric("memory_peak_mb", peak_memory, "MB")
        self.monitor.track_metric("memory_cleanup_mb", memory_cleanup, "MB")
    
    def test_ai_context_build(self):
        """Testar construção de contexto da IA."""
        print("\n Testando Construção de Contexto IA...")
        
        # Criar DataFrame de teste
        df = pd.DataFrame({
            'id': range(1000),
            'PREÇO POR KG': np.random.normal(50, 10, 1000),
            'PESO': np.random.normal(400, 50, 1000),
            'CATEGORIA': np.random.choice(['A', 'B', 'C'], 1000)
        })
        
        from core.ai_assistant import AIAssistant
        assistant = AIAssistant()
        
        # Teste múltiplas vezes
        times = []
        for i in range(10):
            start_time = time.time()
            context = assistant.build_context(df)
            execution_time = time.time() - start_time
            times.append(execution_time)
        
        avg_time = sum(times) / len(times)
        min_time = min(times)
        max_time = max(times)
        
        self.results['ai_context'] = {
            'avg_time': avg_time,
            'min_time': min_time,
            'max_time': max_time,
            'times': times
        }
        
        print(f" Tempo Médio: {avg_time:.4f}s")
        print(f" Tempo Mínimo: {min_time:.4f}s")
        print(f" Tempo Máximo: {max_time:.4f}s")
        
        # Rastrear métricas
        self.monitor.track_metric("ai_context_avg_time", avg_time, "seconds")
        self.monitor.track_metric("ai_context_min_time", min_time, "seconds")
        self.monitor.track_metric("ai_context_max_time", max_time, "seconds")
    
    def run_all_tests(self):
        """Executar todos os testes."""
        print("Iniciando Testes de Performance - TCC Gado Gordo")
        print("=" * 60)
        
        start_time = time.time()
        
        try:
            self.test_cache_performance(1000)
            self.test_dataframe_operations(10000)
            self.test_concurrent_requests(100)
            self.test_memory_usage()
            self.test_ai_context_build()
            
            total_time = time.time() - start_time
            
            print("\n" + "=" * 60)
            print("TODOS OS TESTES CONCLUIDOS!")
            print(f"Tempo Total: {total_time:.2f}s")
            
            # Mostrar resumo de performance
            self.show_performance_summary()
            
        except Exception as e:
            print(f"\nErro durante os testes: {e}")
            import traceback
            traceback.print_exc()
    
    def show_performance_summary(self):
        """Mostrar resumo de performance."""
        print("\nRESUMO DE PERFORMANCE")
        print("-" * 40)
        
        summary = self.monitor.get_performance_summary()
        
        print(f"Performance Score: {summary['performance_score']:.1f}/100")
        print(f"Metricas Coletadas: {summary['application_metrics']['total_metrics']}")
        print(f"Alertas: {summary['critical_alerts']} criticos, {summary['warning_alerts']} avisos")
        
        # Recomendações
        if summary['recommendations']:
            print("\nRECOMENDACOES:")
            for i, rec in enumerate(summary['recommendations'], 1):
                print(f"  {i}. {rec}")
        
        # Exportar resultados
        import json
        with open('performance_test_results.json', 'w', encoding='utf-8') as f:
            json.dump(self.results, f, indent=2, ensure_ascii=False, default=str)
        
        print("\nResultados salvos em: performance_test_results.json")

def main():
    """Função principal."""
    tester = PerformanceTester()
    tester.run_all_tests()

if __name__ == "__main__":
    main()
