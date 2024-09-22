const User = require('../models/models');
const appendProduct = async (userId,produto) => {
    const user = await User.findById(userId);
    await user.produtos.push(produto);
    return await user.save();
};

module.exports = {
    appendProduct,
}