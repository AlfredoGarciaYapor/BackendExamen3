var express = require('express');
var router = express.Router();
var controller = require('../controllers/citas.controllers');

/* GET home page. */
// router.get('/', controller.saludar);
router.post('/getCitas', controller.getCitas);
router.post('/schedule', controller.newCita);


module.exports = router;