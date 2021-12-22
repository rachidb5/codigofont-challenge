const productsModel = require('../Models/productsModel');

function products(body) {
    this.body = body;
    this.errors = [];
    this.products = null;
}

products.prototype.register = async function register() {
    this.products = await productsModel.create(this.body);
};

products.findProducts = async () => {
    const produtos = await productsModel.find();
    return produtos;
};

products.findProduct = async function findProduct(id) {
    const produto = await productsModel.findById(id);
    return produto;
};

module.exports = products;