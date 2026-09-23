@echo off
title UDCS Firebase Reauth and Deploy
echo ==========================================================
echo    UNIVERSAL DYNAMIC - FIREBASE REAUTHENTICATION ^& DEPLOY
echo ==========================================================
echo.
echo  1. Your default browser will open to Google Sign-In.
echo  2. Select: michael@universal-dynamic.com
echo  3. Click 'Allow' to refresh your CLI credentials.
echo.
echo ==========================================================
echo Press any key to open Google Sign-In...
pause > nul
call npx firebase login:use michael@universal-dynamic.com
call npx firebase login --reauth
echo.
echo ==========================================================
echo [DEPLOYING] Pushing updated schema ^& sitemap to Firebase...
echo ==========================================================
call npx firebase deploy --only hosting
echo.
echo ==========================================================
echo [SUCCESS] Universal Dynamic Hosting is live!
echo ==========================================================
pause
