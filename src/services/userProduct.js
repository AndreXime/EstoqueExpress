import {Estoque,User} from '../models/models.js';

const createEstoque = async (userId,titulo) => {
    const estoque = new Estoque({userOwner:userId,titulo:titulo});
    await estoque.save();

    const user = await User.findById(userId);
    user.estoque.push(estoque._id);
    await user.save();

    return estoque; 
};
const createProduto = async (userId,estoqueName,produto) => {
    const estoque = await estoque.findOne({userOwner:userId,titulo:estoqueName});

    estoque.produtos.push(produto);
    return estoque.save();
}
const searchUserEstoques = async (UserId) => {
    const estoque = await Estoque.find({userOwner:UserId});
    if(!estoque){
        throw new Error;
    }
    return estoque;
}
const searchOneEstoque = async (UserId,titulo) => {
    const estoque = await Estoque.findOne({userOwner:UserId,titulo:titulo});
    if(!estoque){
        throw new Error;
    }
    return estoque;
}


export default {
    createProduto,
    createEstoque,
    searchUserEstoques,
    searchOneEstoque
}