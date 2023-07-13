
import React, { useState } from 'react';
import './index.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the entered username and password match the expected credentials
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Invalid username or password!');
    }

    // Clear the input fields after submission
    setUsername('');
    setPassword('');
  };

  // Render the login form or a logged-in message based on the login state
  return (
    <div>
      <div className="container">
        {isLoggedIn ? (
          <div>
            <h2>Welcome, {username}!</h2>
            <p>You have successfully logged in.</p>
          </div>
        ) : (
          <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username:</label>
                <input type="text" id="username" className="form-control" value={username} onChange={handleUsernameChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password:</label>
                <input type="password" id="password" className="form-control" value={password} onChange={handlePasswordChange} />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        )}
      </div>
      <div className="scroll-message-container">
        <div className="scroll-message">
          WELCOME TO TESFAYE TECH BOOTCAMP 
        </div>
      </div>
    </div>
  );
};

export default Login;