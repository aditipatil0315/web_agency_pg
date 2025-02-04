import React from "react";
import "./Section3.css";
import Card from "../../components/Cards/Cards";


const Section3 = () => {

  const cardData = [
    { heading: "Custom Website Design", text: "Beautiful, responsive, and tailored to your brand identity." },
    { heading: "SEO-Optimized Content Strategy", text: "Content designed to rank high on search engines and engage visitors." },
    { heading: "Lead-Focused Designs", text: "Every website element is crafted to drive conversions." },
  ];

  const cardData_2 = [
    { heading: "Industry-Specific Expertise", text: "Stand out in your field with a website designed for your target audience." },
    { heading: "Fast Load Times & Mobile-Friendly Design", text: "Perfect performance on all devices." },
  ];

  return (
    <div className="section3" data-scroll-section id="products">
      <div className="card_container">
        <h2>Services We Provide</h2>
        <div className="grid">
          {cardData.map((card, index) => (
            <div key={index} >
              <Card heading={card.heading} text={card.text} />
            </div>
          ))}
        </div>

        <div className="grid">
          {cardData_2.map((card, index) => (
            <div key={index} >
              <Card heading={card.heading} text={card.text} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;