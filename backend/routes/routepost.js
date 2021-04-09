const express = require('express');
const router = express.Router();
const post = require('../models/post');
const ctrlpost = require('../controleurs/ctrlpost');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post("/nvpost",auth,multer,ctrlpost.nvpost);
router.post("/modifpost",auth,multer,ctrlpost.modifpost);
router.post("/suprpost",auth,ctrlpost.suprpost);
router.post("/creerlistpost",ctrlpost.creerlistpost);

module.exports = router;