const express = require('express');
const { getUserDetails, saveUserDetails } = require('../controllers/userController');
const router = express.Router();

router.get('/fetch', getUserDetails);
router.post('/save', saveUserDetails);

module.exports = router;
