const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const Student = require("./models/Student.js");
const { createStudent, displayStudents, deleteStudent, updateStudent } = require("./controllers/students.js");

dotenv.config(); 

require('./config/database.js')

// Middleware set

const app = express();
app.use(express.json());

app.use(cors())

// CREATE DATA
app.post('/student', createStudent );

//DISPLAY DATA
app.get('/students', displayStudents )


//UPDATE DATA
app.put('/student/:name', updateStudent)

//DELETE DATA

//app.delete('/student/:name', deleteStudent )
app.delete('/student/:id', deleteStudent);



// Start the server
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});