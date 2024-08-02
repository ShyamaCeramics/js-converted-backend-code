const express = require('express');
const { getOrderDetails, getOrderProductsDetails, saveOrderDetails, updateOrderStatus } = require('../controllers/orderController');
const router = express.Router();

router.get('/fetch', getOrderDetails);
router.post('/save', saveOrderDetails);
router.put('/status', updateOrderStatus);
router.get('/:orderId', getOrderProductsDetails);

module.exports = router;
