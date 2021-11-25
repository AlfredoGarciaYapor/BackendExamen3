var express = require('express');
var router = express.Router();
var controller = require('../controllers/users.controller');

/* GET users listing. */
router.post('/userInfo', controller.getUser);

module.exports = router;
