const StatusCodes=require('http-status-codes')
const { BadRequestError } = require('../../errors')
const ContainedItemsModel=require('../../models/Store/WareHouseItem');
const { findByIdAndUpdate } = require('../../models/Store/AddStockAdjustemnt');
const WareHouseItem = require('../../models/Store/WareHouseItem');
const warehouse = require('../../models/Store/warehouse');
const itemModel = require('../../models/Store/item');

const WareHouseAddedItems = async (req, res) => {
    const addedItems = await ContainedItemsModel.find({ itemWentTo: { $size: 1 } });
const resJson = [];

for (const item of addedItems) {
    // Await the results of the asynchronous operations
    const itemDetails = await itemModel.findOne({ _id: item.item });
    const wareHouseDetails = await warehouse.findOne({ _id: item.StoredAt });

    // Push the resolved data into resJson
    resJson.push({
        item: itemDetails.title,
        StoredAt: wareHouseDetails.WareHouseName,
        createdAt: item.createdAt,
        carton: item.Carton_Number
    });
}
    res.status(StatusCodes.OK).json(resJson)
}

const WareHouseTransferedItems = async (req, res) => {
    const addedItems = await ContainedItemsModel.find({ });
    const resJson = [];
    
    for (const item of addedItems) {
        // Await the results of the asynchronous operations
        const itemDetails = await itemModel.findOne({ _id: item.item });
        const wareHouseDetails = await warehouse.findOne({ _id: item.StoredAt });
    
        // Push the resolved data into resJson
        resJson.push({
            item: itemDetails.title,
            StoredAt: wareHouseDetails.WareHouseName,
            createdAt: item.createdAt,
            carton: item.Carton_Number
        });
    }
        res.status(StatusCodes.OK).json(resJson)
}

module.exports={WareHouseAddedItems,WareHouseTransferedItems}