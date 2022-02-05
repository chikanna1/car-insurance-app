import React from "react";
import "./showcase.styles.scss";

import heroVideo from "./assets/Traffic - 1042.mp4";
import ReactPlayer from "react-player";

import { makeStyles } from "@material-ui/core/styles";
import VideoPlayer from "react-background-video-player";
import { createPortal } from "react-dom";
import { faBlackberry } from "@fortawesome/free-brands-svg-icons";

const myStyle = {};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 50px 0 50px",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    "& video": {
      objectFit: "cover",
    },
    backgroundColor: "rgba(0, 0, 0, 1)",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  title: {
    paddingBottom: theme.spacing(4),
  },
}));

const Showcase = () => {
  const classes = useStyles();

  return (
    <div className="showcase-container">
      <section className={classes.root}>
        <ReactPlayer
          url={heroVideo}
          playing
          loop
          muted
          width="100%"
          height="100%"
        />
        <div className={classes.overlay}>
          <div className="showcase-content">
            <h1>You Deserve Smarter Homeowners Insurance</h1>
            <h3>Save up to 25%*• Get an instant quote</h3>
            <div className="quote-button-container">
              <button className="quote-button">Quote in 60 Seconds</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Showcase;
