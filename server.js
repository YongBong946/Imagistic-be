const dotenv = require('dotenv');
dotenv.config();

const cloudinary = require('cloudinary');
const express = require('express');
const app = express();
const cors = require('cors');

require('./config/db');

const port = process.env.PORT || 5000;

// Configuring cloudinary with relevant api/secret keys
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME ,
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
})

//Setting up cors to assist with cross origin resource sharing.
//Origin is variable so it can easily differ from development to production
app.use(cors({
  credentials: true,
  origin: process.env.ORIGIN_URL
}));


app.use(express.json());
//Requiring in controllers that will manage all requests
app.use(require('./controllers'));

app.listen(port, () => console.log(`listening on port ${port}`));

