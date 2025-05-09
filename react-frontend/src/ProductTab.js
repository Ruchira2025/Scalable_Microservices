import React, { useEffect, useState } from "react";

function ProductTab({ cart, setCart, next, setSelectedProduct }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products")
      .then(res => res.json())
      .then(setProducts)
      .catch(err => console.error("❌ Failed to load products:", err));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setSelectedProduct(product);
  };

  return (
    <div>
      <h3>Available Products</h3>
      {products.map(p => (
        <div key={p.id}>
          <strong>{p.name}</strong> - ₹{p.price}
          <button onClick={() => addToCart(p)} style={{ marginLeft: "10px" }}>Add</button>
        </div>
      ))}
      {cart.length > 0 && <button onClick={next} style={{ marginTop: "20px" }}>➡️ Continue</button>}
    </div>
  );
}

export default ProductTab;

