// import React, { useState } from 'react';

// function StudentRegistration() {
//   const [studentData, setStudentData] = useState({
//     firstName: '',
//     lastName: '',
//     department: '',
//     course: ''
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setStudentData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Perform form submission logic with the studentData
//     console.log('Form submitted:', studentData);

//     // Reset the form fields if needed
//     setStudentData({
//       firstName: '',
//       lastName: '',
//       department: '',
//       course: ''
//     });
//   };

//   return (
//     <div>
//       <h2>Student Registration</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="firstName">First Name:</label>
//         <input type="text" id="firstName" name="firstName" value={studentData.firstName} onChange={handleChange} />

//         <label htmlFor="lastName">Last Name:</label>
//         <input type="text" id="lastName" name="lastName" value={studentData.lastName} onChange={handleChange} />

//         <label htmlFor="department">Department:</label>
//         <select id="department" name="department" value={studentData.department} onChange={handleChange}>
//           <option value="">Select Department</option>
//           <option value="Software Engineering">Software Engineering</option>
//           <option value="Cyber Security">Cyber Security</option>
//           <option value="IT Support">IT Support</option>
//           <option value="Machine Learning">Machine Learning</option>
//         </select>

//         <label htmlFor="course">Course:</label>
//         <input type="text" id="course" name="course" value={studentData.course} onChange={handleChange} />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default StudentRegistration;




import React, { useState } from 'react';

function StudentRegistration() {
  const [studentData, setStudentData] = useState({
    name: '',
    department: '',
    course: ''
  });

  const [registeredStudents, setRegisteredStudents] = useState([]);

  const departments = ['Software Engineering', 'Cyber Security', 'IT Support', 'Machine Learning'];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudentData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setRegisteredStudents((prevStudents) => [...prevStudents, studentData]);
    console.log('Form submitted:', studentData);
    // You can perform further actions like sending the data to the server.
    // Clear the form inputs
    setStudentData({ name: '', department: '', course: '' });
  };

  return (
    <div>
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={studentData.name} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="department">Department:</label>
          <select id="department" name="department" value={studentData.department} onChange={handleInputChange}>
            <option value="">Select Department</option>
            {departments.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="course">Course:</label>
          <input type="text" id="course" name="course" value={studentData.course} onChange={handleInputChange} />
        </div>
        <button type="submit">Register</button>
      </form>
      <div>
        <h3>Registered Students:</h3>
        {registeredStudents.map((student, index) => (
          <div key={index}>
            <p>Name: {student.name}</p>
            <p>Department: {student.department}</p>
            <p>Course: {student.course}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentRegistration;