const Dosage = require('../models/Dosage'); // Adjust the path as necessary

// Create a new dosage
exports.createDosage = async (req, res) => {
    console.log(req.body);
    
  try {
    const dosage = new Dosage(req.body);
    await dosage.save();
    res.status(201).json(dosage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all dosages
exports.getAllDosages = async (req, res) => {
  try {
    const dosages = await Dosage.find();
    res.status(200).json(dosages);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a specific dosage by ID
exports.getDosageById = async (req, res) => {
  try {
    const dosage = await Dosage.findById(req.params.id);
    if (!dosage) {
      return res.status(404).json({ message: 'Dosage not found' });
    }
    res.status(200).json(dosage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a specific dosage by ID
exports.updateDosageById = async (req, res) => {
  try {
    const dosage = await Dosage.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!dosage) {
      return res.status(404).json({ message: 'Dosage not found' });
    }
    res.status(200).json(dosage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a specific dosage by ID
exports.deleteDosageById = async (req, res) => {
  try {
    const dosage = await Dosage.findByIdAndDelete(req.params.id);
    if (!dosage) {
      return res.status(404).json({ message: 'Dosage not found' });
    }
    res.status(200).json({ message: 'Dosage deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
