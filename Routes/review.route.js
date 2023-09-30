const express = require('express')
const verifyToken = require('../middleware/jwt.js')
const ReviewController = require('../Controller/review.controller.js')
const router = express.Router();

router.post("/api/reviews", verifyToken , ReviewController.createReview )
router.get("/api/reviews/:gigId", ReviewController.getReviews )
router.delete("/api/reviews/:id", ReviewController.deleteReview)

module.exports = router;