# Usar a imagem oficial do Node.js como base
FROM node:14

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos de dependências primeiro (para melhorar cache)
COPY package*.json ./

# Instalar dependências, incluindo as de desenvolvimento
RUN npm install

# Copiar todos os arquivos do projeto
COPY . .

# Dar permissão de execução ao script wait-for-it.sh (caso tenha)
RUN chmod +x ./wait-for-it.sh

# Expor a porta que o servidor irá usar
EXPOSE 5000

# Comando para rodar a aplicação em modo de desenvolvimento usando nodemon do node_modules
CMD ["npm", "run", "dev"]
