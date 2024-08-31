const mongoose = require('mongoose');

const creditSchema = new mongoose.Schema({
    orderNumber: {
        type: String,
        required: [true, "Please provide the order number"],
        unique: true
    },
    productName: {
        type: String,
        required: [true, "Please provide the product name"]
    },
    quantity: {
        type: Number,
        required: [true, "Please provide the quantity"]
    },
    unitPrice: {
        type: Number,
        required: [true, "Please provide the unit price"]
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Credit', creditSchema);
