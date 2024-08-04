const express = require('express');
const router = express.Router();
const patientcontroller = require('../controllers/patientController');

router.post('/', (req, res, next) => {
    console.log("POST /patients route hit");
    next();
  }, patientcontroller.createPatient);
  
  router.get('/', (req, res, next) => {
    console.log("GET /patients route hit");
    next();
  }, patientcontroller.getAllPatients);
  

module.exports = router;
