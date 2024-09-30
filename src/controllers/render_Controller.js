import estoqueServ from "../services/userProduct.js"

const getHome = async (req,res) => {
    res.render('home');
}
const getSobrenos = async (req,res) =>{
    res.render('sobre')
}
const getLoginRegister = async (req,res) => {
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
const getUpdate = async (req,res) =>{
    const user = req.session.usuario;
    if(!user){
        res.redirect('entrar');
    }else{
        const estoques = await estoqueServ.searchUserEstoques(user._id) || null
        res.render("update",{user, estoques});
    }
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
        const id = req.query.id;
        const estoques = await estoqueServ.searchOneEstoque(id) || null
        const produtos = estoques.produtosEstoque;
        console.log(estoques,produtos);

        res.render('dashboard',{id , produtos });
    }
}

export default {
    getHome,
    getLoginRegister,
    getDash,
    getMenu,
    getSobrenos,
    getUpdate
};