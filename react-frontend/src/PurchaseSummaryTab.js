import React, { useEffect, useState } from "react";

function PurchaseSummaryTab() {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    fetch("/purchases")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(data => setPurchases(data))
      .catch(() => alert("Failed to fetch purchase summary"));
  }, []);

  return (
    <div>
      <h3>🧾 Purchase Summary</h3>
      {purchases.length === 0 ? (
        <p>No purchases recorded yet.</p>
      ) : (
        <ul>
          {purchases.map((p, idx) => (
            <li key={idx}>
              🛍️ {p.product.name} (₹{p.product.price}) by {p.user.username} on{" "}
              {new Date(p.createdAt).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PurchaseSummaryTab;

