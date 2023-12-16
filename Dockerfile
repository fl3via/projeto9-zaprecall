# Use uma imagem base Node.js
FROM node:14

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src

# Copie os arquivos do projeto para o diretório de trabalho
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copie os arquivos do projeto para o diretório de trabalho
COPY . .

# Construa a aplicação React para produção
RUN npm run build

# Defina o comando para iniciar a aplicação quando o contêiner for executado
CMD ["npm", "start"]
