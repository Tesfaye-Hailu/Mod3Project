const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  
  name: { type: String, required: true },
  department: { type: String, required: true },
  course: { type: String, required: true },
},
{timestamps: true}
);

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;


// const mongoose = require('mongoose');

// const studentSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
//   course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
// }, { timestamps: true });

// const Student = mongoose.model('Student', studentSchema);

// module.exports = Student;