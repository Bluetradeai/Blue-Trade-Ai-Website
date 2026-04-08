#!/bin/bash
cd "/Users/brandtmaples/Desktop/Bluetrade AI/Bluetrade AI"
rm -f .git/index.lock

KEY_SOURCE="/Users/brandtmaples/Desktop/Bluetrade AI/deploy_key"
KEY_TMP="/tmp/bluetrade_deploy_key"

cp "$KEY_SOURCE" "$KEY_TMP"
chmod 600 "$KEY_TMP"

mkdir -p ~/.ssh
ssh-keyscan -t ed25519 github.com >> ~/.ssh/known_hosts 2>/dev/null

echo "Pushing update to GitHub..."
GIT_SSH_COMMAND="ssh -i $KEY_TMP -o StrictHostKeyChecking=accept-new -o UserKnownHostsFile=/dev/null" \
  git add -A && \
  git commit -m "Add HVAC to industries; move Industries section to top" && \
  GIT_SSH_COMMAND="ssh -i $KEY_TMP -o StrictHostKeyChecking=accept-new -o UserKnownHostsFile=/dev/null" \
  git push git@github.com:Bluetradeai/Blue-Trade-Ai-Website.git HEAD:main

STATUS=$?
rm -f "$KEY_TMP"

if [ $STATUS -eq 0 ]; then
  echo ""
  echo "✅ Update pushed! Vercel is rebuilding now."
  rm -f "$KEY_SOURCE" "${KEY_SOURCE}.pub"
else
  echo "❌ Push failed."
fi
