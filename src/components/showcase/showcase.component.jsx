import React from "react";
import "./showcase.styles.scss";

import backgroundVideo from "./assets/Traffic - 1042.mp4";

import VideoPlayer from "react-background-video-player";

const Showcase = () => (
  <div className="showcase-container">
    <VideoPlayer
      className="video"
      src={backgroundVideo}
      autoPlay={true}
      muted={true}
    />
    <div className="showcase-content">
      <h1>You Deserve Smarter Homeowners Insurance</h1>
      <h3>Save up to 25%*• Get an instant quote</h3>
      <div className="zipcode-input-container">INPUT</div>
    </div>
  </div>
);

export default Showcase;
