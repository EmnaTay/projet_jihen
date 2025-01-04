import React from "react";
import NavbarAdmin from "./NavbarAdmin";
import Footer from "./Footer";

const AdminDashboard = ({ user }) => {
  return (
    <>
      <NavbarAdmin />
      <div
        style={{
          paddingTop: "20px",
          backgroundColor: "#f8f9fa",
          minHeight: "100vh",
        }}
      >
        <center>
          <h3 className="alert alert-success" style={{ marginBottom: "0px" }}>
            Welcome to Online Library!
          </h3>
        </center>
        <div className="jumbotron" style={{ marginBottom: "0px" }}>
          <h1 className="display-4 text-center">
            Hello, {user?.firstName || "Admin"}!
          </h1>
          <p className="lead text-center">
            As you are Admin, you can add a book to the library, view available
            books, issue books to students, view issued books, and many more...!
          </p>
          <hr className="my-4" />
          <p className="text-center">Options Available For You</p>
          <div className="options text-center">
            <a
              href="/addbook"
              className="btn btn-primary btn-lg active"
              role="button"
              aria-pressed="true"
            >
              Add Book To Library
            </a>
            <br />
            <br />
            <a
              href="/viewbook"
              className="btn btn-primary btn-lg active"
              role="button"
              aria-pressed="true"
            >
              View Available Books
            </a>
            <br />
            <br />
            <a
              href="/issuebook"
              className="btn btn-primary btn-lg active"
              role="button"
              aria-pressed="true"
            >
              Issue New Book
            </a>
            <br />
            <br />
            <a
              href="/viewissuedbook"
              className="btn btn-primary btn-lg active"
              role="button"
              aria-pressed="true"
            >
              View Issued Books
            </a>
            <br />
            <br />
            <a
              href="/viewstudent"
              className="btn btn-primary btn-lg active"
              role="button"
              aria-pressed="true"
            >
              View Students
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;
