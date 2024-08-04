const express = require('express');
const router = express.Router();
const labTestController = require('../controllers/labtestController');

router.post('/', labTestController.createLabTest);
router.get('/', labTestController.getAllLabTests);

module.exports = router;
