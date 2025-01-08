import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import AddBook from "./components/AddBook";
import AdminDashboard from "./components/AdminDashboard";
import AdminHome from "./components/AdminHome";
import AdminLogin from "./components/AdminLogin";
import AdminSignup from "./components/AdminSignup";

const user = { firstName: "Fish inside birdcage" };

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route
          path="/admindashboard"
          element={<AdminDashboard user={user} />}
        />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminsignup" element={<AdminSignup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
