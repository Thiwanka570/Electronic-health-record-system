const Appointment = require('../models/Appointment');

exports.createAppointment = async (req, res) => {
  const appointment = new Appointment(req.body);
  try {
    const savedAppointment = await appointment.save();
    res.status(201).json(savedAppointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().populate('patientId doctorId');
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
