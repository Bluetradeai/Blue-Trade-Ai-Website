#!/bin/bash
cd "/Users/brandtmaples/Desktop/Bluetrade AI/Bluetrade AI"
rm -f .git/index.lock

KEY_FILE="/Users/brandtmaples/Desktop/Bluetrade AI/deploy_key"

# Set correct permissions on SSH key
chmod 600 "$KEY_FILE"

# Pre-trust GitHub's host key (avoid interactive prompt)
mkdir -p ~/.ssh
ssh-keyscan -t ed25519 github.com >> ~/.ssh/known_hosts 2>/dev/null

echo "Pushing to GitHub via SSH (no keychain involved)..."
GIT_SSH_COMMAND="ssh -i $KEY_FILE -o StrictHostKeyChecking=accept-new -o UserKnownHostsFile=/dev/null" \
  git push git@github.com:Bluetradeai/Blue-Trade-Ai-Website.git HEAD:main

STATUS=$?

if [ $STATUS -eq 0 ]; then
  echo ""
  echo "✅ Push succeeded!"
  echo "   Repo: https://github.com/Bluetradeai/Blue-Trade-Ai-Website"
  echo "   Vercel will auto-deploy shortly."
  git remote set-url origin https://github.com/Bluetradeai/Blue-Trade-Ai-Website.git
else
  echo ""
  echo "❌ Push failed. Check output above."
fi

# Clean up deploy key files
rm -f "$KEY_FILE" "$KEY_FILE.pub"
echo "✓ Deploy key files cleaned up"
