const mongoose = require('mongoose');
const db = process.env.DB_URL;

mongoose.connect(db, { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
  console.log('connected to mongod');
});

mongoose.connection.on('error', () => {
  console.log('failed to connect to mongod');
});