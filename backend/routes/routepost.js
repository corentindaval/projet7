const express = require('express');
const router = express.Router();
const post = require('../models/post');
const postctrl = require('../controleurs/ctrlpost');
const auth = require('../middleware/auth');



module.exports = router;