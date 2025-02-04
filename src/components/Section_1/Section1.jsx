import React, { useState } from "react";
import './Section1.css';
import bannerImg from '../../assets/banner_girl_.png';

const Section1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle smooth scrolling
  const handleScroll = (e, id) => {
    e.preventDefault(); // Prevent default anchor behavior
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false); // Close the mobile menu
  };

  return (
    <div className='section1' data-scroll-section id="home">
      <div className="navbar">
        <div className="logo">
          Step <br />Digital
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <div className={`links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={(e) => handleScroll(e, "home")}>Home</a>
          <a href="#about" onClick={(e) => handleScroll(e, "about")}>About</a>
          <a href="#products" onClick={(e) => handleScroll(e, "products")}>Products</a>
          <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a>
        </div>
      </div>

      <div className="content_section">
        <div className="left">
          <h1>Transform Your Online Presence with Stunning Websites That Drive Results!</h1>
          <h3>We design websites that don’t just look great – they bring traffic, generate leads, and grow your business.</h3>
          <button className='explore_btn'>Explore</button>
        </div>
        <div className="right">
          <img src={bannerImg} alt="Business Solutions" />
        </div>
      </div>
    </div>
  );
};

export default Section1;