# Use Node.js base image
FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve the React app with Nginx
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

