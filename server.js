import app from './src/app.js';
import connectDB from './src/config/db.js';

const PORT = process.env.PORT || 3000;
app.listen(PORT);

const startServer = async () => {
  try {
    await connectDB();
    console.log("MongoDB conectado");

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao iniciar servidor:", error);
  }
};

startServer();