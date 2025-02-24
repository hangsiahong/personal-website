# ---- BASE STAGE ----
FROM node:20-alpine AS base

WORKDIR /app

# Install PNPM
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package.json and lockfile first for better caching
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile --ignore-scripts

# ---- BUILD STAGE ----
FROM base AS builder

# Copy the full project
COPY . .

# Build Next.js for production
RUN pnpm build

# ---- RUN STAGE ----
FROM node:20-alpine AS runner

WORKDIR /app

# Copy only required files from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next/ .next/
COPY --from=builder /app/public/ public/
COPY --from=builder /app/node_modules/ node_modules/

# Set env to production
ENV NODE_ENV=production

# Expose the port Next.js runs on
EXPOSE 3000

# Start Next.js
CMD ["pnpm", "start"]
