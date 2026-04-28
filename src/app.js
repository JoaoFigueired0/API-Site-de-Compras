import express from 'express';
import cors from 'cors';
import loginRoute from './routes/login.route.js';
import cadastroRouter from './routes/cadastro.route.js';

const app = express();

app.use(cors({
  origin: 'https://site-compra-two.vercel.app/',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

app.use('/login', loginRoute);
app.use('/cadastro', cadastroRouter);

app.get('/', (req, res) => {
  res.send('API funcionando!');
});

export default app;