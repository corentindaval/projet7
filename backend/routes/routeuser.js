const express = require('express');
const router = express.Router();
const user = require('../models/user');
const userctrl = require('../controleurs/ctrluser');
const auth = require('../middleware/auth');



module.exports = router;