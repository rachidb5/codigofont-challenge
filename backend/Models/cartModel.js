const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    cartItens: { type: Array },
    user: { type: String}
}, { versionKey: false });

const cartModel = mongoose.model('cart', cartSchema);

module.exports = cartModel;