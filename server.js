import app from './src/app.js';
import connectDB from './src/config/db.js';

const startServer = async () => {
  try {
    await connectDB();
    console.log("MongoDB conectado");

    app.listen(3000, () => {
      console.log("Servidor rodando na porta 3000");
    });
  } catch (error) {
    console.error("Erro ao iniciar servidor:", error);
  }
};

startServer();