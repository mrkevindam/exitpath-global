#!/bin/bash
# Run this AFTER pushing to GitHub
# Usage: bash deploy-vercel.sh YOUR_VERCEL_TOKEN

cd "$(dirname "$0")"

VERCEL_TOKEN="${1:?Usage: bash deploy-vercel.sh YOUR_VERCEL_TOKEN}"

if ! command -v vercel &> /dev/null; then
  echo "→ Installing Vercel CLI..."
  npm install -g vercel
fi

echo "→ Deploying to Vercel..."
vercel --token "$VERCEL_TOKEN" --yes --prod

echo ""
echo "✓ Deployment complete! Check above for your live URL."
