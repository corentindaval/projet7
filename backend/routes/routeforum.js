const express = require('express');
const router = express.Router();
const forum = require('../models/forum');
const forumctrl = require('../controleurs/ctrlforum');
const auth = require('../middleware/auth');



module.exports = router;