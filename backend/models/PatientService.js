const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientServiceSchema = new Schema({
    patientId: {
        type: Schema.Types.ObjectId,
        ref: 'Patient', 
        required: true
    },
    dosageId: {
        type: Schema.Types.ObjectId,
        ref: 'Dosage', 
        required: true
    },
    itemId: {
        type: Schema.Types.ObjectId,
        ref: 'Item', 
        required: true
    },
    MedicalRecordId: {
        type: Schema.Types.ObjectId,
        ref: 'MedicalRecord', 
        required: true
    },
    dateTime: {
        type: Date,
        required: true
    },
    patientServiceNo: {
        type: String
        
    }
});

module.exports = mongoose.model('PatientService', patientServiceSchema);
