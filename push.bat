@echo off
cd /d "%~dp0"

if not exist ".git" (
    git init
    git remote add origin https://github.com/Sikewyrm/FrameForge-Website.git
    git branch -M main
)

git add .

set /p msg=Commit message:
if "%msg%"=="" set msg=Update website

git commit -m "%msg%"
git push origin main

echo.
echo Done! Changes pushed to GitHub.
pause
