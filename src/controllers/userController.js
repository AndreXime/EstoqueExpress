const userService = require('../services/userServices');

const renderPage = async (req, res) => {
    const users = await userService.getUsers();
    let user = {};

    if (req.query.id) {  // Se um ID for passado na query string (?id=...)
        user = await userService.getUserById(req.query.id);
    }

    res.render('index', { users, user });
};


const saveUser = async (req, res) => {
    const { id, name, email } = req.body;

    if (!id) {
        // Atualiza o usuário se o ID existir
        await userService.updateUser(id, { name, email });
    } else {
        // Cria um novo usuário
        await userService.createUser({ name, email });
    }

    res.redirect('/');
};


module.exports = {
    renderPage,
    saveUser
};
