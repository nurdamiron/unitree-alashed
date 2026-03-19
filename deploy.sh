#!/bin/bash
set -e

# ── Unitree Alashed — Deploy Script ────────────────────────────────────────
S3_BUCKET="alashed-deploy-temp"
S3_KEY="unitree-alashed/unitree-alashed.tar.gz"
INSTANCE_ID="i-05985e313b16833ec"
APP_PORT=8081
REGION="eu-north-1"
APP_DIR="/home/ubuntu/apps/unitree-alashed"
APP_NAME="unitree-alashed"
DOMAIN="unitree.alashed.kz"

# ── helpers ──────────────────────────────────────────────────────────────────
wait_ssm() {
  local CMD_ID=$1
  echo "⏳ SSM command $CMD_ID..."
  for i in $(seq 1 60); do
    sleep 5
    STATUS=$(aws ssm get-command-invocation \
      --command-id "$CMD_ID" --instance-id "$INSTANCE_ID" \
      --region "$REGION" --query "Status" --output text 2>/dev/null || echo "Pending")
    echo "  [$i] $STATUS"
    if [ "$STATUS" = "Success" ]; then
      aws ssm get-command-invocation \
        --command-id "$CMD_ID" --instance-id "$INSTANCE_ID" \
        --region "$REGION" --query "StandardOutputContent" --output text
      return 0
    fi
    if [ "$STATUS" = "Failed" ] || [ "$STATUS" = "TimedOut" ] || [ "$STATUS" = "Cancelled" ]; then
      aws ssm get-command-invocation \
        --command-id "$CMD_ID" --instance-id "$INSTANCE_ID" \
        --region "$REGION" --query "StandardOutputContent" --output text
      aws ssm get-command-invocation \
        --command-id "$CMD_ID" --instance-id "$INSTANCE_ID" \
        --region "$REGION" --query "StandardErrorContent" --output text
      echo "❌ Failed"
      exit 1
    fi
  done
  echo "⚠️  Timeout"; exit 1
}

send_ssm() {
  aws ssm send-command \
    --instance-ids "$INSTANCE_ID" \
    --document-name "AWS-RunShellScript" \
    --region "$REGION" \
    --parameters "$1" \
    --timeout-seconds 600 \
    --query "Command.CommandId" \
    --output text
}

# ── 1. Build ──────────────────────────────────────────────────────────────────
echo "🔨 Building $APP_NAME..."
npm install
npm run build

# ── 2. Pack & Upload ──────────────────────────────────────────────────────────
echo "📦 Packing..."
tar -czf /tmp/unitree-alashed.tar.gz \
  --exclude='.next/cache' \
  .next public app components lib package.json package-lock.json next.config.mjs .env.local 2>/dev/null || true

echo "☁️  Uploading to S3..."
aws s3 cp /tmp/unitree-alashed.tar.gz "s3://$S3_BUCKET/$S3_KEY" --region "$REGION"
rm /tmp/unitree-alashed.tar.gz
echo "✅ Uploaded"

if [ "$1" = "--build-only" ]; then echo "Done (build-only)"; exit 0; fi

# ── 3. Deploy app via SSM ─────────────────────────────────────────────────────
echo "🚀 Deploying app on EC2..."
CMD_ID=$(send_ssm "{\"commands\":[
  \"set -e\",
  \"echo Pulling from S3...\",
  \"aws s3 cp s3://${S3_BUCKET}/${S3_KEY} /tmp/unitree-alashed.tar.gz --region ${REGION} --no-progress\",
  \"mkdir -p ${APP_DIR}\",
  \"cd ${APP_DIR} && tar -xzf /tmp/unitree-alashed.tar.gz && rm -f /tmp/unitree-alashed.tar.gz\",
  \"echo Installing deps...\",
  \"cd ${APP_DIR} && npm install --omit=dev 2>&1 | tail -5\",
  \"echo Starting PM2...\",
  \"cd ${APP_DIR} && sudo -u ubuntu bash -c 'pm2 describe ${APP_NAME} > /dev/null 2>&1 && pm2 restart ${APP_NAME} --update-env || HOME=/home/ubuntu pm2 start node_modules/next/dist/bin/next --name ${APP_NAME} -- start -p ${APP_PORT}'\",
  \"sudo -u ubuntu pm2 save\",
  \"echo App deployed on port ${APP_PORT}\"
]}")
wait_ssm "$CMD_ID"

# ── 4. Reload nginx (SSL already configured via Certbot) ──────────────────────
echo "🌐 Reloading nginx..."
NGINX_CMD_ID=$(send_ssm "{\"commands\":[
  \"nginx -t && systemctl reload nginx\",
  \"echo Done: https://${DOMAIN}\"
]}")
wait_ssm "$NGINX_CMD_ID"

echo ""
echo "✅ Deployed! https://$DOMAIN"
