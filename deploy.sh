echo "Deploying changes..."

# Build the image with the new changes
docker build . -t vzlomed/vzlomed

# Shut down the existing containers
docker-compose down

# Start the new containers
docker-compose up -d
echo "Deployed!"