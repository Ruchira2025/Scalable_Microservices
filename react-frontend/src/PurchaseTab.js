import React from "react";

function PurchaseTab({ cart, user, setPurchaseId, next }) {
  const submit = () => {
    const payload = {
      user,
      product: cart[0] // Assuming one product per purchase
    };

    fetch("/purchases", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
      .then(res => {
        if (!res.ok) throw new Error("Purchase failed");
        return res.json();
      })
      .then(data => {
        setPurchaseId(data.id);
        next();
      })
      .catch(err => {
        console.error(err);
        alert("Purchase failed");
      });
  };

  return (
    <div>
      <h3>🧾 Confirm Purchase</h3>
      <ul>
        {cart.map((item, idx) => (
          <li key={idx}>{item.name} - ₹{item.price}</li>
        ))}
      </ul>
      <button onClick={submit}>✅ Confirm & Continue</button>
    </div>
  );
}

export default PurchaseTab;

