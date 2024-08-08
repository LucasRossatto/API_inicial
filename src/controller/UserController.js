const User = require("../models/User");

const UserController = {
  create: async (req, res) => {
    try {
      const { nome, senha, email } = req.body;
      const userCriado  = await User.create({ nome, email, senha});

      return res.status(200).json({
        msg: "Usuário criado com sucesso!",
        user: userCriado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },

  update: async (req, res) => {
    try {
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },

  getAll: async (req, res) => {
    try {
      const usersListados  = await User.findAll();
        return res.status(200).json({
            msg:'Usuarios encontrados',
            user: usersListados
        });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },

  getOne: async (req, res) => {
    try {
      const id = req.params;
      const userEncontrado = await User.findByPk(id);        
        if(userEncontrado == null){
          return res.status(404).json({
            msg: ' Usuario nao encontrado'
          })
        };

        return res.status(200).json({
          msg: 'Usuario encontrado com sucesso!',
          user: userEncontrado
        });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },

  delete: async (req, res) => {
    try {
      return res.status(200).json({
        msg: "Usuário deletado com sucesso",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
};

module.exports = UserController;
