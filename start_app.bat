@echo off
echo Starting Apartment Complaint System...

start "Backend Server" cmd /k "cd backend && npm start"
echo Backend started...

start "Frontend App" cmd /k "cd frontend && npm run dev"
echo Frontend started...

echo.
echo Application is running!
echo Frontend: http://localhost:5173
echo Backend: http://localhost:5000
echo.
echo Default Admin: Maha / 24cs078
pause
