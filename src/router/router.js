const { Router } = require("express");
const UserController = require("../controller/UserController");
const ProductController = require("../controller/ProductController");
const { validateAmbientId, validateUser } = require("../middlewares/ValidateUser");
const { validadeProduct, validateProductId } = require("../middlewares/ValidadeProduct");
const { validadeManager, validateManagerId } = require("../middlewares/ValidadeManager");
const ManagerController = require("../controller/ManagerController");
const authenticateToken = require("../middlewares/authenticateToken");
const uploadsRoutes = require('./routerUpload');
const userRoutes = require('./routerUser');
const productRoutes = require('./routerProduct');
const managerRoutes = require('./routerManager')

const router = Router();

router.use('/image', uploadsRoutes)

router.use('/user',userRoutes);
router.use('/product',productRoutes);
router.use('/manager',managerRoutes);

module.exports = router;
