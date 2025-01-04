import React from "react";
import "./MainPage.css"; // Add custom styles here
import Navbar from "./Navbar"; // Replace with your React Navbar component
import Footer from "./Footer"; // Replace with your React Footer component

const MainPage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Carousel */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              height="500px"
              src="/static/images/lib1.png"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              height="500px"
              src="/static/images/lib2.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              height="500px"
              src="/static/images/lib3.webp"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      {/* Jumbotron */}
      <div className="jumbotron">
        <h1 style={{ textAlign: "center" }} className="display-4">
          Hello, Reader!
        </h1>
        <p className="lead">
          A service dedicated to Admin and Student. We provide online resources,
          professional support and guidance to all our students whenever, and
          from wherever they have chosen to study.
        </p>
        <hr className="my-4" />
        <div className="row">
          <div className="col-lg-6 text-center">
            <img
              src="/static/images/Admin-icon.png"
              width="50%"
              height="50%"
              alt="Admin"
            />
            <br />
            <br />
            <a
              className="btn btn-primary btn-lg"
              href="/adminclick"
              role="button"
            >
              Admin
            </a>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src="/static/images/student.png"
              width="50%"
              height="50%"
              alt="Student"
            />
            <br />
            <br />
            <a
              className="btn btn-primary btn-lg"
              href="/studentclick"
              role="button"
            >
              Student
            </a>
          </div>
        </div>
        <hr className="my-4" />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainPage;
