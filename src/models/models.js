const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    titulo: { },
    quantidade: { },
    validade: { },
    preco: { },
    categoria: { },
    fornecedor: { },
    criadoEm: { }
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    createDate: {
        type: Date,
        default: Date.now(),
    },
    produtos: [produtoSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
