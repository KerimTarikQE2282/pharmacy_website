const express = require('express');
const router = express.Router();
const {add_New_Item_To_wareHouse}  =require('./../../Controllers/StoreControllers/WareHouseAdjustments')

// Define routes
router.route('/').post(add_New_Item_To_wareHouse)
// router.route('/:id').get(getItemsByID).post().patch(updateItems).delete(removeItems)

module.exports = router;
