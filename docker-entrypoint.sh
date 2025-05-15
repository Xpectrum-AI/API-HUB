#!/bin/sh

# Generate environment config file with proper JavaScript syntax
echo "window.ENV = {" > /usr/share/nginx/html/env-config.js
echo "  VITE_AUTH_URL: \"$VITE_AUTH_URL\"" >> /usr/share/nginx/html/env-config.js
echo "};" >> /usr/share/nginx/html/env-config.js

# For debugging
echo "Created env-config.js with AUTH_URL: $VITE_AUTH_URL"
cat /usr/share/nginx/html/env-config.js

exec "$@"