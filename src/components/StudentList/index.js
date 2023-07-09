import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DepartmentFilter from '../DepartmentFilter';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');

  useEffect(() => {
    fetchStudents();
    fetchDepartments();
  }, []);

  const fetchStudents = () => {
    axios.get('http://localhost:5000/students/').then((response) => {
      setStudents(response.data);
    });
  };

  const fetchDepartments = () => {
    axios.get('http://localhost:5000/departments/').then((response) => {
      setDepartments(response.data);
    });
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const filteredStudents = selectedDepartment
    ? students.filter((student) => student.department === selectedDepartment)
    : students;

  return (
    <div>
      <h2>Student List</h2>
      <DepartmentFilter departments={departments} onChange={handleDepartmentChange} />
      <ul>
        {filteredStudents.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;