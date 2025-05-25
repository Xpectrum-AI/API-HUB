# Build stage
FROM node:20-alpine as build

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY bun.lockb ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application with environment variables
ARG VITE_AUTH_URL
ARG VITE_XPECTRUM_API_KEY
ARG VITE_PROPELAUTH_API_KEY
ARG VITE_PROPELAUTH_PUBLIC_KEY
ARG VITE_PROPELAUTH_ISSUER

ENV VITE_AUTH_URL=$VITE_AUTH_URL
ENV VITE_XPECTRUM_API_KEY=$VITE_XPECTRUM_API_KEY
ENV VITE_PROPELAUTH_API_KEY=$VITE_PROPELAUTH_API_KEY
ENV VITE_PROPELAUTH_PUBLIC_KEY=$VITE_PROPELAUTH_PUBLIC_KEY
ENV VITE_PROPELAUTH_ISSUER=$VITE_PROPELAUTH_ISSUER

RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create env-config.js file at runtime
COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh

# Set proper permissions for nginx directory
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Use custom entrypoint
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"] 