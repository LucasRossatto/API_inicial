const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const Manager = sequelize.define("Manager", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  setor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Manager;
