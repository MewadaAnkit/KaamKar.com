const express = require('express');
const authController = require('../Controller/auth.controller');

const router = express.Router()



router.post('/api/auth/register', authController.register)
router.post('/api/auth/login', authController.login)
router.post('/api/auth/logout',authController.logout)

module.exports = router;