const Users = require('../Services/usersService');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../Services/key');

exports.newUser = async (req, res) => {
    try {
        const user = new Users(req.body);
        await user.register();
        return res.status(201).json(user.users);
        } catch (e) {
                console.log(e);
                return res.status(400).json({ error: e });
            }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const newToken = await jwt.sign({ email, password }, JWT_SECRET);
       return res.status(200).json({ token: newToken });
    } catch (e) {
        console.log(e);
        return res.status(400).json({ error: e });
    }
};
