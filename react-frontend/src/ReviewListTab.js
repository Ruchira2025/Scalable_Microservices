import React, { useEffect, useState } from "react";

function ReviewListTab() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews")
      .then(res => res.json())
      .then(setReviews)
      .catch(() => alert("Failed to load reviews"));
  }, []);

  return (
    <div>
      <h3>⭐ Product Reviews</h3>
      {reviews.length === 0 && <p>No reviews yet.</p>}
      {reviews.map((r, i) => (
        <div key={i} style={{ border: "1px solid #aaa", margin: 10, padding: 10 }}>
          <p><strong>Purchase ID:</strong> {r.purchaseId}</p>
          <p><strong>Product ID:</strong> {r.productId}</p>
          <p><strong>Rating:</strong> {r.rating}</p>
          <p><strong>Comment:</strong> {r.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewListTab;

