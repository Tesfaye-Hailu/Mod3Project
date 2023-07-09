import React from 'react';

function GradeReport({ student }) {
  const fullName = `${student.firstName} ${student.lastName}`;

  return (
    <div>
      <h2>Grade Report for {fullName}</h2>
      <p>Name: {fullName}</p>
      <p>Department: {student.department}</p>
      <p>Course: {student.course}</p>
      <p>ID: {student.id}</p>
      <p>Scored Grade: {student.grade}</p>
    </div>
  );
}

export default GradeReport;