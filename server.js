const dotenv = require('dotenv');
dotenv.config();

const cloudinary = require('cloudinary');
const express = require('express');
const app = express();
const cors = require('cors');

require('./config/db');

const port = process.env.PORT || 5000;

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME ,
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
})

app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(require('./controllers'));

app.listen(port, () => console.log(`server started on port ${port}`));

