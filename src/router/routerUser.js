const { Router } =  require("express");
const userRoutes = require("./routerUser");

const router = Router();

router.use('/user', userRoutes);

module.exports = router;