# ============================
# Stage 1: Build
# ============================
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# ============================
# Stage 2: Production Runtime
# ============================
FROM node:20-alpine

WORKDIR /app

# Copy dependencies from builder
COPY --from=builder /app/node_modules ./node_modules

# Copy dist output
COPY --from=builder /app/dist ./dist

# Copy package.json (optional)
COPY package*.json ./

EXPOSE 8080

CMD ["node", "dist/main.js"]
