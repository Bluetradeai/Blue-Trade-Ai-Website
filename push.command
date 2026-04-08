#!/bin/bash
cd "/Users/brandtmaples/Desktop/Bluetrade AI/Bluetrade AI"
rm -f .git/index.lock

echo "Pushing to GitHub via HTTPS (using macOS Keychain)..."
git push -u origin main

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Done! All files pushed to GitHub."
  echo "   Repo: https://github.com/Bluetradeai/Blue-Trade-Ai-Website"
  echo "   Vercel will auto-deploy shortly."
else
  echo ""
  echo "⚠️  Push failed. You may need a GitHub Personal Access Token."
  echo "   1. Go to: https://github.com/settings/tokens/new"
  echo "   2. Create a token with 'repo' scope"
  echo "   3. Run: git -C \"/Users/brandtmaples/Desktop/Bluetrade AI/Bluetrade AI\" push -u origin main"
  echo "   4. Enter your GitHub username, then paste the token as the password"
fi
