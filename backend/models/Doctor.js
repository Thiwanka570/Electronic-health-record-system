const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  specialty: String,
  contactInfo: String,
  email: String,
  officeAddress: String,
  appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }],
  patientServices: [{ type: mongoose.Schema.Types.ObjectId, ref: 'patientService' }],
  medicalRecords: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MedicalRecord' }],
  labTests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'LabTest' }]
});

module.exports = mongoose.model('Doctor', doctorSchema);
