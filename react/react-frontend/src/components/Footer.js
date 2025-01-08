import React from "react";
import "./Footer.css"; // Import styles for the footer

const Footer = () => {
  return (
    <footer>
      <p>
        <a href="#" className="fa fa-facebook"></a>
        <a
          href="https://api.whatsapp.com/send?phone=917036037203&text=Hello%20Mohammad%20Burhan.%0d%0aHow%20are%20you%20%3f%0d%0aI%20came%20from%20your%20website.&source=&data=#"
          className="fa fa-whatsapp"
        ></a>
        <a href="#" className="fa fa-instagram"></a>
        <a href="#" className="fa fa-twitter"></a>
      </p>

      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="footer-copyright">
              <p>
                Made in India <br />
                Copyright &copy; 2022 Mohammad Burhan
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
