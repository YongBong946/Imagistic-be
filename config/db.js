const mongoose = require('mongoose');
const db = 'mongodb://admin1:admin123@ds163014.mlab.com:63014/mern-project';

mongoose.connect(db, { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
  console.log('connected to mongod');
});

mongoose.connection.on('error', () => {
  console.log('failed to connect to mongod');
});