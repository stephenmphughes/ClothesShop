#!/bin/bash

# Navigate to the app directory on the EC2 instance
cd ~/ClothesShop

# Pull the latest code from GitHub
git pull origin main

# Build the Docker image
docker build -t clothesshop-app .

# Stop and remove any existing container
docker rm -f clothesshop-container || true

# Run the container again
docker run -d -p 8080:80 --name clothesshop-container clothesshop-app
