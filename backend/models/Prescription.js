const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    patientServices: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PatientService'
    }],
    prescriptionNumber: {
        type: String,
    },
    date: {
        type: Date,
    },
});

const Prescription = mongoose.model('Prescription', prescriptionSchema);
module.exports = Prescription;
