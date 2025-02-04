import React from 'react'
import './Section4.css'
import img2 from '../../assets/img2.png'

const Section4 = () => {
  return (
    <section className="section4" data-scroll-section>
    <div className="sec4_left">
      <img src= {img2} alt="Section visual" />
    </div>
    <div className="sec4_right">
      <div className="sec4_right_upper">
        <h2>Why Choose Us?</h2>
        <ul>
          <li><span>✔ </span>Websites That Gain Traffic &amp; Generate Leads</li>
          <li><span>✔ </span> Tailored Content Strategies to Make You an Industry Leader</li>
          <li><span>✔ </span>Proven Expertise Across Domains (Manufacturers, IT, SaaS, etc.)</li>
        </ul>
      </div>
      <div className="sec4_right_lower">
        <h2>Our Results:</h2>
        <ul>
          <li><span>✔ </span> 100+ Stunning Websites Designed</li>
          <li><span>✔ </span> High Traffic Websites That Convert Leads</li>
          <li><span>✔ </span> Trusted by 50+ Businesses Across Industries</li>
        </ul>
      </div>
    </div>
  </section>
  )
}

export default Section4