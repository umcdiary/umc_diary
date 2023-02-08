const express = require('express');
const userController = require('./userController');
const router = express.Router();

router.get('/info/:email', userController.getUserInfo);
router.patch('/nickname/:email', userController.editNickname);
router.patch('/email/:email', userController.editEmail);
router.patch('/password/:email', userController.editPassword);

module.exports = router;
