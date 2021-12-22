const Users = require('../Services/usersService');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../Services/key');

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

const loginAuth = async (_request, response, next) => {
    const { email } = _request.body;
    const { password } = _request.body;
    if (email === undefined || password === undefined) {
        return response.status(401).json({ message: 'All fields must be filled' });
    }
    next();
};

const loginPasswordAuth = async (req, res, next) => {
    const { email } = req.body;
    const { password } = req.body;
    const users = await Users.findUsers();
    const usersNames = users.filter((user) => user.email === email);
if (usersNames.length < 1 || usersNames[0].password !== password) {
    return res.status(401).json({ message: 'usuario inexistente ou senha incorreta' });
} 
next();
};

const tokenAuth = async (req, res, next) => {
    try {
    const token = req.headers.authorization;
    const payload = jwt.verify(token, JWT_SECRET);
    if (!token || !payload) {
        return res.status(401).json({ message: 'Nenhum usuario logado' });
    } next();
} catch (e) {
    console.log(e);
    return res.status(401).json({ message: 'Nenhum usuario logado' });
}
};

module.exports = { userAuth, verifyUser, loginAuth, loginPasswordAuth, tokenAuth };