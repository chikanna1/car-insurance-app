import React from "react";
import "./homepage.styles.scss";
import Showcase from "../../components/showcase/showcase.component";
import ReviewsSectionHomepage from "../../components/reviews-section-homepage/reviews-section-homepage.component";
import Header from "../../components/header/header.component";
import MoreThanAutoInsurance from "../../components/more-than-auto-insurance/more-than-auto-insurance.component";
import HeaderMenuOnly from "../../components/header-menu-only/header-menu-only.component";
import { Sticky, StickyScrollUp, StickyProvider } from "react-stickup";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFullMenu: false,
      showLinksMenu: true,
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
      <div className="homepage-container">
        <StickyProvider>
          <HeaderMenuOnly />
          <div className="homepage-sections">
            <Showcase />
            {this.state.theposition < 0.1 ? null : (
              <Sticky>
                <Header />
              </Sticky>
            )}
            <ReviewsSectionHomepage />
            <MoreThanAutoInsurance />
          </div>
        </StickyProvider>
        ,
      </div>
    );
  }
}

export default HomePage;
