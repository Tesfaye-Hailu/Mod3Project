
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentUpdate from '../StudentUpdate';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:4000/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleUpdate = async (studentId, updatedData) => {
    try {
      const url = `http://localhost:4000/student/${studentId}`;
      await axios.put(url, updatedData);
      fetchStudents(); // Fetch updated student data after successful update
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  const handleDelete = async (id) => {
    console.log('Deleting student with ID:', id);
    try {
      const url = `http://localhost:4000/student/${id}`;
      await axios.delete(url);
      fetchStudents(); // Fetch updated student data after successful delete
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            <p>Name: {student.name}</p>
            <p>Department: {student.department}</p>
            <p>Course: {student.course}</p>
            <div className="button-container">
              <StudentUpdate
                studentId={student._id}
                onUpdate={handleUpdate}
                currentData={{ name: student.name, department: student.department, course: student.course }}
              />
              <button className="delete-button" onClick={() => handleDelete(student._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;

