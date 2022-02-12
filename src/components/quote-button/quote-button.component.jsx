import React from "react";
import "./quote-button.styles.scss";

const QuoteButton = (props) => (
  <div className="quote-button-container">
    <button className={`quote-button ${props.size}`}>
      Quote in 60 Seconds
    </button>
  </div>
);

export default QuoteButton;
