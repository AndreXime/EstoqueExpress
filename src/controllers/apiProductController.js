import Estoque from "../services/userProduct.js";

const addProduto = async (req,res) =>{
    const user = req.session.usuario;
    if(!user){
        res.status(403).send("Forbidden");
    }else{
        try{
            const produtoNovo =  await Estoque.createProduto(req.query.id,req.body);
            res.status(200).json(produtoNovo);
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
            const estoquenovo = await Estoque.createEstoque(
              user._id,
              user.name,
              req.body.titulo,
              req.body.descricao
            );
            res.status(200).json(estoquenovo);
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
            await Estoque.removeEstoque(id);
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
            await Estoque.removeProduto(id,idproduto);
            res.status(200).send("Sucess");
        }catch(err){
            res.status(400).send("Failed");
        }
    }
}

export default{
    addProduto,
    addEstoque,
    removeEstoque,
    removeProduto
}