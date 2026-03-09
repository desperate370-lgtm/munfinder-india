#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PORT="${PORT:-4173}"

echo "Starting Ferrari website on http://127.0.0.1:${PORT}/index.html"
exec python -m http.server "${PORT}" --directory "${ROOT_DIR}"
