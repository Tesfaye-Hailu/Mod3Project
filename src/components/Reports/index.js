
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const Report = () => {
// //   const [departments, setDepartments] = useState([]);
// //   const [selectedDepartment, setSelectedDepartment] = useState('');
// //   const [courses, setCourses] = useState([]);

// //   useEffect(() => {
// //     fetchDepartments();
// //   }, []);

// //   useEffect(() => {
// //     fetchCourses();
// //   }, [selectedDepartment]);

// //   const fetchDepartments = async () => {
// //     try {
// //       const response = await axios.get('http://localhost:4000/departments');
// //       setDepartments(response.data);
// //     } catch (error) {
// //       console.error('Error retrieving departments:', error);
// //     }
// //   };

// //   const fetchCourses = async () => {
// //     try {
// //       if (selectedDepartment) {
// //         const response = await axios.get('http://localhost:4000/courses');
// //         const filteredCourses = response.data.filter(course => course.department === selectedDepartment);
// //         setCourses(filteredCourses);
// //       } else {
// //         setCourses([]);
// //       }
// //     } catch (error) {
// //       console.error('Error retrieving courses:', error);
// //     }
// //   };

// //   const handleDepartmentChange = (event) => {
// //     setSelectedDepartment(event.target.value);
// //   };

// //   return (
// //     <div>
// //       <h2>Report</h2>

      
// //       <div>
// //         <label htmlFor="department">Department:</label>
// //         <select id="department" name="department" value={selectedDepartment} onChange={handleDepartmentChange}>
// //           <option value="">Select Department</option>
// //           {departments.map((department) => (
// //             <option key={department._id} value={department.name}>
// //               {department.name}
// //             </option>
// //           ))}
// //         </select>
// //       </div>

      
// //       {selectedDepartment && (
// //         <div>
// //           <h3>Courses by Department: {selectedDepartment}</h3>
// //           <ul>
// //             {courses.map((course) => (
// //               <li key={course._id}>{course.name}</li>
// //             ))}
// //           </ul>
// //         </div>
// //       )}

// //     </div>
// //   );
// // };

// // export default Report;


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import StudentUpdate from '../StudentUpdate';

// // const Report = () => {
// //   const [students, setStudents] = useState([]);
// //   const [selectedCourse, setSelectedCourse] = useState('');
// //   const [registeredStudents, setRegisteredStudents] = useState([]);

// //   useEffect(() => {
// //     fetchStudents();
// //   }, []);

// //   useEffect(() => {
// //     fetchRegisteredStudents();
// //   }, [selectedCourse]);

// //   const fetchStudents = async () => {
// //     try {
// //       const response = await axios.get('http://localhost:4000/students');
// //       setStudents(response.data);
// //     } catch (error) {
// //       console.error('Error fetching students:', error);
// //     }
// //   };

// //   const fetchRegisteredStudents = () => {
// //     if (selectedCourse) {
// //       const registeredStudents = students.filter((student) => student.course === selectedCourse);
// //       setRegisteredStudents(registeredStudents);
// //     } else {
// //       setRegisteredStudents([]);
// //     }
// //   };

// //   const handleCourseChange = (event) => {
// //     setSelectedCourse(event.target.value);
// //   };

// //   return (
// //     <div>
// //       <h2>Report</h2>

// //       {/* Select Course */}
// //       <div>
// //         <label htmlFor="course">Select Course:</label>
// //         <select id="course" name="course" value={selectedCourse} onChange={handleCourseChange}>
// //           <option value="">Select Course</option>
// //           {/* Populate options with unique course names */}
// //           {[...new Set(students.map((student) => student.course))].map((course) => (
// //             <option key={course} value={course}>
// //               {course}
// //             </option>
// //           ))}
// //         </select>
// //       </div>

// //       {/* Display Registered Students for Selected Course */}
// //       {selectedCourse && (
// //         <div>
// //           <h3>Registered Students for Course: {selectedCourse}</h3>
// //           <ul>
// //             {registeredStudents.map((student) => (
// //               <li key={student._id}>
// //                 <p>Name: {student.name}</p>
// //                 <p>Department: {student.department}</p>
// //                 <p>Course: {student.course}</p>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       )}

// //     </div>
// //   );
// // };

// // export default Report;


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import StudentUpdate from '../StudentUpdate';

// // const Report = () => {
// //   const [students, setStudents] = useState([]);
// //   const [selectedCourse, setSelectedCourse] = useState('');
// //   const [registeredStudents, setRegisteredStudents] = useState([]);

// //   useEffect(() => {
// //     fetchStudents();
// //   }, []);

// //   useEffect(() => {
// //     fetchRegisteredStudents();
// //   }, [selectedCourse]);

// //   const fetchStudents = async () => {
// //     try {
// //       const response = await axios.get('http://localhost:4000/students');
// //       setStudents(response.data);
// //     } catch (error) {
// //       console.error('Error fetching students:', error);
// //     }
// //   };

// //   const fetchRegisteredStudents = () => {
// //     if (selectedCourse) {
// //       const registeredStudents = students.filter((student) => student.course === selectedCourse);
// //       setRegisteredStudents(registeredStudents);
// //     } else {
// //       setRegisteredStudents([]);
// //     }
// //   };

// //   const handleCourseChange = (event) => {
// //     setSelectedCourse(event.target.value);
// //   };

// //   return (
// //     <div>
// //       <h2>Report</h2>

// //       {/* Select Course */}
// //       <div>
// //         <label htmlFor="course">Select Course:</label>
// //         <select id="course" name="course" value={selectedCourse} onChange={handleCourseChange}>
// //           <option value="">Select Course</option>
// //           {/* Populate options with unique course names */}
// //           {[...new Set(students.map((student) => student.course))].map((course) => (
// //             <option key={course} value={course}>
// //               {course}
// //             </option>
// //           ))}
// //         </select>
// //       </div>

// //       {/* Display Registered Students for Selected Course */}
// //       {selectedCourse && (
// //         <div>
// //           <h3>Registered Students for Course: {selectedCourse}</h3>
// //           <ul>
// //             {registeredStudents.map((student) => (
// //               <li key={student._id}>{student.name}</li>
// //             ))}
// //           </ul>
// //         </div>
// //       )}

// //       {/* Other buttons and reports */}
// //       {/* ... your other code ... */}
// //     </div>
// //   );
// // };

// // export default Report;


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import StudentUpdate from '../StudentUpdate';

// // const Report = () => {
// //   const [students, setStudents] = useState([]);
// //   const [selectedDepartment, setSelectedDepartment] = useState('');
// //   const [registeredStudents, setRegisteredStudents] = useState([]);

// //   useEffect(() => {
// //     fetchStudents();
// //   }, []);

// //   useEffect(() => {
// //     fetchRegisteredStudents();
// //   }, [selectedDepartment]);

// //   const fetchStudents = async () => {
// //     try {
// //       const response = await axios.get('http://localhost:4000/students');
// //       setStudents(response.data);
// //     } catch (error) {
// //       console.error('Error fetching students:', error);
// //     }
// //   };

// //   const fetchRegisteredStudents = () => {
// //     if (selectedDepartment) {
// //       const registeredStudents = students.filter((student) => student.department === selectedDepartment);
// //       setRegisteredStudents(registeredStudents);
// //     } else {
// //       setRegisteredStudents([]);
// //     }
// //   };

// //   const handleDepartmentChange = (event) => {
// //     setSelectedDepartment(event.target.value);
// //   };

// //   return (
// //     <div>
// //       <h2>Report</h2>

// //       {/* Select Department */}
// //       <div>
// //         <label htmlFor="department">Select Department:</label>
// //         <select id="department" name="department" value={selectedDepartment} onChange={handleDepartmentChange}>
// //           <option value="">Select Department</option>
// //           {/* Populate options with unique department names */}
// //           {[...new Set(students.map((student) => student.department))].map((department) => (
// //             <option key={department} value={department}>
// //               {department}
// //             </option>
// //           ))}
// //         </select>
// //       </div>

// //       {/* Display Registered Students for Selected Department */}
// //       {selectedDepartment && (
// //         <div>
// //           <h3>Registered Students for Department: {selectedDepartment}</h3>
// //           <ul>
// //             {registeredStudents.map((student) => (
// //               <li key={student._id}>{student.name}</li>
// //             ))}
// //           </ul>
// //         </div>
// //       )}

     
// //     </div>
// //   );
// // };

// // export default Report;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Report = () => {
//   const [departments, setDepartments] = useState([]);
//   const [selectedDepartment, setSelectedDepartment] = useState('');
//   const [courses, setCourses] = useState([]);
//   const [students, setStudents] = useState([]);
//   const [selectedCourse, setSelectedCourse] = useState('');
//   const [registeredStudentsByDepartment, setRegisteredStudentsByDepartment] = useState([]);
//   const [registeredStudentsByCourse, setRegisteredStudentsByCourse] = useState([]);

//   useEffect(() => {
//     fetchDepartments();
//     fetchStudents();
//   }, []);

//   useEffect(() => {
//     fetchCourses();
//   }, [selectedDepartment]);

//   useEffect(() => {
//     fetchRegisteredStudentsByDepartment();
//   }, [selectedDepartment]);

//   useEffect(() => {
//     fetchRegisteredStudentsByCourse();
//   }, [selectedCourse]);

//   const fetchDepartments = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/departments');
//       setDepartments(response.data);
//     } catch (error) {
//       console.error('Error retrieving departments:', error);
//     }
//   };

//   const fetchCourses = async () => {
//     try {
//       if (selectedDepartment) {
//         const response = await axios.get('http://localhost:4000/courses');
//         const filteredCourses = response.data.filter((course) => course.department === selectedDepartment);
//         setCourses(filteredCourses);
//       } else {
//         setCourses([]);
//       }
//     } catch (error) {
//       console.error('Error retrieving courses:', error);
//     }
//   };

//   const fetchStudents = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/students');
//       setStudents(response.data);
//     } catch (error) {
//       console.error('Error fetching students:', error);
//     }
//   };

//   const fetchRegisteredStudentsByDepartment = () => {
//     if (selectedDepartment) {
//       const registeredStudents = students.filter((student) => student.department === selectedDepartment);
//       setRegisteredStudentsByDepartment(registeredStudents);
//     } else {
//       setRegisteredStudentsByDepartment([]);
//     }
//   };

//   const fetchRegisteredStudentsByCourse = () => {
//     if (selectedCourse) {
//       const registeredStudents = students.filter((student) => student.course === selectedCourse);
//       setRegisteredStudentsByCourse(registeredStudents);
//     } else {
//       setRegisteredStudentsByCourse([]);
//     }
//   };

//   const handleDepartmentChange = (event) => {
//     setSelectedDepartment(event.target.value);
//   };

//   const handleCourseChange = (event) => {
//     setSelectedCourse(event.target.value);
//   };

//   return (
//     <div>
//       <h2>Report</h2>

//       {/* Registered Students by Department */}
//       <div>
//         <h3>Registered Students by Department</h3>
//         <div>
//           <label htmlFor="department">Select Department:</label>
//           <select id="department" name="department" value={selectedDepartment} onChange={handleDepartmentChange}>
//             <option value="">Select Department</option>
//             {departments.map((department) => (
//               <option key={department._id} value={department.name}>
//                 {department.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         {selectedDepartment && (
//           <div>
//             <h4>Department: {selectedDepartment}</h4>
//             <ul>
//               {registeredStudentsByDepartment.map((student) => (
//                 <li key={student._id}>{student.name}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* Courses by Department */}
//       <div>
//         <h3>Courses by Department</h3>
//         <div>
//           <label htmlFor="department">Select Department:</label>
//           <select id="department" name="department" value={selectedDepartment} onChange={handleDepartmentChange}>
//             <option value="">Select Department</option>
//             {departments.map((department) => (
//               <option key={department._id} value={department.name}>
//                 {department.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         {selectedDepartment && (
//           <div>
//             <h4>Department: {selectedDepartment}</h4>
//             <ul>
//               {courses.map((course) => (
//                 <li key={course._id}>{course.name}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* Registered Students by Course */}
//       <div>
//         <h3>Registered Students by Course</h3>
//         <div>
//           <label htmlFor="course">Select Course:</label>
//           <select id="course" name="course" value={selectedCourse} onChange={handleCourseChange}>
//             <option value="">Select Course</option>
//             {courses.map((course) => (
//               <option key={course._id} value={course.name}>
//                 {course.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         {selectedCourse && (
//           <div>
//             <h4>Course: {selectedCourse}</h4>
//             <ul>
//               {registeredStudentsByCourse.map((student) => (
//                 <li key={student._id}>
//                   <p>Name: {student.name}</p>
//                   <p>Department: {student.department}</p>
//                   <p>Course: {student.course}</p>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Report;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Report = () => {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [registeredStudentsByDepartment, setRegisteredStudentsByDepartment] = useState([]);
  const [registeredStudentsByCourse, setRegisteredStudentsByCourse] = useState([]);

  useEffect(() => {
    fetchDepartments();
    fetchStudents();
  }, []);

  useEffect(() => {
    fetchCourses();
  }, [selectedDepartment]);

  useEffect(() => {
    fetchRegisteredStudentsByDepartment();
  }, [selectedDepartment]);

  useEffect(() => {
    fetchRegisteredStudentsByCourse();
  }, [selectedCourse]);

  const fetchDepartments = async () => {
    try {
      const response = await axios.get('http://localhost:4000/departments');
      setDepartments(response.data);
    } catch (error) {
      console.error('Error retrieving departments:', error);
    }
  };

  const fetchCourses = async () => {
    try {
      if (selectedDepartment) {
        const response = await axios.get('http://localhost:4000/courses');
        const filteredCourses = response.data.filter((course) => course.department === selectedDepartment);
        setCourses(filteredCourses);
      } else {
        setCourses([]);
      }
    } catch (error) {
      console.error('Error retrieving courses:', error);
    }
  };

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:4000/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const fetchRegisteredStudentsByDepartment = () => {
    if (selectedDepartment) {
      const registeredStudents = students.filter((student) => student.department === selectedDepartment);
      setRegisteredStudentsByDepartment(registeredStudents);
    } else {
      setRegisteredStudentsByDepartment([]);
    }
  };

  const fetchRegisteredStudentsByCourse = () => {
    if (selectedCourse) {
      const registeredStudents = students.filter((student) => student.course === selectedCourse);
      setRegisteredStudentsByCourse(registeredStudents);
    } else {
      setRegisteredStudentsByCourse([]);
    }
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">Report</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h3 className="card-title">Registered Students by Department</h3>
              <div className="form-group">
                <label htmlFor="department">Select Department:</label>
                <select
                  id="department"
                  name="department"
                  className="form-control"
                  value={selectedDepartment}
                  onChange={handleDepartmentChange}
                >
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
                  <h4>Department: {selectedDepartment}</h4>
                  <ul className="list-group">
                    {registeredStudentsByDepartment.map((student) => (
                      <li key={student._id} className="list-group-item">
                        {student.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Registered Students by Course</h3>
              <div className="form-group">
                <label htmlFor="course">Select Course:</label>
                <select
                  id="course"
                  name="course"
                  className="form-control"
                  value={selectedCourse}
                  onChange={handleCourseChange}
                >
                  <option value="">Select Course</option>
                  {courses.map((course) => (
                    <option key={course._id} value={course.name}>
                      {course.name}
                    </option>
                  ))}
                </select>
              </div>
              {selectedCourse && (
                <div>
                  <h4>Course: {selectedCourse}</h4>
                  <ul className="list-group">
                  {registeredStudentsByCourse.map((student) => (
                      <li key={student._id} className="list-group-item">
                        {student.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h3 className="card-title">Departments</h3>
              <ul className="list-group">
                {departments.map((department) => (
                  <li key={department._id} className="list-group-item">
                    {department.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Courses by Department</h3>
              <div className="form-group">
                <label htmlFor="department">Select Department:</label>
                <select
                  id="department"
                  name="department"
                  className="form-control"
                  value={selectedDepartment}
                  onChange={handleDepartmentChange}
                >
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
                  <h4>Department: {selectedDepartment}</h4>
                  <ul className="list-group">
                    {courses.map((course) => (
                      <li key={course._id} className="list-group-item">
                        {course.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;



