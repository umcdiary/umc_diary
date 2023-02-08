const express = require('express');
const userController = require('./userController');
const router = express.Router();

router.get('/info/:email', userController.getUserInfo);

module.exports = router;