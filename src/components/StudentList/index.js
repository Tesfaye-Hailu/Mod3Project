// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function StudentList() {
//   const [students, setStudents] = useState([]);
//   const [displayedStudents, setDisplayedStudents] = useState([]);

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/students');
//       setStudents(response.data);
//     } catch (error) {
//       console.error('Error fetching students:', error);
//     }
//   };

//   const handleDisplay = () => {
//     setDisplayedStudents(students);
//   };

//   // const handleDelete = async (name) => {
//   //   try {
//   //     const url = `http://localhost:4000/student/${name}`;
//   //     await axios.delete(url);
//   //     fetchStudents();
//   //   } catch (error) {
//   //     console.error('Error deleting student:', error);
//   //   }
//   // };

//   const handleDelete = async (id) => {
//     try {
//       const url = `http://localhost:4000/student/${id}`;
//       await axios.delete(url);
//       fetchStudents();
//     } catch (error) {
//       console.error('Error deleting student:', error);
//     }
//   };


//   const handleUpdate = (studentId) => {
//     // Handle the update logic for the selected student
//     console.log('Update student with ID:', studentId);
//   };

//   return (
//     <div>
//       <h2>Student List</h2>
//       <button onClick={handleDisplay}>Display</button>
//       <ul>
//         {displayedStudents.map((student) => (
//           <li key={student.id}>
//             <p>Name: {student.name}</p>
//             <p>Department: {student.department}</p>
//             <p>Course: {student.course}</p>
//             <button onClick={() => handleUpdate(student.id)}>Update</button>
//             <button onClick={() => handleDelete(student.id)}>Delete</button>
            
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default StudentList;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [displayedStudents, setDisplayedStudents] = useState([]);

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

  const handleDisplay = () => {
    setDisplayedStudents(students);
  };

  // const handleDelete = async (id) => {
  //   console.log('Deleting student with ID:', id); // Debug statement
  //   try {
  //     const url = `http://localhost:4000/student/${id}`;
  //     await axios.delete(url);
  //     fetchStudents();
  //   } catch (error) {
  //     console.error('Error deleting student:', error);
  //   }
  // };

  const handleDelete = async (id) => {
    console.log('Deleting student with ID:', id);
    try {
      const url = `http://localhost:4000/student/${id}`;
      await axios.delete(url);
      fetchStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };


  const handleUpdate = (studentId) => {
    // Handle the update logic for the selected student
    console.log('Update student with ID:', studentId);
  };

  return (
    <div>
      <h2>Student List</h2>
      <button onClick={handleDisplay}>Display</button>
      <ul>
        {displayedStudents.map((student) => (
          <li key={student.id}>
            <p>Name: {student.name}</p>
            <p>Department: {student.department}</p>
            <p>Course: {student.course}</p>
            <button onClick={() => handleUpdate(student.id)}>Update</button>
            <button onClick={() => handleDelete(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;