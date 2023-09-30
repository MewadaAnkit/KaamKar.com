const express =require("express");

const verifyToken  = require("../middleware/jwt.js");
const ConvController = require('../Controller/conversaton.controller.js')
const router = express.Router();

router.get("/api/conversations", verifyToken, ConvController.getConversations);
router.post("/api/conversations", verifyToken, ConvController.createConversation);
router.get("/api/conversations/single/:id", verifyToken, ConvController.getSingleConversation);
router.put("/api/conversations/:id", verifyToken, ConvController.updateConversation);

module.exports = router;