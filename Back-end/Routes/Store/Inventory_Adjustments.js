const express = require('express');
const router = express.Router();
const {add_New_Item_To_wareHouse,Adjust_wareHouse_Item}  =require('./../../Controllers/StoreControllers/WareHouseAdjustments')
const {WareHouseAddedItems}=require('./../../Controllers/StoreControllers/getWareHouseAdjustments')
// Define routes
router.route('/').post(add_New_Item_To_wareHouse)
router.route('/adjust').post(Adjust_wareHouse_Item)
router.route('/NewItems').get(WareHouseAddedItems)
module.exports = router;
