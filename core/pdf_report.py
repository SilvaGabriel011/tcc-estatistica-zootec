"""Módulo para geração de relatórios PDF profissionais."""
import io
import os
from datetime import datetime
from typing import List
import pandas as pd
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch, cm
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, Image, PageBreak
from reportlab.platypus.flowables import HRFlowable
from reportlab.lib import colors
import streamlit as st
import plotly.graph_objects as go
from .formatters import formatar_moeda

class PDFReportGenerator:
    """Gerador de relatórios PDF profissionais."""
    
    def __init__(self):
        self.styles = getSampleStyleSheet()
        self.setup_custom_styles()
    
    def setup_custom_styles(self):
        """Configura estilos customizados para o relatório."""
        # Título principal
        self.styles.add(ParagraphStyle(
            name='CustomTitle',
            parent=self.styles['Title'],
            fontSize=24,
            spaceAfter=30,
            alignment=TA_CENTER,
            textColor=HexColor('#2E7D32'),
            fontName='Helvetica-Bold'
        ))
        
        # Subtítulo
        self.styles.add(ParagraphStyle(
            name='CustomHeading1',
            parent=self.styles['Heading1'],
            fontSize=18,
            spaceAfter=12,
            spaceBefore=20,
            textColor=HexColor('#1976D2'),
            fontName='Helvetica-Bold'
        ))
        
        # Cabeçalho de seção
        self.styles.add(ParagraphStyle(
            name='CustomHeading2',
            parent=self.styles['Heading2'],
            fontSize=14,
            spaceAfter=8,
            spaceBefore=15,
            textColor=HexColor('#424242'),
            fontName='Helvetica-Bold'
        ))
        
        # Texto normal com espaçamento melhorado
        self.styles.add(ParagraphStyle(
            name='CustomNormal',
            parent=self.styles['Normal'],
            fontSize=10,
            spaceAfter=6,
            alignment=TA_JUSTIFY,
            fontName='Helvetica'
        ))
        
        # Métricas destacadas
        self.styles.add(ParagraphStyle(
            name='Metric',
            parent=self.styles['Normal'],
            fontSize=12,
            alignment=TA_CENTER,
            textColor=HexColor('#2E7D32'),
            fontName='Helvetica-Bold',
            backColor=HexColor('#F1F8E9'),
            borderPadding=8
        ))
    
    def generate_analysis_report(self, 
                               df: pd.DataFrame, 
                               title: str = "Relatório de Análise de Dados",
                               include_charts: bool = True,
                               include_ai_summary: bool = True,
                               ai_assistant=None) -> bytes:
        """Gera relatório completo de análise."""
        
        # Criar buffer para o PDF
        buffer = io.BytesIO()
        doc = SimpleDocTemplate(
            buffer,
            pagesize=A4,
            rightMargin=2*cm,
            leftMargin=2*cm,
            topMargin=2*cm,
            bottomMargin=2*cm
        )
        
        # Construir conteúdo
        story = []
        
        # Cabeçalho
        story.extend(self._create_header(title))
        
        # Resumo executivo
        story.extend(self._create_executive_summary(df))
        
        # Métricas principais
        story.extend(self._create_key_metrics(df))
        
        # Análise de dados
        story.extend(self._create_data_analysis(df))
        
        # Gráficos (se solicitado)
        if include_charts:
            story.extend(self._create_charts_section(df))
        
        # Resumo da IA (se solicitado)
        if include_ai_summary and ai_assistant:
            story.extend(self._create_ai_summary(df, ai_assistant))
        
        # Rodapé
        story.extend(self._create_footer())
        
        # Construir PDF
        doc.build(story)
        
        # Retornar bytes
        buffer.seek(0)
        return buffer.getvalue()
    
    def _create_header(self, title: str) -> List:
        """Cria cabeçalho do relatório."""
        elements = []
        
        # Logo/ícone (se disponível)
        logo_path = 'static/logo.png'  # Ajustar conforme necessário
        if os.path.exists(logo_path):
            logo = Image(logo_path, width=2*inch, height=1*inch)
            elements.append(logo)
            elements.append(Spacer(1, 20))
        
        # Título principal
        elements.append(Paragraph(title, self.styles['CustomTitle']))
        elements.append(Spacer(1, 20))
        
        # Informações do relatório
        info_data = [
            ['Data de Geração:', datetime.now().strftime('%d/%m/%Y %H:%M')],
            ['Versão:', '3.2'],
            ['Gerado por:', 'Sistema TCC Gado Gordo']
        ]
        
        info_table = Table(info_data, colWidths=[3*inch, 4*inch])
        info_table.setStyle(TableStyle([
            ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
            ('FONTNAME', (0, 0), (0, -1), 'Helvetica-Bold'),
            ('FONTSIZE', (0, 0), (-1, -1), 10),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ]))
        
        elements.append(info_table)
        elements.append(Spacer(1, 30))
        
        return elements
    
    def _create_executive_summary(self, df: pd.DataFrame) -> List:
        """Cria resumo executivo."""
        elements = []
        
        elements.append(Paragraph('Resumo Executivo', self.styles['CustomHeading1']))
        elements.append(HRFlowable(width="100%", thickness=1, lineCap='round', color=HexColor('#1976D2')))
        elements.append(Spacer(1, 12))
        
        # Estatísticas básicas
        total_records = len(df)
        total_columns = len(df.columns)
        
        # Calcular completude
        completeness = (1 - df.isnull().sum().sum() / (total_records * total_columns)) * 100
        
        summary_text = f"""
        Este relatório apresenta uma análise abrangente de <b>{total_records:,}</b> registros 
        distribuídos em <b>{total_columns}</b> colunas. O dataset apresenta uma completude de 
        <b>{completeness:.1f}%</b>, indicando a qualidade geral dos dados analisados.
        
        As análises incluem métricas descritivas, visualizações estatísticas, testes de 
        significância e insights baseados em dados para suporte à tomada de decisão.
        """
        
        elements.append(Paragraph(summary_text, self.styles['CustomNormal']))
        elements.append(Spacer(1, 20))
        
        return elements
    
    def _create_key_metrics(self, df: pd.DataFrame) -> List:
        """Cria seção de métricas principais."""
        elements = []
        
        elements.append(Paragraph('Métricas Principais', self.styles['CustomHeading1']))
        elements.append(HRFlowable(width="100%", thickness=1, lineCap='round', color=HexColor('#1976D2')))
        elements.append(Spacer(1, 12))
        
        # Coletar métricas
        metrics = []
        
        # Métricas básicas
        metrics.append(['Total de Registros', f"{len(df):,}"])
        metrics.append(['Total de Colunas', f"{len(df.columns)}"])
        
        # Métricas de preço (se disponível)
        if 'PREÇO POR KG' in df.columns:
            price_data = df['PREÇO POR KG'].dropna()
            if not price_data.empty:
                metrics.append(['Preço Médio/kg', formatar_moeda(price_data.mean())])
                metrics.append(['Preço Mínimo/kg', formatar_moeda(price_data.min())])
                metrics.append(['Preço Máximo/kg', formatar_moeda(price_data.max())])
        
        # Métricas de peso (se disponível)
        if 'PESO (KG)' in df.columns:
            weight_data = df['PESO (KG)'].dropna()
            if not weight_data.empty:
                metrics.append(['Peso Médio', f"{weight_data.mean():.1f} kg"])
                metrics.append(['Peso Mínimo', f"{weight_data.min():.1f} kg"])
                metrics.append(['Peso Máximo', f"{weight_data.max():.1f} kg"])
        
        # Criar tabela de métricas
        if metrics:
            # Dividir em duas colunas
            mid_point = len(metrics) // 2
            col1_metrics = metrics[:mid_point]
            col2_metrics = metrics[mid_point:]
            
            # Criar tabela com duas colunas
            table_data = []
            max_rows = max(len(col1_metrics), len(col2_metrics))
            
            for i in range(max_rows):
                row = []
                row.append(col1_metrics[i][0] if i < len(col1_metrics) else '')
                row.append(col1_metrics[i][1] if i < len(col1_metrics) else '')
                row.append(col2_metrics[i][0] if i < len(col2_metrics) else '')
                row.append(col2_metrics[i][1] if i < len(col2_metrics) else '')
                table_data.append(row)
            
            metrics_table = Table(table_data, colWidths=[2*inch, 1.5*inch, 2*inch, 1.5*inch])
            metrics_table.setStyle(TableStyle([
                ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
                ('FONTNAME', (0, 0), (0, -1), 'Helvetica'),
                ('FONTNAME', (2, 0), (2, -1), 'Helvetica'),
                ('FONTNAME', (1, 0), (1, -1), 'Helvetica-Bold'),
                ('FONTNAME', (3, 0), (3, -1), 'Helvetica-Bold'),
                ('FONTSIZE', (0, 0), (-1, -1), 10),
                ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
                ('TOPPADDING', (0, 0), (-1, -1), 6),
                ('GRID', (0, 0), (-1, -1), 0.5, colors.grey),
                ('BACKGROUND', (0, 0), (0, -1), HexColor('#F5F5F5')),
                ('BACKGROUND', (2, 0), (2, -1), HexColor('#F5F5F5')),
            ]))
            
            elements.append(metrics_table)
        
        elements.append(Spacer(1, 20))
        
        return elements
    
    def _create_data_analysis(self, df: pd.DataFrame) -> List:
        """Cria seção de análise de dados."""
        elements = []
        
        elements.append(Paragraph('Análise Detalhada dos Dados', self.styles['CustomHeading1']))
        elements.append(HRFlowable(width="100%", thickness=1, lineCap='round', color=HexColor('#1976D2')))
        elements.append(Spacer(1, 12))
        
        # Análise por categoria
        categorical_cols = df.select_dtypes(include=['object', 'category']).columns
        
        for col in categorical_cols[:3]:  # Limitar a 3 colunas para não sobrecarregar
            elements.append(Paragraph(f'Distribuição por {col}', self.styles['CustomHeading2']))
            
            # Top 5 valores
            top_values = df[col].value_counts().head(5)
            
            table_data = [['Valor', 'Frequência', 'Percentual']]
            for value, count in top_values.items():
                percentage = (count / len(df)) * 100
                table_data.append([str(value), f"{count:,}", f"{percentage:.1f}%"])
            
            dist_table = Table(table_data, colWidths=[2*inch, 1.5*inch, 1.5*inch])
            dist_table.setStyle(TableStyle([
                ('BACKGROUND', (0, 0), (-1, 0), HexColor('#1976D2')),
                ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
                ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
                ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
                ('FONTSIZE', (0, 0), (-1, 0), 12),
                ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
                ('BACKGROUND', (0, 1), (-1, -1), colors.beige),
                ('GRID', (0, 0), (-1, -1), 1, colors.black),
                ('FONTSIZE', (0, 1), (-1, -1), 10),
            ]))
            
            elements.append(dist_table)
            elements.append(Spacer(1, 15))
        
        return elements
    
    def _create_charts_section(self, df: pd.DataFrame) -> List:
        """Cria seção com gráficos."""
        elements = []
        
        elements.append(PageBreak())
        elements.append(Paragraph('Visualizações e Gráficos', self.styles['CustomHeading1']))
        elements.append(HRFlowable(width="100%", thickness=1, lineCap='round', color=HexColor('#1976D2')))
        elements.append(Spacer(1, 12))
        
        # Gerar gráficos simples
        try:
            # Gráfico de barras para estados (se disponível)
            if 'ESTADO' in df.columns:
                elements.append(Paragraph('Distribuição por Estado', self.styles['CustomHeading2']))
                
                state_counts = df['ESTADO'].value_counts().head(10)
                
                # Criar gráfico simples usando tabela
                chart_data = [['Estado', 'Quantidade']]
                for state, count in state_counts.items():
                    chart_data.append([state, f"{count:,}"])
                
                chart_table = Table(chart_data, colWidths=[2*inch, 2*inch])
                chart_table.setStyle(TableStyle([
                    ('BACKGROUND', (0, 0), (-1, 0), HexColor('#4CAF50')),
                    ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
                    ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
                    ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
                    ('FONTSIZE', (0, 0), (-1, 0), 12),
                    ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
                    ('BACKGROUND', (0, 1), (-1, -1), colors.lightgrey),
                    ('GRID', (0, 0), (-1, -1), 1, colors.black),
                    ('FONTSIZE', (0, 1), (-1, -1), 10),
                ]))
                
                elements.append(chart_table)
                elements.append(Spacer(1, 20))
            
            # Gráfico de barras para raças (se disponível)
            if 'RAÇA' in df.columns:
                elements.append(Paragraph('Distribuição por Raça', self.styles['CustomHeading2']))
                
                breed_counts = df['RAÇA'].value_counts().head(8)
                
                chart_data = [['Raça', 'Quantidade']]
                for breed, count in breed_counts.items():
                    chart_data.append([breed, f"{count:,}"])
                
                chart_table = Table(chart_data, colWidths=[2*inch, 2*inch])
                chart_table.setStyle(TableStyle([
                    ('BACKGROUND', (0, 0), (-1, 0), HexColor('#FF9800')),
                    ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
                    ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
                    ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
                    ('FONTSIZE', (0, 0), (-1, 0), 12),
                    ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
                    ('BACKGROUND', (0, 1), (-1, -1), colors.lightgrey),
                    ('GRID', (0, 0), (-1, -1), 1, colors.black),
                    ('FONTSIZE', (0, 1), (-1, -1), 10),
                ]))
                
                elements.append(chart_table)
                elements.append(Spacer(1, 20))
        
        except Exception as e:
            elements.append(Paragraph(f'Erro ao gerar gráficos: {str(e)}', self.styles['CustomNormal']))
        
        return elements
    
    def _create_ai_summary(self, df: pd.DataFrame, ai_assistant) -> List:
        """Cria seção com resumo da IA."""
        elements = []
        
        elements.append(PageBreak())
        elements.append(Paragraph('Insights e Recomendações da IA', self.styles['CustomHeading1']))
        elements.append(HRFlowable(width="100%", thickness=1, lineCap='round', color=HexColor('#1976D2')))
        elements.append(Spacer(1, 12))
        
        try:
            if ai_assistant and ai_assistant.is_available():
                # Gerar resumo da IA
                base_summary = ai_assistant.summarize_dataframe(df)
                context = ai_assistant.build_context(df, None)
                
                ai_summary = ai_assistant.chat(
                    'Gere um resumo executivo em até 5 parágrafos sobre os principais insights dos dados, '
                    'incluindo tendências, padrões e recomendações para tomada de decisão.',
                    context + "\n\n" + base_summary
                )
                
                elements.append(Paragraph('Análise Automática', self.styles['CustomHeading2']))
                elements.append(Paragraph(ai_summary, self.styles['CustomNormal']))
                elements.append(Spacer(1, 15))
                
                # Adicionar resumo técnico
                elements.append(Paragraph('Resumo Técnico', self.styles['CustomHeading2']))
                elements.append(Paragraph(base_summary, self.styles['CustomNormal']))
            
            else:
                elements.append(Paragraph(
                    'IA não disponível para análise. Configure as chaves de API ou instale o Ollama.',
                    self.styles['CustomNormal']
                ))
        
        except Exception as e:
            elements.append(Paragraph(
                f'Erro ao gerar resumo da IA: {str(e)}',
                self.styles['CustomNormal']
            ))
        
        return elements
    
    def _create_footer(self) -> List:
        """Cria rodapé do relatório."""
        elements = []
        
        elements.append(Spacer(1, 30))
        elements.append(HRFlowable(width="100%", thickness=1, lineCap='round', color=HexColor('#757575')))
        elements.append(Spacer(1, 10))
        
        footer_text = """
        <para align=center>
        <font name="Helvetica" size="8" color="#757575">
        Relatório gerado automaticamente pelo Sistema TCC Gado Gordo<br/>
        Para suporte técnico, consulte a documentação do sistema
        </font>
        </para>
        """
        
        elements.append(Paragraph(footer_text, self.styles['Normal']))
        
        return elements

# Funções utilitárias
def generate_quick_pdf_report(df: pd.DataFrame, title: str = "Relatório de Análise") -> bytes:
    """Gera relatório PDF rápido."""
    generator = PDFReportGenerator()
    return generator.generate_analysis_report(df, title, include_charts=True, include_ai_summary=False)

def generate_full_pdf_report(df: pd.DataFrame, ai_assistant=None, title: str = "Relatório Completo de Análise") -> bytes:
    """Gera relatório PDF completo com IA."""
    generator = PDFReportGenerator()
    return generator.generate_analysis_report(df, title, include_charts=True, include_ai_summary=True, ai_assistant=ai_assistant)

def save_chart_as_image(fig: go.Figure, filename: str, format: str = 'png', width: int = 1200, height: int = 800) -> str:
    """Salva gráfico Plotly como imagem."""
    try:
        # Criar diretório se não existir
        os.makedirs('output/charts', exist_ok=True)
        
        # Salvar imagem
        filepath = f'output/charts/{filename}.{format}'
        fig.write_image(filepath, width=width, height=height, format=format)
        
        return filepath
    except Exception as e:
        st.error(f"Erro ao salvar gráfico: {e}")
        return None

