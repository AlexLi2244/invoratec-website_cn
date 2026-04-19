# Deploy InvoratecAI Website to Firebase Hosting
# Usage: .\deploy.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  InvoratecAI Website Deployment" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Change to project directory
Set-Location "C:\Users\servi\source\repos\InvoratecAI.Website"

# Deploy to Firebase
Write-Host "[Step 1] Deploying to Firebase Hosting..." -ForegroundColor Yellow
firebase deploy --only hosting:invoratec-website

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  Deployment Successful!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Website URL: https://invoratec-website.web.app" -ForegroundColor Cyan
    Write-Host "Custom domain: https://invoratec.com (after DNS setup)" -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "Deployment failed!" -ForegroundColor Red
    exit 1
}