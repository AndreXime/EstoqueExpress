import mongoose, { connect, set } from 'mongoose';

const MONGO = "mongodb://localhost:27017/meuBancoDados";
// mongodb://localhost:27017/mongodb
// mongodb://mongo:27017/meuBancoDados

connect(MONGO)
.then(() => console.log('\nConnection to MongoDB was successful!\n'))
.catch(err => console.error('\nSomething went wrong with the MongoDB connection\nTry checking if the MongoDB Server is online\n', err));

set('sanitizeFilter', true);

export default mongoose;
