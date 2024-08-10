const Prescription = require('../models/Prescription'); // Correct import

// Create a new prescription
const createPrescription = async (req, res) => {
    try {
        const { patientId, patientServiceIds, prescriptionNumber } = req.body;
        console.log(req.body);
        
        if (!patientId || !patientServiceIds || !prescriptionNumber) {
            console.log(400);
            return res.status(400).json({ error: 'All fields are required' });
        }

        const prescription = new Prescription({
            patient: patientId,
            patientServices: patientServiceIds,
            prescriptionNumber: prescriptionNumber,
            date: Date.now()
        });

        await prescription.save(); // Corrected the method call
        res.status(201).json(prescription);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all prescriptions
const getAllPrescriptions = async (req, res) => {
    try {
        const prescriptions = await Prescription.find()
            .populate('patient')
            .populate({
                path: 'patientServices',
                populate: { path: 'patientId dosageId itemId' }
            });
        res.status(200).json(prescriptions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single prescription by ID
const getPrescriptionById = async (req, res) => {
    try {
        const { id } = req.params;
        const prescription = await Prescription.findById(id)
            .populate('patient')
            .populate({
                path: 'patientServices',
                populate: { path: 'patientId dosageId itemId' }
            });

        if (!prescription) {
            return res.status(404).json({ error: 'Prescription not found' });
        }

        res.status(200).json(prescription);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a prescription
const updatePrescription = async (req, res) => {
    try {
        const { id } = req.params;
        const { patientId, patientServiceIds, prescriptionNumber } = req.body;

        if (!patientId || !patientServiceIds || !prescriptionNumber) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const prescription = await Prescription.findByIdAndUpdate(
            id,
            { patient: patientId, patientServices: patientServiceIds, prescriptionNumber },
            { new: true }
        );

        if (!prescription) {
            return res.status(404).json({ error: 'Prescription not found' });
        }

        res.status(200).json(prescription);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a prescription
const deletePrescription = async (req, res) => {
    try {
        const { id } = req.params;
        const prescription = await Prescription.findByIdAndDelete(id);

        if (!prescription) {
            return res.status(404).json({ error: 'Prescription not found' });
        }

        res.status(200).json({ message: 'Prescription deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createPrescription,
    getAllPrescriptions,
    getPrescriptionById,
    updatePrescription,
    deletePrescription
};
