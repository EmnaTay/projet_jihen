import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AdminHome = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          paddingTop: "20px",
          backgroundColor: "#f8f9fa",
          minHeight: "100vh",
        }}
      >
        <div className="jumbotron" style={{ marginBottom: "0px" }}>
          <h1 className="display-4 text-center">Hello, Admin</h1>
          <p className="lead text-center">
            Welcome to Online Library Management System.
          </p>
          <hr className="my-4" />
          <p className="text-center">
            You can access various features after Login/SignUp.
          </p>
          <div className="text-center">
            <a
              className="btn btn-primary btn-lg"
              href="/adminsignup"
              role="button"
            >
              SignUp
            </a>
            &nbsp;&nbsp;
            <a
              className="btn btn-primary btn-lg"
              href="/adminlogin"
              role="button"
            >
              Login
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminHome;
