@echo off
echo ============================================================
echo   TCC GADO GORDO - Backend API (FastAPI)
echo ============================================================
echo.

cd /d "%~dp0"

echo [1/2] Verificando FastAPI...
python -m pip show fastapi >nul 2>&1
if errorlevel 1 (
    echo ERRO: FastAPI nao instalado!
    echo Execute: INSTALAR_DEPENDENCIAS.bat
    pause
    exit /b 1
)

echo.
echo [2/2] Iniciando API...
echo.
echo ============================================================
echo   API Backend rodando em: http://localhost:8000
echo   Documentacao interativa: http://localhost:8000/docs
echo   Para parar: Pressione Ctrl+C
echo ============================================================
echo.

python -m uvicorn api:app --reload --port 8000

pause

