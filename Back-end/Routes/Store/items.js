const express = require('express');
const router = express.Router();
const { addItem,getAllItems,getItemsByID,updateItems,removeItems,searchItem } = require('../../Controllers/StoreControllers/items');    

// Define routes
router.route('/').get(getAllItems).post(addItem)
router.route('/:id').get(getItemsByID).post().patch(updateItems).delete(removeItems)
router.route('/search').post(searchItem)

module.exports = router;
