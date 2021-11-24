var express = require('express');
var router = express.Router();
var controller = require('../controllers/auth.controllers');

router.get('/getToken', controller.getjwtToken);
router.get('/verifyToken', controller.verifyToken);

module.exports = router;