const { DataTypes } = require('sequelize');
const db = require('../db/db');

const ProdutoModel = db.define("produto" , {
    nome: DataTypes.TEXT,
    preco: DataTypes.FLOAT,
    quantidade: DataTypes.INTEGER,
})

module.exports = ProdutoModel;
