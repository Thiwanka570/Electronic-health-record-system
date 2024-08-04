const mongoose = require('mongoose');

const dosageSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    frequency: {
        type: String,
        required: true
    }

});

const Dosage = mongoose.model('Dosage', dosageSchema);

module.exports = Dosage;
