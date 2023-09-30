const  express = require('express');
const  UserController = require('../Controller/user.controller')
const verifyToken  = require('../middleware/jwt')
const router = express.Router();

router.delete("/:id", verifyToken,UserController.deleteUser);
router.get("/api/users/:id", UserController.getUser);

module.exports = router