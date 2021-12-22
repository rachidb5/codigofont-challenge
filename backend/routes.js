const express = require('express');
const route = express.Router();
const { newUser } = require('./Controllers/userController');
const { newProduct, showProduct, uploadImage } = require('./Controllers/productsController');
const { newBuy } = require('./Controllers/cartController');
const { upload } = require('./Middlewares/upload');
const { userAuth } = require('./Middlewares/userAuth');

route.post('/users', userAuth, newUser);
route.post('/products', newProduct);
route.put('/products/:id', upload, uploadImage)
route.get('/products', showProduct);
route.post('/cart', newBuy)

module.exports = route;