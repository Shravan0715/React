import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyApp</div>
      <ul className="nav-links">
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/post/1" activeClassName="active">
            Post 1
          </NavLink>
        </li>
        <li>
          <NavLink to="/post/2" activeClassName="active">
            Post 2
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
