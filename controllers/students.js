const Student = require("../models/Student");

const createStudent = async (req, res) => {
  try {
    const { name, department, course } = req.body;

    if (!course) {
      return res.status(400).json({ error: 'Course is required' });
    }

    const student = new Student({
      name,
      department,
      course,
    });

    const savedStudent = await student.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    console.error('Error creating student:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const displayStudents = async (req, res) => {
  try {
    let students = await Student.find({});
    res.send(students);
  } catch (error) {
    console.error('Error displaying students:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

const deleteStudent = async (req, res) => {
  const studentId = req.params.id;

  try {
    const deletedStudent = await Student.findByIdAndDelete(studentId);
    res.json(deletedStudent);
  } catch (error) {
    console.error('Error deleting student:', error);
    res.status(500).send('Internal Server Error');
  }
};

const updateStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    const updatedData = req.body;

    const updatedStudent = await Student.findByIdAndUpdate(studentId, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedStudent) {
      return res.status(404).send('Student not found');
    }

    res.send(updatedStudent);
  } catch (error) {
    console.error('Error updating student:', error);
    res.status(500).send('Error updating student');
  }
};


module.exports={createStudent, displayStudents, deleteStudent, updateStudent}

