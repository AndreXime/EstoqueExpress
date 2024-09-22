const auth = require("../services/userAuth")

const getHome = async (req,res) => {
    res.render('home');
}
const getLoginRegister = async (req,res) => {
    if(req.session.usuario){
        res.redirect('/dashboard');
    }
    
    const resultado = {
        contaR: req.session.result?.contaR,
        contaL: req.session.result?.contaL,
        email: req.session.result?.email,
        password: req.session.result?.password,
    };
    res.render('login',{ resultado });
}
const login = async (req,res) => {
    try{
        const response = await auth.loginUser(req.body);
        delete req.session.result;
        req.session.usuario = response;
        return res.redirect('/dashboard');
    }catch(err){
        req.session.result = err.errors;
        return res.redirect('/entrar');
    }
}
const register = async (req,res) => {
    try{
        const response = await auth.registerUser(req.body);
        delete req.session.result;
        req.session.usuario = response;
        return res.redirect('/dashboard');
    }catch(err){
        req.session.result = err.errors
        return res.redirect('/entrar');
    }
}

module.exports = {
    getHome,
    getLoginRegister,
    login,
    register
};