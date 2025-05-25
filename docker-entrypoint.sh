#!/bin/sh

# Create env-config.js file with runtime environment variables
cat > /usr/share/nginx/html/env-config.js << EOF
window.ENV = {
  VITE_AUTH_URL: "${VITE_AUTH_URL}",
  VITE_XPECTRUM_API_KEY: "${VITE_XPECTRUM_API_KEY}",
  VITE_PROPELAUTH_API_KEY: "${VITE_PROPELAUTH_API_KEY}",
  VITE_PROPELAUTH_PUBLIC_KEY: "${VITE_PROPELAUTH_PUBLIC_KEY}",
  VITE_PROPELAUTH_ISSUER: "${VITE_PROPELAUTH_ISSUER}"
};
EOF

# Set proper permissions
chmod 644 /usr/share/nginx/html/env-config.js
chown nginx:nginx /usr/share/nginx/html/env-config.js

# For debugging
echo "Created env-config.js with environment variables"
cat /usr/share/nginx/html/env-config.js

# Execute the main command
exec "$@"