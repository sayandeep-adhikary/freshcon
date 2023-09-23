import React from "react";
import logo from "../../images/Freshcon LOGO.png"
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${styles.navContainer}`}>
      <a className={`navbar-brand my-2 ${styles.navLogo}`} href="#">
        <img
          src={logo}
          width="100"
          height="100"
          alt="nav logo"
        />
      </a>
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
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mr-5">
          <li className="nav-item active mx-4">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item mx-4">
            <a className="nav-link" href="#">
              About Us
            </a>
          </li>
          <li className="nav-item mx-4">
            <a className="nav-link" href="#">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
