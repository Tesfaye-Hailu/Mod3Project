import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import StudentRegistration from './components/StudentRegistration';
import StudentList from './components/StudentList';


function App() {
  return (
    <Router>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-registration" element={<StudentRegistration />} />
        <Route path="/student-list" element={<StudentList />} />
        <Route path="/*" element={<Home />} /> 
      </Routes>
    </Router>
  );
}

export default App;