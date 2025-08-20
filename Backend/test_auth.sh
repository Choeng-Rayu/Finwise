#!/bin/bash

# Add .env to .gitignore
echo "Backend/.env" >> .gitignore

# Stop tracking it in git
git rm --cached Backend/.env