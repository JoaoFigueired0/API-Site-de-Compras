import User from "../models/user.model.js";

export const getUserService = async (email, password) => {
    try {
        const user = await User.findOne({ email, password });
        return user;
    } catch (error) {
        throw new Error('Erro ao buscar usuário');
    }
};