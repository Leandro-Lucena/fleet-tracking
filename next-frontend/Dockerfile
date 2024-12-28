FROM node:22.8.0-slim AS builder

WORKDIR /home/node/app

COPY package.json package-lock.json ./

RUN npm install --frozen-lockfile

COPY . .

RUN npm run build

FROM node:22.8.0-slim

WORKDIR /home/node/app

COPY --from=builder /home/node/app /home/node/app

RUN chown -R node:node /home/node/app

USER node

EXPOSE 3000

CMD ["npm", "start"]
