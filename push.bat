@echo off
git add .
git commit -m "New Update"
git push heroku main
npx heroku logs --tail
pause