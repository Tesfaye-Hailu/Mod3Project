// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavBar from './components/NavBar';
// import Home from './components/Home';
// import StudentRegistration from './components/StudentRegistration';
// import StudentList from './components/StudentList';
// import Login from './components/Login';


// function App() {
//   return (
//     <Router>
//       <Route path="/login" element={<Login />} />
//       <NavBar />
//         <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/student-registration" element={<StudentRegistration />} />
//         <Route path="/student-list" element={<StudentList />} />
//         <Route path="/*" element={<Home />} /> 
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/Login';
// import NavBar from './components/NavBar';
// import Home from './components/Home';
// import StudentRegistration from './components/StudentRegistration';
// import StudentList from './components/StudentList';

// function App() {
//   return (
//     <Router>
//       <NavBar />
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/" element={<Home />} />
//         <Route path="/student-registration" element={<StudentRegistration />} />
//         <Route path="/student-list" element={<StudentList />} />
//         <Route path="/*" element={<Home />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Home from './components/Home';
import StudentRegistration from './components/StudentRegistration';
import StudentList from './components/StudentList';
import PrivateRoute from './components/Login/privateRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <PrivateRoute path="/" element={<Home />} isLoggedIn={isLoggedIn} />
        <PrivateRoute
          path="/student-registration"
          element={<StudentRegistration />}
          isLoggedIn={isLoggedIn}
        />
        <PrivateRoute path="/student-list" element={<StudentList />} isLoggedIn={isLoggedIn} />
      </Routes>
    </Router>
  );
}

export default App;