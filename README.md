<h1>Documentação da Arquitetura do Sistema e Uso da Aplicação</h1>

<p align="center">
<a href="#Sobre"> Sobre</a>
<a href="#arquitetura"> | Arquitetura</a>
<a href="#componentes"> | Componentes</a>
<a href="#requisitos"> | Pré-requisitos</a>
<a href="#aplicacao"> | Aplicação</a>
<a href="#dockerfile"> | Dockerfile</a>
<a href="#conclusao"> | Conclusão</a>



# Sobre

<p>Esta documentação descreve a arquitetura do sistema e como utilizar a aplicação API REST para gerenciamento de postagens. A aplicação permite que docentes cadastrem, leiam e gerenciem posts, enquanto alunos podem ler as postagens e realizar buscas.</p>

# Arquitetura

<p>A aplicação é construída com uma arquitetura de microserviços, utilizando Node.js como linguagem de programação e MongoDB como sistema de gerenciamento de banco de dados. A API é dividida em componentes lógicos que permitem uma fácil escalabilidade e manutenção.</p>

# Componentes

<p><strong>server.js  |  Servidor Web (Node.js + Express): </strong>O servidor é responsável por gerenciar as requisições HTTP e fornecer as respostas adequadas. Utiliza o framework Express para facilitar a criação das rotas e gerenciar middleware.</p>

<p> <strong>config - dbConnect.js | Banco de Dados (MongoDB):</strong>O sistema de gerenciamento de banco de dados NoSQL armazena as postagens. As interações com o banco de dados são realizadas por meio da biblioteca Mongoose, que oferece uma camada de abstração e facilita a manipulação de dados.</p>

<p><strong>controllers - postController.js | Controladores:</strong>Os controladores contêm a lógica de negócio da aplicação. Eles recebem as requisições, processam os dados e interagem com o modelo para acessar ou manipular as informações no banco de dados.</p>

<p><strong>models - post.js | Modelos: </strong>Os modelos definem a estrutura dos dados que serão armazenados no banco de dados. No caso da aplicação, um modelo de Post é utilizado para representar as postagens.</p>

<p><strong>Documentação da API (Swagger):</strong> A documentação da API é gerada automaticamente e fornece informações sobre os endpoints disponíveis, os parâmetros e as respostas esperadas.</p>

# Requisitos

Para utilizar a aplicação, você deve ter o Node.js e o MongoDB instalados em seu ambiente. Além disso, é recomendável usar o Docker para facilitar a configuração do ambiente.

# Aplicação

<strong><p></p></strong>

<p><strong>Executando a Aplicação</strong>  
  
  Para iniciar o servidor, use o seguinte comando:  
  
  npm start</p>
<p><strong>Executando a Aplicação - Nodemon</strong>
  
  Para o modo de desenvolvimento (com Nodemon): 
  
  npm run dev
</p>

<strong><p>Interagindo com a API</p></strong>

A API pode ser acessada através de endpoints HTTP. A documentação completa dos endpoints está disponível em:

http://localhost:3000/api/docs

# Aplicação 
<strong>Uso da aplicação</strong>

Utilizaremos o POSTMAN para exemplificar o uso da nossa API

<strong>GET - Listando todos os post's</strong>

![image](https://github.com/user-attachments/assets/eef0cf18-6c5c-4c0d-a3ce-83b5a22ff1fe)

<strong>GET - Leitura de um post através de um ID específico</strong>

![image](https://github.com/user-attachments/assets/37919101-94fa-4d92-a5e3-ab6f3ee0bf2d)

<strong>POST - Criação de uma postagem</strong>

Inserir no banco uma postagem contendo título, autor e conteudo.

![image](https://github.com/user-attachments/assets/dbfcd6cd-1c70-4d5f-ba59-fbe74667d235)

Posteriormente é retornado uma mensagem de sucesso e o post que criamos. 

![image](https://github.com/user-attachments/assets/dc006ae2-342f-4377-bb78-254e27579f24)


<strong>PUT - Edição de postagem existente através da ID.</strong>

Nesse caso, vamos trocar o nome do autor da postagem criada anteriormente.

![image](https://github.com/user-attachments/assets/7167a3ff-fc5c-428d-b884-77760e9ef2a3)

É retornado a mensagem de sucesso e podemos verificar a atualização listando os post's novamente com o GET. 

![image](https://github.com/user-attachments/assets/c0278ea4-6731-4b52-93c5-0c226a24c799)
![image](https://github.com/user-attachments/assets/d01237d6-f1e2-4bf4-9323-127b03745329)


<strong>DELETE - Deletando uma postagem através do ID</strong>

![image](https://github.com/user-attachments/assets/dcb0068f-efbe-4455-8bd7-063ef5b7feb1)


<strong>GET - SEARCH </strong>

Busca de post's por palavras-chave. O termo de busca retorna a palavra buscada no título ou conteúdo. 

http://localhost:3000/post/busca?palavra=alunos

![image](https://github.com/user-attachments/assets/8984d8bd-a2df-4a05-820f-7d327d8fae1e)

# Dockerfile

Consulta dos comandos do Dockerfile

<strong>FROM node</strong>: Esta linha especifica que a imagem base do Docker será a versão mais recente do Node.js. Isso garante que a aplicação terá todas as dependências do Node.js necessárias para funcionar.

<strong>WORKDIR /usr/src/app</strong>: Define o diretório de trabalho dentro do contêiner como /usr/src/app. Todos os comandos subsequentes (como copiar arquivos e instalar pacotes) serão executados dentro desse diretório.

<strong>*COPY package.json ./**:</strong> Copia os arquivos package.json e package-lock.json para o diretório de trabalho dentro do contêiner. Esses arquivos são usados pelo npm para instalar as dependências do projeto.

<strong>RUN npm install:</strong> Este comando instala todas as dependências da aplicação, conforme especificado nos arquivos package.json e package-lock.json. O comando npm install é executado dentro do contêiner.

<strong>COPY . .: </strong>Copia todo o código-fonte da aplicação (o conteúdo da pasta atual) para o diretório de trabalho dentro do contêiner. Isso inclui os arquivos JavaScript, configurações e outros recursos da aplicação.

<strong>ARG JWT_SECRET e ENV JWT_SECRET=$JWT_SECRET:</strong> Essas linhas definem uma variável de ambiente para o JWT_SECRET. O ARG permite que você passe essa variável como argumento durante o build da imagem. O ENV é usado para definir a variável de ambiente no contêiner em execução, tornando-a acessível ao código da aplicação.

<strong>EXPOSE 3000: </strong>Expõe a porta 3000 do contêiner. Isso indica que a aplicação Node.js estará escutando nessa porta. Quando o contêiner for executado, a porta 3000 estará disponível para comunicação.

<strong>CMD ["node", "server.js"]:</strong> Define o comando que será executado quando o contêiner iniciar. Neste caso, ele executa o arquivo server.js, que inicializa o servidor da aplicação.

# Conclusão
<p>Esta documentação oferece uma visão geral da arquitetura do sistema e das instruções para o uso da aplicação. Para mais informações ou contribuições, sinta-se à vontade para abrir uma issue ou enviar um pull request no repositório.</p>














