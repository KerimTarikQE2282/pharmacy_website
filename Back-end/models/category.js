

const mongoose = require('mongoose');



const categorySchema = new Schema({
  title: {
    type: String,
    required: [true, 'Please provide Category Name'],
  },
  description: {
    type: String,
    default: null,
  }
}, {
  timestamps: true 
});


module.exports = mongoose.model('Category', categorySchema);


