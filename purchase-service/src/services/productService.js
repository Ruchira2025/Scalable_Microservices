const axios = require('axios');

const PRODUCT_SERVICE_URL = process.env.PRODUCT_SERVICE_URL || "http://product-service:4002";

const checkAvailability = async (productId) => {
  try {
    const response = await axios.get(`${PRODUCT_SERVICE_URL}/api/products/${productId}`);
    return { available: response.data.available };
  } catch (error) {
    console.error("Product Service Error:", error.message);
    throw new Error("Product Service unavailable");
  }
};

module.exports = { checkAvailability };

