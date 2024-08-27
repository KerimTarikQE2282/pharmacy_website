const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const warehouseSchema = new Schema({
  WareHouseName: {
    type: String,
    required: [true, 'Please provide warehouse name'],
  },
  WareHouseLocation: {
    type: String,
    required: [true, 'Please provide warehouse location'],
  },
  WareHouseDescription: {
    type: String,
    default: null,
  },
  WareHouseType: {
    type: String,
    default: null,
  }
});
//TODO Add Capacity
module.exports = mongoose.model('WareHouse', warehouseSchema);
