# Stage 1: Build React app
FROM node:20-alpine as builder

# Set working directory
WORKDIR /app

# Install dependencies (optimized for caching)
COPY package.json package-lock.json ./
RUN npm ci

# Copy app files
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy build files to Nginx's public directory
COPY --from=builder /app/build /usr/share/nginx/html

# Optional: Replace default Nginx config (if needed)
# COPY nginx.conf /etc/nginx/nginx.conf

# Optional: Add health check
# HEALTHCHECK CMD curl --fail http://localhost:80 || exit 1

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
