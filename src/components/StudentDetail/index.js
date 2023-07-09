import React from 'react';
import GradeReport from '../GradeReport';

function StudentDetails({ student }) {
  const fullName = `${student.firstName} ${student.lastName}`;

  return (
    <div>
      <h1>Student Details</h1>
      <h2>{fullName}</h2>
      <p>Department: {student.department}</p>
      <p>Course: {student.course}</p>
      <GradeReport student={student} />
    </div>
  );
}

export default StudentDetails;