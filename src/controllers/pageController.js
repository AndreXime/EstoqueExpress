const uService = require('../services/userServices');

const getIndex = async (req,res) => {
    res.render('index');
}
const getLogin = async (req,res) => {
    const { result = null } = req.body || {};

    res.render('login', { result });
}
const postLogin = async (req,res) => {
    const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body), // Envia os dados recebidos do formulário
    });
    
    if (response.ok) {
        // Se o login for bem-sucedido, redirecione ou faça algo com os dados retornados
        res.redirect('/dashboard');
    } else {
        // Se houver um erro (ex: credenciais inválidas)
        res.redirect('/login');
    }
}

module.exports = {
    getIndex,
    getLogin,
    postLogin
};