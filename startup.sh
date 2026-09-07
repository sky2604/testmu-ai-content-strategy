#!/bin/sh
# Restart contract for the live preview. Bind 0.0.0.0:8080 via npm run dev.
set -eu
cd /workspace
if curl -sf -o /dev/null --max-time 2 http://127.0.0.1:8080/; then
  exit 0
fi
npm run dev > /tmp/app-dev.log 2>&1 &
# Wait until the preview port answers
i=0
while [ "$i" -lt 40 ]; do
  if curl -sf -o /dev/null --max-time 2 http://127.0.0.1:8080/; then
    exit 0
  fi
  i=$((i + 1))
  sleep 0.5
done
exit 0
