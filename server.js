import "dotenv/config";
import app from "./src/app.js";

const JWT_SECRET = process.env.JWT_SECRET;

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Servidor escutando!");
});
