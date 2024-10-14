import post from "../models/post.js";

class postController {
  //Listar todos os posts
  static async listarPost(req, res) {
    try {
      const listapost = await post.find({}).select("titulo autor");
      res.status(200).json(listapost);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição` });
    }
  }

  //Encontrar post por ID
  static async listaPostPorId(req, res) {
    try {
      const _id = req.params.id;
      const postById = await post.findById({ _id });
      res.status(200).json(postById);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição do post.` });
    }
  }

  // Cadastrar Post
  static async cadastrarPost(req, res) {
    try {
      const novoPost = await post.create(req.body);
      res.status(201).json({ message: "criado com sucesso", post: novoPost });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao cadastrar post` });
    }
  }

  //Atualizar Post
  static async atualizarPost(req, res) {
    try {
      const _id = req.params.id;
      await post.findByIdAndUpdate(_id, req.body);
      res.status(200).json({ message: "post atualizado!" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na atualização.` });
    }
  }

  //Excluir Post
  static async excluirPost(req, res) {
    try {
      const _id = req.params.id;
      await post.findByIdAndDelete(_id);
      res.status(200).json({ message: "post excluido com sucesso!" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão.` });
    }
  }

  static async listarPostPorPalavra(req, res) {
    const palavra = req.query.palavra;

    // Verifique se a palavra foi fornecida
    if (!palavra) {
      return res.status(400).json({ message: "Palavra não fornecida." });
    }

    try {
      //buscando no título ou conteudo
      const postPorPalavra = await post.find({
        $or: [
          { titulo: { $regex: palavra, $options: "i" } },
          { conteudo: { $regex: palavra, $options: "i" } },
        ],
      });

      res.status(200).json(postPorPalavra);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} falha na busca.` });
    }
  }
}

export default postController;
