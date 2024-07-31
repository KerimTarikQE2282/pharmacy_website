
const mongoose=require('mongoose')


const itemSchema=new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide item title'],
        maxlength: 100,
        minlength: 3,
      },
      description: {
        type: String,
        required: [true, 'Please provide item description'],
        minlength: 3,
      },
    //   Category: {
    //     type: String,
    //     required: [true, 'Please provide item description'],
    //     minlength: 3,
    //   },
          
    //   unit: {
    //     type: number,
    //     required: [true, 'Please provide item unit'],
    //     maxlength: 100,
    //     minlength: 3,
    //   },
    //   brand: {
    //     type: String,
    //     required: [true, 'Please provide item SKU'],
    //     maxlength: 100,
    //     minlength: 3,
    //   },
    //   Supplier: {
    //     type: String,
    //     required: [true, 'Please provide item SKU'],
    //     maxlength: 100,
    //     minlength: 3,
    //   },
      
      SKU: {
        type: String,
        required: [true, 'Please provide item SKU'],
        maxlength: 100,
        minlength: 3,
      },
      barcode: {
        type: String,
        //required: [true, 'Please provide item barcode'],
        maxlength: 100,
        minlength: 3,
      },

    costPrice: {
        type: Number,
        required: [true, 'Please provide item costPrice'],
   
      },
      sellingPrice: {
        type: Number,
        required: [true, 'Please provide item sellingPrice'],
 
      },
      reorderPoint: {
        type: Number,
        required: [true, 'Please provide item reorderPoint']
      },
      imagesUrl: {
        type: String,
        required: [true, 'Please provide item imagesUrl'],
            },
     weight: {
        type: String,
        },
        dimensions: {
        type: String,
        required: [true, 'Please provide item dimensions'],
      },
      taxRate: {
        type: Number,
        required: [true, 'Please provide item taxRate'],
      
      },
      notes: {
        type: String
      }},
     {timestamps: true}

)

module.exports=mongoose.model('Item',itemSchema)