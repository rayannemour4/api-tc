import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
//import post from "./models/post.js";
import routes from "./Routes/index.js";

// Cria uma função assíncrona para lidar com a conexão ao banco de dados
async function startServer() {
  try {
    const conexao = await conectaNaDataBase();

    conexao.on("error", (erro) => {
      console.error("Erro de Conexão", erro);
    });

    conexao.once("open", () => {
      console.log("Conexão feita com sucesso!");
    });

    const app = express();

    // Middleware para permitir JSON no body das requisições
    app.use(express.json());

    // Rotas
    routes(app);

    // Exporta o app para usar em outros lugares (por exemplo, server.js)
    return app;
  } catch (erro) {
    console.error("Erro ao iniciar o servidor", erro);
    process.exit(1); // Finaliza o processo em caso de falha na conexão
  }
}

export default startServer;
