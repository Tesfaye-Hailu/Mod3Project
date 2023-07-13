const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const Student = require("./models/Student.js");
const Department = require("./models/Department.js");
const Course = require("./models/Course.js");

const { createStudent, displayStudents, deleteStudent, updateStudent } = require("./controllers/students.js");
const displayDepartments  = require("./controllers/departments.js");
const displayCourses = require("./controllers/courses.js");

dotenv.config(); 

require('./config/database.js')

// Middleware set

const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());

app.use(cors())


// CREATE DATA
app.post('/student', createStudent );

//DISPLAY DATA
app.get('/students', displayStudents );

app.get('/departments',displayDepartments);

app.get('/courses', displayCourses)


//UPDATE DATA
//app.put('/student/:name', updateStudent)
app.put('/student/:id', updateStudent);

//DELETE DATA

//app.delete('/student/:name', deleteStudent )
app.delete('/student/:id', deleteStudent);



// Start the server
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});