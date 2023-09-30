import React from "react";
import logo from "../../images/Freshcon LOGO.png"
import styles from './navbar.module.css'
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const handleClick = (e)=>{
    // const element = e.currentTarget;
    
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${styles.navContainer}`} id="nav">
      <NavLink className={`navbar-brand my-2 ${styles.navLogo} ml-1`} to="/">
        <img
          src={logo}
          width="100"
          height="100"
          alt="nav logo"
        />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className={`collapse navbar-collapse pl-5`} id="navbarSupportedContent">
        <ul className={`navbar-nav ml-auto mr-5 ${styles.navItems}`}>
          <li className="nav-item active mx-4">
            <NavLink className="nav-link" to="/" id="home" onClick={handleClick}>
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item mx-4">
            <NavLink className="nav-link" to="/about" id="about" onClick={handleClick}>
              About Us
            </NavLink>
          </li>
          <li className="nav-item mx-4">
            <NavLink className="nav-link" to="/contact" id="contact" onClick={handleClick}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
