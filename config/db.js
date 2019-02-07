const mongoose = require('mongoose');
const db = process.env.DB_URL;

// Mongoose database connection file. This will connect the server up with our 
// MLAB hosted database
mongoose.connect(db, { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
  console.log('connected to mongod');
});

mongoose.connection.on('error', () => {
  console.log('failed to connect to mongod');
});