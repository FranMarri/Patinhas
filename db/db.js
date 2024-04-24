const {Sequelize} = require('sequelize');

const db = new Sequelize({
    dialect: 'sqlite',
    storage: './patinhas.sqlite',
});

module.exports = db;