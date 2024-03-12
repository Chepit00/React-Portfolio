// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
import { NavLink } from 'react-router-dom';
import CSS from './Navigation.css'


function Navigation({ currentPage, handlePageChange }) {
  return (
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
