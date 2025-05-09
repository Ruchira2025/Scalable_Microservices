const axios = require('axios');

const INVENTORY_SERVICE_URL = process.env.INVENTORY_SERVICE_URL || "http://inventory-service:4003";

const updateStock = async (productId, quantity) => {
  try {
    const response = await axios.post(`${INVENTORY_SERVICE_URL}/api/inventory/update`, {
      productId,
      quantity,
    });

    return { success: response.data.updated, message: response.data.message };
  } catch (error) {
    console.error("Inventory Service Error:", error.message);
    return { success: false, message: "Inventory Service unavailable or insufficient stock" };
  }
};

module.exports = { updateStock };

