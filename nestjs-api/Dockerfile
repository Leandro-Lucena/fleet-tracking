# Base leve otimizada
FROM node:22.8.0-slim AS builder

# Atualiza pacotes e instala dependências necessárias para a construção
RUN apt update && \
    apt install -y openssl procps && \
    npm install -g @nestjs/cli@10.4.9 && \
    apt clean && rm -rf /var/lib/apt/lists/*

# Define um usuário não-root para segurança
USER node

# Define o diretório de trabalho
WORKDIR /home/node/app

# Copia arquivos de projeto para o container
COPY --chown=node:node package*.json ./

# Instala as dependências
RUN npm install

# Copia o código-fonte da aplicação
COPY --chown=node:node . .

# Compila o projeto NestJS
RUN npm run build

# Fase de produção: cria uma imagem final mais leve
FROM node:22.8.0-slim

# Instala apenas o necessário para rodar a aplicação
RUN apt update && \
    apt install -y openssl && \
    apt clean && rm -rf /var/lib/apt/lists/*

# Define um usuário não-root
USER node

# Define o diretório de trabalho
WORKDIR /home/node/app

# Copia os arquivos necessários da fase de build
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/package*.json ./

# Instala somente dependências de produção
RUN npm install --only=production

# Expõe a porta usada pela aplicação (ajustar conforme o projeto)
EXPOSE 3000

# Comando para rodar as duas instâncias
CMD ["bash", "-c", "npm run start:dev & npm run start:dev -- --entryFile=cmd/kafka.cmd & wait"]
