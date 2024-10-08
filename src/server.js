require('dotenv').config();
const express = require("express");
const router = require('./router/router');
const sequelize = require("./config/config");
const User = require("./models/User");
const Product = require("./models/Product");
const app = express();

//Modelo de AOI JSON
app.use(express.json());
app.use('/api', router);
// REQ -> reqisição
// RES -> respnse
app.get("/healthcheck", (req, res) => {
    // 200 -> Ok
  return res.status(200).json({
    msg: "Estamos vivos",
    alive: true,
  });
});

// Listen -> ouvir (porta)

sequelize
.authenticate()
.then(async () =>{
  console.log("Conexão com BD estabelecida com sucesso");
  await sequelize.sync();
})
.then(() => {
  app.listen(process.env.PORT == null ? 8080 : process.env.PORT, () => {
    console.log("Servdor Online na porta 8080");
  });
})
.catch((error) => {
  console.error("Erro ao se conectar com banco:", error);
});