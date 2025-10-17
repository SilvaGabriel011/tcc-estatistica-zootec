"""Página de Biblioteca de Referências."""
import streamlit as st
import os
from datetime import datetime
from core.reference_library import (
    search_semantic_scholar, format_abnt_citation, add_semantic_scholar_reference,
    list_local_references, search_local_references, add_local_reference,
    remove_reference, export_references_bibtex, export_references_abnt,
    get_reference_stats, clear_api_cache, get_cache_info
)
from core.theme_manager import render_theme_selector, init_theme
from core.notifications import show_toast_success, show_toast_error, show_toast_info, toast_try

# Inicializar tema
init_theme()

st.set_page_config(
    page_title="Biblioteca de Referências",
    page_icon="📚",
    layout="wide"
)

# Sidebar
with st.sidebar:
    st.title("📚 Biblioteca de Referências")
    
    # Estatísticas rápidas
    stats = get_reference_stats()
    st.metric("Total de Referências", stats['total'])
    
    # Renderizar seletor de tema
    render_theme_selector()
    
    st.divider()
    
    # Cache management
    st.markdown("### 🗄️ Cache da API")
    cache_info = get_cache_info()
    st.caption(f"**Cache:** {cache_info['valid_entries']}/{cache_info['total_entries']} entradas válidas")
    st.caption(f"**Duração:** {cache_info['cache_duration_hours']:.1f}h")
    
    if st.button("🧹 Limpar Cache", help="Remove todas as entradas do cache da API"):
        clear_api_cache()
        st.rerun()
    
    st.divider()

# Main content
st.title("📚 Biblioteca de Referências")

# Tabs
tab1, tab2, tab3, tab4 = st.tabs(["🔍 Pesquisar Artigos", "📖 Minha Biblioteca", "📋 Gerar Referências", "📊 Estatísticas"])

