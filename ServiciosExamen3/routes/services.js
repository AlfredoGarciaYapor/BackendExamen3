var express = require('express');
var router = express.Router();
var controller = require('../controllers/services.controllers');

/* GET home page. */
// router.get('/', controller.saludar);
router.post('/serviciesList', controller.getServices);
router.post('/addService', controller.addService);
router.post('/updateService', controller.updateService);
router.post('/deleteService', controller.deleteService);
router.post('/getService', controller.getService);

module.exports = router;
