import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DepartmentList from '../DepartmentList';

const StudentUpdate = ({ studentId, onUpdate, currentData }) => {
  const [name, setName] = useState(currentData.name);
  const [department, setDepartment] = useState(currentData.department);
  const [course, setCourse] = useState(currentData.course);
  const [isEditable, setIsEditable] = useState(false);
  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [courseOptions, setCourseOptions] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get('http://localhost:4000/departments'); // Replace with your API endpoint or data source
        setDepartmentOptions(response.data.map((department) => department.name));
      } catch (error) {
        console.error('Error fetching department options:', error);
      }
    };

    fetchDepartments();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:4000/courses'); // Replace with your API endpoint or data source
        setCourseOptions(response.data.filter((course) => course.department === department).map((course) => course.name));
      } catch (error) {
        console.error('Error fetching course options:', error);
      }
    };

    fetchCourses();
  }, [department]);

  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleSave = () => {
    setIsEditable(false);
    onUpdate(studentId, { name, department, course });
  };

  const handleCancel = () => {
    setIsEditable(false);
    setName(currentData.name);
    setDepartment(currentData.department);
    setCourse(currentData.course);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  return (
    <div>
      {!isEditable ? (
        <button onClick={handleEdit}>Update</button>
      ) : (
        <div>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Department:
            <select value={department} onChange={handleDepartmentChange}>
              <option value={department}>{department}</option>
              {departmentOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label>
            Course:
            <select value={course} onChange={handleCourseChange}>
              <option value={course}>{course}</option>
              {courseOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default StudentUpdate;
