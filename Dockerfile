# Usar a imagem oficial do Node.js
FROM node:latest

# Definir o diretório de trabalho
WORKDIR /usr/src/app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar todos os arquivos do projeto
COPY . .

ARG JWT_SECRET
ENV JWT_SECRET =$JWT_SECRET

# Expor a porta que a aplicação utiliza
EXPOSE 3000

# Comando para iniciar a aplicação
<<<<<<< HEAD
CMD ["node", "/server.js"]
=======
CMD ["node", "server.js"]
>>>>>>> 8aa4abed8dbdaecf21c324938e895b4f65938682
