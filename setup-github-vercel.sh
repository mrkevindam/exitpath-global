#!/bin/bash
# ExitPath Global — GitHub + Vercel Setup Script
# Usage: bash setup-github-vercel.sh YOUR_GITHUB_TOKEN YOUR_VERCEL_TOKEN

set -e

GITHUB_TOKEN="${1:?Usage: bash setup-github-vercel.sh GITHUB_TOKEN VERCEL_TOKEN}"
VERCEL_TOKEN="${2:?Usage: bash setup-github-vercel.sh GITHUB_TOKEN VERCEL_TOKEN}"
REPO_NAME="exitpath-global"

echo "======================================"
echo "  ExitPath Global — Deploy Script"
echo "======================================"

# 1. Create GitHub repo
echo "→ Creating GitHub repo..."
RESPONSE=$(curl -s -X POST https://api.github.com/user/repos \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  -d "{\"name\":\"$REPO_NAME\",\"description\":\"ExitPath Global — Strategic Exit Advisory\",\"private\":false,\"auto_init\":false}")

CLONE_URL=$(echo $RESPONSE | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('clone_url',''))" 2>/dev/null)

if [[ -z "$CLONE_URL" ]]; then
  USERNAME=$(curl -s -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/user | python3 -c "import sys,json; print(json.load(sys.stdin)['login'])")
  CLONE_URL="https://github.com/$USERNAME/$REPO_NAME.git"
fi

echo "  Repo: $(echo $CLONE_URL | sed 's|https://.*@||')"

# 2. Push to GitHub
echo "→ Pushing to GitHub..."
git init
git config user.name "Kevin Dam"
git config user.email "consulting@kevindam.com"
git add -A
git commit -m "Initial commit: ExitPath Global Next.js site" 2>/dev/null || true
git branch -M main
git remote remove origin 2>/dev/null || true
git remote add origin "https://${GITHUB_TOKEN}@$(echo $CLONE_URL | sed 's|https://||')"
git push -u origin main
echo "  ✓ Pushed to GitHub"

# 3. Deploy to Vercel
echo "→ Deploying to Vercel..."
if ! command -v vercel &> /dev/null; then
  npm install -g vercel
fi
vercel --token "$VERCEL_TOKEN" --yes --prod

echo "======================================"
echo "  ✓ Done!"
echo "======================================"
