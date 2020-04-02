const express  = require('express');

const router = express.Router();

const patientsController = require('../controllers/patients_controller');

router.get('/details',patientsController.patient);

router.post('/patient-search',patientsController.create);

module.exports = router;    