import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
      <li className="navbar-item">
          <Link to="/login">Login</Link>
        </li>
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


// import { Navbar, Container, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import './index.css';

// const HeaderMenu = () => {
//     return (
//         <div className='header-menu'>
//             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//                 <Container>
                    
//                     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                     <Navbar.Collapse id="responsive-navbar-nav">
//                         <Nav className="me-auto">
                         
//                             <Nav.Link href="/">
//                                 <Link to="/">Home</Link>   
//                             </Nav.Link> 
//                             <Nav.Link href="/studentregistration">
//                                 <Link to="/student-registration">Student Registration</Link>
//                             </Nav.Link>
                            
//                             <Nav.Link href="/studentlist">
//                                 <Link to="/student-list">Student List</Link>
//                             </Nav.Link>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </div>
//     );
// }

// export default HeaderMenu;