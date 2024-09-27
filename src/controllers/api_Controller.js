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

const addProduto = async (req,res) =>{
    const user = req.session.usuario;
    if(!user){
        res.status(400).send("Failed");
    }else{
        try{
            const { estoque, ...produtoData } = req.body;
            response = estoque.createProduto(user._id,estoque,produtoData);
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
            estoque.createEstoque(user._id,req.body.titulo);
            res.status(200).send("Sucess");
        }catch(err){
            res.status(400).send("Failed");
        }
    }
}

export default{
    login,
    register,
    addProduto,
    addEstoque
}