import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddressInput from "../address-input/address-input.component";

function Header() {
  return (
    <div className="header-container">
      <div className="header-left">
        <h1 className="logo">LOGO</h1>
      </div>
      <div className="header-right">
        <div className="header-menu">
          <Link className="header-link" to="about">
            About
          </Link>
          <Link className="header-link" to="resources">
            Resources
          </Link>
          <Link className="header-link" to="contact-us">
            Contact Us
          </Link>
          <Link className="header-link" to="claims">
            Claims
          </Link>
          <Link className="header-link login" to="log-in">
            Log In
          </Link>
          <Link className="header-link icon" to="log-in">
            <FontAwesomeIcon
              className="header-icon-1"
              size="2x"
              icon={["fas", "car"]}
            />
          </Link>
        </div>
        <div className="address-input">
          <AddressInput />
        </div>
      </div>
    </div>
  );
}

export default Header;
