const express  = require("express");

const verifyToken  = require("../middleware/jwt.js");
const MsgController = require('../Controller/message.controller.js')
const router = express.Router();

router.post("/", verifyToken, MsgController.createMessage);
router.get("/:id", verifyToken, MsgController.getMessages);

module.exports = router;