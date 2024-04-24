const { DataTypes } = require('sequelize');
const db = require('../db/db');

const ClienteModel = db.define("cliente" , {
    nome: DataTypes.TEXT,
    cpf:{
        type: DataTypes.INTEGER,
        unique: true
    },
    endereco: DataTypes.TEXT,
    telefone: DataTypes.TEXT,
})

module.exports = ClienteModel