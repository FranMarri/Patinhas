const { DataTypes } = require('sequelize');
const db = require('../db/db');

const AnimalModel = db.define("animal" , {
    nome: DataTypes.TEXT,
    especie: DataTypes.TEXT,
    idade: DataTypes.INTEGER,
    dono: DataTypes.TEXT,
})

module.exports = AnimalModel;
