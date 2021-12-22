const path = require('path');
const Products = require('../Services/productsService');

exports.newProduct = async (req, res) => {
    try {
        const product = new Products(req.body);
        // product.body.imgPath = req.file.filename
        await product.register();
        return res.status(201).send(product.products);
        } catch (e) {
                console.log(e);
                return res.status(400).json({ error: e });
            }
};

exports.showProduct = async (req, res) => {
    try {
        const products = await Products.findProducts();
        return res.status(200).json(products);
        } catch (e) {
            console.log(e);
            return res.status(400).json({ error: e });
        } 
};

exports.uploadImage = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Products.findProduct(req.params.id);
       product.imgPath = `localhost:3000/uploads/${id}.jpeg`;
        return res.status(200).send(product).header("Access-Control-Allow-Origin", "*");
      } catch (e) {
        console.log(e);
      }
};
