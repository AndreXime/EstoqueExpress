import { Schema, model } from 'mongoose';

const produtoSchema = new Schema({
    titulo: { },
    quantidade: { },
    validade: { },
    preco: { },
    categoria: { },
    fornecedor: { },
    criadoEm: { }
});

const estoqueSchema = new Schema({
    titulo: { },
    produtosEstoque: [produtoSchema]
});

const userSchema = new Schema({
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
    estoque: [estoqueSchema],
});

const User = model('User', userSchema);

export default User;
