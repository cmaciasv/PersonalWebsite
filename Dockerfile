# syntax=docker/dockerfile:1.4

ARG NODE_VERSION=20.19.0

# --- Base Stage ---
FROM node:${NODE_VERSION}-alpine AS base
LABEL authors="Your Name <your.email@example.com>"
RUN apk add curl

# --- Dependencies Stage ---
FROM base AS deps
WORKDIR /app

# Copy monorepo root package files
COPY package.json package-lock.json* ./

# Copy specific application's package.json
COPY apps/web/package.json ./apps/web/package.json

# Install dependencies for the entire monorepo
RUN npm ci

# --- Builder Stage ---
FROM base AS builder
WORKDIR /app

# Copy installed dependencies from the deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the monorepo source code
COPY . .

# Build the specific Next.js application
RUN npm run build --workspace=apps/web

# --- Runner Stage ---
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

# Set up a non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app .

WORKDIR /app/apps/web

# Expose the port Next.js runs on
EXPOSE 3000

# Command to run the Next.js application
CMD ["npm", "start"]