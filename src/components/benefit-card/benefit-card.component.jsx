import React from "react";
import "./benefit-card.styles.scss";

const BenefitCard = (props) => (
  <div className="benefit-container">
    <div className="benefit-img">{props.imageurl}</div>
  </div>
);
