
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootswatch/dist/lux/bootstrap.min.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              <strong>Login</strong>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <strong>Home</strong>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/student-registration" className="nav-link">
              <strong>Student Registration</strong>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/student-list" className="nav-link">
              <strong>Student List</strong>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/reports" className="nav-link">
              <strong>Reports</strong>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

