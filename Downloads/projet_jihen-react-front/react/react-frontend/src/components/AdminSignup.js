import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AdminSignup = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundColor: "#b6bde7",
          minHeight: "100vh",
          paddingTop: "20px",
        }}
      >
        <center>
          <h3 style={{ marginBottom: "0px" }} className="alert alert-success">
            Signup As Admin!
          </h3>
        </center>
        <div className="signup-form">
          <form className="form-horizontal">
            <center>
              <h2>Admin Signup</h2>
            </center>

            {/* Form Fields */}
            <div className="form-group">
              <label className="control-label col-xs-4">First Name</label>
              <div className="col-xs-8">
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  placeholder="Enter First Name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-xs-4">Last Name</label>
              <div className="col-xs-8">
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  placeholder="Enter Last Name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-xs-4">Email</label>
              <div className="col-xs-8">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter Email"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-xs-4">Password</label>
              <div className="col-xs-8">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter Password"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="form-group">
              <div className="col-xs-8 col-xs-offset-4">
                <button type="submit" className="btn btn-primary btn-lg">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
          <div className="text-center">
            Already have an account? <a href="/adminlogin">Login here</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminSignup;
