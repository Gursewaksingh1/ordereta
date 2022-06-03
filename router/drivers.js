const express = require('express');
const driverController = require('../controller/drivers');
const router = express.Router();
const isAuth = require("../middleware/isAuth")

router.post('/login', driverController.login)
router.post('/logout',isAuth, driverController.logout)
router.post('/refreshtoken',isAuth, driverController.refreshToken)

module.exports = router;