@echo off
echo ========================================
echo    TCC Gado Gordo - Versao Simplificada
echo ========================================
echo.

echo Instalando dependencias basicas...
pip install -r requirements_simple.txt

echo.
echo Iniciando aplicacao...
echo Abrindo navegador em: http://localhost:8501
echo.

streamlit run app_simple.py

pause

