const express = require('express');
const router = express.Router();
const { initiatePurchase } = require('../controllers/purchaseController');

router.post('/', initiatePurchase);

module.exports = router;

