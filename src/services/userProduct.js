import { Estoque } from '../models/models.js';
import { Types } from 'mongoose';

const createEstoque = async (userId,userName,titulo,descricao) => {
    const estoque = new Estoque({
      userOwner: userId,
      userOwnerName: userName,
      titulo: titulo,
      descricao: descricao
    });
    await estoque.save();

    return estoque._id; 
};
const createProduto = async (id,produto) => {
    const estoque = await Estoque.findById( Types.ObjectId.createFromHexString(id) );
    if(!estoque){
        throw new Error;
    }
    estoque.produtosEstoque.push(produto);
    const estoqueSalvo = await estoque.save();
    // Assim que é salvo o produto está no topo entao pega o id do produto de cima
    return estoqueSalvo.produtosEstoque[
      estoqueSalvo.produtosEstoque.length - 1
    ]._id;
}
const searchUserEstoques = async (UserId) => {
    const estoque = await Estoque.find({userOwner:UserId});
    if(!estoque){
        throw new Error;
    }
    return estoque;
}
const searchOneEstoque = async (id) => {
    const estoque = await Estoque.findById( Types.ObjectId.createFromHexString(id) );
    if(!estoque){
        throw new Error;
    }
    return estoque;
}
const removeEstoque = async(id) => {
    const estoque = await Estoque.findByIdAndDelete( Types.ObjectId.createFromHexString(id) );
    if (!estoque) {
        throw new Error();
    }  
    return estoque;
}
const removeProduto = async (estoqueId, id) => {
    const resultado = await Estoque.findByIdAndUpdate(
      Types.ObjectId.createFromHexString(estoqueId),
      {
        $pull: {
          produtosEstoque: { _id: Types.ObjectId.createFromHexString(id) },
        },
      }
    );
    return resultado;
}
const getAllEstoques = async () => {
    const estoques = await Estoque.find();
    return estoques;
}
export default {
    createProduto,
    createEstoque,
    searchUserEstoques,
    searchOneEstoque,
    removeEstoque,
    removeProduto,
    getAllEstoques
}