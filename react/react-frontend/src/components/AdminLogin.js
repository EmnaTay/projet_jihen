import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AdminLogin = () => {
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
            Login As Admin!
          </h3>
        </center>
        <div className="signup-form">
          <form className="form-horizontal">
            <center>
              <h2>Admin Login</h2>
            </center>

            {/* Form Fields */}
            <div className="form-group">
              <label className="control-label col-xs-4">Username</label>
              <div className="col-xs-8">
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Enter Username"
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
                  Login
                </button>
              </div>
            </div>
          </form>
          <div className="text-center">
            Do not have an account? <a href="/adminsignup">Signup here</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminLogin;
