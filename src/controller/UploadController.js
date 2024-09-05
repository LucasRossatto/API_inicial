const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');
const imagePath = require('path');

const UploadController = {
  uploadImage: async (req, res) => {
    const ImageName = req.file.originalname;
    const ImageData = req.file.buffer;
    await sharp(ImageData).toFile(`uploads/${ImageName}`);
    return res.status(200).json({
      msg: "Imagem salva com sucesso!",
      status: 200,
    });
  },

  listImages: async (req, res) => {
    fs.readdir("uploads/", (err, files) => {
      if (err) {
        return res.status(500).json({
          msg: "Erro ao listar imagens",
        });
      }
      const images = files.filter(
        (file) =>
          file.endsWith(".jpg") ||
          file.endsWith(".png") ||
          file.endsWith(".jpeg")
      );

      res.send(images);
    });
  },

  getImage: (req, res) => {
    const imageName = req.params.imageName;
    const ImagePath = path.join(__dirname, "..", "..", "uploads", imageName);
    return req.sendFile(imagePath);
  },
};

module.exports = UploadController;
