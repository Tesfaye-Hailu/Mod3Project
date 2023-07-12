

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Home from './components/Home';
import StudentRegistration from './components/StudentRegistration';
import StudentList from './components/StudentList';
import Reports from './components/Reports';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/student-registration" element={<StudentRegistration />} />
        <Route path="/student-list" element={<StudentList />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

