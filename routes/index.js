const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home-controllers')

router.get('/',homeController.home)
router.use('/users',require('./users'))
router.use('/patients',require('./patients'));


module.exports = router;