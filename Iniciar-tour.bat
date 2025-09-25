@echo off
echo.
echo 🌐 Iniciando servidor Marzipano en la red local...
echo.

for /f "tokens=2 delims=[]" %%a in ('ping -4 -n 1 %ComputerName% ^| findstr "["') do set "IP=%%a"
if "%IP%"=="" (
    for /f "tokens=14" %%a in ('ipconfig ^| findstr "IPv4"') do set "IP=%%a"
)

echo Tu IP local es: %IP%
echo Abre en tu teléfono o tablet: http://%IP%:8080
echo.
echo 🚀 Servidor iniciado. No cierres esta ventana.
echo.

npx serve -s . --listen tcp://0.0.0.0:8080