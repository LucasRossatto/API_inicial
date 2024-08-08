const { Sequelize } = require("sequelize");

// ('Nome do banco de dados', 'Usuario que voce utilizare para conectar', 'senha desse usuario,)
const sequelize = new Sequelize('lojaapi', 'root', 'root', {
    // Define o host o Banco de dados esta rodando
    host: 'localhost',
    // Define o tipo do banco de dados
    dialect: 'mysql'
});

module.exports = sequelize;