# Robust Deployment Script for Next.js to GitHub Pages
# Bypasses ENAMETOOLONG errors on Windows by using manual git commands

Write-Host "Starting robust deployment..." -ForegroundColor Cyan

# 1. Build the project
Write-Host "Building project..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Error "Build failed!"
    exit $LASTEXITCODE
}

# 2. Prepare the output directory
Write-Host "Preparing 'out' directory..." -ForegroundColor Yellow
if (-Not (Test-Path "out")) {
    Write-Error "Output directory 'out' not found!"
    exit 1
}

# Create .nojekyll to bypass GitHub Jekyll processing
New-Item -Path "out\.nojekyll" -ItemType File -Force | Out-Null

# Create 404.html from index.html for client-side routing on refreshes
Copy-Item -Path "out\index.html" -Destination "out\404.html" -Force

# 3. Initialize temporary git repository in 'out'
Set-Location "out"
git init
git add .
git commit -m "Deploy to GitHub Pages $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

# 4. Push to gh-pages branch
$RemoteUrl = "https://github.com/2005sahildeshmukh/V-SAFE-WORLD-PROJECT.git"
Write-Host "Pushing to GitHub Pages..." -ForegroundColor Yellow
git push $RemoteUrl master:gh-pages --force

# 5. Cleanup
Set-Location ".."
Remove-Item -Path "out\.git" -Recurse -Force

Write-Host "Deployment complete! Site should be live at: https://2005sahildeshmukh.github.io/V-SAFE-WORLD-PROJECT/" -ForegroundColor Green
