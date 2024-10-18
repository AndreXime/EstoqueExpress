import mongoose, { connect, set } from 'mongoose';

const MONGO = process.env.MONGO_URI;

connect(MONGO)
.then(() => console.log('\nConnection to MongoDB was successful!\n'))
.catch(err => console.error('\nSomething went wrong with the MongoDB connection\nTry checking if the MongoDB Server is online\n', err));

set('sanitizeFilter', true);

export default mongoose;
