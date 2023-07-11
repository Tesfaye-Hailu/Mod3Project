const mongoose = require("mongoose");
const departmentSchema = new mongoose.Schema({

  name: { type: String, required: true },
  
},
    {timestamps: true}
);
const Department = mongoose.model("course", departmentSchema)
module.exports = Department;
