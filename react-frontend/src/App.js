import React, { useState } from "react";
import ProductTab from "./ProductTab";
import UserTab from "./UserTab";
import PurchaseTab from "./PurchaseTab";
import ReviewTab from "./ReviewTab";
import ReviewListTab from "./ReviewListTab";
import PurchaseSummaryTab from "./PurchaseSummaryTab";

function App() {
  const [step, setStep] = useState(0);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [purchaseId, setPurchaseId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const next = () => setStep(step + 1);
  const reset = () => {
    setStep(0);
    setCart([]);
    setUser(null);
    setPurchaseId(null);
    setSelectedProduct(null);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial", maxWidth: 800, margin: "auto" }}>
      <h2>🛍️ Microservices E-Commerce Demo (Group 40)</h2>

      {step === 0 && (
        <ProductTab
          cart={cart}
          setCart={setCart}
          next={next}
          setSelectedProduct={setSelectedProduct}
        />
      )}
      {step === 1 && <UserTab setUser={setUser} next={next} />}
      {step === 2 && (
        <PurchaseTab cart={cart} user={user} setPurchaseId={setPurchaseId} next={next} />
      )}
      {step === 3 && (
        <ReviewTab selectedProduct={selectedProduct} purchaseId={purchaseId} reset={reset} />
      )}
      {step === 5 && <PurchaseSummaryTab />}
      {step === 6 && <ReviewListTab />}

      <div style={{ marginTop: 30 }}>
        <button onClick={reset}>🔁 Start New Purchase</button>
        <button onClick={() => setStep(0)} style={{ marginLeft: 10 }}>🔙 Back to Products</button>
        <button onClick={() => setStep(5)} style={{ marginLeft: 10 }}>🧾 View Purchase Summary</button>
        <button onClick={() => setStep(6)} style={{ marginLeft: 10 }}>⭐ View Reviews</button>
      </div>
    </div>
  );
}

export default App;


