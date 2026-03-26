#!/bin/bash
# Run this from inside the exitpath-global-nextjs/ folder
# Usage: bash push-to-github.sh YOUR_GITHUB_TOKEN

cd "$(dirname "$0")"

GITHUB_TOKEN="${1:?Usage: bash push-to-github.sh YOUR_GITHUB_TOKEN}"

git init
git config user.name "Kevin Dam"
git config user.email "consulting@kevindam.com"
git add -A
git commit -m "Initial commit: ExitPath Global Next.js site" 2>/dev/null || echo "(already committed)"
git branch -M main
git remote remove origin 2>/dev/null || true
git remote add origin "https://${GITHUB_TOKEN}@github.com/mrkevindam/exitpath-global.git"
git push -u origin main

echo ""
echo "✓ Pushed to https://github.com/mrkevindam/exitpath-global"
