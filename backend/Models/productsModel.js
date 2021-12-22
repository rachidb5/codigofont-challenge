const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    productName: { type: String },
    price: { type: Number },
    quantity: { type: Number },
    imgPath: { type: String },
}, { versionKey: false });

const productsModel = mongoose.model('products', productsSchema);

module.exports = productsModel;