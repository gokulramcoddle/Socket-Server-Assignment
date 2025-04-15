const express = require('express');
const router = express.Router();
const chatRouter = require('../controller/routerController')
router.get('/', chatRouter);

module.exports = router;
