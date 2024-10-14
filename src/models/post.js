import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    conteudo: { type: String, required: true },
  },

  { versionKey: false }
);

const post = mongoose.model("post", postSchema);
export default post;
