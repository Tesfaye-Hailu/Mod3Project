const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

// Middleware setup
app.use(express.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

// Routes setup
app.use('/api/students', require('./routes/studentRoutes'));
app.use('/api/departments', require('./routes/departmentRoutes'));
app.use('/api/courses', require('./routes/courseRoutes'));

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});