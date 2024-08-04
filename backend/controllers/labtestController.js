const LabTest = require('../models/LabTest');

exports.createLabTest = async (req, res) => {
  const labTest = new LabTest(req.body);
  try {
    const savedLabTest = await labTest.save();
    res.status(201).json(savedLabTest);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllLabTests = async (req, res) => {
  try {
    const labTests = await LabTest.find().populate('patientId doctorId');
    res.json(labTests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
