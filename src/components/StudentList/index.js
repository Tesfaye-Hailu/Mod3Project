
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import StudentUpdate from '../StudentUpdate';
// import './index.css'; // Import the CSS file for styling

// const StudentList = () => {
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

//   const handleUpdate = async (studentId, updatedData) => {
//     try {
//       const url = `http://localhost:4000/student/${studentId}`;
//       const response = await axios.put(url, updatedData);
//       console.log('Student updated successfully:', response.data);

//       setDisplayedStudents((prevStudents) =>
//         prevStudents.map((student) =>
//           student._id === studentId ? { ...student, ...response.data } : student
//         )
//       );
//     } catch (error) {
//       console.error('Error updating student:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     console.log('Deleting student with ID:', id);
//     try {
//       const url = `http://localhost:4000/student/${id}`;
//       await axios.delete(url);
//       setDisplayedStudents((prevStudents) =>
//         prevStudents.filter((student) => student._id !== id)
//       );
//     } catch (error) {
//       console.error('Error deleting student:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Student List</h2>
//       <button onClick={handleDisplay}>Display</button>
//       <ul>
//         {displayedStudents.map((student) => (
//           <li key={student._id}>
//             <p>Name: {student.name}</p>
//             <p>Department: {student.department}</p>
//             <p>Course: {student.course}</p>
//             <div className="button-group">
//               <StudentUpdate studentId={student._id} onUpdate={handleUpdate} />
//               <button className="delete-button" onClick={() => handleDelete(student._id)}>
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StudentList;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import StudentUpdate from '../StudentUpdate';
// import './index.css'; // Import the CSS file for styling

// const StudentList = () => {
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

//   const handleUpdate = async (studentId, updatedData) => {
//     try {
//       const url = `http://localhost:4000/student/${studentId}`;
//       const response = await axios.put(url, updatedData);
//       console.log('Student updated successfully:', response.data);

//       setDisplayedStudents((prevStudents) =>
//         prevStudents.map((student) =>
//           student._id === studentId ? { ...student, ...response.data } : student
//         )
//       );
//     } catch (error) {
//       console.error('Error updating student:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     console.log('Deleting student with ID:', id);
//     try {
//       const url = `http://localhost:4000/student/${id}`;
//       await axios.delete(url);
//       setDisplayedStudents((prevStudents) =>
//         prevStudents.filter((student) => student._id !== id)
//       );
//     } catch (error) {
//       console.error('Error deleting student:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Student List</h2>
//       <button onClick={handleDisplay}>Display</button>
//       <ul>
//         {displayedStudents.map((student) => (
//           <li key={student._id}>
//             <p>Name: {student.name}</p>
//             <p>Department: {student.department}</p>
//             <p>Course: {student.course}</p>
//             <div className="button-group">
//               <StudentUpdate studentId={student._id} studentData={student} onUpdate={handleUpdate} />
//               <button className="delete-button" onClick={() => handleDelete(student._id)}>
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StudentList;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import StudentUpdate from '../StudentUpdate';
// import './index.css'; // Import the CSS file for styling

// const StudentList = () => {
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

//   const handleUpdate = async (studentId, updatedData) => {
//     try {
//       const url = `http://localhost:4000/student/${studentId}`;
//       const response = await axios.put(url, updatedData);
//       console.log('Student updated successfully:', response.data);

//       setDisplayedStudents((prevStudents) =>
//         prevStudents.map((student) =>
//           student._id === studentId ? { ...student, ...response.data } : student
//         )
//       );
//     } catch (error) {
//       console.error('Error updating student:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     console.log('Deleting student with ID:', id);
//     try {
//       const url = `http://localhost:4000/student/${id}`;
//       await axios.delete(url);
//       setDisplayedStudents((prevStudents) =>
//         prevStudents.filter((student) => student._id !== id)
//       );
//     } catch (error) {
//       console.error('Error deleting student:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Student List</h2>
//       <button onClick={handleDisplay}>Display</button>
//       <ul>
//         {displayedStudents.map((student) => (
//           <li key={student._id}>
//             <p>Name: {student.name}</p>
//             <p>Department: {student.department}</p>
//             <p>Course: {student.course}</p>
//             <div className="button-group">
//               <StudentUpdate studentId={student._id} studentData={student} onUpdate={handleUpdate} />
//               <button className="delete-button" onClick={() => handleDelete(student._id)}>
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StudentList;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import StudentUpdate from '../StudentUpdate';

