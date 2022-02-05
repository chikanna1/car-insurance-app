import React from "react";
import "./reviews-section-homepage.styles.scss";
import Rating from "@mui/material/Rating";
import ReviewsCarousel from "../reviews-carousel/reviews-carousel.component";

const testprops = {
  averageReview: 4.9,
};
const ReviewsSectionHomepage = (props) => (
  <div className="reviews-section-homepage-container">
    <div className="left-side">
      <div className="average-reviews-number">{testprops.averageReview}</div>
      <div className="average-reviews-stars">
        <Rating name="read-only" value={testprops.averageReview} readOnly />
      </div>
    </div>
    <div className="right-side">
      <ReviewsCarousel />
    </div>
  </div>
);

export default ReviewsSectionHomepage;
