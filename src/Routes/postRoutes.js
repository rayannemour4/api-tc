import express from "express";
import postController from "../controllers/postController.js";

const routes = express.Router();

routes.get("/post", postController.listarPost);
routes.get("/post/busca", postController.listarPostPorPalavra);
routes.get("/post/:id", postController.listaPostPorId);
routes.post("/post", postController.cadastrarPost);
routes.put("/post/:id", postController.atualizarPost);
routes.delete("/post/:id", postController.excluirPost);

export default routes;
