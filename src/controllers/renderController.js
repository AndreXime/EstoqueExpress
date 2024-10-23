import estoqueServ from "../services/userProduct.js";
import userCrud from "../services/userData.js";

const home = async (req,res) => {
    res.render('home');
}
const sobrenos = async (req,res) =>{
    res.render('sobre')
}
const acess = async (req,res) => {
    if(req.session.usuario){
        res.redirect('/menu');
    }else{
        const resultado = {
            contaR: req.session.result?.contaR,
            contaL: req.session.result?.contaL,
            email: req.session.result?.email,
            password: req.session.result?.password,
        };
        res.render('login',{ resultado });
    }
}
const update = async (req,res) =>{
    const user = req.session.usuario;
    if(!user){
        res.redirect('entrar');
    }else{
        const estoques = await estoqueServ.searchUserEstoques(user._id) || null;
        const refreshUser = await userCrud.searchUserById(user._id);
        res.render("update",{refreshUser, estoques});
    }
}
const menu = async (req,res) => {
    const user = req.session.usuario;
    if(!user){
        res.redirect('entrar');
    }else{
        const estoques = await estoqueServ.searchUserEstoques(user._id) || null

        res.render('menu',{ estoques });
    }
}
const dash = async (req,res) =>{
    const user = req.session.usuario;
    if(!user){
        res.redirect('entrar');
    }else{
        const id = req.query.id;
        const estoques = await estoqueServ.searchOneEstoque(id) || null
        const produtos = estoques.produtosEstoque;
        console.log(estoques,produtos);

        res.render('dashboard',{id , produtos });
    }
}

export default {
    home,
    acess,
    dash,
    menu,
    sobrenos,
    update
};