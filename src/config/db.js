const mongoose = require('mongoose');
require('dotenv').config();

const MONGO = process.env.MONGO_URI;

mongoose.connect(MONGO)
.then(() => console.log('Connection to MongoDB was successful!\n'))
.catch(err => console.error('Something went wrong with the MongoDB connection\nTry checking if the MongoDB Server is online\n', err));

mongoose.set('sanitizeFilter', true);

module.exports = mongoose;
