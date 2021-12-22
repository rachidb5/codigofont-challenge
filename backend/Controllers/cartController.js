const Cart = require('../Services/cartService');

exports.newBuy = async (req, res) => {
    try {
        const cart = new Cart(req.body);
        // product.body.imgPath = req.file.filename
        await cart.register();
        return res.status(201).send(cart);
        } catch (e) {
                console.log(e);
                return res.status(400).json({ error: e });
            }
};