const userController = require('../Controller/UserControler')
const express = require('express');
const router = express.Router();
router.post('/saveuser', userController.saveUser);
router.post('/login', userController.loginUser);

module.exports=router;



