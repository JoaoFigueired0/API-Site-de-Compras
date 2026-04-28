import { cadastroService } from '../services/cadastro.service.js';

const cadastroController = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    try {
        await cadastroService(name, email, password);
        return res.json({ message: 'Cadastro realizado com sucesso' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Erro no servidor" });
    }
};

export { cadastroController };