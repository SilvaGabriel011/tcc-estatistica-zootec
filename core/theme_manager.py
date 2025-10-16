"""Gerenciamento de tema dark/light mode para o Streamlit."""
import streamlit as st

def get_theme():
    """Get current theme from session state."""
    return st.session_state.get('theme', 'light')

def set_theme(theme):
    """Set theme and apply custom CSS."""
    st.session_state['theme'] = theme
    apply_theme_css(theme)

def apply_theme_css(theme):
    """Apply custom CSS based on theme."""
    
    if theme == 'dark':
        css = """
        <style>
        /* Dark theme CSS */
        .stApp {
            background-color: #1e1e1e;
            color: #ffffff;
        }
        
        .main .block-container {
            background-color: #1e1e1e;
            color: #ffffff;
        }
        
        .stSidebar {
            background-color: #2d2d2d;
        }
        
        .stSidebar .stMarkdown {
            color: #ffffff;
        }
        
        .stSelectbox > div > div {
            background-color: #3d3d3d;
            color: #ffffff;
        }
        
        .stTextInput > div > div > input {
            background-color: #3d3d3d;
            color: #ffffff;
            border-color: #555555;
        }
        
        .stTextArea > div > div > textarea {
            background-color: #3d3d3d;
            color: #ffffff;
            border-color: #555555;
        }
        
        .stSlider > div > div > div > div {
            background-color: #3d3d3d;
        }
        
        .stButton > button {
            background-color: #4CAF50;
            color: #ffffff;
            border: 1px solid #4CAF50;
        }
        
        .stButton > button:hover {
            background-color: #45a049;
        }
        
        .stExpander > div {
            background-color: #2d2d2d;
            border-color: #555555;
        }
        
        .stTabs > div > div > div > div {
            background-color: #2d2d2d;
        }
        
        .stTabs > div > div > div > div[aria-selected="true"] {
            background-color: #4CAF50;
            color: #ffffff;
        }
        
        .stMetric {
            background-color: #2d2d2d;
            border: 1px solid #555555;
            border-radius: 5px;
            padding: 10px;
        }
        
        .stAlert {
            background-color: #2d2d2d;
            border-color: #555555;
        }
        
        /* Plotly charts dark theme */
        .js-plotly-plot {
            background-color: #1e1e1e;
        }
        
        /* Custom cards */
        .custom-card {
            background-color: #2d2d2d;
            border: 1px solid #555555;
            border-radius: 8px;
            padding: 15px;
            margin: 10px 0;
        }
        
        .custom-card h3 {
            color: #4CAF50;
        }
        
        .custom-card p {
            color: #ffffff;
        }
        </style>
        """
    else:
        css = """
        <style>
        /* Light theme CSS (default) */
        .stApp {
            background-color: #ffffff;
            color: #262730;
        }
        
        .main .block-container {
            background-color: #ffffff;
            color: #262730;
        }
        
        .stSidebar {
            background-color: #f0f2f6;
        }
        
        .stSelectbox > div > div {
            background-color: #ffffff;
            color: #262730;
        }
        
        .stTextInput > div > div > input {
            background-color: #ffffff;
            color: #262730;
            border-color: #cccccc;
        }
        
        .stTextArea > div > div > textarea {
            background-color: #ffffff;
            color: #262730;
            border-color: #cccccc;
        }
        
        .stSlider > div > div > div > div {
            background-color: #ffffff;
        }
        
        .stButton > button {
            background-color: #4CAF50;
            color: #ffffff;
            border: 1px solid #4CAF50;
        }
        
        .stButton > button:hover {
            background-color: #45a049;
        }
        
        .stExpander > div {
            background-color: #ffffff;
            border-color: #cccccc;
        }
        
        .stTabs > div > div > div > div {
            background-color: #f8f9fa;
        }
        
        .stTabs > div > div > div > div[aria-selected="true"] {
            background-color: #4CAF50;
            color: #ffffff;
        }
        
        .stMetric {
            background-color: #f8f9fa;
            border: 1px solid #e9ecef;
            border-radius: 5px;
            padding: 10px;
        }
        
        .stAlert {
            background-color: #ffffff;
            border-color: #cccccc;
        }
        
        /* Plotly charts light theme */
        .js-plotly-plot {
            background-color: #ffffff;
        }
        
        /* Custom cards */
        .custom-card {
            background-color: #f8f9fa;
            border: 1px solid #e9ecef;
            border-radius: 8px;
            padding: 15px;
            margin: 10px 0;
        }
        
        .custom-card h3 {
            color: #4CAF50;
        }
        
        .custom-card p {
            color: #262730;
        }
        </style>
        """
    
    st.markdown(css, unsafe_allow_html=True)

def render_theme_selector():
    """Render theme selector in sidebar."""
    with st.sidebar:
        st.divider()
        current_theme = get_theme()
        
        col1, col2 = st.columns([1, 1])
        
        with col1:
            if st.button('☀️', key='light_theme', help='Tema claro'):
                set_theme('light')
                st.rerun()
        
        with col2:
            if st.button('🌙', key='dark_theme', help='Tema escuro'):
                set_theme('dark')
                st.rerun()
        
        st.caption(f"Tema: {current_theme.title()}")

def get_plotly_theme():
    """Get Plotly theme configuration based on current theme."""
    current_theme = get_theme()
    
    if current_theme == 'dark':
        return {
            'layout': {
                'paper_bgcolor': '#1e1e1e',
                'plot_bgcolor': '#1e1e1e',
                'font': {'color': '#ffffff'},
                'xaxis': {'color': '#ffffff'},
                'yaxis': {'color': '#ffffff'}
            }
        }
    else:
        return {
            'layout': {
                'paper_bgcolor': '#ffffff',
                'plot_bgcolor': '#ffffff',
                'font': {'color': '#262730'},
                'xaxis': {'color': '#262730'},
                'yaxis': {'color': '#262730'}
            }
        }

def init_theme():
    """Initialize theme in session state."""
    if 'theme' not in st.session_state:
        st.session_state['theme'] = 'light'
    
    # Apply theme CSS
    apply_theme_css(get_theme())

