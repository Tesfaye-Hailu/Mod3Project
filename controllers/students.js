const Student = require("../models/Student");


const createStudent = async (req, res) => {
    //console.log(req.body);
    let databaseResponse = await Student.create(req.body);
    res.send(databaseResponse)
}

const displayStudents = async (req, res) => {
    let students = await Student.find ({})
    res.send(students)
    }

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

    const updatedStudent = await Student.findByIdAndUpdate(
      studentId,
      updatedData,
      { new: true, runValidators: true }
    );

    if (!updatedStudent) {
      return res.status(404).send('Student not found');
    }

    res.send(updatedStudent);
  } catch (error) {
    console.error('Error updating student:', error);
    res.status(500).send('Error updating student');
  }
};



// const updateStudent = async (req,res) => {
//     let studentByName = req.params.name
//     let newName = req.body
//     const updatedStudent = await Student.findOneAndUpdate({name: studentByName }, newName)
//     res.send(updatedStudent)
    
// }


module.exports={createStudent, displayStudents, deleteStudent, updateStudent}

