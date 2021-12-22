const usersModel = require('../Models/usersModel');

function users(body) {
    this.body = body;
    this.errors = [];
    this.users = null;
}

users.prototype.register = async function register() {
    this.users = await usersModel.create(this.body);
};

module.exports = users;