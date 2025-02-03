import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <br />
      <div className="footer__wave">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path
            d="M0.00,49.98 C150.00,150.00 349.24,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
            style={{ stroke: "none", fill: "#fff" }}
          ></path>
        </svg>
      </div>

      <div className="footer__content">
        <h2>Your Stunning Website Is Just a Click Away!</h2>
        <p> <b> Book Your Free Consultation Now </b></p>
        <p>
         <b> Let’s create a website that drives traffic, attracts leads, and grows
          your business. </b>
        </p>
        <button className="explore_btn">Book a Call</button>
      </div>
    </footer>
  );
};

export default Footer;
