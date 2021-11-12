var express = require('express');
var router = express.Router();
var controller = require('../controllers/services.controllers');

/* GET home page. */
router.get('/serviciesList', controller.saludar);

module.exports = router;
