
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DepartmentList() {
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
          const filteredCourses = response.data.filter(course => course.department === selectedDepartment);
          setCourses(filteredCourses);
          //console.log(`Fetched courses for ${selectedDepartment}:`, filteredCourses);
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
     // console.log('Fetched departments:', response.data);
    } catch (error) {
      console.error('Error retrieving departments:', error);
    }
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="department">Department:</label>
        <select id="department" name="department" value={selectedDepartment} onChange={handleDepartmentChange}>
          <option value="">Select Department</option>
          {departments.map((department) => (
            <option key={department._id} value={department.name}>
              {department.name}
            </option>
          ))}
        </select>
      </div>
      {selectedDepartment && (
        <div>
          <label htmlFor="course">Course:</label>
          <select id="course" name="course">
            <option value="">Select Course</option>
            {courses.map((course) => (
              <option key={course._id} value={course.name}>
                {course.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default DepartmentList;
