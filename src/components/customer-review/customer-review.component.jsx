import React from "react";
import "./customer-review.styles.scss";
import Rating from "@mui/material/Rating";

const testprops = {
  customerReviewRating: 5,
  customerReviewText:
    "Extremely satisfied. Agent was very knowledable and helpful in getting me the best coverage possible.",
  customerReviewName: "Paulette A.",
};

const CustomerReview = (props) => (
  <div className="customer-review-container">
    <div className="customer-review-stars">
      <Rating
        name="read-only"
        value={testprops.customerReviewRating}
        readOnly
      />
    </div>
    <div className="customer-review-text">
      <p>{`"${testprops.customerReviewText}"`}</p>
    </div>
    <div className="customer-review-name">
      <p>{`"${testprops.customerReviewName}"`}</p>
    </div>
  </div>
);

export default CustomerReview;
