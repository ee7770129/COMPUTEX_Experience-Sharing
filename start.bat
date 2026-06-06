@echo off
REM ============================================================
REM  COMPUTEX 2026 share deck - one-click launcher (Vite + HMR)
REM  Auto-cleans port 5273 first, then (re)starts the dev server.
REM  ASCII ONLY on purpose: Chinese text in .bat breaks cmd codepage.
REM  Created: 2026-06-06
REM ============================================================
setlocal
cd /d "%~dp0"
title COMPUTEX 2026 Share Deck

REM --- [clean] kill any process still holding port 5273 ---
echo [clean] Freeing port 5273 if occupied...
for /f "tokens=5" %%P in ('netstat -aon ^| findstr ":5273" ^| findstr "LISTENING"') do (
  echo    killing old PID %%P
  taskkill /F /PID %%P >nul 2>&1
)

REM --- [setup] install dependencies on first run ---
if not exist "node_modules" (
  echo [setup] First run, installing dependencies. Please wait...
  call npm install
  if errorlevel 1 (
    echo.
    echo  npm install FAILED. Check network / Node version.
    pause
    exit /b 1
  )
)

REM --- [run] start dev server; vite opens the browser ---
echo [run] Starting dev server  ^>  http://localhost:5273
echo       Live update on save, no F5 needed. Ctrl+C to stop.
echo.
call npm run dev

REM keep window open if the server exits / errors
echo.
echo  Dev server stopped.
pause
