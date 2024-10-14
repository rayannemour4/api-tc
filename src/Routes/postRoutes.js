import express from "express";
import postController from "../controllers/postController.js";

const routes = express.Router();

routes.get("/post", postController.listarPost); // Listar todos os posts
routes.get("/post/busca", postController.listarPostPorPalavra); // Buscar posts por palavra
routes.get("/post/:id", postController.listaPostPorId); // Encontrar post por ID
routes.post("/post", postController.cadastrarPost); // Cadastrar novo post
routes.put("/post/:id", postController.atualizarPost); // Atualizar post por ID
routes.delete("/post/:id", postController.excluirPost); // Excluir post por ID

export default routes;
