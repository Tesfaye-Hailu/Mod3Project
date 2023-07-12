
const mongoose = require('mongoose');
const Course = require("../models/Course");

const displayCourses = async (req, res) => {
    let courses = await Course.find({})
    res.send(courses)

}
    
module.exports = displayCourses