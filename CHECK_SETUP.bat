@echo off
setlocal enabledelayedexpansion

echo.
echo =========================================================
echo   My Store eCommerce - Environment Setup & Check
echo =========================================================
echo.

set all_good=1

REM Check Node.js
echo Checking Node.js...
where node >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    for /f "tokens=*" %%i in ('node --version') do echo [OK] Node.js %%i found
) else (
    echo [ERROR] Node.js NOT found!
    echo Download from: https://nodejs.org/
    set all_good=0
)

REM Check npm
echo.
echo Checking npm...
where npm >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    for /f "tokens=*" %%i in ('npm --version') do echo [OK] npm %%i found
) else (
    echo [ERROR] npm NOT found!
    set all_good=0
)

REM Check MongoDB
echo.
echo Checking MongoDB...
where mongosh >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [OK] MongoDB CLI tool found
) else (
    where mongo >nul 2>nul
    if %ERRORLEVEL% EQU 0 (
        echo [OK] MongoDB found (older version)
    ) else (
        tasklist | find /I "mongod" >nul
        if %ERRORLEVEL% EQU 0 (
            echo [OK] MongoDB service is running
        ) else (
            echo [WARNING] MongoDB may not be installed or running
            echo Download from: https://www.mongodb.com/try/download/community
            REM Don't fail completely, might be running
        )
    )
)

REM Check Python (for frontend server)
echo.
echo Checking Python...
where python >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    for /f "tokens=*" %%i in ('python --version') do echo [OK] %%i found
) else (
    where python3 >nul 2>nul
    if %ERRORLEVEL% EQU 0 (
        echo [OK] Python 3 found
    ) else (
        echo [WARNING] Python NOT found! (Optional, you can use http-server)
    )
)

REM Check if backend folder exists
echo.
echo Checking backend folder...
if exist "backend\" (
    echo [OK] backend folder found
) else (
    echo [ERROR] backend folder NOT found!
    set all_good=0
)

REM Check if frontend folder exists
echo.
echo Checking frontend folder...
if exist "frontend\" (
    echo [OK] frontend folder found
) else (
    echo [ERROR] frontend folder NOT found!
    set all_good=0
)

REM Check if backend has package.json
echo.
echo Checking backend configuration...
if exist "backend\package.json" (
    echo [OK] package.json found
) else (
    echo [ERROR] package.json NOT found in backend!
    set all_good=0
)

REM Check MongoDB running status
echo.
echo MongoDB Status:
tasklist | find /I "mongod" >nul
if %ERRORLEVEL% EQU 0 (
    echo [OK] MongoDB service is running
) else (
    echo [WARNING] MongoDB does not appear to be running
    echo To start MongoDB:
    echo   - Windows: It should autostart after installation
    echo   - Or open new Command Prompt and run: mongod
)

REM Summary
echo.
echo =========================================================
echo   SUMMARY
echo =========================================================
echo.

if %all_good% EQU 1 (
    echo [SUCCESS] All required components are found!
    echo.
    echo You can now:
    echo 1. Double-click START_APP.bat to start the application
    echo    OR
    echo 2. Run these commands manually:
    echo    - In one terminal: cd backend ^&^& npm start
    echo    - In another terminal: cd frontend ^&^& python -m http.server 8000
    echo.
    echo Then open browser: http://localhost:8000
    echo Admin panel: http://localhost:8000/admin.html
    echo Admin Login: configure your own admin username/password (no default credentials)
    echo.
) else (
    echo [WARNING] Some components are missing!
    echo.
    echo Install the following:
    echo - Node.js: https://nodejs.org/
    echo - MongoDB: https://www.mongodb.com/try/download/community
    echo - Python (optional): https://www.python.org/
    echo.
)

echo =========================================================
echo.
pause
