import React from "react";
import { Link } from "react-router-dom";

const NavbarAdmin = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
      <Link to="/" className="navbar-brand">
        Library Management
      </Link>
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
          <Link to="/" className="nav-item nav-link active">
            Home
          </Link>

          {/* Book Dropdown */}
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              id="bookDropdown"
              data-toggle="dropdown"
            >
              Book
            </a>
            <div className="dropdown-menu" aria-labelledby="bookDropdown">
              <Link to="/addbook" className="dropdown-item">
                Add Book
              </Link>
              <Link to="/viewbook" className="dropdown-item">
                View Book
              </Link>
            </div>
          </div>

          {/* Issue Book Dropdown */}
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              id="issueBookDropdown"
              data-toggle="dropdown"
            >
              Issue Book
            </a>
            <div className="dropdown-menu" aria-labelledby="issueBookDropdown">
              <Link to="/issuebook" className="dropdown-item">
                Issue New Book
              </Link>
              <Link to="/viewissuedbook" className="dropdown-item">
                View Issued Book
              </Link>
            </div>
          </div>

          {/* Student Dropdown */}
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              id="studentDropdown"
              data-toggle="dropdown"
            >
              Student
            </a>
            <div className="dropdown-menu" aria-labelledby="studentDropdown">
              <Link to="/viewstudent" className="dropdown-item">
                View Student
              </Link>
            </div>
          </div>
        </div>

        <div className="navbar-nav">
          <Link to="/logout" className="nav-item nav-link">
            LOGOUT
          </Link>
          &nbsp;
          <Link to="/aboutus" className="nav-item nav-link">
            About Us
          </Link>
          <Link to="/contactus" className="nav-item nav-link">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
