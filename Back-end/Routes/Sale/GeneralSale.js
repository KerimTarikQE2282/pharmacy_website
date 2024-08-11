const express=require('express')
const router=express.Router()
const { addGeneralSale,getAllGeneralSales,getGeneralSalesByOrderNumber,updateGeneralSale}=require('../../Controllers/SalesControllers/GeneralSale')

router.route('/').post(addGeneralSale).get(getAllGeneralSales)
router.route('/:OrderNumber').get(getGeneralSalesByOrderNumber).patch(updateGeneralSale)


module.exports=router;