with tab1:
    st.header("🔍 Pesquisar Artigos na Semantic Scholar")
    
    col1, col2 = st.columns([3, 1])
    
    with col1:
        query = st.text_input(
            "Digite sua pesquisa:",
            placeholder="Ex: análise de preços mercado bovino, beef cattle prices, econometria...",
            help="Use termos em português ou inglês para melhores resultados"
        )
    
    with col2:
        limit = st.selectbox("Limite de resultados:", [5, 10, 15, 20], index=1)
    
    # Filtros
    with st.expander("🔧 Filtros Avançados", expanded=False):
        col1, col2, col3 = st.columns(3)
        
        with col1:
            min_year = st.number_input("Ano mínimo:", value=2000, min_value=1900, max_value=datetime.now().year)
        
        with col2:
            min_citations = st.number_input("Citações mínimas:", value=0, min_value=0)
        
        with col3:
            fields = st.multiselect(
                "Áreas de estudo:",
                ["Computer Science", "Economics", "Biology", "Medicine", "Mathematics", "Physics"],
                help="Deixe vazio para todas as áreas"
            )
    
    if st.button("🔍 Pesquisar", type="primary", use_container_width=True):
        if query.strip():
            try:
                results = toast_try(
                    'Pesquisando artigos',
                    lambda: search_semantic_scholar(query, limit),
                    page='referencias', action='search_semantic_scholar'
                )
                
                # Handle fallback to local references
                if results.get('fallback', False):
                    st.warning("⚠️ API indisponível. Mostrando referências locais relacionadas:")
                    local_refs = search_local_references(query)
                    if local_refs:
                        for i, ref in enumerate(local_refs[:limit]):
                            with st.container():
                                st.markdown("---")
                                st.subheader(f"{i+1}. {ref.get('title', 'Título não disponível')}")
                                st.write(f"**Citação ABNT:** {ref.get('citation_abnt', 'N/A')}")
                                if ref.get('authors'):
                                    st.write(f"**Autores:** {', '.join(ref.get('authors', []))}")
                                if ref.get('year'):
                                    st.write(f"**Ano:** {ref.get('year')}")
                                if ref.get('tags'):
                                    st.write(f"**Tags:** {', '.join(ref.get('tags', []))}")
                    else:
                        st.info("Nenhuma referência local encontrada para este termo.")
                else:
                    # Handle successful API results
                    if results.get('total', 0) > 0:
                        papers = results.get('data', [])
                        st.success(f"Encontrados {len(papers)} artigos!")
                    
                        for i, paper in enumerate(papers):
                            with st.container():
                                # Filtrar por ano se especificado
                                if paper.get('year', 0) < min_year:
                                    continue
                                
                                # Filtrar por citações se especificado
                                if paper.get('citationCount', 0) < min_citations:
                                    continue
                                
                                # Filtrar por área se especificada
                                if fields:
                                    paper_fields = paper.get('fieldsOfStudy', [])
                                    if not any(field in paper_fields for field in fields):
                                        continue
                                
                                st.markdown("---")
                                
                                # Título
                                st.subheader(f"{i+1}. {paper.get('title', 'Título não disponível')}")
                                
                                # Informações básicas
                                col1, col2, col3 = st.columns([2, 1, 1])
                                
                                with col1:
                                    # Autores
                                    authors = paper.get('authors', [])
                                    if authors:
                                        author_names = [author.get('name', '') for author in authors[:3]]
                                        if len(authors) > 3:
                                            author_names.append(f"... e mais {len(authors)-3}")
                                        st.write(f"**Autores:** {', '.join(author_names)}")
                                    
                                    # Ano e venue
                                    year = paper.get('year', '')
                                    venue = paper.get('venue', '')
                                    if year and venue:
                                        st.write(f"**Publicado em:** {venue}, {year}")
                                    elif year:
                                        st.write(f"**Ano:** {year}")
                                
                                with col2:
                                    # Citações
                                    citations = paper.get('citationCount', 0)
                                    st.metric("Citações", citations)
                                
                                with col3:
                                    # Áreas de estudo
                                    fields_of_study = paper.get('fieldsOfStudy', [])
                                    if fields_of_study:
                                        st.write(f"**Áreas:** {', '.join(fields_of_study[:2])}")
                                
                                # Abstract
                                abstract = paper.get('abstract', '')
                                if abstract:
                                    with st.expander("📄 Resumo"):
                                        st.write(abstract)
                                
                                # Ações
                                col1, col2, col3, col4 = st.columns(4)
                                
                                with col1:
                                    if st.button("📚 Adicionar", key=f"add_{i}"):
                                        try:
                                            added = toast_try(
                                                'Adicionar referência',
                                                add_semantic_scholar_reference,
                                                paper,
                                                page='referencias', action='add_semantic_ref'
                                            )
                                            if added:
                                                show_toast_success("Referência adicionada à biblioteca!")
                                                st.rerun()
                                            else:
                                                show_toast_error("Erro ao adicionar referência")
                                        except Exception:
                                            pass
                                
                                with col2:
                                    # Botão para baixar PDF (se disponível)
                                    pdf_url = paper.get('openAccessPdf', {}).get('url', '') if paper.get('openAccessPdf') else ''
                                    if pdf_url:
                                        if st.button("📥 Baixar PDF", key=f"pdf_{i}"):
                                            from core.reference_library import download_pdf
                                            safe_name = (paper.get('title', 'paper') or 'paper').strip().replace(' ', '_')[:80] + ".pdf"
                                            try:
                                                ok = toast_try(
                                                    'Baixando PDF',
                                                    download_pdf,
                                                    pdf_url,
                                                    safe_name,
                                                    page='referencias', action='download_pdf'
                                                )
                                                if ok:
                                                    show_toast_success(f"PDF salvo em references/{safe_name}")
                                                else:
                                                    show_toast_error("Não foi possível baixar o PDF")
                                            except Exception:
                                                pass
                                    else:
                                        st.button("📥 PDF não disponível", disabled=True, key=f"pdf_{i}")
                                
                                with col3:
                                    citation = format_abnt_citation(paper)
                                    if st.button("📋 Copiar Citação", key=f"copy_{i}"):
                                        st.code(citation, language=None)
                                
                                with col4:
                                    url = paper.get('url', '')
                                    if url:
                                        st.link_button("🔗 Ver Original", url)
                                    else:
                                        st.button("🔗 Link não disponível", disabled=True, key=f"link_{i}")
                    else:
                        st.warning("Nenhum artigo encontrado. Tente termos diferentes.")
            except Exception:
                # toast_try already logged and toasted
                pass
        else:
            st.warning("Digite um termo de pesquisa.")

