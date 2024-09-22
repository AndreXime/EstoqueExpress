const userProduct = require("../services/userProduct")
const userService = require("../services/userCrud")

const getDash = async (req,res) =>{
    const user = req.session.usuario;
    if(!user){
        res.redirect('entrar')
    }else{
        const refreshUser = await userService.returnUserById(user._id);
        req.session.usuario = refreshUser;
        const cards = refreshUser.produtos || null;
        res.render('dashboard',{cards});
    }
}

const appendCard = async (req,res) =>{
    const user = req.session.usuario;
    if(!user){
        res.status(400).send("Failed");
    }else{
        userProduct.appendProduct(user._id,req.body)
        res.status(200).send("Sucess");
    }
}

module.exports = {
    getDash,
    appendCard
}