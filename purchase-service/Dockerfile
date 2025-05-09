# Use official Node.js LTS base image
FROM node:20-slim

# Create and set working directory
WORKDIR /usr/src/app

# Copy dependency files
COPY package*.json ./

# Install dependencies only (no dev packages)
RUN npm install --omit=dev

# Copy source files
COPY . .

# Expose service port
EXPOSE 4000

# Run via package.json script
CMD ["npm", "start"]

