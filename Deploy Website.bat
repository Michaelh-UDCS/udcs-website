@echo off
echo Starting Universal Dynamic Firebase Deployment...
set TEMP_BUILD=%TEMP%\udcs-build

echo 1/3: Mirroring workspace to temp build folder (%TEMP_BUILD%)...
if not exist "%TEMP_BUILD%" mkdir "%TEMP_BUILD%"
robocopy "%~dp0." "%TEMP_BUILD%" /MIR /XD node_modules dist .git .firebase /XF firebase-tools-instant-win.exe > nul

echo 2/3: Installing dependencies and building production bundle...
cd /d "%TEMP_BUILD%"
call npm install
call npx vite build

echo Copying production bundle (dist) back to workspace...
robocopy "%TEMP_BUILD%\dist" "%~dp0dist" /MIR > nul

echo 3/3: Deploying to Firebase Hosting (universal-dynamic-website)...
cd /d "%~dp0"
call npx firebase deploy --only hosting

echo Deployment complete!
pause
