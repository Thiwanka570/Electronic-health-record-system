const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 1212;
const DB_URI = 'mongodb://localhost:27017/ehr';

mongoose.connect(DB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });
