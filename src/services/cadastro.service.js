import User from "../models/user.model.js";

const cadastroService = async (name, email, password) => {
    try {
        const user = new User({ name, email, password });
        await user.save();
    } catch (error) {
        throw new Error('Erro ao cadastrar usuário');
    }
}

export { cadastroService };