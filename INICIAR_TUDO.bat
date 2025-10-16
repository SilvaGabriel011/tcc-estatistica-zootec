@echo off
echo ============================================================
echo   TCC GADO GORDO - Iniciar API + Streamlit
echo ============================================================
echo.

cd /d "%~dp0"

echo Iniciando Backend API (porta 8000)...
start "API Backend" cmd /k "python -m uvicorn api:app --reload --port 8000"

timeout /t 3 /nobreak >nul

echo Iniciando Streamlit App (porta 8501)...
start "Streamlit App" cmd /k "python -m streamlit run app.py"

echo.
echo ============================================================
echo   SERVICOS INICIADOS!
echo ============================================================
echo.
echo   API Backend:    http://localhost:8000
echo   Documentacao:   http://localhost:8000/docs
echo   Streamlit App:  http://localhost:8501
echo.
echo   Para parar: Feche as janelas de terminal
echo ============================================================
echo.

pause

