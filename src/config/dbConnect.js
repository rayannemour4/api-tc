import mongoose, { mongo } from "mongoose";

async function conectaNaDataBase() {
  mongoose.connect(
    "mongodb+srv://postagens:postagens123@cluster0.pi1qw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );

  return mongoose.connection;
}

export default conectaNaDataBase;
