# ==========================================
# Stage 1: Build the React / Vite application
# ==========================================
FROM node:22-alpine AS builder

WORKDIR /app

# Copy dependency manifests
COPY bloom/package*.json ./

# Install clean dependencies
RUN npm ci

# Copy application source code and assets
COPY bloom/ ./

# Build production static bundle
RUN npm run build

# ==========================================
# Stage 2: Serve with high-performance Nginx
# ==========================================
FROM nginx:alpine AS runner

# Default port (can be overridden dynamically by cloud environments like Railway or Cloud Run)
ENV PORT=80

# Copy Nginx template for dynamic $PORT injection via envsubst
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# Copy fallback Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled production bundle from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO- http://127.0.0.1:${PORT}/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
