import React from "react";
import "./Navbar.css"; // Import styles for the Navbar

const Navbar = () => {
  return (
    <div className="bs-example">
      <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
        <a href="/" className="navbar-brand">
          Library Management
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav">
            <a href="/" className="nav-item nav-link active">
              Home
            </a>
            <a href="/adminclick" className="nav-item nav-link">
              Admin
            </a>
            <a href="/studentclick" className="nav-item nav-link">
              Student
            </a>
          </div>
          <div className="navbar-nav">
            <a href="/aboutus" className="nav-item nav-link">
              About Us
            </a>
            <a href="/contactus" className="nav-item nav-link">
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
