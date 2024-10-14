import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
//import post from "./models/post.js";
import routes from "./Routes/index.js";

const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
  console.error("Erro de Conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexão feita com sucesso!");
});

const app = express();
routes(app);

//mid

export default app;
