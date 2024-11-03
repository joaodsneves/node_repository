# Usar a imagem oficial do Node.js como base
FROM node:14

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos de dependências primeiro
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todos os arquivos do projeto
COPY . .

# Expor a porta que o servidor irá usar
EXPOSE 3000

# Comando para rodar a aplicação em modo de desenvolvimento
CMD ["npm", "start"]
