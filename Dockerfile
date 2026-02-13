# ============================
# Stage 1: Build Nest App
# ============================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build NestJS
RUN npm run build


# ============================
# Stage 2: Production Image
# ============================
FROM node:20-alpine

WORKDIR /app

# Copy only required files
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy built output from builder stage
COPY --from=builder /app/dist ./dist

# Cloud Run port
EXPOSE 8080

# Start app
CMD ["node", "dist/main"]
