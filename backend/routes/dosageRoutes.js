const express = require('express');
const router = express.Router();
const dosageController = require('../controllers/dosageController'); // Adjust the path as necessary

// Create a new dosage
router.post('/', dosageController.createDosage);

// Get all dosages
router.get('/', dosageController.getAllDosages);

// Get a specific dosage by ID
router.get('/:id', dosageController.getDosageById);

// Update a specific dosage by ID
router.put('/:id', dosageController.updateDosageById);

// Delete a specific dosage by ID
router.delete('/:id', dosageController.deleteDosageById);

module.exports = router;
