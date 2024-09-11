const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter usuários' });
    }
};

const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao criar usuário' });
    }
};

module.exports = {
    getAllUsers,
    createUser
};
