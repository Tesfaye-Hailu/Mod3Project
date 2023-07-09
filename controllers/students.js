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

const deleteStudent = async (req,res) => {
    let studentByName = req.params.name
    const deletedStudent = await Student.deleteOne({name:studentByName})
    res.send(deletedStudent)
}

const updateStudent = async (req,res) => {
    let studentByName = req.params.name
    let newName = req.body
    const updatedStudent = await Student.findOneAndUpdate({name: studentByName }, newName)
    res.send(updatedStudent)
    
}

module.exports={createStudent, displayStudents, deleteStudent, updateStudent}

