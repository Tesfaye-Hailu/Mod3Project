const express = require("express");
const dotenv = require("dotenv");
const Student = require("./models/Student.js");
const { createStudent, displayStudents, deleteStudent, updateStudent } = require("./controllers/students.js");

dotenv.config(); 

require('./config/database.js')

// Middleware set

const app = express();
app.use(express.json());


// CREATE DATA
app.post('/student', createStudent );

//DISPLAY DATA
app.get('/students', displayStudents )


//UPDATE DATA
app.put('/student/:name', updateStudent)

//DELETE DATA

app.delete('/student/:name', deleteStudent )


// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});