const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser')
require('dotenv').config();

mongoose.connect(process.env.MONGO_DB_URL);

const routes = require('./routes');

app.use('/files', express.static(path.resolve(__dirname, "uploads")))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
      'PUT'
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
  
  app.use(cors(corsOpts));

app.use(express.static(__dirname + '/uploads'));
app.use(routes);

app.listen(process.env.PORT || 3001, () => {
    console.log('Acessar http://localhost:3001');
});