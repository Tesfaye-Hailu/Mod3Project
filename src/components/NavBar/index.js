import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/student-registration">Student Registration</Link>
        </li>
        <li className="navbar-item">
          <Link to="/student-list">Student List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;