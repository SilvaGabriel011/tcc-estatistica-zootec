@echo off
echo ============================================================
echo   TCC GADO GORDO - Inicializador do Aplicativo
echo ============================================================
echo.

cd /d "%~dp0"

echo [1/3] Verificando Python...
python --version
if errorlevel 1 (
    echo ERRO: Python nao encontrado!
    pause
    exit /b 1
)

echo.
echo [2/3] Verificando Streamlit...
python -m pip show streamlit >nul 2>&1
if errorlevel 1 (
    echo ERRO: Streamlit nao instalado!
    echo Execute: pip install -r requirements.txt
    pause
    exit /b 1
)

echo.
echo [3/3] Iniciando aplicativo...
echo.
echo ============================================================
echo   Aguarde o navegador abrir em http://localhost:8501
echo   Para parar o app: Pressione Ctrl+C
echo ============================================================
echo.

python -m streamlit run app.py

pause

