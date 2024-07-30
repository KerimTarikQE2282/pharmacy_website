

const mongoose=require('mongoose')

const brandSchema = new Schema({
   
    BrandName: {
      type: String,
      required: [true, 'Please provide item description'],
    }
   
  }, {
    timestamps: true
  });
  
  // Create and export the Brands model
module.exports = mongoose.model('Brand', brandSchema);
  
