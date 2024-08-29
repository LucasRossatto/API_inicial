const { Router } = require("express");
const UserController = require("../controller/UserController");
const ProductController = require("../controller/ProductController");
const { validateAmbientId, validateUser } = require("../middlewares/ValidateUser");
const { validadeProduct, validateProductId } = require("../middlewares/ValidadeProduct");
const { validadeManager, validateManagerId } = require("../middlewares/ValidadeManager");
const ManagerController = require("../controller/ManagerController");
const authenticateToken = require("../middlewares/authenticateToken");

const router = Router();


router.post('/login',(req, res) =>{
  UserController.login(req,res)
})
// User Routes

router.post("/user",validateUser, (req, res) => {
  UserController.create(req, res);
});

router.get("/user", validateAmbientId, (req, res) => {
  UserController.getAll(req, res);
});

router.delete("/user/:id", validadeProduct, validateAmbientId, (req, res) => {
  UserController.delete(req, res);
});

router.put("/user/:id", validateAmbientId, (req, res) => {
  UserController.update(req, res);
});

router.get("/user/:id", validateAmbientId, (req, res) => {
  UserController.getOne(req, res);
});


// Product Routes

router.post("/product", validadeProduct, (req, res) => {
  ProductController.create(req, res);
});

router.get("/product",(req, res) => {
  ProductController.getAll(req, res);
});

router.delete("/product/:id", validateProductId, (req, res) => {
  ProductController.delete(req, res);
});

router.get("/product/:id", validateProductId, (req, res) => {
  ProductController.getOne(req, res);
});

router.put("/product/:id", validadeProduct, validateProductId, (req, res) => {
  ProductController.update(req, res);
})

// Manager Routes

router.post("/Manager", validadeManager, (req, res) => {
  ManagerController.create(req, res);
});

router.get("/Manager", (req, res) => {
  ManagerController.getAll(req, res);
});

router.delete("/Manager/:id" , validateManagerId, (req, res) => {
  ManagerController.delete(req, res);
});

router.get("/Manager/:id", validateManagerId, (req, res) => {
  ManagerController.getOne(req, res);
}); 

router.put("/Manager/:id", validateManagerId, validadeManager, (req, res) => {
    ManagerController.update(req,res);
});

module.exports = router;
