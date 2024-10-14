import express from "express";
import postController from "../controllers/postController.js";

const routes = express.Router();

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: API para gerenciar posts
 */

/**
 * @swagger
 * /post:
 *   get:
 *     tags: [Posts]
 *     summary: Lista todos os posts
 *     responses:
 *       200:
 *         description: Lista de posts retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "60d21b4667d0d8992e610c85"
 *                   titulo:
 *                     type: string
 *                     example: "Meu primeiro post"
 *                   autor:
 *                     type: string
 *                     example: "Autor Exemplo"
 *       500:
 *         description: Erro ao buscar posts.
 */

/**
 * @swagger
 * /post/busca:
 *   get:
 *     tags: [Posts]
 *     summary: Busca posts por palavra-chave
 *     parameters:
 *       - in: query
 *         name: palavra
 *         required: true
 *         description: Palavra a ser buscada nos posts
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Posts encontrados com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "60d21b4667d0d8992e610c85"
 *                   titulo:
 *                     type: string
 *                     example: "Meu segundo post"
 *                   conteudo:
 *                     type: string
 *                     example: "Conteúdo do post"
 *       400:
 *         description: Palavra não fornecida.
 *       500:
 *         description: Erro ao buscar posts.
 */

/**
 * @swagger
 * /post/{id}:
 *   get:
 *     tags: [Posts]
 *     summary: Encontra post por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do post a ser encontrado
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Post encontrado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "60d21b4667d0d8992e610c85"
 *                 titulo:
 *                   type: string
 *                   example: "Meu primeiro post"
 *                 autor:
 *                   type: string
 *                   example: "Autor Exemplo"
 *       404:
 *         description: Post não encontrado.
 *       500:
 *         description: Erro ao buscar post.
 */

/**
 * @swagger
 * /post:
 *   post:
 *     tags: [Posts]
 *     summary: Cadastrar novo post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 example: "Meu novo post"
 *               autor:
 *                 type: string
 *                 example: "Autor Exemplo"
 *               conteudo:
 *                 type: string
 *                 example: "Conteúdo do novo post"
 *     responses:
 *       201:
 *         description: Post criado com sucesso.
 *       400:
 *         description: Dados de entrada inválidos.
 *       500:
 *         description: Erro ao cadastrar post.
 */

/**
 * @swagger
 * /post/{id}:
 *   put:
 *     tags: [Posts]
 *     summary: Atualizar post por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do post a ser atualizado
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 example: "Post atualizado"
 *               autor:
 *                 type: string
 *                 example: "Autor Atualizado"
 *               conteudo:
 *                 type: string
 *                 example: "Conteúdo do post atualizado"
 *     responses:
 *       200:
 *         description: Post atualizado com sucesso.
 *       404:
 *         description: Post não encontrado.
 *       500:
 *         description: Erro ao atualizar post.
 */

/**
 * @swagger
 * /post/{id}:
 *   delete:
 *     tags: [Posts]
 *     summary: Excluir post por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do post a ser excluído
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Post excluído com sucesso.
 *       404:
 *         description: Post não encontrado.
 *       500:
 *         description: Erro ao excluir post.
 */

routes.get("/post", postController.listarPost); // Listar todos os posts
routes.get("/post/busca", postController.listarPostPorPalavra); // Buscar posts por palavra
routes.get("/post/:id", postController.listaPostPorId); // Encontrar post por ID
routes.post("/post", postController.cadastrarPost); // Cadastrar novo post
routes.put("/post/:id", postController.atualizarPost); // Atualizar post por ID
routes.delete("/post/:id", postController.excluirPost); // Excluir post por ID

export default routes;
