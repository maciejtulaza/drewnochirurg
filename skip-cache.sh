#!/bin/bash

# Generate random hash
VERSION=$(openssl rand -hex 6)

# Replace VERSION_HASH in index.html
sed -i.bak "s/VERSION_HASH/$VERSION/g" index.html

# Show what we did
echo "Updated cache busting version to: $VERSION"

# Clean up backup
rm -f index.html.bak
