#!/bin/bash
# This script checks for dead links in the given directory file contents.



TARGET_DIR=$1
if [ -z "${TARGET_DIR}" ]; then
    echo "Usage: $0 <target_dir>"
    exit 1
fi

set -euo pipefail

function get_urls(){
    find "./src/data" -type f -exec bash -c 'cat "$1"' _ {} \; \
    | grep -oE 'https?://[^[:space:]]+' \
    | sed 's/,$//' \
    | sed "s/'//g" \
    | sed "s/)//g" \
    | sed "s/)//g" \
    | sed 's/\.$//' \
    | shuf
}

function get_domain(){
    echo "${1}" | grep -oE 'https?://([^/]+)' | sed 's|https*://||'
}

function get_http_status(){
    USER_AGENT="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
    curl -A "${USER_AGENT}" -s -o /dev/null -w "%{http_code}\n" "${1}"
}

previous_domain=""

for url in $(get_urls "${TARGET_DIR}"); do
    domain=$(get_domain "${url}")

    if [ "$domain" == "$previous_domain" ]; then
        sleep 1
    fi
    previous_domain=$domain
    USER_AGENT="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
    status=$(get_http_status "${url}")

    if [[ $url == *"www.zenrows.com"* \
            || $url == *"linkedin.com"* \
            || $url == *"twitter.com"* \
            || $url == *"stackoverflow.com"* ]]; then
        echo "Skipping URL: $url"
    elif [ "${status}" -ge 429 ]; then
          echo "Skipping URL: $url. Status: ${status}. Too many requests"
    elif [ "${status}" -ge 400 ]; then
        echo "Status: ${status}. Url: ${url}. Dead link"
        exit 1
    else
        echo "Status: ${status}. Url: ${url}"
    fi
done
