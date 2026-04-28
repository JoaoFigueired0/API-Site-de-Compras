import { getUserService } from "../services/user.service.js";

const userController = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);

    try {
        const user = await getUserService(email, password);

        if (!user) {
            return res.status(401).json({ message: 'Usuário não encontrado' });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: 'Senha incorreta' });
        }

        return res.json({ message: 'Login realizado com sucesso' });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

export default userController;