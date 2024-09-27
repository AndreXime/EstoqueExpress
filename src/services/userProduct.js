import User from '../models/models.js';

const appendProduto = async (userId,produto) => {
    const user = await User.findById(userId);
    await user.estoque.produtos.push(produto);
    return await user.save();
};
const appendEstoque = async (userId,estoque) => {

}

export default {
    appendProduto,
    appendEstoque
}