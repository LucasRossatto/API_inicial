const Manager = require("../models/Manager");

const ManagerController = {

    create: async (req, res) => {
        try {
          const { nome, setor, cpf } = req.body;
          const managerCriado = await Manager.create({ nome, setor, cpf });
    
          return res.status(200).json({
            msg: "Gerente criado com sucesso!",
            manager: managerCriado,
          });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ msg: "Acione o Suporte" });
        }
      },

      getAll: async (req, res) => {
        try {
          const managersListados = await Manager.findAll();
          return res.status(200).json({
            msg: "Gerentes encontrados",
            manger: managersListados,
          });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ msg: "Acione o Suporte 11" });
        }
      },

      delete: async (req, res) => {
        try {
          const { id } = req.params;
          const managerEncontrado = await Manager.findByPk(id);
          if (managerEncontrado == null) {
            return res.status(404).json({
              msg: "Gerente não encontrado",
            });
          }
          // Destroy = deletar
          // As same it deleted
          await managerEncontrado.destroy();
          return res.status(200).json({
            msg: "Gerente deletado com sucesso",
          });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ msg: "Acione o Suporte" });
        }
      },

      getOne: async (req, res) => {
        try {
          const id = req.params;
          const managerEncontrado = await Product.findByPk(id);
          if (managerEncontrado == null) {
            return res.status(404).json({
              msg: " Produto nao encontrado",
            });
          }
    
          return res.status(200).json({
            msg: "Gerente encontrado com sucesso!",
            manager: managerEncontrado,
          });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ msg: "Acione o Suporte" });
        }
      },

      update: async (req, res) => {
        try {
          const { id } = req.params;
          const { nome, setor, cpf } = req.body;
          const managerUpdate = await Manager.findByPk(id);
          if (managerUpdate == null) {
            return res.status(404).json({
              msg: "Manager não encontrado",
            });
          }
    
          if (updated) {
            return res.status(200).json({
              msg: "Manager atualizado com sucesso!",
            });
          }
    
          const updated = managerUpdate.update({
            nome,
            setor,
            cpf,
          });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ msg: "Acione o Suporte" });
        }
      },

};

module.exports = ManagerController;