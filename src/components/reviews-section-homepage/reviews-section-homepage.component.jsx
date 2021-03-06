import React from "react";
import "./reviews-section-homepage.styles.scss";
import Rating from "@mui/material/Rating";
import ReviewsCarousel from "../reviews-carousel/reviews-carousel.component";
import { Link } from "react-router-dom";

const testprops = {
  averageReview: 4.9,
  verfiedReviewsNumber: 3018,
};

const ReviewsSectionHomepage = (props) => (
  <div className="reviews-section-homepage-container">
    <div className="reviews-content">
      <div className="left-side">
        <div className="average-reviews-number">{testprops.averageReview}</div>
        <div className="average-reviews-stars">
          <Rating
            name="read-only"
            value={testprops.averageReview}
            readOnly
            style={{ zIndex: 0 }}
          />
        </div>
        <p className="verified-reviews-number">
          {testprops.verfiedReviewsNumber} verified customers reviews
        </p>
      </div>
      <div className="right-side">
        <ReviewsCarousel />
        <Link className="see-all-reviews" to="/">
          See All Reviews
        </Link>
      </div>
    </div>
  </div>
);

export default ReviewsSectionHomepage;
