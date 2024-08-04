const mongoose = require('mongoose');

const labTestSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
  testDate: Date,
  testType: String,
  results: String
});

module.exports = mongoose.model('LabTest', labTestSchema);
