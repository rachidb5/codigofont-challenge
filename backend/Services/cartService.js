const cartModel = require('../Models/cartModel');

function cart(body) {
    this.body = body;
    this.errors = [];
    this.cart = null;
}

cart.prototype.register = async function register() {
    this.cart = await cartModel.create(this.body);
};

module.exports = cart;