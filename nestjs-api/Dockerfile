FROM node:22.8.0-slim AS builder

WORKDIR /home/node/app

COPY package*.json ./
COPY prisma ./prisma/
COPY .env ./

RUN npm ci

COPY . .

RUN npx prisma generate

RUN npm run build

FROM node:22.8.0-slim

RUN apt-get update && \
    apt-get install -y openssl procps && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /home/node/app

COPY package*.json ./
COPY prisma ./prisma/
COPY .env ./

RUN npm ci --only=production

COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/node_modules/.prisma ./node_modules/.prisma

USER node

ENV NODE_ENV=production

EXPOSE 3000

CMD ["sh", "-c", "node dist/main.js & node dist/cmd/kafka.cmd.js"]