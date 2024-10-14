import "dotenv/config";
import startServer from "./src/app.js";

const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET;

(async () => {
  try {
    const app = await startServer(); // Inicia o servidor após conectar ao banco de dados

    app.listen(PORT, () => {
      console.log(`Servidor escutando na porta ${PORT}!`);
    });
  } catch (error) {
    console.error("Erro ao iniciar o servidor", error);
    process.exit(1); // Encerra o processo em caso de erro
  }
})();
