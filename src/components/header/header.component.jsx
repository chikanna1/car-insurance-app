import React, { useState } from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddressInput from "../address-input/address-input.component";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: props.position,
      theposition: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    this.setState({
      theposition: scrolled,
    });
  };

  render() {
    return (
      <div className="header-container">
        <div className="header-left">
          <h1 className="logo">LOGO</h1>
        </div>
        <div className="header-right">
          <div
            className={
              this.state.theposition < 0.4
                ? `header-menu hide`
                : `header-menu display`
            }
          >
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
          <div
            className={
              this.state.position > 0.1
                ? `address-input display`
                : `address-input hide`
            }
          >
            <AddressInput />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
