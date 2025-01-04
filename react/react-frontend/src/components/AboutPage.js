import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <div>
        <center>
          <h3 className="alert alert-success">About Us!</h3>
        </center>
        <div className="jumbotron">
          <h1 className="display-4">Hello, Reader!</h1>
          <p className="lead">
            A service dedicated to Admin and Student. We provide online
            resources, professional support and guidance to all our students
            whenever, and from wherever they have chosen to study.
          </p>
          <hr className="my-4" />
          <p>Explore our Website.</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="/" role="button">
              HOME
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
