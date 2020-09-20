import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Contact from "../Contact/Contact";
const Navbar = () => {
  return (
    <div>
      <nav className="navigation">
        <ul id="nav" className="navigation-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="features"> Features</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
