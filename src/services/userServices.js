const User = require('../models/userModel');

const getUsers = async () => {
    return await User.find(); // Obtém todos os usuários
};

const getUserById = async (id) => {
    return await User.findById(id); // Busca um usuário específico pelo ID
};

const createUser = async (userData) => {
    const user = new User(userData);
    return await user.save(); // Cria um novo usuário
};

const deleteUser = async (userData) => {
    return await User.findOneAndDelete(userData); // Busca um usuário específico pelo ID
};

const updateUser = async (id, userData) => {
    return await User.findByIdAndUpdate(id, userData, { new: true }); // Atualiza o usuário com os novos dados
};

const isEspecial = async ({ name, username, email }) => {
    const regex = /[^\w\s@à-ÿÀ-Ÿ]/g;

    if (regex.test(name) || regex.test(username) || regex.test(email)) {
        throw new TypeError("CaractereEspecial");
    }

    return true;
};

module.exports = {
    getUsers,
    getUserById,
    deleteUser,
    createUser,
    updateUser,
    isEspecial
};
