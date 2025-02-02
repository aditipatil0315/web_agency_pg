import React from 'react'
import './Section3.css'
import Card from '../../components/Cards/Cards'


const Section3 = () => {

    const cardData = [
        { heading: "Customization", text: "Develop specialized tools tailored specifically to address your unique business challenges." },
        { heading: "Secure & Reliable", text: "Strong security ensures data privacy without commercialization." },
        { heading: "Tailored Solutions for Every Industry", text: "Our tools fit any industry, from manufacturing to retail.." },
      ];

      const cardData_2 = [
        { heading: " User-Focused Design", text: "User-friendly software with a clean, intuitive design and customizable UI/UX." },
        { heading: "Scalability & Growth", text: "Purposefully Built for Scalability and Long-Term Growth Opportunities" },
        { heading: "Secure & Reliable", text: "Strong security ensures data privacy without commercialization." },
      ];


  return (
    <div className='section3'>
        <div className="card_container">
            <br />
            <br />
            <br />
            <h2>Services We Provide</h2>
            <br />
            <div className="grid">

        {cardData.map((card, index) => (
            <Card key={index} heading={card.heading} text={card.text} />
        ))}
        </div>

        <div className="grid">


{cardData_2.map((card, index) => (
    <Card key={index} heading={card.heading} text={card.text} />
))}

</div>
        </div>


    </div>
  )
}

export default Section3