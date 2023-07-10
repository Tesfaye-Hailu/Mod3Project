const Student = require("../models/Student");


const createStudent = async (req, res) => {
    console.log(req.body);
    let databaseResponse = await Student.create(req.body);
    res.send(databaseResponse)
}

const displayStudents = async (req, res) => {
    let students = await Student.find ({})
    res.send(students)
    }

// const deleteStudent = async (req,res) => {
//     let studentByName = req.params.name
//     const deletedStudent = await Student.deleteOne({name:studentByName})
//     res.send(deletedStudent)
// }

// const deleteStudent = async (req, res) => {
//     const studentId = req.params.id; 
  
//     try {
//       const deletedStudent = await Student.findOneAndDelete({ _id: studentId });
//       res.send(deletedStudent);
//     } catch (error) {
//       console.error('Error deleting student:', error);
//       res.status(500).send('Internal Server Error');
//     }
//   };
  
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


const updateStudent = async (req,res) => {
    let studentByName = req.params.name
    let newName = req.body
    const updatedStudent = await Student.findOneAndUpdate({name: studentByName }, newName)
    res.send(updatedStudent)
    
}

module.exports={createStudent, displayStudents, deleteStudent, updateStudent}

