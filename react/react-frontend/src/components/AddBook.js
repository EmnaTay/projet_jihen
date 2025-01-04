import React, { useState } from "react";
import NavbarAdmin from "./NavbarAdmin";
import Footer from "./Footer";

const AddBook = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to your backend (using fetch, axios, etc.)
    console.log("Form Submitted:", formData);
    alert("Book Added Successfully!");
  };

  return (
    <>
      <NavbarAdmin />
      <div style={{ backgroundColor: "#b6bde7", padding: "20px 0" }}>
        <center>
          <h3 className="alert alert-success" style={{ marginBottom: "0px" }}>
            ADD BOOK IN LIBRARY!
          </h3>
        </center>
        <div className="signup-form">
          <form onSubmit={handleSubmit} className="form-horizontal">
            <center>
              <h2>ADD BOOK IN LIBRARY</h2>
            </center>
            {/* Replace this with your fields */}
            <div className="form-group">
              <label className="control-label col-xs-4">Book Title</label>
              <div className="col-xs-8">
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-xs-4">Author</label>
              <div className="col-xs-8">
                <input
                  type="text"
                  name="author"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-xs-4">ISBN</label>
              <div className="col-xs-8">
                <input
                  type="text"
                  name="isbn"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="col-xs-8 col-xs-offset-4">
                <button type="submit" className="btn btn-primary btn-lg">
                  ADD
                </button>
              </div>
            </div>
          </form>
          <div className="text-center">
            View Available Books In Library <a href="/viewbook">Click here</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddBook;
