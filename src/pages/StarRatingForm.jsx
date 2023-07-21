import React, { useState } from "react";
import "./index.css";

const StarRatingForm = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleMouseEnter = (index) => {
    setHoveredRating(index);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleClick = (index) => {
    setRating(index);
  };

  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="star-rating-form">
      <h1>Star Rating Form</h1>
      <p>Hover over the stars and click to rate:</p>
      <div className="stars">
        {stars.map((star) => (
          <span
            key={star}
            className={`star ${
              star <= (hoveredRating || rating) ? "active" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(star)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(star)}
          >
            &#9733;
          </span>
        ))}
      </div>
      <p>Your rating: {rating}</p>
    </div>
  );
};

export default StarRatingForm;
