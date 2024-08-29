const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const UserController = {
  login: async (req, res) => {
    try {
      const { email, senha } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(400).json({
          msg: "Email ou senga incorretos",
        });
      }

      const isValida = await bcrypt.compare(senha, user.senha);
      if (!isValida) {
        return res.status(400).json({
          msg: "Email ou senha incorretos",
        });
      }

      const token = jwt.sign({
        email: user.email,
        nome: user.nome
      }, process.env.SECRET, { expiresIn: '1h'});

      return res.status(200).json({
        msg:'Login realizado com sucesso',
        token
      })
    } catch (error) {
      console.error(error);
      return res.status(500), json({ msg: "Acione o Suporte" });
    }
  },

  create: async (req, res) => {
    try {
      const { nome, senha, email } = req.body;
      const hashSenha = await bcrypt.hash(senha, 10);
      const userCriado = await User.create({ nome, email, senha: hashSenha });

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
      const { id } = req.params;
      const { nome, senha, email } = req.body;
      const userUpdate = await User.findByPk(id);
      if (userUpdate == null) {
        return res.status(404).json({
          msg: "Usuário não encontrado",
        });
      }

      if (updated) {
        return res.status(200).json({
          msg: "Usuário atualizado com sucesso!",
        });
      }

      const updated = userUpdate.update({
        nome,
        senha,
        email,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },

  getAll: async (req, res) => {
    try {
      const usersListados = await User.findAll();
      return res.status(200).json({
        msg: "Usuarios encontrados",
        user: usersListados,
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
      if (userEncontrado == null) {
        return res.status(404).json({
          msg: " Usuario nao encontrado",
        });
      }

      return res.status(200).json({
        msg: "Usuario encontrado com sucesso!",
        user: userEncontrado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const userEncontrado = await User.findByPk(id);
      if (userEncontrado == null) {
        return res.status(404).json({
          msg: "Usuário nãó emcontrado",
        });
      }
      // Destroy = deletar
      // As same it deleted
      await userEncontrado.destroy();
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
