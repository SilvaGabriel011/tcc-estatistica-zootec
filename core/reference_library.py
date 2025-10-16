"""Sistema de biblioteca de referências com integração Semantic Scholar API."""
import requests
import json
import os
from datetime import datetime
from typing import List, Dict
import streamlit as st

# Configurações
REFERENCES_FOLDER = "references"
REFERENCES_FILE = "references.json"

def ensure_references_folder():
    """Ensure references folder exists."""
    if not os.path.exists(REFERENCES_FOLDER):
        os.makedirs(REFERENCES_FOLDER)

def load_references():
    """Load references from JSON file."""
    ensure_references_folder()
    references_path = os.path.join(REFERENCES_FOLDER, REFERENCES_FILE)
    
    if os.path.exists(references_path):
        try:
            with open(references_path, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception as e:
            st.error(f"Erro ao carregar referências: {e}")
            return {"references": []}
    else:
        return {"references": []}

def save_references(references_data):
    """Save references to JSON file."""
    ensure_references_folder()
    references_path = os.path.join(REFERENCES_FOLDER, REFERENCES_FILE)
    
    try:
        with open(references_path, 'w', encoding='utf-8') as f:
            json.dump(references_data, f, ensure_ascii=False, indent=2)
        return True
    except Exception as e:
        st.error(f"Erro ao salvar referências: {e}")
        return False

def search_semantic_scholar(query: str, limit: int = 10) -> Dict:
    """Search articles using Semantic Scholar API."""
    try:
        url = "https://api.semanticscholar.org/graph/v1/paper/search"
        params = {
            'query': query,
            'limit': limit,
            'fields': 'title,authors,year,abstract,citationCount,url,openAccessPdf,venue,fieldsOfStudy'
        }
        
        response = requests.get(url, params=params, timeout=10)
        response.raise_for_status()
        
        return response.json()
    except requests.exceptions.RequestException as e:
        st.error(f"Erro na API Semantic Scholar: {e}")
        return {"total": 0, "data": []}
    except Exception as e:
        st.error(f"Erro inesperado: {e}")
        return {"total": 0, "data": []}

def format_abnt_citation(paper: Dict) -> str:
    """Format citation in ABNT style."""
    try:
        # Extract authors
        authors = paper.get('authors', [])
        if not authors:
            return f"{paper.get('title', 'Título não disponível')}. {paper.get('year', 'Ano não disponível')}."
        
        # Format authors
        author_names = []
        for author in authors:
            name_parts = author.get('name', '').split()
            if len(name_parts) >= 2:
                last_name = name_parts[-1].upper()
                first_names = ' '.join(name_parts[:-1])
                author_names.append(f"{last_name}, {first_names}")
            else:
                author_names.append(author.get('name', 'Autor desconhecido').upper())
        
        authors_str = "; ".join(author_names)
        
        # Get title and year
        title = paper.get('title', 'Título não disponível')
        year = paper.get('year', 'Ano não disponível')
        
        # Get venue (journal/conference)
        venue = paper.get('venue', '')
        
        # Format citation
        if venue:
            citation = f"{authors_str}. {title}. {venue}, {year}."
        else:
            citation = f"{authors_str}. {title}. {year}."
        
        return citation
        
    except Exception as e:
        st.error(f"Erro ao formatar citação: {e}")
        return paper.get('title', 'Título não disponível')

def download_pdf(pdf_url: str, filename: str) -> bool:
    """Download PDF from open access URL."""
    try:
        ensure_references_folder()
        
        response = requests.get(pdf_url, timeout=30)
        response.raise_for_status()
        
        file_path = os.path.join(REFERENCES_FOLDER, filename)
        with open(file_path, 'wb') as f:
            f.write(response.content)
        
        return True
    except Exception as e:
        st.error(f"Erro ao baixar PDF: {e}")
        return False

def add_local_reference(file_content: bytes, filename: str, metadata: Dict) -> bool:
    """Add PDF/book to local library."""
    try:
        ensure_references_folder()
        
        # Save file
        file_path = os.path.join(REFERENCES_FOLDER, filename)
        with open(file_path, 'wb') as f:
            f.write(file_content)
        
        # Generate ID
        ref_id = f"ref_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
        
        # Create reference entry
        reference = {
            "id": ref_id,
            "title": metadata.get('title', filename),
            "authors": metadata.get('authors', []),
            "year": metadata.get('year', datetime.now().year),
            "type": metadata.get('type', 'article'),
            "file": file_path,
            "filename": filename,
            "citation_abnt": format_manual_citation(metadata),
            "added_date": datetime.now().isoformat(),
            "tags": metadata.get('tags', []),
            "source": "local_upload"
        }
        
        # Add to references
        references_data = load_references()
        references_data["references"].append(reference)
        
        return save_references(references_data)
        
    except Exception as e:
        st.error(f"Erro ao adicionar referência: {e}")
        return False

def format_manual_citation(metadata: Dict) -> str:
    """Format citation from manual metadata."""
    authors = metadata.get('authors', [])
    if authors:
        authors_str = "; ".join([f"{a.upper()}" if a else "Autor desconhecido" for a in authors])
    else:
        authors_str = "AUTOR DESCONHECIDO"
    
    title = metadata.get('title', 'Título não disponível')
    year = metadata.get('year', datetime.now().year)
    venue = metadata.get('venue', '')
    
    if venue:
        return f"{authors_str}. {title}. {venue}, {year}."
    else:
        return f"{authors_str}. {title}. {year}."

def list_local_references() -> List[Dict]:
    """List all local references."""
    references_data = load_references()
    return references_data.get("references", [])

def search_local_references(query: str) -> List[Dict]:
    """Search local references by title/author."""
    references = list_local_references()
    query_lower = query.lower()
    
    filtered = []
    for ref in references:
        # Search in title, authors, and tags
        title_match = query_lower in ref.get('title', '').lower()
        authors_match = any(query_lower in author.lower() for author in ref.get('authors', []))
        tags_match = any(query_lower in tag.lower() for tag in ref.get('tags', []))
        
        if title_match or authors_match or tags_match:
            filtered.append(ref)
    
    return filtered

def add_semantic_scholar_reference(paper: Dict) -> bool:
    """Add paper from Semantic Scholar to local library."""
    try:
        # Generate ID
        ref_id = f"ref_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
        
        # Extract authors
        authors = [author.get('name', '') for author in paper.get('authors', [])]
        
        # Create reference entry
        reference = {
            "id": ref_id,
            "title": paper.get('title', 'Título não disponível'),
            "authors": authors,
            "year": paper.get('year', datetime.now().year),
            "type": "article",
            "file": None,  # No local file yet
            "url": paper.get('url', ''),
            "pdf_url": paper.get('openAccessPdf', {}).get('url', '') if paper.get('openAccessPdf') else '',
            "citation_abnt": format_abnt_citation(paper),
            "added_date": datetime.now().isoformat(),
            "tags": paper.get('fieldsOfStudy', []),
            "source": "semantic_scholar",
            "citation_count": paper.get('citationCount', 0),
            "venue": paper.get('venue', ''),
            "abstract": paper.get('abstract', '')
        }
        
        # Add to references
        references_data = load_references()
        references_data["references"].append(reference)
        
        return save_references(references_data)
        
    except Exception as e:
        st.error(f"Erro ao adicionar referência: {e}")
        return False

def remove_reference(ref_id: str) -> bool:
    """Remove reference from library."""
    try:
        references_data = load_references()
        references = references_data.get("references", [])
        
        # Find and remove reference
        for i, ref in enumerate(references):
            if ref.get('id') == ref_id:
                # Remove file if exists
                file_path = ref.get('file')
                if file_path and os.path.exists(file_path):
                    os.remove(file_path)
                
                # Remove from list
                references.pop(i)
                break
        
        # Save updated references
        references_data["references"] = references
        return save_references(references_data)
        
    except Exception as e:
        st.error(f"Erro ao remover referência: {e}")
        return False

def export_references_bibtex(references: List[Dict]) -> str:
    """Export references in BibTeX format."""
    bibtex = ""
    
    for ref in references:
        # Generate BibTeX key
        first_author = ref.get('authors', [''])[0].split(',')[0].replace(' ', '').lower()
        year = ref.get('year', '')
        bibtex_key = f"{first_author}{year}"
        
        bibtex += f"@article{{{bibtex_key},\n"
        bibtex += f"  title = {{{ref.get('title', '')}}},\n"
        
        # Authors
        authors = ref.get('authors', [])
        if authors:
            bibtex += f"  author = {{{' and '.join(authors)}}},\n"
        
        bibtex += f"  year = {{{ref.get('year', '')}}},\n"
        
        if ref.get('venue'):
            bibtex += f"  journal = {{{ref.get('venue', '')}}},\n"
        
        if ref.get('url'):
            bibtex += f"  url = {{{ref.get('url', '')}}},\n"
        
        bibtex += "}\n\n"
    
    return bibtex

def export_references_abnt(references: List[Dict]) -> str:
    """Export references in ABNT format."""
    abnt_list = []
    
    for i, ref in enumerate(references, 1):
        citation = ref.get('citation_abnt', '')
        abnt_list.append(f"{i}. {citation}")
    
    return "\n".join(abnt_list)

def get_reference_stats() -> Dict:
    """Get statistics about the reference library."""
    references = list_local_references()
    
    total = len(references)
    by_source = {}
    by_year = {}
    by_type = {}
    
    for ref in references:
        # Count by source
        source = ref.get('source', 'unknown')
        by_source[source] = by_source.get(source, 0) + 1
        
        # Count by year
        year = ref.get('year', 'unknown')
        by_year[year] = by_year.get(year, 0) + 1
        
        # Count by type
        ref_type = ref.get('type', 'unknown')
        by_type[ref_type] = by_type.get(ref_type, 0) + 1
    
    return {
        'total': total,
        'by_source': by_source,
        'by_year': by_year,
        'by_type': by_type
    }

