#!/bin/sh

# Generate environment config file

echo "window.ENV = {" > /usr/share/nginx/html/env-config.js
echo "  VITE_AUTH_URL: '$VITE_AUTH_URL'" >> /usr/share/nginx/html/env-config.js
echo "};" >> /usr/share/nginx/html/env-config.js

exec "$@" 