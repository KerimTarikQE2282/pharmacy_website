// routes/users.js

const express = require('express');
const router = express.Router();
const { get } = require('../Controllers/items');    

// Define routes
router.get('/', get);

module.exports = router;
