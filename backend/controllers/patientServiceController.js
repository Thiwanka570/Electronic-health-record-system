const PatientServiceModel = require('../models/PatientService'); // Renamed to avoid conflict

const createpatientService = async (req, res) => {
    console.log("Received request to save patient services...");

    try {
        const patientService = new PatientServiceModel(req.body);
        console.log('Request body:', req.body);

        const savedPatientService = await patientService.save();
        console.log("Saved patient service:", savedPatientService);

        res.status(201).json(savedPatientService);
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

const getAllpatientServicesByPrescriptionNumber = async (req, res) => {
    try {
        console.log('Request params:', req.params);
        const { pNo } = req.params;
        console.log(pNo);
        
        const patientServices = await PatientServiceModel.find({ patientServiceNo: pNo })
            .populate('patientId')
            .populate('dosageId')
            .populate('itemId');

        if (!patientServices.length) {
            return res.status(404).json({ error: 'No patient services found for this prescription number' });
        }
        
        res.status(200).json(patientServices);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Get a patientService by ID
const getpatientServiceById = async (req, res) => {
    try {
        const { id } = req.params;
        
        
        const patientService = await PatientServiceModel.findById(id)
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
        console.log(id);
        
        const updatedpatientService = await PatientServiceModel.findByIdAndUpdate(id, {
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
        const deletedpatientService = await PatientServiceModel.findByIdAndDelete(id);

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
    deletepatientService,
    getAllpatientServicesByPrescriptionNumber
};
