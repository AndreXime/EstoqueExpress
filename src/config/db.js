const mongoose = require('mongoose');
require('dotenv').config();

const MONGO = process.env.MONGO_URI;

mongoose.connect(MONGO)
.then(() => console.log('Conexão ao MongoDB foi sucesso!'))
.catch(err => console.error('Aconteceu algo errado na conexão ao MongoDB', err));

module.exports = mongoose;
