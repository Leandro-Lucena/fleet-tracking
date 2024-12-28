# Etapa 1: Build
FROM node:22.8.0-slim AS builder

# Criar e definir o diretório de trabalho
WORKDIR /home/node/app

# Copiar arquivos de configuração e pacotes para instalação
COPY package.json package-lock.json ./

# Instalar as dependências
RUN npm install --frozen-lockfile

# Copiar o restante do código fonte
COPY . .

# Construir a aplicação Next.js
RUN npm run build

# Etapa 2: Produção
FROM node:22.8.0-slim

# Criar e definir o diretório de trabalho
WORKDIR /home/node/app

# Copiar a aplicação construída da etapa anterior
COPY --from=builder /home/node/app /home/node/app

# Ajustar permissões para o usuário `node`
RUN chown -R node:node /home/node/app

# Definir o usuário
USER node

# Expor a porta padrão que o Next.js utiliza
EXPOSE 3000

# Rodar o Next.js em modo de produção
CMD ["npm", "start"]
