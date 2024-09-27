import userServ from "../services/userCrud.js";

const getHome = async (req,res) => {
    res.render('home');
}
const getLoginRegister = async (req,res) => {
    if(req.session.usuario){
        res.redirect('/menu');
    }
    
    const resultado = {
        contaR: req.session.result?.contaR,
        contaL: req.session.result?.contaL,
        email: req.session.result?.email,
        password: req.session.result?.password,
    };
    res.render('login',{ resultado });
}
const getDash = async (req,res) =>{
    const user = req.session.usuario;
    if(!user){
        res.redirect('entrar');
    }else{
        const refreshUser = await userServ.searchUserById(user._id);
        req.session.usuario = refreshUser;
        const cards = refreshUser.produtos || null;
        res.render('dashboard',{cards});
    }
}
const getMenu = async (req,res) => {
    const user = req.session.usuario;
    if(!user){
        res.redirect('entrar');
    }else{
        const refreshUser = await userServ.searchUserById(user._id);
        req.session.usuario = refreshUser;
        const cards = refreshUser.estoque || null;
        res.render('menu',{ cards });
    }
}

export default {
    getHome,
    getLoginRegister,
    getDash,
    getMenu
};