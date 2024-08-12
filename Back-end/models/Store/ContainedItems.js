const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContainedItems = new Schema({

    item: {
        type: Schema.Types.ObjectId,
        ref: 'Item',
        required: [true, 'Please provide an item']
    },
    Item_count:{
        type:Number,
        required:[true,"please provide the count of the item"]
    },
    CartonNo:{
        Type:Number 
    },
    StoredAt:{
        type:Schema.Types.ObjectId,
        ref:'WareHouse'
    }
});

module.exports = mongoose.model('WareHouse', warehouseSchema);
