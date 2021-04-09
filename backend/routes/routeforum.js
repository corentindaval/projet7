const express = require('express');
const router = express.Router();
const forum = require('../models/forum');
const ctrlforum = require('../controleurs/ctrlforum');
const auth = require('../middleware/auth');

router.post("/nvforum",auth,ctrlforum.nvforum);
router.post("/updateforum",auth,ctrlforum.updateforum);
router.post("/suprforum",auth,ctrlforum.suprforum);
router.post("/listforum",ctrlforum.listforum);

module.exports = router;