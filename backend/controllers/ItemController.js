const Item = require('../models/Item');

// Create a new medicine
exports.createMedicine = async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.bulkCreateMedicines = async (req, res) => {
  try {
    const items = await Item.insertMany(req.body);
    res.status(201).json(items);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all medicines
exports.getAllMedicines = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a medicine by ID
exports.getMedicineById = async (req, res) => {
  try {
    const Item = await Item.findById(req.params.id);
    if (!Item) {
      return res.status(404).json({ message: 'Medicine not found' });
    }
    res.status(200).json(Item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a medicine by ID
exports.updateMedicine = async (req, res) => {
  try {
    const Item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!Item) {
      return res.status(404).json({ message: 'Medicine not found' });
    }
    res.status(200).json(Item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a medicine by ID
exports.deleteMedicine = async (req, res) => {
  try {
    const Item = await Item.findByIdAndDelete(req.params.id);
    if (!Item) {
      return res.status(404).json({ message: 'Medicine not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
