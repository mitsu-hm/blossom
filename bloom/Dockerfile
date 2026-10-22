# ==========================================
# Stage 1: Build the React / Vite application
# ==========================================
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ==========================================
# Stage 2: Serve with Nginx
# ==========================================
FROM nginx:alpine AS runner

ENV PORT=80

COPY --from=builder /app/dist /usr/share/nginx/html

RUN printf 'server {\n\
    listen ${PORT};\n\
    server_name _;\n\
    root /usr/share/nginx/html;\n\
    index index.html;\n\
    gzip on;\n\
    gzip_vary on;\n\
    gzip_min_length 1024;\n\
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/json image/svg+xml;\n\
    location / {\n\
        try_files $uri $uri/ /index.html;\n\
    }\n\
    location ~* \\.(?:ico|css|js|gif|jpe?g|png|webp|avif|svg|woff2?|eot|ttf|otf)$ {\n\
        expires 1y;\n\
        access_log off;\n\
        add_header Cache-Control "public, max-age=31536000, immutable";\n\
        try_files $uri =404;\n\
    }\n\
}\n' > /etc/nginx/templates/default.conf.template

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO- http://127.0.0.1:${PORT}/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
