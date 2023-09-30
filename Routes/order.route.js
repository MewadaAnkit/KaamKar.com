const  express = require("express");
const verifyToken = require("../middleware/jwt.js");
const OrderController = require('../Controller/order.controller')

const router = express.Router();

// router.post("/api/orders/:gigId", verifyToken, OrderController.createOrder);
router.get("/api/orders", verifyToken, OrderController.getOrders);
router.post("/api/orders/create-payment-intent/:id", verifyToken, OrderController.intent);
router.put("/api/orders", verifyToken, OrderController.confirm);

module.exports = router;