import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./footer.styles.scss";

const Footer = () => (
  <div className="footer-container">
    <div className="footer-links">
      <div className="link-group">
        <Link className="footer-link" to="/">
          About Us
        </Link>
        <Link className="footer-link" to="/">
          FAQ
        </Link>
        <Link className="footer-link" to="/">
          Blog
        </Link>
        <Link className="footer-link" to="/">
          Reviews
        </Link>
      </div>
      <div className="link-group">
        <Link className="footer-link" to="/">
          Contact Us
        </Link>
        <Link className="footer-link" to="/">
          Claims
        </Link>
        <Link className="footer-link" to="/">
          Careers
        </Link>
        <Link className="footer-link" to="/">
          For Agents
        </Link>
      </div>
      <div className="link-group">
        <Link className="footer-link" to="/">
          Terms of Service
        </Link>
        <Link className="footer-link" to="/">
          Privacy Policy
        </Link>
        <Link className="footer-link" to="/">
          Investors
        </Link>
        <Link className="footer-link" to="/">
          Newsroom
        </Link>
      </div>
    </div>
    <div className="footer-social-icons">
      <Link className="social-media-icon-link" to="/">
        <FontAwesomeIcon
          className="social-media-icon"
          icon={["fab", "facebook"]}
          size="2x"
        />
      </Link>
      <Link className="social-media-icon-link" to="/">
        <FontAwesomeIcon
          className="social-media-icon"
          icon={["fab", "instagram"]}
          size="2x"
        />
      </Link>
      <Link className="social-media-icon-link" to="/">
        <FontAwesomeIcon
          className="social-media-icon"
          icon={["fab", "google"]}
          size="2x"
        />
      </Link>
      <Link className="social-media-icon-link" to="/">
        <FontAwesomeIcon
          className="social-media-icon"
          icon={["fab", "pinterest"]}
          size="2x"
        />
      </Link>
    </div>
  </div>
);

export default Footer;
