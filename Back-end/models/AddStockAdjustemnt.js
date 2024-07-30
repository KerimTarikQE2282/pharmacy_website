const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addStockAdjustmentSchema = new Schema({
  ReferenceNumber: {
    type: String,
    required: [true, 'Please provide a reference number'],
  },
  AddStockQty: {
    type: Number,
    required: [true, 'Please provide the quantity to add'],
  },
  WareHouseId: {
    type: Schema.Types.ObjectId,
    ref: 'WareHouse',
    required: [true, 'Please provide the warehouse ID'],
  },
  AddingInventoryNotes: {
    type: String,
    default: null,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('AddStockAdjustment', addStockAdjustmentSchema);
