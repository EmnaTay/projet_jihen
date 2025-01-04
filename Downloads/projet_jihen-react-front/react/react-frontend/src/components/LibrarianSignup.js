import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LibrarianSignup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // Fonction pour gérer les changements des champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pouvez envoyer formData au serveur pour inscription
    console.log("Form submitted: ", formData);
    // Après l'inscription réussie, redirigez l'utilisateur (par exemple vers la page de connexion)
    navigate("/librarianlogin");
  };

  return (
    <div className="signup-form" style={{ width: "500px", margin: "0 auto", padding: "30px 0" }}>
      <form onSubmit={handleSubmit}>
        <h2>Librarian Signup</h2>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-lg">Signup</button>
        </div>
      </form>
      <div className="text-center">
        Already have an account? <a href="/librarianlogin">Login here</a>
      </div>
    </div>
  );
};

export default LibrarianSignup;
