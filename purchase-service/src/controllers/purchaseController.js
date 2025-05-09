const productService = require('../services/productService');
const inventoryService = require('../services/inventoryService');

const initiatePurchase = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    const product = await productService.checkAvailability(productId);

    if (!product.available) {
      return res.status(400).json({ message: "Product unavailable" });
    }

    const inventoryUpdate = await inventoryService.updateStock(productId, quantity);

    if (!inventoryUpdate.success) {
      return res.status(400).json({ message: inventoryUpdate.message });
    }

    return res.status(200).json({ message: "Purchase successful" });
  } catch (error) {
    console.error("Purchase Error:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { initiatePurchase };

