import React, { useState } from "react";
import "./index.css";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can submit the feedback data to your server or take any other actions.

    // Reset the form after submission
    setName("");
    setEmail("");
    setRating("");
    setComment("");
  };

  return (
    <div className="feedback-form">
      <h1>Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="rating">Rating:</label>
        <select
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        >
          <option value="" disabled>
            Select rating
          </option>
          <option value="5">Excellent</option>
          <option value="4">Very Good</option>
          <option value="3">Good</option>
          <option value="2">Fair</option>
          <option value="1">Poor</option>
        </select>

        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
