@echo off
title Cray Cadres Dev Server (Vite)
cd /d "%~dp0"
set "PATH=C:\Program Files\nodejs;%PATH%"
echo Starting Cray Cadres development server on port 5175...
echo Preview URL: http://localhost:5175/
echo.
npm run dev
pause
