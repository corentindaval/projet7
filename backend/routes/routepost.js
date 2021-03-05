const express = require('express');
const router = express.Router();
const post = require('../models/post');
const ctrlpost = require('../controleurs/ctrlpost');
const auth = require('../middleware/auth');


router.post("/nvpost",ctrlpost.nvpost);
router.post("/modifpost",ctrlpost.modifpost);
router.post("/suprpost",ctrlpost.suprpost);
router.post("/creerlistpost",ctrlpost.creerlistpost);

module.exports = router;