const PatientServiceModel = require('../models/PatientService'); // Renamed to avoid conflict

const createpatientService = async (req, res) => {
    console.log("Received request to save patient services...");
    const { services } = req.body;
    console.log('Request body:', req.body);

    if (!Array.isArray(services) || services.length === 0) {
        return res.status(400).json({ error: 'No services provided' });
    }

    try {
        // Validate the data before saving
        for (const service of services) {
            const requiredFields = ['patientId', 'itemId', 'dosageId', 'MedicalRecordId', 'dateTime', 'patientServiceNo'];
            for (const field of requiredFields) {
                if (!service[field]) {
                    throw new Error(`Missing required field: ${field}`);
                }
            }
        }

        const savedpatientServices = await PatientServiceModel.insertMany(services);
        res.status(201).json(savedpatientServices);
    } catch (error) {
        console.error('Error saving patient services:', error);
        res.status(500).json({ error: error.message });
    }
};




// Get all patientServices
const getAllpatientServices = async (req, res) => {
    try {
        const patientServices = await PatientServiceModel.find() // Use the renamed model here
            .populate('patientId')
            .populate('dosageId')
            .populate('itemId');
        res.status(200).json(patientServices);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a patientService by ID
const getpatientServiceById = async (req, res) => {
    try {
        const { id } = req.params;
        const patientService = await patientService.findById(id)
            .populate('patientId')
            .populate('dosageId')
            .populate('itemId');

        if (!patientService) {
            return res.status(404).json({ error: 'patientService not found' });
        }

        res.status(200).json(patientService);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a patientService by ID
const updatepatientService = async (req, res) => {
    try {
        const { id } = req.params;
        const { patientId, dosageId, itemId, dateTime, patientServiceNo } = req.body;

        const updatedpatientService = await patientService.findByIdAndUpdate(id, {
            patientId,
            dosageId,
            itemId,
            dateTime,
            patientServiceNo
        }, { new: true });

        if (!updatedpatientService) {
            return res.status(404).json({ error: 'patientService not found' });
        }

        res.status(200).json(updatedpatientService);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a patientService by ID
const deletepatientService = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedpatientService = await patientService.findByIdAndDelete(id);

        if (!deletedpatientService) {
            return res.status(404).json({ error: 'patientService not found' });
        }

        res.status(200).json({ message: 'patientService deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createpatientService,
    getAllpatientServices,
    getpatientServiceById,
    updatepatientService,
    deletepatientService
};
