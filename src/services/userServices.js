const User = require('../models/userModel');

const getUsers = async () => {
    return await User.find(); // Obtém todos os usuários
};

const createUser = async (userData) => {
    const user = new User(userData);
    return await user.save(); // Cria um novo usuário
};

module.exports = {
    getUsers,
    createUser
};
