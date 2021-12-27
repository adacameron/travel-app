import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/footer.css";
import github from "../assets/github.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-links">
          <ul className="footer-links-list">
            <li className="footer-links-item">
              <NavLink to="/">About us</NavLink>
            </li>

            <li className="footer-links-item">
              <NavLink to="/">FAQs</NavLink>
            </li>

            <li className="footer-links-item">
              <NavLink to="/">Sustainability</NavLink>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <img src={github} alt="Github Icon" />
          <img src={twitter} alt="Twitter Icon" />
          <img src={instagram} alt="Instagram Icon" />
        </div>
      </div>
      <div className="footer-h2">
        <h2>© FlyMe</h2>
      </div>
    </div>
  );
};

export default Footer;
