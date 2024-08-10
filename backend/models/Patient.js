const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  title:String,
  firstName: String,
  lastName: String,
  age:String,
  dateOfBirth: Date,
  gender: String,
  contactInfo: String,
  address: String,
  email: String,
  appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }],
  patientServices: [{ type: mongoose.Schema.Types.ObjectId, ref: 'patientService' }],
  medicalRecords: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MedicalRecord' }],
  labTests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'LabTest' }]
});

module.exports = mongoose.model('Patient', patientSchema);
