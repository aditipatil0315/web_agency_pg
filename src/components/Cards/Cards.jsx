import React from "react";
import "./Cards.css";

const Card = ({ heading, text }) => {
  return (
    <div className="card">
      <h3 className="card-heading">{heading}</h3>
      <br />
      <p className="card-text">{text}</p>
    </div>
  );
};

export default Card;


