const express = require('express');
const AuthController = require('../controllers/authUser.controller');

const router = express.Router();

router.post('/', AuthController);


module.exports = router;
