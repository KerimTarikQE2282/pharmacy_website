// routes/users.js

const express = require('express');
const router = express.Router();
const { getAllJobs,AddItem } = require('../Controllers/items');    

// Define routes
router.get('/', getAllJobs);
router.post('/',AddItem)

module.exports = router;