// const StudentList = () => {
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

//   const handleUpdate = async (studentId, updatedData) => {
//     try {
//       const url = `http://localhost:4000/student/${studentId}`;
//       const response = await axios.put(url, updatedData);
//       console.log('Student updated successfully:', response.data);

//       setDisplayedStudents((prevStudents) =>
//         prevStudents.map((student) =>
//           student._id === studentId ? { ...student, ...response.data } : student
//         )
//       );
//     } catch (error) {
//       console.error('Error updating student:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     console.log('Deleting student with ID:', id);
//     try {
//       const url = `http://localhost:4000/student/${id}`;
//       await axios.delete(url);
//       setDisplayedStudents((prevStudents) =>
//         prevStudents.filter((student) => student._id !== id)
//       );
//     } catch (error) {
//       console.error('Error deleting student:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Student List</h2>
//       <button onClick={handleDisplay}>Display</button>
//       <ul>
//         {displayedStudents.map((student) => (
//           <li key={student._id}>
//             <p>Name: {student.name}</p>
//             <p>Department: {student.department}</p>
//             <p>Course: {student.course}</p>
//             <StudentUpdate studentId={student._id} onUpdate={handleUpdate} />
//             <button onClick={() => handleDelete(student._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StudentList;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import StudentUpdate from '../StudentUpdate';
// import './index.css';

// const StudentList = () => {
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

//   const handleUpdate = async (studentId, updatedData) => {
//     try {
//       const url = `http://localhost:4000/student/${studentId}`;
//       const response = await axios.put(url, updatedData);
//       console.log('Student updated successfully:', response.data);

//       setDisplayedStudents((prevStudents) =>
//         prevStudents.map((student) =>
//           student._id === studentId ? { ...student, ...response.data } : student
//         )
//       );
//     } catch (error) {
//       console.error('Error updating student:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     console.log('Deleting student with ID:', id);
//     try {
//       const url = `http://localhost:4000/student/${id}`;
//       await axios.delete(url);
//       setDisplayedStudents((prevStudents) =>
//         prevStudents.filter((student) => student._id !== id)
//       );
//     } catch (error) {
//       console.error('Error deleting student:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Student List</h2>
//       <button onClick={handleDisplay}>Display</button>
//       <ul>
//         {displayedStudents.map((student) => (
//           <li key={student._id}>
//             <p>Name: {student.name}</p>
//             <p>Department: {student.department}</p>
//             <p>Course: {student.course}</p>
//             <StudentUpdate
//               studentId={student._id}
//               onUpdate={handleUpdate}
//               currentData={{ name: student.name, department: student.department, course: student.course }}
//             />
//             <button onClick={() => handleDelete(student._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StudentList;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentUpdate from '../StudentUpdate';
import './index.css'; // Import the CSS file for styling

const StudentList = () => {
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

  const handleUpdate = async (studentId, updatedData) => {
    try {
      const url = `http://localhost:4000/student/${studentId}`;
      const response = await axios.put(url, updatedData);
      console.log('Student updated successfully:', response.data);

      setDisplayedStudents((prevStudents) =>
        prevStudents.map((student) =>
          student._id === studentId ? { ...student, ...response.data } : student
        )
      );
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  const handleDelete = async (id) => {
    console.log('Deleting student with ID:', id);
    try {
      const url = `http://localhost:4000/student/${id}`;
      await axios.delete(url);
      setDisplayedStudents((prevStudents) =>
        prevStudents.filter((student) => student._id !== id)
      );
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div>
      <h2>Student List</h2>
      <button className="display-button" onClick={handleDisplay}>Display</button>
      <ul>
        {displayedStudents.map((student) => (
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