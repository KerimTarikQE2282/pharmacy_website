const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transferStockAdjustmentSchema = new Schema({
  ReferenceNumber: {
    type: String,
    required: [true, 'Please provide a reference number'],
  },
  TransferStockQty: {
    type: Number,
    required: [true, 'Please provide the quantity to transfer'],
  },
  Notes: {
    type: String,
    default: null,
  },
  item: {
    type: Schema.Types.ObjectId,
    ref: 'Item',
    required: [true, 'Please provide the item ID'],
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('TransferStockAdjustment', transferStockAdjustmentSchema);
