const MedicalRecord = require('../models/MedicalRecord');

exports.createMedicalRecord = async (req, res) => {
  const medicalRecord = new MedicalRecord(req.body);
  try {
    const savedMedicalRecord = await medicalRecord.save();
    res.status(201).json(savedMedicalRecord);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllMedicalRecords = async (req, res) => {
  try {
    const medicalRecords = await MedicalRecord.find().populate('patientId doctorId');
    res.json(medicalRecords);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
