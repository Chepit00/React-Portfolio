// Importing NavLink from react-router-dom and Navigation.css
import { NavLink } from 'react-router-dom';
import './Navigation.css'

// Functional component for navigation bar
function Navigation() {
  return (
     // Unordered list with Bootstrap classes and custom CSS class
    <ul className="nav nav-tabs navigation flex flex-wrap justify-between items-center">
            <NavLink as="li" className="nav-link text-light" to="/">
          Home
        </NavLink>
        <NavLink as="li" className="nav-link text-light" to="/aboutme">
          About Me
        </NavLink>        
        <NavLink as="li" className="nav-link text-light" to="/portfolio">
          Portfolio
        </NavLink>
        <NavLink as="li" className="nav-link text-light" to="/contact">
          Contact
        </NavLink> 
        <NavLink as="li" className="nav-link text-light" to="/resume">
          Resume
        </NavLink> 
      </ul>
  );
}

export default Navigation;
