const { Router } =  require("express");
const userRoutes = require("./routerUser");
const { validateUser, validateAmbientId } = require("../middlewares/ValidateUser");
const { validadeProduct } = require("../middlewares/ValidadeProduct");

const router = Router();

router.post('/login',(req, res) =>{
    UserController.login(req,res)
  })
  
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
  })


module.exports = router;