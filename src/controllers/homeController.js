const auth = require("../services/userAuth")

const getHome = async (req,res) => {
    res.render('home');
}
const getLoginRegister = async (req,res) => {
    const { result = null } = req.body || {};

    res.render('login', { result });
}
const login = async (req,res) => {
    try{
        const response = await auth.loginUser(req.body); // Verifica e retorna se valido

        return res.redirect('/dashboard');
    }catch(err){

        return res.redirect('/entrar');
    }
}
const register = async (req,res) => {
    try{
        const response = await auth.registerUser(req.body)

        return res.redirect('/dashboard');
    }catch(err){

        return res.redirect('/entrar');
    }
}

module.exports = {
    getHome,
    getLoginRegister,
    login,
    register
};