const express = require('express')
const GigController = require('../Controller/gig.controller')
const createGig = require('../Controller/gig.controller')
const  verifyToken  = require("../middleware/jwt");

const router = express.Router();
router.post("/api/gigs" , verifyToken,GigController.createGig);
router.delete("/api/:id", verifyToken ,GigController.deleteGig);
router.get("/api/gigs/single/:id", GigController.getGig);
router.get("/api/gigs", GigController.getGigs);

module.exports =  router;