# Delete ma-be-12/frontend and push this project again as kidui23.
# Prerequisite: gh auth login (choose kidui23 in the browser)

$ErrorActionPreference = "Stop"
$RepoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
Set-Location $RepoRoot

$OrgRepo = "ma-be-12/frontend"

Write-Host "Checking GitHub CLI login..." -ForegroundColor Cyan
gh auth status
if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "First run:  gh auth login -h github.com -p https -w" -ForegroundColor Yellow
    exit 1
}

$who = gh api user --jq .login
Write-Host "Logged in as: $who"
if ($who -ne "kidui23") {
    Write-Host "Wrong account. Run:  gh auth logout" -ForegroundColor Red
    Write-Host "Then:         gh auth login -h github.com -p https -w" -ForegroundColor Yellow
    exit 1
}

Write-Host "Deleting https://github.com/$OrgRepo ..." -ForegroundColor Cyan
gh repo delete $OrgRepo --yes

Write-Host "Creating fresh private repo $OrgRepo ..." -ForegroundColor Cyan
gh repo create $OrgRepo --private --confirm

git remote set-url origin "https://github.com/$OrgRepo.git"

Write-Host "Updating commit authors to kidui23 ..." -ForegroundColor Cyan
git filter-branch -f --env-filter @"
export GIT_AUTHOR_NAME='kidui23'
export GIT_AUTHOR_EMAIL='215383363+kidui23@users.noreply.github.com'
export GIT_COMMITTER_NAME='kidui23'
export GIT_COMMITTER_EMAIL='215383363+kidui23@users.noreply.github.com'
"@ HEAD

Write-Host "Pushing to organization ..." -ForegroundColor Cyan
git push -u origin main --force

Write-Host ""
Write-Host "Done: https://github.com/$OrgRepo" -ForegroundColor Green
