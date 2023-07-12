
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';


function StudentRegistration() {
  const initialStudentData = {
    name: '',
    department: '',
    course: '',
  };

  const [studentData, setStudentData] = useState(initialStudentData);
  const [registeredStudents, setRegisteredStudents] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchDepartments();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      if (selectedDepartment) {
        try {
          const response = await axios.get('http://localhost:4000/courses');
          const filteredCourses = response.data.filter((course) => course.department === selectedDepartment);
          setCourses(filteredCourses);
        } catch (error) {
          console.error('Error retrieving courses:', error);
        }
      } else {
        setCourses([]);
      }
    };

    fetchCourses();
  }, [selectedDepartment]);

  const fetchDepartments = async () => {
    try {
      const response = await axios.get('http://localhost:4000/departments');
      setDepartments(response.data);
    } catch (error) {
      console.error('Error retrieving departments:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudentData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDepartmentChange = (event) => {
    const { value } = event.target;
    setSelectedDepartment(value);
    setStudentData((prevData) => ({ ...prevData, department: value, course: '' }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate input
    if (!studentData.name || !studentData.department || !studentData.course) {
      alert('Please fill in all the fields.');
      return;
    }

    setRegisteredStudents((prevStudents) => [...prevStudents, studentData]);

    // Sending the data to the server
    await axios.post('http://localhost:4000/student', studentData);

    setStudentData(initialStudentData);
    setSelectedDepartment('');
    setCourses([]);
  };


  return (
    <div className="container">
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={studentData.name}
            onChange={handleInputChange}
            placeholder="Please enter the name of the student"
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <select
            id="department"
            name="department"
            className="form-control"
            value={selectedDepartment}
            onChange={handleDepartmentChange}
          >
            <option value="">Select Department</option>
            {departments.map((department) => (
              <option key={department._id} value={department.name}>
                {department.name}
              </option>
            ))}
          </select>
        </div>
        {selectedDepartment && (
          <div className="form-group">
            <label htmlFor="course">Course:</label>
            <select
              id="course"
              name="course"
              className="form-control"
              value={studentData.course}
              onChange={handleInputChange}
            >
              <option value="">Select Course</option>
              {courses.map((course) => (
                <option key={course._id} value={course.name}>
                  {course.name}
                </option>
              ))}
            </select>
          </div>
        )}
        <button type="submit" className="btn btn-primary btn-register">Register</button>
      </form>
      <div>
        <h3>Registered Students:</h3>
        {registeredStudents.map((student, index) => (
          <div key={index} className="registered-student">
            <p>Name: {student.name}</p>
            <p>Department: {student.department}</p>
            <p>Course: {student.course}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentRegistration;

