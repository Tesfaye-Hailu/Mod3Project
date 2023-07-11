// import React, { useState } from 'react';

// const StudentUpdate = ({ studentId, onUpdate }) => {
//   const [name, setName] = useState('');
//   const [department, setDepartment] = useState('');
//   const [course, setCourse] = useState('');
//   const [isEditable, setIsEditable] = useState(false);

//   const handleEdit = () => {
//     setIsEditable(true);
//   };

//   const handleSave = () => {
//     setIsEditable(false);

//     // Call the `onUpdate` function with the updated data
//     onUpdate(studentId, { name, department, course });
//   };

//   return (
//     <div>
//       {!isEditable ? (
//         <button onClick={handleEdit}>Update</button>
//       ) : (
//         <div>
//           <label>
//             Name:
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//           </label>
//           <label>
//             Department:
//             <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
//           </label>
//           <label>
//             Course:
//             <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} />
//           </label>
//           <button onClick={handleSave}>Save</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StudentUpdate;

import React, { useState, useEffect } from 'react';
import axios from 'axios';


const StudentUpdate = ({ studentId, onUpdate, currentData }) => {
  const [name, setName] = useState(currentData.name);
  const [department, setDepartment] = useState(currentData.department);
  const [course, setCourse] = useState(currentData.course);
  const [isEditable, setIsEditable] = useState(false);

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
            <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
          </label>
          <label>
            Course:
            <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} />
          </label>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default StudentUpdate;

