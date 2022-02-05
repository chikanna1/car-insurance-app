import React from "react";
import "./reviews-carousel.styles.scss";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CustomerReview from "../customer-review/customer-review.component";

const ReviewsCarousel = (props) => (
  <div className="reviews-carousel-container">
    <Carousel
      showArrows={true}
      centerMode={true}
      centerSlidePercentage={33.3}
      showIndicators={false}
    >
      <div>
        <CustomerReview />
      </div>
      <div>
        <CustomerReview />
      </div>
      <div>
        <CustomerReview />
      </div>
    </Carousel>
  </div>
);

export default ReviewsCarousel;
