const Users = require('../Services/usersService');

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