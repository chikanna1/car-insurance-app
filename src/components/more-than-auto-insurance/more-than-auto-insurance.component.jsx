import React from "react";
import "./more-than-auto-insurance.styles.scss";

import image1Url from "./assets/modern-insurance.jpg";
import image2Url from "./assets/freedom.jpg";
import image3Url from "./assets/roadside-assistance.jpg";

const MoreThanAutoInsurance = () => (
  <div className="more-than-auto-insurance-container">
    <div className="header">
      <h1>More than Auto insurance: Auto Awareness</h1>
      <h3>
        We can help you care for your car and prevent small issues from becoming
        expensive headaches.
      </h3>
    </div>
    <div className="our-insurance-attributes">
      <div className="insurance-attribute background-1">
        <div
          className="insurance-attribute-image"
          style={{ backgroundImage: `url(${image1Url})` }}
        />
        <div className="insurance-attribute-text">
          <h1 className="insurance-attribute-header">Modern</h1>
          <p>
            You should be rewarded for being smart and staying safe. That’s why
            we use your real-time road data to save good drivers up to
            $900/year.
          </p>
        </div>
      </div>
      <div className="insurance-attribute background-2 reverse">
        <div
          className="insurance-attribute-image"
          style={{ backgroundImage: `url(${image2Url})` }}
        />
        <div className="insurance-attribute-text">
          <h1 className="insurance-attribute-header">Fácil</h1>
          <p>
            Personalize your coverage easily and quickly with a simple phone
            call. We have options for everyone.
          </p>
        </div>
      </div>
      <div className="insurance-attribute background-3">
        <div
          className="insurance-attribute-image"
          style={{ backgroundImage: `url(${image3Url})` }}
        />
        <div className="insurance-attribute-text">
          <h1 className="insurance-attribute-header">Reliable</h1>
          <p>
            We got your back whenever you need assistance with our 24/7 Roadside
            Assistance. We are there when you need us.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default MoreThanAutoInsurance;
