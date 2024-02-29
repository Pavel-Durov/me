#!/bin/bash
# This script checks for dead links in the given directory file contents.



TARGET_DIR=$1
if [ -z "${TARGET_DIR}" ]; then
    echo "Usage: $0 <target_dir>"
    exit 1
fi

set -euo pipefail

URLS=$(find "${TARGET_DIR}" -type f -exec bash -c 'cat "$1"' _ {} \; | grep -oE 'https?://[^[:space:]]+' | sed 's/,$//' | sed "s/'//g")

USER_AGENT="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
for url in $URLS; do
    echo "Checking ${url}"
    status=$(curl -A "${USER_AGENT}" -s -o /dev/null -w "%{http_code}\n" "${url}")
    echo "Status: ${status}"
    if [ $status -ge 400 ]; then
        echo "Dead link: ${url}"
        exit 1
    fi
done