with tab2:
    st.header("📖 Minha Biblioteca")
    
    # Pesquisa local
    search_query = st.text_input("🔍 Pesquisar na biblioteca:", placeholder="Digite título, autor ou tag...")
    
    # Carregar referências
    if search_query:
        references = search_local_references(search_query)
        if references:
            st.success(f"Encontradas {len(references)} referências!")
        else:
            st.info("Nenhuma referência encontrada.")
    else:
        references = list_local_references()
        if references:
            st.info(f"Total: {len(references)} referências na biblioteca")
        else:
            st.info("Biblioteca vazia. Adicione referências na aba 'Pesquisar Artigos' ou faça upload de PDFs.")
    
    # Lista de referências
    if references:
        for ref in references:
            with st.container():
                st.markdown("---")
                
                col1, col2 = st.columns([4, 1])
                
                with col1:
                    # Título
                    st.subheader(ref.get('title', 'Título não disponível'))
                    
                    # Informações
                    col_a, col_b, col_c = st.columns(3)
                    
                    with col_a:
                        authors = ref.get('authors', [])
                        if authors:
                            st.write(f"**Autores:** {', '.join(authors[:3])}")
                            if len(authors) > 3:
                                st.write(f"... e mais {len(authors)-3}")
                    
                    with col_b:
                        st.write(f"**Ano:** {ref.get('year', 'N/A')}")
                        if ref.get('venue'):
                            st.write(f"**Veículo:** {ref.get('venue', '')}")
                    
                    with col_c:
                        if ref.get('citation_count'):
                            st.metric("Citações", ref.get('citation_count', 0))
                        
                        # Tags
                        tags = ref.get('tags', [])
                        if tags:
                            st.write(f"**Tags:** {', '.join(tags[:3])}")
                    
                    # Citação ABNT
                    with st.expander("📋 Ver Citação ABNT"):
                        st.code(ref.get('citation_abnt', ''), language=None)
                
                with col2:
                    # Ações
                    st.write("**Ações:**")
                    
                    if st.button("📋 Copiar", key=f"copy_ref_{ref.get('id')}"):
                        st.code(ref.get('citation_abnt', ''), language=None)
                    
                    if ref.get('file') and os.path.exists(ref.get('file')):
                        if st.button("📄 Abrir PDF", key=f"open_{ref.get('id')}"):
                            show_toast_info("Abrindo PDF...")
                            # Placeholder: could embed PDF viewer via st.components or PyMuPDF
                    
                    if st.button("🗑️ Remover", key=f"remove_{ref.get('id')}"):
                        if remove_reference(ref.get('id')):
                            show_toast_success("Referência removida!")
                            st.rerun()
                        else:
                            show_toast_error("Erro ao remover referência")
    
    # Upload de PDF local
    st.divider()
    st.subheader("📤 Adicionar PDF Local")
    
    uploaded_file = st.file_uploader(
        "Selecione um arquivo PDF:",
        type=['pdf'],
        help="Upload de PDFs para adicionar à biblioteca"
    )
    
    if uploaded_file:
        st.success(f"Arquivo selecionado: {uploaded_file.name}")
        
        # Formulário de metadados
        with st.form("metadata_form"):
            st.write("**Informações do documento:**")
            
            col1, col2 = st.columns(2)
            
            with col1:
                title = st.text_input("Título:", value=uploaded_file.name.replace('.pdf', ''))
                authors_input = st.text_area("Autores (um por linha):", placeholder="Silva, João\nSantos, Maria")
            
            with col2:
                year = st.number_input("Ano:", value=datetime.now().year, min_value=1900, max_value=datetime.now().year)
                venue = st.text_input("Veículo (Revista/Conferência):", placeholder="Revista Brasileira de Zootecnia")
            
            tags_input = st.text_input("Tags (separadas por vírgula):", placeholder="mercado, bovinos, preços")
            ref_type = st.selectbox("Tipo:", ["article", "book", "thesis", "report", "other"])
            
            submitted = st.form_submit_button("📚 Adicionar à Biblioteca", type="primary")
            
            if submitted:
                # Processar autores
                authors = [author.strip() for author in authors_input.split('\n') if author.strip()]
                
                # Processar tags
                tags = [tag.strip() for tag in tags_input.split(',') if tag.strip()]
                
                # Metadados
                metadata = {
                    'title': title,
                    'authors': authors,
                    'year': year,
                    'venue': venue,
                    'tags': tags,
                    'type': ref_type
                }
                
                # Adicionar referência
                file_content = uploaded_file.read()
                if add_local_reference(file_content, uploaded_file.name, metadata):
                    show_toast_success("PDF adicionado à biblioteca!")
                    st.rerun()
                else:
                    show_toast_error("Erro ao adicionar PDF")

