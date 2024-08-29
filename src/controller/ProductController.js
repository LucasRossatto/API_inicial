const Product = require("../models/Product");

const ProductController = {
    create: async (req, res) => {
        try {
          const { nome, quantidade, preco } = req.body;
          const produtoCriado = await Product.create({ nome, quantidade, preco });
    
          return res.status(200).json({
            msg: "Produto criado com sucesso!",
            product: produtoCriado,
          });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ msg: "Acione o Suporte" });
        }
      },

      getAll: async (req, res) => {
        try {
          const produtoslistados = await Product.findAll();
          return res.status(200).json({
            msg: "Produtos encontrados",
            product: produtoslistados,
          });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ msg: "Acione o Suporte 11" });
        }
      },

      delete: async (req, res) => {
        try {
          const { id } = req.params;
          const produtoEncontrado = await Product.findByPk(id);
          if (produtoEncontrado == null) {
            return res.status(404).json({
              msg: "Produto não encontrado",
            });
          }
          // Destroy = deletar
          // As same it deleted
          await produtoEncontrado.destroy();
          return res.status(200).json({
            msg: "Produto deletado com sucesso",
          });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ msg: "Acione o Suporte" });
        }
      },

      getOne: async (req, res) => {
        try {
          const id = req.params;
          const produtoEncontrado = await Product.findByPk(id);
          if (produtoEncontrado == null) {
            return res.status(404).json({
              msg: " Produto nao encontrado",
            });
          }
    
          return res.status(200).json({
            msg: "Produto encontrado com sucesso!",
            produto: produtoEncontrado,
          });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ msg: "Acione o Suporte" });
        }
      },

      update: async (req, res) => {
        try {
          const { id } = req.params;
          const { nome, quantidade, preco } = req.body;
          const produtoUodate = await Product.findByPk(id);
          if (produtoUodate == null) {
            return res.status(404).json({
              msg: "Produto não encontrado",
            });
          }
    
          if (updated) {
            return res.status(200).json({
              msg: "Produto atualizado com sucesso!",
            });
          }
    
          const updated = userUpdate.update({
            nome,
            quantidade,
            preco,
          });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ msg: "Acione o Suporte" });
        }
      },
    



      
}


module.exports = ProductController;