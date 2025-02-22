import React, { useState } from "react";
import './Section1.css';
import bannerImg from '../../assets/img3.jpg';
import logo_img from '../../assets/step_tech_new.png';
import client1 from '../../assets/client1.png';
import client2 from '../../assets/client2.png';
import client3 from '../../assets/client3.png';


const Section1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault(); 
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false); 


  };

  const clients = [
    { name: "Rajog", img: client1, link: "https://helobimkos.com/" },
    { name: "Godrej", img: client2, link: "https://theater.xyz/" },
    { name: "Afcons", img: client3, link: "https://vedaamrith.com/" },
  ];

  return (
    <div className='section1' data-scroll-section id="home">
      <div className="navbar">
        <div className="logo">
          <img src= {logo_img} alt="" />
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
        
        <div className="right">
        <div className="left">
          <h1>Boost Your Online Sales with High-Converting E-Commerce Websites!</h1>
          <h3>We design e-commerce websites that don’t just look great – they attract customers, increase sales, and grow your business.</h3>
          <a href="#products"><button className='explore_btn' >Explore</button></a>
        </div>
          <img src={bannerImg} alt="Business Solutions" />
        </div>
      </div>

      <div className="clients-section">
      <h2 className="clients-heading">Our Clients</h2>
      <div className="clients-container">
        {clients.map((client, index) => (
          <a
            key={index}
            href={client.link}
            target="_blank"
            rel="noopener noreferrer"
            className="client-box"
          >
            <img src={client.img} alt={client.name} className="client-image" />
          </a>
        ))}
      </div>
    </div>

      <div className="cta">
      <br />

      

      <h2>Your Stunning Website Is Just a Click Away!</h2>
        <p> <b> Book Your Free Consultation Now </b></p>
        <p>
         <b> Let’s create a website that drives traffic, attracts leads, and grows
          your business. </b>
        </p>
        <a href="https://calendly.com/enquire-stepconsultancy/seo-landing-page" target="_blank" rel="noopener noreferrer">
  <button className="explore_btn">Book a Call</button>
</a>
    <br />
        </div>
      
    </div>
  );
};

export default Section1;