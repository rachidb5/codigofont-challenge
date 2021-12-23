const express = require('express');
const route = express.Router();
const { newUser, login } = require('./Controllers/userController');
const { newProduct, showProduct, uploadImage, atualizar } = require('./Controllers/productsController');
const { newBuy } = require('./Controllers/cartController');
const { upload } = require('./Middlewares/upload');
const { userAuth,
    verifyUser,
    loginPasswordAuth,
    loginAuth,
    tokenAuth } = require('./Middlewares/userAuth');

route.post('/users', userAuth, verifyUser, newUser);
route.post('/login', loginAuth, loginPasswordAuth, login);
route.post('/products', tokenAuth, newProduct);
route.put('/image/:id', upload, uploadImage)
route.get('/products', showProduct);
route.post('/cart', tokenAuth, newBuy)
route.put('/products/:id', atualizar)

module.exports = route;