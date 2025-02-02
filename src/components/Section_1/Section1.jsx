import React, { useState } from 'react';
import './Section1.css';
import bannerImg from '../../assets/banner.png';

const Section1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='section1'>
      <div className="navbar">
        <div className="logo">
          Step <br />Digital
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <div className={`links ${menuOpen ? "open" : ""}`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
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
