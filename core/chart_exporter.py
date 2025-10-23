"""Módulo para exportação de gráficos e dados."""
import pandas as pd
import numpy as np
import plotly.graph_objects as go
import plotly.express as px
import streamlit as st
import io
import base64
import zipfile
import json
from typing import Dict, Any, List, Optional
from datetime import datetime
import os

class ChartExporter:
    """Classe para exportação de gráficos e dados."""
    
    def __init__(self):
        self.supported_formats = ['png', 'svg', 'pdf', 'html']
        self.export_dir = 'output/exports'
        os.makedirs(self.export_dir, exist_ok=True)
    
    def export_chart_as_image(self, fig: go.Figure, format: str = 'png', 
                             width: int = 800, height: int = 600,
                             filename: str = None) -> str:
        """Exporta gráfico como imagem em base64."""
        try:
            if format not in self.supported_formats:
                raise ValueError(f"Formato não suportado: {format}")
            
            img_bytes = fig.to_image(format=format, width=width, height=height)
            img_base64 = base64.b64encode(img_bytes).decode()
            
            # Salvar arquivo se filename fornecido
            if filename:
                filepath = os.path.join(self.export_dir, f"{filename}.{format}")
                with open(filepath, 'wb') as f:
                    f.write(img_bytes)
            
            return img_base64
            
        except Exception as e:
            st.error(f"Erro ao exportar gráfico: {str(e)}")
            return None
    
    def export_chart_as_html(self, fig: go.Figure, filename: str = None) -> str:
        """Exporta gráfico como HTML."""
        try:
            html_content = fig.to_html(include_plotlyjs='cdn')
            
            # Salvar arquivo se filename fornecido
            if filename:
                filepath = os.path.join(self.export_dir, f"{filename}.html")
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(html_content)
            
            return html_content
            
        except Exception as e:
            st.error(f"Erro ao exportar gráfico como HTML: {str(e)}")
            return None
    
    def export_data_as_csv(self, df: pd.DataFrame, filename: str = None) -> str:
        """Exporta dados como CSV."""
        try:
            csv_content = df.to_csv(index=False, encoding='utf-8')
            csv_bytes = csv_content.encode('utf-8')
            csv_base64 = base64.b64encode(csv_bytes).decode()
            
            # Salvar arquivo se filename fornecido
            if filename:
                filepath = os.path.join(self.export_dir, f"{filename}.csv")
                df.to_csv(filepath, index=False, encoding='utf-8')
            
            return csv_base64
            
        except Exception as e:
            st.error(f"Erro ao exportar dados como CSV: {str(e)}")
            return None
    
    def export_data_as_excel(self, df: pd.DataFrame, filename: str = None) -> bytes:
        """Exporta dados como Excel."""
        try:
            excel_buffer = io.BytesIO()
            with pd.ExcelWriter(excel_buffer, engine='openpyxl') as writer:
                df.to_excel(writer, sheet_name='Dados', index=False)
            
            excel_bytes = excel_buffer.getvalue()
            
            # Salvar arquivo se filename fornecido
            if filename:
                filepath = os.path.join(self.export_dir, f"{filename}.xlsx")
                with open(filepath, 'wb') as f:
                    f.write(excel_bytes)
            
            return excel_bytes
            
        except Exception as e:
            st.error(f"Erro ao exportar dados como Excel: {str(e)}")
            return None
    
    def create_export_package(self, charts: Dict[str, go.Figure], 
                            data: pd.DataFrame = None, 
                            metadata: Dict[str, Any] = None,
                            package_name: str = None) -> bytes:
        """Cria pacote ZIP com gráficos e dados."""
        try:
            if package_name is None:
                timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
                package_name = f"export_package_{timestamp}"
            
            zip_buffer = io.BytesIO()
            
            with zipfile.ZipFile(zip_buffer, 'w', zipfile.ZIP_DEFLATED) as zip_file:
                # Adicionar gráficos como imagens
                for chart_name, fig in charts.items():
                    if fig:
                        # PNG
                        png_bytes = fig.to_image(format='png', width=800, height=600)
                        zip_file.writestr(f"charts/{chart_name}.png", png_bytes)
                        
                        # SVG
                        svg_bytes = fig.to_image(format='svg', width=800, height=600)
                        zip_file.writestr(f"charts/{chart_name}.svg", svg_bytes)
                        
                        # HTML
                        html_content = fig.to_html(include_plotlyjs='cdn')
                        zip_file.writestr(f"charts/{chart_name}.html", html_content)
                
                # Adicionar dados
                if data is not None:
                    # CSV
                    csv_content = data.to_csv(index=False, encoding='utf-8')
                    zip_file.writestr("data/dados.csv", csv_content)
                    
                    # Excel
                    excel_buffer = io.BytesIO()
                    with pd.ExcelWriter(excel_buffer, engine='openpyxl') as writer:
                        data.to_excel(writer, sheet_name='Dados', index=False)
                    zip_file.writestr("data/dados.xlsx", excel_buffer.getvalue())
                
                # Adicionar metadados
                if metadata is None:
                    metadata = {}
                
                metadata.update({
                    'export_timestamp': datetime.now().isoformat(),
                    'total_charts': len(charts),
                    'data_shape': data.shape if data is not None else None,
                    'package_name': package_name
                })
                
                zip_file.writestr("metadata.json", json.dumps(metadata, indent=2, ensure_ascii=False))
                
                # Adicionar README
                readme_content = f"""# Pacote de Exportação - {package_name}

## Conteúdo
- **Gráficos**: {len(charts)} visualizações em formatos PNG, SVG e HTML
- **Dados**: Dataset original em CSV e Excel
- **Metadados**: Informações sobre a exportação

## Estrutura
- `charts/`: Gráficos em diferentes formatos
- `data/`: Dados em CSV e Excel
- `metadata.json`: Metadados da exportação
- `README.txt`: Este arquivo

## Como usar
1. Extraia o arquivo ZIP
2. Abra os gráficos HTML no navegador para visualização interativa
3. Use os arquivos de dados para análises adicionais

Exportado em: {datetime.now().strftime('%d/%m/%Y %H:%M:%S')}
"""
                zip_file.writestr("README.txt", readme_content)
            
            zip_bytes = zip_buffer.getvalue()
            
            # Salvar arquivo
            filepath = os.path.join(self.export_dir, f"{package_name}.zip")
            with open(filepath, 'wb') as f:
                f.write(zip_bytes)
            
            return zip_bytes
            
        except Exception as e:
            st.error(f"Erro ao criar pacote de exportação: {str(e)}")
            return None
    
    def get_chart_data(self, fig: go.Figure) -> pd.DataFrame:
        """Extrai dados do gráfico para export."""
        try:
            # Esta função extrai dados do gráfico Plotly
            # Implementação simplificada - pode ser expandida conforme necessário
            
            data_frames = []
            
            for trace in fig.data:
                trace_data = {}
                
                # Extrair dados básicos
                if hasattr(trace, 'x') and trace.x is not None:
                    trace_data['x'] = trace.x
                if hasattr(trace, 'y') and trace.y is not None:
                    trace_data['y'] = trace.y
                if hasattr(trace, 'z') and trace.z is not None:
                    trace_data['z'] = trace.z
                
                # Extrair nome da série
                if hasattr(trace, 'name') and trace.name:
                    trace_data['series'] = trace.name
                
                if trace_data:
                    # Encontrar o comprimento máximo
                    max_len = max(len(v) if isinstance(v, (list, np.ndarray)) else 1 
                                for v in trace_data.values())
                    
                    # Padronizar comprimento
                    for key, value in trace_data.items():
                        if isinstance(value, (list, np.ndarray)) and len(value) < max_len:
                            trace_data[key] = list(value) + [None] * (max_len - len(value))
                        elif not isinstance(value, (list, np.ndarray)):
                            trace_data[key] = [value] * max_len
                    
                    data_frames.append(pd.DataFrame(trace_data))
            
            if data_frames:
                return pd.concat(data_frames, ignore_index=True)
            else:
                return pd.DataFrame()
                
        except Exception as e:
            st.error(f"Erro ao extrair dados do gráfico: {str(e)}")
            return pd.DataFrame()

