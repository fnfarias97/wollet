var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController')

/* GET home page. */
router.get('/', mainController.home);

router.get('/contact', mainController.contact);


module.exports = router;
