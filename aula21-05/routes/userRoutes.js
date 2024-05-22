const userController = require('../controllers/userController');

const express = require('express');
const router = express.Router();

router.post('/cadastro', userController.cadastro);


module.exports = router;