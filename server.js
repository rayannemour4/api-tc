import "dotenv/config";
import startServer from "./src/app.js";
import swaggerUi from "swagger-ui-express"; // Importa o swagger-ui-express
import swaggerJsDoc from "swagger-jsdoc"; // Importa o swagger-jsdoc

const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET;

// Configuração do Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API REST - Postagens",
      version: "1.0.0",
      description:
        "API REST para um sistema de postagens por docentes e leitura de alunos.",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`, // URL do servidor
      },
    ],
  },
  apis: ["./src/routes/*.js"], // caminho para onde estão os arquivos de rotas
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

(async () => {
  try {
    const app = await startServer(); // Inicia o servidor após conectar ao banco de dados

    // Configura o Swagger
    app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs)); // Define o caminho para acessar a documentacao

    app.listen(PORT, () => {
      console.log(`Servidor escutando na porta ${PORT}!`);
    });
  } catch (error) {
    console.error("Erro ao iniciar o servidor", error);
    process.exit(1); // Encerra o processo em caso de erro
  }
})();
