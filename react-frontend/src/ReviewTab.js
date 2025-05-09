import React, { useState } from "react";

function ReviewTab({ selectedProduct, purchaseId, reset }) {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submit = () => {
    fetch("/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        purchaseId,
        productId: selectedProduct.id,
        rating,
        comment
      })
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to submit");
        return res.json();
      })
      .then(() => setSubmitted(true))
      .catch(() => alert("Review failed"));
  };

  return (
    <div>
      <h3>📝 Leave a Review</h3>
      <p><strong>Product:</strong> {selectedProduct.name}</p>
      <p><strong>Price:</strong> ₹{selectedProduct.price}</p>
      <p><strong>Purchase ID:</strong> {purchaseId}</p>

      {!submitted ? (
        <>
          <input
            placeholder="Rating (1-5)"
            value={rating}
            onChange={e => setRating(e.target.value)}
          /><br />
          <textarea
            placeholder="Comment"
            value={comment}
            onChange={e => setComment(e.target.value)}
          /><br />
          <button onClick={submit}>✅ Submit Review</button>
        </>
      ) : (
        <>
          <p>✅ Review Submitted!</p>
          <p><strong>Rating:</strong> {rating}</p>
          <p><strong>Comment:</strong> {comment}</p>
          <button onClick={reset}>🔁 Start New Purchase</button>
        </>
      )}
    </div>
  );
}

export default ReviewTab;

