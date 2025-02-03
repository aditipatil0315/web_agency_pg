import "./Section5.css";
import React, { useState } from "react";
import img2 from '../../assets/img2.png'


// import subscribeIcon from "./subscribe-icon.png";
// import requestIcon from "./request-icon.png";
// import reviewIcon from "./review-icon.png";

const Section5 = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };




  return (
    <>
    <section className="section5">
      <h2 className="section5__title">How it works</h2>
      <div className="section5__cards">
        
        {/* Card 1 */}
        <div className="section5__card">
          <div className="section5__card-icon">
            {/* <span>📞</span> */}
          </div>
          <h3 className="section5__card-title">1. Book a Free Consultation Call </h3>
          <p className="section5__card-text">
          Let us understand your goals and requirements.
          </p>
        </div>

        {/* Card 2 */}
        <div className="section5__card">
          <div className="section5__card-icon">
            {/* <span>🧠</span> */}

          </div>
          <h3 className="section5__card-title">2. Website Strategy & Design </h3>
          <p className="section5__card-text">
          We develop a strategy that aligns with your brand and target audience.
          </p>
        </div>

        {/* Card 3 */}
        <div className="section5__card">
          <div className="section5__card-icon">
            {/* <span>✔️</span> */}

          </div>
          <h3 className="section5__card-title">3. Launch Your Stunning Website </h3>
          <p className="section5__card-text">
          Attract traffic and leads with your new high-performing website.
          </p>
        </div>

      </div>
    </section>


    <section className="testimonials">
        <h2 className="testimonials__title">Testimonials</h2>
        <div className="testimonials__cards">
          {/* Testimonial 1 */}
          <div className="testimonials__card">
            <p>
              "Our new website not only looks incredible but also doubled our monthly traffic in just 2 months! "
            </p>
            <span>- John Doe</span>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonials__card">
            <p>
              "They delivered more than we expected. Leads started pouring in after the launch of our new website!"
            </p>
            <span>- Jane Smith</span>
          </div>
        </div>
      </section>
    


      <section className="faq">
        <h2 className="faq__title">FAQ</h2>

        <div className="faq__item">
          <div className="faq__question" onClick={() => toggleFAQ(0)}>
            Q1: How long does it take to build a website?
          </div>
          {openIndex === 0 && (
            <div className="faq__answer">
              A1: The timeline depends on the complexity, but most projects are delivered within
              4-6 weeks.
            </div>
          )}
        </div>

        <div className="faq__item">
          <div className="faq__question" onClick={() => toggleFAQ(1)}>
            Q2: Can you redesign my existing website?
          </div>
          {openIndex === 1 && (
            <div className="faq__answer">
              A2: Absolutely! We specialize in revamping outdated websites and turning them
              into traffic-generating platforms.
            </div>
          )}
        </div>

        <div className="faq__item">
          <div className="faq__question" onClick={() => toggleFAQ(2)}>
            Q3: Will my website be SEO-friendly?
          </div>
          {openIndex === 2 && (
            <div className="faq__answer">
              A3: Yes! Every website we create is optimized for search engines to ensure
              maximum visibility.
            </div>
          )}
        </div>
      </section>


    </>
  );
};

export default Section5;
