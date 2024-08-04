const express = require('express');
const router = express.Router();
const medicalRecordController = require('../controllers/medicalRecordController');

router.post('/', medicalRecordController.createMedicalRecord);
router.get('/', medicalRecordController.getAllMedicalRecords);

module.exports = router;
