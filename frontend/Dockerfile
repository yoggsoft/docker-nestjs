# # WIP
# # Install dependencies only when needed
# FROM node:alpine AS deps
# RUN apk add --no-cache libc6-compat
# WORKDIR /app
# COPY /frontend/package*.json ./
# RUN npm install

# # Rebuild the source code only when needed
# FROM node:alpine AS builder
# WORKDIR /app
# COPY /frontend ./
# COPY --from=deps /node_modules ./node_modules

# # Production image, copy all the files and run next
# FROM node:alpine AS runner
# WORKDIR /app

# ENV NODE_ENV production

# RUN addgroup -g 1001 -S nodejs
# RUN adduser -S nextjs -u 1001

# # You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /next.config.js ./
# COPY --from=builder /public ./public
# COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
# COPY --from=builder /node_modules ./node_modules
# COPY --from=builder /package.json ./package.json

# USER nextjs

# EXPOSE 3000

# CMD ["npm", "run", "dev"]