with tab3:
    st.header("📋 Gerar Referências")
    
    # Seleção de referências
    all_references = list_local_references()
    
    if all_references:
        st.write("Selecione as referências para incluir:")
        
        # Checkbox para todas
        select_all = st.checkbox("Selecionar todas")
        
        # Lista de checkboxes
        selected_refs = []
        
        if select_all:
            selected_refs = all_references
        else:
            for ref in all_references:
                if st.checkbox(f"{ref.get('title', '')} ({ref.get('year', 'N/A')})", key=f"select_{ref.get('id')}"):
                    selected_refs.append(ref)
        
        if selected_refs:
            st.success(f"{len(selected_refs)} referências selecionadas")
            
            # Opções de exportação
            col1, col2 = st.columns(2)
            
            with col1:
                st.subheader("📄 Formato ABNT")
                if st.button("📋 Gerar Lista ABNT", type="primary"):
                    try:
                        abnt_list = toast_try('Gerando referências ABNT', export_references_abnt, selected_refs, page='referencias', action='export_abnt')
                        st.code(abnt_list, language=None)
                    except Exception:
                        pass
                    
                    # Download
                    st.download_button(
                        "💾 Baixar .txt",
                        abnt_list,
                        file_name=f"referencias_abnt_{datetime.now().strftime('%Y%m%d')}.txt",
                        mime="text/plain"
                    )
            
            with col2:
                st.subheader("📚 Formato BibTeX")
                if st.button("📋 Gerar BibTeX", type="primary"):
                    try:
                        bibtex = toast_try('Gerando BibTeX', export_references_bibtex, selected_refs, page='referencias', action='export_bibtex')
                        st.code(bibtex, language="bibtex")
                    except Exception:
                        pass
                    
                    # Download
                    st.download_button(
                        "💾 Baixar .bib",
                        bibtex,
                        file_name=f"referencias_bibtex_{datetime.now().strftime('%Y%m%d')}.bib",
                        mime="text/plain"
                    )
            
            # Preview das referências selecionadas
            with st.expander("👁️ Visualizar Referências Selecionadas"):
                for i, ref in enumerate(selected_refs, 1):
                    st.write(f"{i}. {ref.get('citation_abnt', '')}")
        else:
            st.info("Selecione pelo menos uma referência.")
    else:
        st.warning("Nenhuma referência na biblioteca. Adicione referências primeiro.")

with tab4:
    st.header("📊 Estatísticas da Biblioteca")
    
    stats = get_reference_stats()
    
    if stats['total'] > 0:
        # Métricas principais
        col1, col2, col3, col4 = st.columns(4)
        
        with col1:
            st.metric("Total de Referências", stats['total'])
        
        with col2:
            semantic_count = stats['by_source'].get('semantic_scholar', 0)
            st.metric("Da Semantic Scholar", semantic_count)
        
        with col3:
            local_count = stats['by_source'].get('local_upload', 0)
            st.metric("Uploads Locais", local_count)
        
        with col4:
            # Calcular ano mais recente
            if stats['by_year']:
                recent_year = max([int(year) for year in stats['by_year'].keys() if str(year).isdigit()])
                st.metric("Ano Mais Recente", recent_year)
        
        # Gráficos
        col1, col2 = st.columns(2)
        
        with col1:
            st.subheader("📊 Por Fonte")
            if stats['by_source']:
                import pandas as pd
                import plotly.express as px
                
                source_df = pd.DataFrame(list(stats['by_source'].items()), columns=['Fonte', 'Quantidade'])
                fig = px.pie(source_df, values='Quantidade', names='Fonte', title="Referências por Fonte")
                st.plotly_chart(fig, use_container_width=True)
        
        with col2:
            st.subheader("📅 Por Ano")
            if stats['by_year']:
                year_df = pd.DataFrame(list(stats['by_year'].items()), columns=['Ano', 'Quantidade'])
                year_df = year_df.sort_values('Ano')
                fig = px.bar(year_df, x='Ano', y='Quantidade', title="Referências por Ano")
                st.plotly_chart(fig, use_container_width=True)
        
        # Tabela detalhada
        st.subheader("📋 Detalhamento")
        
        col1, col2 = st.columns(2)
        
        with col1:
            st.write("**Por Tipo:**")
            for ref_type, count in stats['by_type'].items():
                st.write(f"- {ref_type.title()}: {count}")
        
        with col2:
            st.write("**Por Fonte:**")
            for source, count in stats['by_source'].items():
                source_name = "Semantic Scholar" if source == "semantic_scholar" else "Upload Local"
                st.write(f"- {source_name}: {count}")
    else:
        st.info("Nenhuma referência na biblioteca ainda.")
        
        # Sugestões
        st.subheader("💡 Como começar:")
        st.write("1. 📚 Vá para a aba 'Pesquisar Artigos' e encontre artigos relevantes")
        st.write("2. 📤 Faça upload de PDFs locais na aba 'Minha Biblioteca'")
        st.write("3. 📋 Use a aba 'Gerar Referências' para criar listas de referências")

# Footer
st.divider()
st.caption("💡 Dica: Use a pesquisa da Semantic Scholar para encontrar artigos acadêmicos relevantes e adicione-os à sua biblioteca pessoal.")