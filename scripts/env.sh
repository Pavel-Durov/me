#!/bin/bash 

set -e
{
  echo REACT_APP_VERSION=$(git rev-parse --short HEAD)
} > .env