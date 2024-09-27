import produto from "../services/userProduct.js";
import auth from "../services/userAuth.js";


const login = async (req,res) => {
    try{
        const response = await auth.loginUser(req.body);
        delete req.session.result;
        req.session.usuario = response;
        return res.redirect('/menu');
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
        return res.redirect('/menu');
    }catch(err){
        req.session.result = err.errors
        return res.redirect('/entrar');
    }
}
const appendProduct = async (req,res) =>{
    const user = req.session.usuario;
    if(!user){
        res.status(400).send("Failed");
    }else{
        produto.appendProduto(user._id,req.body)
        res.status(200).send("Sucess");
    }
}

export default{
    login,
    register,
    appendProduct
}