import React from "react";
import "./modern-auto-insurance.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModernAutoInsurance = () => (
  <div className="modern-auto-insurance-container">
    <div className="header">
      <h1>Modern Auto Insurance</h1>
      <h3>
        Policies provided by us set a new standard of home insurance and offer
        protection for what’s important to today’s homeowner.
      </h3>
    </div>
    <div className="modern-auto-insurance-cards-container">
      <div className="modern-auto-insurance-card">
        <FontAwesomeIcon
          className="icon"
          size="2x"
          icon={["fa", "dollar-sign"]}
        />
        <h3>Save up to $1300 a year</h3>
      </div>
      <div className="modern-auto-insurance-card">
        <FontAwesomeIcon
          className="icon"
          size="2x"
          icon={["fa", "car-crash"]}
        />
        <h3>File a claim in minutes</h3>
      </div>
      <div className="modern-auto-insurance-card">
        <FontAwesomeIcon className="icon" size="2x" icon={["fa", "bullhorn"]} />
        <h3>Earn cash for referring friends</h3>
      </div>
    </div>
  </div>
);

export default ModernAutoInsurance;
