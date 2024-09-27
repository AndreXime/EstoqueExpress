import userServ from "../services/userCrud.js";
import estoqueServ from "../services/userProduct.js"

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
const getMenu = async (req,res) => {
    const user = req.session.usuario;
    if(!user){
        res.redirect('entrar');
    }else{
        const estoques = await estoqueServ.searchUserEstoques(user._id) || null

        res.render('menu',{ estoques });
    }
}
const getDash = async (req,res) =>{
    const user = req.session.usuario;
    if(!user){
        res.redirect('entrar');
    }else{
        const estoques = await estoqueServ.searchOneEstoque(user._id) || null
        const produtos = estoques.produtos;

        res.render('dashboard',{ produtos });
    }
}

export default {
    getHome,
    getLoginRegister,
    getDash,
    getMenu
};