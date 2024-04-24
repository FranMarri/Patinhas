const { DataTypes } = require('sequelize');
const db = require('../db/db');

const AgendamentoModel = db.define("agendamento" , {
    data: DataTypes.DATE,
    hora: DataTypes.TIME,
    cliente: DataTypes.TEXT,
    servico: DataTypes.TEXT,
})

module.exports = AgendamentoModel;
