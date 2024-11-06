import mongoose, { connect, set } from 'mongoose';

const MONGO = process.env.MONGO_URI;
// "mongodb://localhost:27017/mongodb"
// mongodb://mongo:27017/meuBancoDados

connect(MONGO)
.then(() => console.log('\nConexão com MongoDB ocorreu bem!\n'))
   .catch(err => console.error(
      '\nAconteceu alguma coisa errada com a conexão com o MongoDB\nTente checar se o MongoDB está ligado no endereço:\n'
      + MONGO + '\n', err));

set('sanitizeFilter', true);

export default mongoose;
