const express = require('express');
const router = express.Router();
const patientServiceController = require('../controllers/patientServiceController');

router.post('/', patientServiceController.createpatientService);
router.get('/', patientServiceController.getAllpatientServices);
router.get('/patientServices/:pNo', patientServiceController.getAllpatientServicesByPrescriptionNumber);
router.get('/:id', patientServiceController.getpatientServiceById);
router.put('/:id', patientServiceController.updatepatientService);
router.delete('/:id', patientServiceController.deletepatientService);

module.exports = router;
