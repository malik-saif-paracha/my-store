@echo off
echo ===================================
echo  My Store eCommerce - Start Script
echo ===================================
echo.

REM Check if MongoDB is installed
where mongosh >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo WARNING: MongoDB does not appear to be installed or not in PATH
    echo Please install MongoDB from: https://www.mongodb.com/try/download/community
    echo.
)

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from: https://nodejs.org/
    pause
    exit /b 1
)

echo MongoDB Status:
echo ===============
tasklist | find /I "mongod" >nul
if %ERRORLEVEL% EQU 0 (
    echo [OK] MongoDB is running
) else (
    echo [WARNING] MongoDB may not be running
    echo To start MongoDB manually, run: mongod
    echo.
)

echo.
echo Starting Backend...
echo ================
cd backend
call npm install --quiet
start cmd /k npm start

echo.
echo.
echo Starting Frontend...
echo ===================
cd ..\frontend
timeout /t 2 /nobreak
start cmd /k python -m http.server 8000

echo.
echo.
echo ===================================
echo   STARTUP COMPLETE!
echo ===================================
echo.
echo Frontend: http://localhost:8000
echo Admin:    http://localhost:8000/admin.html
echo Backend:  http://localhost:5000
echo.
echo Admin Login:
echo   Configure your own admin username and password before first run. No default credentials are provided.
echo.
echo If pages don't load:
echo 1. Wait 10 seconds for mongodb connection
echo 2. Make sure MongoDB is running
echo 3. Check that both terminals are open and no errors
echo.
pause
