const express = require('express');
const router = express.Router();
const user = require('../models/user');
const userctrl = require('../controleurs/ctrluser');
const auth = require('../middleware/auth');

router.post("/login",userctrl.login);
router.post("/signup",userctrl.signup);
router.post("/supruser",userctrl.supruser);

module.exports = router;