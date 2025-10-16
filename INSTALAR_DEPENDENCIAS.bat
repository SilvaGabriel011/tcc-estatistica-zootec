@echo off
echo ============================================================
echo   TCC GADO GORDO - Instalador de Dependencias
echo ============================================================
echo.

cd /d "%~dp0"

echo Instalando todas as dependencias...
echo.

python -m pip install --upgrade pip
python -m pip install -r requirements.txt

echo.
echo ============================================================
echo   Instalacao concluida!
echo ============================================================
echo.
echo Agora execute: INICIAR_APP.bat
echo.

pause

