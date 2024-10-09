import estoque from "../services/userProduct.js";
import auth from "../services/userAuth.js";
import userCrud from "../services/userCrud.js";


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
        res.status(403).send("Forbidden");
    }else{
        try {
            await userCrud.updateUser(user._id,req.body);
            res.redirect('/atualizarConta')
        }catch(error){
            res.status(400).send("Failed");
        }
    }
}

const addProduto = async (req,res) =>{
    const user = req.session.usuario;
    if(!user){
        res.status(403).send("Forbidden");
    }else{
        try{
            await estoque.createProduto(req.query.id,req.body);
            res.status(200).send("Sucess");
        }catch(err){
            res.status(400).send("Failed");
        }
    }
}
const addEstoque = async (req,res) =>{
    const user = req.session.usuario;
    if(!user){
        res.status(403).send("Forbidden");
    }else{
        try {
            estoquenovo = await estoque.createEstoque(user._id,req.body.titulo);
            res.status(200).send("Success");
        }catch(err){
            res.status(400).send("Failed");
        }
    }
}

const removeEstoque = async (req,res) =>{
    const user = req.session.usuario;
    if(!user){
        res.status(403).send("Forbidden");
    }else{
        try{
            const id = req.query.id;
            await estoque.removeEstoque(id);
            res.status(200).send("Sucess");
        }catch(err){
            res.status(400).send("Failed");
        }
    }
}
const removeProduto = async (req,res) =>{
    const user = req.session.usuario;
    if(!user){
        res.status(403).send("Forbidden");
    }else{
        try{
            const id = req.query.id;
            const idproduto = req.query.idproduto
            await estoque.removeProduto(id,idproduto);
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