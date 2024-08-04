const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  printingName: {
    type: String,
    required: true,
    trim: true
  },
 
});

module.exports = mongoose.model('Item', ItemSchema);
