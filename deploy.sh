#!/bin/bash

# Export cert and key from environment variables
echo "$PRIVATE_KEY" > ~/privatekey.pem
echo "$SERVER" > ~/server.crt

# Move to SSL directory (create if needed)
sudo mkdir -p /etc/ssl/clothesshop
sudo mv ~/privatekey.pem /etc/ssl/clothesshop/clothesshop.key
sudo mv ~/server.crt /etc/ssl/clothesshop/clothesshop.crt

# Set appropriate permissions
sudo chmod 600 /etc/ssl/clothesshop/clothesshop.key
sudo chmod 644 /etc/ssl/clothesshop/clothesshop.crt

# Pull latest app changes and redeploy
cd ~/ClothesShop
git pull origin main

docker build -t clothesshop-app .
docker rm -f clothesshop-container || true
docker run -d -p 8080:80 --name clothesshop-container clothesshop-app

# Restart Nginx to ensure it reads new certs
sudo systemctl restart nginx
