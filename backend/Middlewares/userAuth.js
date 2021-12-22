const Users = require('../Services/usersService');

const userAuth = (_request, response, next) => {
    const { email } = _request.body;
    const { password } = _request.body;
    if (email === undefined) {
      return response.status(400).json({ message: 'Invalid entries. Try again.' });
    }
    if (!email.match(/^[a-z0-9_.]+@[a-z0-9]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/)) {
    return response.status(400).json({ message: 'Invalid entries. Try again.' });
    } 
    if (password === undefined) {
        return response.status(400).json({ message: 'O campo "password" é obrigatório' });
    }
    if (password.length < 6) {
        return response.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
    }
    next();
};

const verifyUser = async (req, res, next) => {
    const users = await Users.findUsers();
    const emails = users.map((u) => u.email);
    if (emails.includes(req.body.email)) {
        return res.status(422).json({ message: 'Usuario já existe' });
    }
    next();
};

module.exports = { userAuth, verifyUser };