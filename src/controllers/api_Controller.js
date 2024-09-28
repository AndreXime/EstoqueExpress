import estoque from "../services/userProduct.js";
import auth from "../services/userAuth.js";


const login = async (req,res) => {
    delete req.session.result;
    try{
        const response = await auth.loginUser(req.body);
        req.session.usuario = response;
        return res.redirect('/menu');
    }catch(err){
        req.session.result = err.errors;
        return res.redirect('/entrar');
    }
}
const register = async (req,res) => {
    delete req.session.result;
    try{
        const response = await auth.registerUser(req.body);
        req.session.usuario = response;
        return res.redirect('/menu');
    }catch(err){
        req.session.result = err.errors
        return res.redirect('/entrar');
    }
}
const logout = async(req,res) => {
    req.session.destroy();
    res.redirect('/');
}
const update = async(req,res) => {
    const user = req.session.usuario;
    if(!user){
        res.status(400).send("Failed");
    }else{
        auth.updateUser(req.query.id,req.body);
        res.status(200).send("Sucess");
    }
}

const addProduto = async (req,res) =>{
    const user = req.session.usuario;
    if(!user){
        res.status(400).send("Failed");
    }else{
        try{
            estoque.createProduto(req.query.id,req.body);
            res.status(200).send("Sucess");
        }catch(err){
            res.status(400).send("Failed");
        }
    }
}
const addEstoque = async (req,res) =>{
    const user = req.session.usuario;
    if(!user){
        res.status(400).send("Failed");
    }else{
        try {
            estoquenovo = estoque.createEstoque(user._id,req.body.titulo);
            res.status(200).send("Success");
        }catch(err){
            res.status(400).send("Failed");
        }
    }
}

const removeEstoque = async (req,res) =>{
    const user = req.session.usuario;
    if(!user){
        res.status(400).send("Failed");
    }else{
        try{
            const id = req.query.id;
            estoque.removeEstoque(id);
            res.status(200).send("Sucess");
        }catch(err){
            res.status(400).send("Failed");
        }
    }
}
const removeProduto = async (req,res) =>{
    const user = req.session.usuario;
    if(!user){
        res.status(400).send("Failed");
    }else{
        try{
            const id = req.query.id;
            const idproduto = req.query.idproduto
            estoque.removeProduto(id,idproduto);
            res.status(200).send("Sucess");
        }catch(err){
            res.status(400).send("Failed");
        }
    }
}

export default{
    login,
    register,
    logout,
    update,
    addProduto,
    addEstoque,
    removeEstoque,
    removeProduto
}