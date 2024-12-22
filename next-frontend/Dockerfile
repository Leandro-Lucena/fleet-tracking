# Etapa 1: Construção
FROM node:22.8.0-slim AS builder

# Definir diretório de trabalho dentro do container
WORKDIR /home/node/app

# Copiar arquivos necessários para instalar as dependências
COPY package.json package-lock.json ./ 

# Instalar dependências de produção e desenvolvimento
RUN npm install --legacy-peer-deps

# Copiar o restante do código
COPY . .

# Construir a aplicação para produção
RUN npm run build

# Etapa 2: Imagem para produção
FROM node:22.8.0-slim

# Definir diretório de trabalho
WORKDIR /home/node/app

# Copiar apenas os arquivos necessários para rodar em produção
COPY --from=builder /home/node/app/package.json /home/node/app/package-lock.json ./
COPY --from=builder /home/node/app/.next ./.next
COPY --from=builder /home/node/app/public ./public
COPY --from=builder /home/node/app/node_modules ./node_modules

# Definir variável de ambiente para produção
ENV NODE_ENV=production

# Expor a porta padrão do Next.js
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start"]
