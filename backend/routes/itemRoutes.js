const express = require('express');
const router = express.Router();
const itemController = require('../controllers/ItemController'); // Adjust the path as needed

// Routes for medicine
router.post('/', itemController.createMedicine);
router.get('/', itemController.getAllMedicines);
router.post('/bulk', itemController.bulkCreateMedicines);
router.get('/:id', itemController.getMedicineById);
router.put('/:id', itemController.updateMedicine);
router.delete('/:id', itemController.deleteMedicine);

module.exports = router;
