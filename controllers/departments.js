const mongoose = require('mongoose');
const Department = require("../models/Department");

const displayDepartments = async (req, res) => {
    let departments = await Department.find({})
    res.send(departments)

}

module.exports = displayDepartments
    
