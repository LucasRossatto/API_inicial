const { Router } = require('express');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage});

const UploadController = require('../controller/uploadController');

const router = Router();

router.post('/upload', upload.single('image'), (req,res) => (
    UploadController.uploadImage(req, res)
));

router.post('/images', upload.single('image'), (req,res) => (
    UploadController.listImages(req, res)
));

router.post('/:imageName', upload.single('image'), (req,res) => (
    UploadController.getImage(req, res)
));

module.exports = router;