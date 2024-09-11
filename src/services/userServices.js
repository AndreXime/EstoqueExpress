const User = require('../models/userModel');

const getUsers = async () => {
    return await User.find(); // Obtém todos os usuários
};

const createUser = async (userData) => {
    const user = new User(userData);
    return await user.save(); // Cria um novo usuário
};

const getUserById = async (id) => {
    return await User.findById(id); // Busca um usuário específico pelo ID
};

const updateUser = async (id, userData) => {
    return await User.findByIdAndUpdate(id, userData, { new: true }); // Atualiza o usuário com os novos dados
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser
};
