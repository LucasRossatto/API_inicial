const { Router } =  require("express");
const productRoutes = require("./routerProduct");
const { validadeProduct, validateProductId } = require("../middlewares/ValidadeProduct");

const router = Router();

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


module.exports = router;