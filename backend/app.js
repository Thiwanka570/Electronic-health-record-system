const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const patientRoutes = require('./routes/patientRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const medicalRecordRoutes = require('./routes/medicalRecordRoutes');
const labTestRoutes = require('./routes/labtestRoutes');
const itemRoutes = require('./routes/itemRoutes');
const dosageRoutes = require('./routes/dosageRoutes');
const patientServiceRoute = require('./routes/patientServiceRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


app.use('/patients', patientRoutes);
app.use('/doctors', doctorRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/medical-records', medicalRecordRoutes);
app.use('/lab-tests', labTestRoutes);
app.use('/items', itemRoutes);
app.use('/dosages', dosageRoutes);
app.use('/patientService', patientServiceRoute);

app.use((req, res, next) => {
    console.log(`Received request: ${req.method} ${req.url}`);
    req.url = req.url.trim();
    req.body = JSON.parse(JSON.stringify(req.body).trim());
    console.log(req.body);
    next();
  });
  
  

module.exports = app;
