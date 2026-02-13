# Use lightweight Node image
FROM node:20-alpine

# App directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build NestJS project
RUN npm run build

# Cloud Run uses port 8080
EXPOSE 8080

# Start NestJS app
CMD ["node", "dist/main"]
