const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let purchases = [];
let nextId = 1;

app.post("/purchases", (req, res) => {
  const { user, product } = req.body;

  if (!user || !product) {
    return res.status(400).json({ error: "Missing user or product" });
  }

  const newPurchase = {
    id: nextId++,
    user,
    product,
    createdAt: new Date().toISOString()
  };

  purchases.push(newPurchase);
  console.log("✅ Saved purchase:", newPurchase);

  res.status(201).json({ id: newPurchase.id });
});

app.get("/purchases", (req, res) => {
  console.log("📤 Returning purchases:", purchases);
  res.json(purchases);
});

app.listen(4000, () => {
  console.log("🧾 Purchase Service running on port 4000");
});

