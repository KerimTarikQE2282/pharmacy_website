const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unitSchema = new Schema({
  UnitName: {
    type: String,
    required: [true, 'Please provide unit name'],
  },
  UnitAbreviation: {
    type: String,
    default: null,
  },
  items: [{
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Unit', unitSchema);
