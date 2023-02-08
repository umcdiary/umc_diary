const express = require('express');
const userController = require('./userController');
const router = express.Router();

router.get('/info/:email', userController.getUserInfo);
router.patch('/nickname/:email', userController.editNickname);
router.patch('/email/:email', userController.editEmail);

module.exports = router;
