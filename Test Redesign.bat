@echo off
echo Starting the Universal Dynamic Local Test Server...
set TEMP_DIR=%TEMP%\udcs-dev-preview
echo Syncing workspace files to temporary local directory (%TEMP_DIR%)...
if not exist "%TEMP_DIR%" mkdir "%TEMP_DIR%"
robocopy "%~dp0." "%TEMP_DIR%" /MIR /XD node_modules dist .git .firebase /XF firebase-tools-instant-win.exe > nul
cd /d "%TEMP_DIR%"
if not exist "node_modules\vite" (
    echo Installing dependencies in local temp folder...
    call npm install
)
echo Launching dev server...
call npm run dev -- --open
pause
