const mongoose = require('mongoose');

const medicalRecordSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
  recordDate: Date,
  diagnosis: String,
  treatment: String,
  notes: String
});

module.exports = mongoose.model('MedicalRecord', medicalRecordSchema);
