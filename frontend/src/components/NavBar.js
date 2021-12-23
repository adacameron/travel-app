import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logo} className="navbar-logo" alt="Logo" />
      <h1>FlyMe</h1>
      <div className="navbar-links">
        <ul className="navbar-links-list">
          <li className="navbar-links-item">
            <NavLink to="/">Flights</NavLink>
          </li>

          <li className="navbar-links-item">
            <NavLink to="/hotels">Hotels</NavLink>
          </li>

          <li className="navbar-links-item">
            <NavLink to="/hotels">Activities</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