def create_export_interface(charts: Dict[str, go.Figure], data: pd.DataFrame = None):
    """Cria interface Streamlit para exportação."""
    exporter = ChartExporter()
    
    st.markdown('### 📤 Exportar Gráficos e Dados')
    
    # Seleção de gráficos para exportar
    if charts:
        st.markdown('#### Selecionar Gráficos')
        selected_charts = {}
        
        for chart_name, fig in charts.items():
            if fig:
                if st.checkbox(f"Exportar {chart_name}", value=True):
                    selected_charts[chart_name] = fig
        
        if selected_charts:
            # Formato de exportação
            col_format1, col_format2 = st.columns(2)
            
            with col_format1:
                export_format = st.selectbox(
                    "Formato de imagem:",
                    ['png', 'svg', 'pdf'],
                    help="Formato para exportação de imagens"
                )
            
            with col_format2:
                export_size = st.selectbox(
                    "Tamanho da imagem:",
                    ['800x600', '1200x900', '1600x1200'],
                    help="Resolução da imagem exportada"
                )
            
            width, height = map(int, export_size.split('x'))
            
            # Botões de exportação
            col_btn1, col_btn2, col_btn3, col_btn4 = st.columns(4)
            
            with col_btn1:
                if st.button('📊 Exportar Imagens'):
                    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
                    
                    for chart_name, fig in selected_charts.items():
                        img_base64 = exporter.export_chart_as_image(
                            fig, export_format, width, height, 
                            f"{chart_name}_{timestamp}"
                        )
                        
                        if img_base64:
                            st.download_button(
                                label=f"Download {chart_name}.{export_format}",
                                data=base64.b64decode(img_base64),
                                file_name=f"{chart_name}_{timestamp}.{export_format}",
                                mime=f"image/{export_format}"
                            )
            
            with col_btn2:
                if st.button('🌐 Exportar HTML'):
                    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
                    
                    for chart_name, fig in selected_charts.items():
                        html_content = exporter.export_chart_as_html(
                            fig, f"{chart_name}_{timestamp}"
                        )
                        
                        if html_content:
                            st.download_button(
                                label=f"Download {chart_name}.html",
                                data=html_content,
                                file_name=f"{chart_name}_{timestamp}.html",
                                mime="text/html"
                            )
            
            with col_btn3:
                if st.button('📋 Exportar Dados CSV'):
                    if data is not None:
                        csv_base64 = exporter.export_data_as_csv(
                            data, f"dados_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
                        )
                        
                        if csv_base64:
                            st.download_button(
                                label="Download dados.csv",
                                data=base64.b64decode(csv_base64),
                                file_name=f"dados_{datetime.now().strftime('%Y%m%d_%H%M%S')}.csv",
                                mime="text/csv"
                            )
            
            with col_btn4:
                if st.button('📦 Pacote Completo'):
                    metadata = {
                        'charts_exported': list(selected_charts.keys()),
                        'export_format': export_format,
                        'image_size': export_size
                    }
                    
                    zip_bytes = exporter.create_export_package(
                        selected_charts, data, metadata,
                        f"export_completo_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
                    )
                    
                    if zip_bytes:
                        st.download_button(
                            label="Download Pacote Completo",
                            data=zip_bytes,
                            file_name=f"export_completo_{datetime.now().strftime('%Y%m%d_%H%M%S')}.zip",
                            mime="application/zip"
                        )
            
            # Preview dos dados do gráfico
            if st.checkbox("Mostrar dados dos gráficos"):
                for chart_name, fig in selected_charts.items():
                    with st.expander(f"Dados do gráfico: {chart_name}"):
                        chart_data = exporter.get_chart_data(fig)
                        if not chart_data.empty:
                            st.dataframe(chart_data)
                        else:
                            st.info("Nenhum dado extraível deste gráfico")
        else:
            st.info("Selecione pelo menos um gráfico para exportar")
    else:
        st.warning("Nenhum gráfico disponível para exportação")

# Função utilitária para uso no Streamlit
@st.cache_data(ttl=3600)
def export_charts_batch(charts: Dict[str, go.Figure], format: str = 'png') -> Dict[str, str]:
    """Função cached para exportação em lote de gráficos."""
    exporter = ChartExporter()
    exported = {}
    
    for chart_name, fig in charts.items():
        if fig:
            img_base64 = exporter.export_chart_as_image(fig, format)
            if img_base64:
                exported[chart_name] = img_base64
    
    return exported
