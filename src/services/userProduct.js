import { Estoque } from '../models/models.js';
import { Types } from 'mongoose';

const createEstoque = async (userId,titulo) => {
    const estoque = new Estoque({userOwner:userId,titulo:titulo});
    await estoque.save();

    return estoque._id; 
};
const createProduto = async (id,produto) => {
    const estoque = await Estoque.findById( Types.ObjectId.createFromHexString(id) );
    if(!estoque){
        throw new Error;
    }
    estoque.produtosEstoque.push(produto);
    return estoque.save();
}
const searchUserEstoques = async (UserId) => {
    const estoque = await Estoque.find({userOwner:UserId});
    if(!estoque){
        throw new Error;
    }
    return estoque;
}
const searchOneEstoque = async (id) => {
    const estoque = await Estoque.findById( Types.ObjectId.createFromHexString(id));
    if(!estoque){
        throw new Error;
    }
    return estoque;
}
const removeEstoque = async(id) => {
    const estoque = await Estoque.findByIdAndDelete( Types.ObjectId.createFromHexString(id));
    if(!estoque){
        throw new Error;
    }
    return estoque;
}
const removeProduto = async(estoqueId,id) => {
    const resultado = await Estoque.findByIdAndUpdate(
        estoqueId, 
        { $pull: { produtosEstoque: { _id: id } } }, // Remove o produto com o _id fornecido
        { new: true } // Retorna o documento atualizado
    );
    return resultado;
}



export default {
    createProduto,
    createEstoque,
    searchUserEstoques,
    searchOneEstoque,
    removeEstoque,
    removeProduto
}