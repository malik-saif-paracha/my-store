#!/bin/bash

echo "==================================="
echo " My Store eCommerce - Start Script"
echo "==================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed"
    echo "Please install Node.js from: https://nodejs.org/"
    exit 1
fi

# Check if MongoDB is installed
if ! command -v mongosh &> /dev/null; then
    echo "WARNING: MongoDB CLI tool not found"
    echo "Please install MongoDB from: https://www.mongodb.com/try/download/community"
    echo ""
fi

# Check if MongoDB is running
if pgrep -x "mongod" > /dev/null; then
    echo "[OK] MongoDB is running"
else
    echo "[WARNING] MongoDB may not be running"
    echo "To start MongoDB, run: brew services start mongodb-community"
    echo ""
fi

echo ""
echo "Starting Backend..."
echo "=================="
cd backend
npm install --quiet
npm start &
BACKEND_PID=$!

echo ""
sleep 3

echo "Starting Frontend..."
echo "==================="
cd ../frontend

# Check if http-server is installed
if ! command -v http-server &> /dev/null; then
    echo "Using Python http server..."
    python3 -m http.server 8000 &
else
    echo "Using http-server..."
    http-server &
fi

FRONTEND_PID=$!

echo ""
echo "==================================="
echo "   STARTUP COMPLETE!"
echo "==================================="
echo ""
echo "Frontend: http://localhost:8000"
echo "Admin:    http://localhost:8000/admin.html"
echo "Backend:  http://localhost:5000"
echo ""
echo "Admin Login: configure your own admin username/password before use (no default credentials are provided)"
echo ""
echo "To stop the application, press Ctrl+C"
echo ""

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID
