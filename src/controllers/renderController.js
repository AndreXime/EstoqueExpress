import Estoque from "../services/userProduct.js";
import Data from "../services/userData.js";

const home = async (req,res) => {
    res.render('publico/home');
}
const sobrenos = async (req,res) =>{
    res.render('publico/sobre')
}
const publicEstoque = async (req, res) => {
    const estoques = await Estoque.getAllEstoques();
    res.render('publico/publicEstoques',{estoques})
}
const publicProdutos = async (req, res) => {
    const estoques = await Estoque.searchOneEstoque(req.query.id) || null;
    const produtos = estoques.produtosEstoque;
    res.render("publico/publicProdutos", { produtos });
}
const acess = async (req,res) => {
    if(req.session.usuario){
        res.redirect("/empresa/menu");
    }else{
        const resultado = {
            contaR: req.session.result?.contaR,
            contaL: req.session.result?.contaL,
            email: req.session.result?.email,
            password: req.session.result?.password,
        };
        res.render('publico/login',{ resultado });
    }
}
const update = async (req,res) =>{
    const user = req.session.usuario;
    if(!user){
        res.redirect("/empresa/entrar");
    }else{
        const estoques = await Estoque.searchUserEstoques(user._id) || null;
        const refreshUser = await Data.searchUserById(user._id);
        res.render("privado/update",{refreshUser, estoques});
    }
}
const menu = async (req,res) => {
    const user = req.session.usuario;
    if(!user){
        res.redirect("/empresa/entrar");
    }else{
        const estoques = await Estoque.searchUserEstoques(user._id) || null;
        res.render('privado/menu',{ estoques });
    }
}
const dash = async (req, res) => {
    const id = req.query.id
    const estoques = await Estoque.searchOneEstoque(id) || null;
    if (req.session.usuario?._id != estoques.userOwner) {
      res.redirect("/empresa/entrar");
    } else {
      const produtos = estoques.produtosEstoque;

      res.render("privado/dashboard", { id, produtos });
    }
}
export default {
    home,
    acess,
    dash,
    menu,
    sobrenos,
    update,
    publicEstoque,
    publicProdutos
};