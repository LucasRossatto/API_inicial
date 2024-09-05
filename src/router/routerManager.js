const { Router } =  require("express");
const managerRoutes = require("./routerManager");
const { validadeManager, validateManagerId } = require("../middlewares/ValidadeManager");


const router = Router();

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