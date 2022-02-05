import React from "react";
import "./homepage.styles.scss";
import Showcase from "../../components/showcase/showcase.component";
import ReviewsSectionHomepage from "../../components/reviews-section-homepage/reviews-section-homepage.component";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zipCode: "",
    };
  }

  render() {
    return (
      <div className="homepage-container">
        <Showcase />
        <ReviewsSectionHomepage />
      </div>
    );
  }
}

export default HomePage;
