
// import React, { useState } from 'react';
// import axios from 'axios';

// function StudentRegistration() {
//   const [studentData, setStudentData] = useState({
//     firstName: '',
//     lastName: '',
//     department: '',
//     course: ''
//   });

//   const [registeredStudents, setRegisteredStudents] = useState([]);

//   const departments = ['Software Engineering', 'Cyber Security', 'IT Support', 'Machine Learning'];

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setStudentData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setRegisteredStudents((prevStudents) => [...prevStudents, studentData]);
//     // console.log('Form submitted:', studentData);

//     //sending the data to the server.

//     const postResponse = await axios({
//       url: "http://localhost:4000/student",
//       method: "POST",
//       data: studentData
//     })
//     //console.log(response.data)

//   //   const getResponse = await axios ({
//   //   url: "http://localhost:4000/students",
//   //   method: "GET",
//   //   data: studentData
//   // })

//   // const deleteResponse = await axios({
//   //   url: "http://localhost:4000/student/:name",
//   //   method: "DELETE",
//   //   data: studentData
//   // })

//   // const putResponse = await axios({
//   //   url: "http://localhost:4000/student/:name",
//   //   method: "PUT",
//   //   data: studentData
//   // })
    
//     // Clear the form inputs
//     setStudentData({ firstName: '', lastName: '', department: '', course: '' });
//   };

//   return (
//     <div>
//       <h2>Student Registration</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="firstName">First Name:</label>
//           <input type="text" id="firstName" name="firstName" value={studentData.firstName} onChange={handleInputChange} />
//         </div>
//         <div>
//           <label htmlFor="lastName">Last Name:</label>
//           <input type="text" id="lastName" name="lastName" value={studentData.lastName} onChange={handleInputChange} />
//         </div>
//         <div>
//           <label htmlFor="department">Department:</label>
//           <select id="department" name="department" value={studentData.department} onChange={handleInputChange}>
//             <option value="">Select Department</option>
//             {departments.map((department) => (
//               <option key={department} value={department}>
//                 {department}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label htmlFor="course">Course:</label>
//           <input type="text" id="course" name="course" value={studentData.course} onChange={handleInputChange} />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//       <div>
//         <h3>Registered Students:</h3>
//         {registeredStudents.map((student, index) => (
//           <div key={index}>
//             <p>Name: {student.firstName} {student.lastName}</p>
//             <p>Department: {student.department}</p>
//             <p>Course: {student.course}</p>
//             <hr />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default StudentRegistration;



import React, { useState } from 'react';
import axios from 'axios';

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setRegisteredStudents((prevStudents) => [...prevStudents, studentData]);

    // Sending the data to the server
    const postResponse = await axios({
      url: 'http://localhost:4000/student',
      method: 'POST',
      data: studentData
    });

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

