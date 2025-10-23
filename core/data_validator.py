"""Módulo de validação de dados aprimorado com suporte a múltiplos formatos."""
import pandas as pd
import numpy as np
import streamlit as st
import json
import zipfile
import io
try:
    import magic
    HAS_MAGIC = True
except ImportError:
    HAS_MAGIC = False
from typing import Dict, Any, List, Tuple, Optional, Union
from pathlib import Path
import logging
from datetime import datetime

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class DataValidator:
    """Classe para validação robusta de dados com suporte a múltiplos formatos."""
    
    def __init__(self):
        self.supported_formats = {
            'csv': ['.csv'],
            'excel': ['.xlsx', '.xls'],
            'json': ['.json'],
            'parquet': ['.parquet'],
            'zip': ['.zip']
        }
        self.max_file_size = 100 * 1024 * 1024  # 100MB
        self.validation_results = {}
    
    def validate_file_type(self, uploaded_file) -> Dict[str, Any]:
        """Valida o tipo de arquivo e retorna informações sobre o formato."""
        try:
            file_name = uploaded_file.name.lower()
            file_extension = Path(file_name).suffix
            
            # Verificar extensão
            format_type = None
            for fmt, extensions in self.supported_formats.items():
                if file_extension in extensions:
                    format_type = fmt
                    break
            
            if not format_type:
                return {
                    'valid': False,
                    'error': f'Formato não suportado: {file_extension}',
                    'suggestions': ['Use .csv, .xlsx, .json ou .zip']
                }
            
            # Verificar tamanho do arquivo
            file_size = len(uploaded_file.getvalue())
            if file_size > self.max_file_size:
                return {
                    'valid': False,
                    'error': f'Arquivo muito grande: {file_size / 1024 / 1024:.1f}MB',
                    'suggestions': [f'Reduza o arquivo para menos de {self.max_file_size / 1024 / 1024:.0f}MB']
                }
            
            return {
                'valid': True,
                'format': format_type,
                'extension': file_extension,
                'size_mb': file_size / 1024 / 1024
            }
            
        except Exception as e:
            logger.error(f"Erro na validação do arquivo: {str(e)}")
            return {
                'valid': False,
                'error': f'Erro na validação: {str(e)}',
                'suggestions': ['Verifique se o arquivo não está corrompido']
            }
    
    def detect_csv_format(self, file_content: bytes) -> Dict[str, Any]:
        """Detecta automaticamente o formato CSV (delimitador, encoding, headers)."""
        try:
            # Tentar diferentes encodings
            encodings = ['utf-8', 'latin-1', 'cp1252', 'iso-8859-1']
            
            for encoding in encodings:
                try:
                    content = file_content.decode(encoding)
                    break
                except UnicodeDecodeError:
                    continue
            else:
                return {'error': 'Não foi possível decodificar o arquivo'}
            
            # Detectar delimitador
            delimiters = [',', ';', '\t', '|']
            delimiter_scores = {}
            
            # Ler primeiras linhas para análise
            lines = content.split('\n')[:10]
            
            for delimiter in delimiters:
                scores = []
                for line in lines:
                    if line.strip():
                        score = line.count(delimiter)
                        scores.append(score)
                
                if scores:
                    delimiter_scores[delimiter] = {
                        'avg_score': np.mean(scores),
                        'consistency': 1 - np.std(scores) / (np.mean(scores) + 1)
                    }
            
            # Escolher melhor delimitador
            best_delimiter = max(delimiter_scores.keys(), 
                               key=lambda x: delimiter_scores[x]['consistency'])
            
            # Detectar se tem header
            first_line = lines[0] if lines else ""
            second_line = lines[1] if len(lines) > 1 else ""
            
            has_header = self._detect_header(first_line, second_line, best_delimiter)
            
            return {
                'delimiter': best_delimiter,
                'encoding': encoding,
                'has_header': has_header,
                'confidence': delimiter_scores[best_delimiter]['consistency']
            }
            
        except Exception as e:
            logger.error(f"Erro na detecção de formato CSV: {str(e)}")
            return {'error': f'Erro na detecção: {str(e)}'}
    
    def _detect_header(self, first_line: str, second_line: str, delimiter: str) -> bool:
        """Detecta se a primeira linha é um cabeçalho."""
        try:
            first_cols = first_line.split(delimiter)
            second_cols = second_line.split(delimiter)
            
            # Se número de colunas diferente, provavelmente tem header
            if len(first_cols) != len(second_cols):
                return True
            
            # Verificar se primeira linha tem mais texto que números
            first_numeric = sum(1 for col in first_cols if col.strip().replace('.', '').replace(',', '').isdigit())
            second_numeric = sum(1 for col in second_cols if col.strip().replace('.', '').replace(',', '').isdigit())
            
            return first_numeric < second_numeric
            
        except:
            return True  # Default para ter header
    
    def parse_file(self, uploaded_file, format_info: Dict[str, Any]) -> Dict[str, Any]:
        """Parse o arquivo baseado no formato detectado."""
        try:
            file_content = uploaded_file.getvalue()
            
            if format_info['format'] == 'csv':
                return self._parse_csv(file_content, format_info)
            elif format_info['format'] == 'excel':
                return self._parse_excel(file_content)
            elif format_info['format'] == 'json':
                return self._parse_json(file_content)
            elif format_info['format'] == 'zip':
                return self._parse_zip(file_content)
            else:
                return {'error': f'Formato não implementado: {format_info["format"]}'}
                
        except Exception as e:
            logger.error(f"Erro no parse do arquivo: {str(e)}")
            return {'error': f'Erro no parse: {str(e)}'}
    
    def _parse_csv(self, file_content: bytes, format_info: Dict[str, Any]) -> Dict[str, Any]:
        """Parse arquivo CSV."""
        try:
            # Detectar formato se não foi detectado
            if 'delimiter' not in format_info:
                csv_info = self.detect_csv_format(file_content)
                if 'error' in csv_info:
                    return csv_info
                format_info.update(csv_info)
            
            # Decodificar conteúdo
            content = file_content.decode(format_info.get('encoding', 'utf-8'))
            
            # Ler DataFrame
            df = pd.read_csv(
                io.StringIO(content),
                delimiter=format_info['delimiter'],
                header=0 if format_info.get('has_header', True) else None
            )
            
            return {
                'success': True,
                'dataframe': df,
                'format_info': format_info,
                'rows': len(df),
                'columns': len(df.columns)
            }
            
        except Exception as e:
            return {'error': f'Erro no parse CSV: {str(e)}'}
    
    def _parse_excel(self, file_content: bytes) -> Dict[str, Any]:
        """Parse arquivo Excel."""
        try:
            df = pd.read_excel(io.BytesIO(file_content))
            
            return {
                'success': True,
                'dataframe': df,
                'format_info': {'format': 'excel'},
                'rows': len(df),
                'columns': len(df.columns)
            }
            
        except Exception as e:
            return {'error': f'Erro no parse Excel: {str(e)}'}
    
    def _parse_json(self, file_content: bytes) -> Dict[str, Any]:
        """Parse arquivo JSON."""
        try:
            content = file_content.decode('utf-8')
            data = json.loads(content)
            
            # Converter para DataFrame
            if isinstance(data, list):
                df = pd.DataFrame(data)
            elif isinstance(data, dict):
                # Tentar encontrar array de dados
                for key, value in data.items():
                    if isinstance(value, list) and len(value) > 0:
                        df = pd.DataFrame(value)
                        break
                else:
                    df = pd.DataFrame([data])
            else:
                return {'error': 'Formato JSON não suportado'}
            
            return {
                'success': True,
                'dataframe': df,
                'format_info': {'format': 'json'},
                'rows': len(df),
                'columns': len(df.columns)
            }
            
        except Exception as e:
            return {'error': f'Erro no parse JSON: {str(e)}'}
    
    def _parse_zip(self, file_content: bytes) -> Dict[str, Any]:
        """Parse arquivo ZIP."""
        try:
            with zipfile.ZipFile(io.BytesIO(file_content), 'r') as zip_file:
                file_list = zip_file.namelist()
                
                # Procurar por arquivos de dados
                data_files = []
                for file_name in file_list:
                    ext = Path(file_name).suffix.lower()
                    if ext in ['.csv', '.xlsx', '.json']:
                        data_files.append(file_name)
                
                if not data_files:
                    return {'error': 'Nenhum arquivo de dados encontrado no ZIP'}
                
                # Usar primeiro arquivo de dados encontrado
                data_file = data_files[0]
                file_content = zip_file.read(data_file)
                
                # Detectar formato e parsear
                ext = Path(data_file).suffix.lower()
                if ext == '.csv':
                    return self._parse_csv(file_content, {'format': 'csv'})
                elif ext in ['.xlsx', '.xls']:
                    return self._parse_excel(file_content)
                elif ext == '.json':
                    return self._parse_json(file_content)
                else:
                    return {'error': f'Formato não suportado no ZIP: {ext}'}
                    
        except Exception as e:
            return {'error': f'Erro no parse ZIP: {str(e)}'}
    
    def validate_data_quality(self, df: pd.DataFrame) -> Dict[str, Any]:
        """Valida a qualidade dos dados carregados."""
        try:
            validation_results = {
                'total_rows': len(df),
                'total_columns': len(df.columns),
                'column_info': {},
                'missing_values': {},
                'data_types': {},
                'outliers': {},
                'warnings': [],
                'recommendations': []
            }
            
            # Análise por coluna
            for column in df.columns:
                col_data = df[column]
                
                # Informações básicas
                col_info = {
                    'dtype': str(col_data.dtype),
                    'non_null_count': col_data.count(),
                    'null_count': col_data.isnull().sum(),
                    'unique_count': col_data.nunique(),
                    'sample_values': col_data.dropna().head(3).tolist()
                }
                
                validation_results['column_info'][column] = col_info
                validation_results['missing_values'][column] = col_info['null_count']
                validation_results['data_types'][column] = col_info['dtype']
                
                # Detecção de outliers para colunas numéricas
                if pd.api.types.is_numeric_dtype(col_data):
                    outliers = self._detect_outliers(col_data)
                    validation_results['outliers'][column] = outliers
                    
                    if outliers['count'] > 0:
                        validation_results['warnings'].append(
                            f'Coluna {column}: {outliers["count"]} outliers detectados'
                        )
                
                # Recomendações
                if col_info['null_count'] > len(df) * 0.5:
                    validation_results['recommendations'].append(
                        f'Coluna {column}: Mais de 50% de valores faltantes - considere remover'
                    )
                
                if col_info['unique_count'] == 1:
                    validation_results['recommendations'].append(
                        f'Coluna {column}: Apenas um valor único - considere remover'
                    )
            
            return validation_results
            
        except Exception as e:
            logger.error(f"Erro na validação de qualidade: {str(e)}")
            return {'error': f'Erro na validação: {str(e)}'}
    
    def _detect_outliers(self, series: pd.Series) -> Dict[str, Any]:
        """Detecta outliers usando IQR method."""
        try:
            Q1 = series.quantile(0.25)
            Q3 = series.quantile(0.75)
            IQR = Q3 - Q1
            
            lower_bound = Q1 - 1.5 * IQR
            upper_bound = Q3 + 1.5 * IQR
            
            outliers = series[(series < lower_bound) | (series > upper_bound)]
            
            return {
                'count': len(outliers),
                'percentage': len(outliers) / len(series) * 100,
                'lower_bound': lower_bound,
                'upper_bound': upper_bound
            }
            
        except:
            return {'count': 0, 'percentage': 0}
    
    def get_upload_guidance(self, validation_results: Dict[str, Any]) -> List[str]:
        """Retorna orientações para o usuário baseadas nos resultados de validação."""
        guidance = []
        
        if 'error' in validation_results:
            guidance.append(f"❌ Erro: {validation_results['error']}")
            return guidance
        
        # Orientações baseadas na qualidade dos dados
        if validation_results.get('total_rows', 0) == 0:
            guidance.append("❌ Arquivo vazio - verifique se há dados no arquivo")
        
        if validation_results.get('total_columns', 0) == 0:
            guidance.append("❌ Nenhuma coluna encontrada - verifique o formato do arquivo")
        
        # Orientações sobre valores faltantes
        high_missing = [col for col, count in validation_results.get('missing_values', {}).items() 
                       if count > validation_results.get('total_rows', 1) * 0.3]
        if high_missing:
            guidance.append(f"⚠️ Colunas com muitos valores faltantes: {', '.join(high_missing)}")
        
        # Orientações sobre outliers
        high_outliers = [col for col, info in validation_results.get('outliers', {}).items() 
                        if info.get('percentage', 0) > 10]
        if high_outliers:
            guidance.append(f"⚠️ Colunas com muitos outliers: {', '.join(high_outliers)}")
        
        # Orientações sobre tipos de dados
        object_cols = [col for col, dtype in validation_results.get('data_types', {}).items() 
                      if 'object' in dtype]
        if object_cols:
            guidance.append(f"💡 Colunas de texto detectadas: {', '.join(object_cols)}")
        
        if not guidance:
            guidance.append("✅ Dados carregados com sucesso!")
        
        return guidance

# Função utilitária para uso no Streamlit
@st.cache_data(ttl=3600)
def validate_uploaded_file(uploaded_file) -> Dict[str, Any]:
    """Função cached para validação de arquivo uploadado."""
    validator = DataValidator()
    
    # Validar tipo de arquivo
    file_validation = validator.validate_file_type(uploaded_file)
    if not file_validation['valid']:
        return file_validation
    
    # Parse do arquivo
    parse_result = validator.parse_file(uploaded_file, file_validation)
    if 'error' in parse_result:
        return parse_result
    
    # Validação de qualidade dos dados
    if 'dataframe' in parse_result:
        quality_results = validator.validate_data_quality(parse_result['dataframe'])
        parse_result['quality'] = quality_results
    
    return parse_result
