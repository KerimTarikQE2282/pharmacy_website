const StatusCodes=require('http-status-codes')
const GeneralSaleModel=require('../../models/Sale/GeneralSale')
const { BadRequestError } = require('../../errors');
const OrderItem = require('../../models/Sale/OrderItem');


//TODO  dont forget to specify created by after specifyint 
const addGeneralSale= async (req,res) => {
  const {orderNumber,customer,orderDate,orderStatus,billingStatus,orderTotal,paymentMethod,salesRepresentative,Order_item}=req.body;

  const myGeneralSale=await GeneralSaleModel.create({
    orderNumber,customer,orderDate,orderStatus,billingStatus,orderTotal,paymentMethod,salesRepresentative
  })
  const OrderItemModified=Order_item.map((item)=>({
    ...item,
    orderNumber:myGeneralSale._id
  }))
  console.log("🚀 ==> file: GeneralSale.js:18 ==> OrderItemModified ==> OrderItemModified:", OrderItemModified);

   await OrderItem.create(OrderItemModified)

  res.status(StatusCodes.OK).json({msg:"Sale Completed Succesfully",body:req.body})
}
//TODO order total should be calculated rather than saved
const getAllGeneralSales=async (req,res) =>{
  const AllGeneralSales=await GeneralSaleModel.find({})
  res.status(StatusCodes.OK).json({AllGeneralSales:AllGeneralSales,lenght:AllGeneralSales.length})
}


const getGeneralSalesByOrderNumber=async (req,res)=>{
    const {OrderNumber}=req.params;
    console.log("🚀 ==> file: GeneralSale.js:20 ==> getGeneralSalesByOrderNumber ==> OrderNumber:", OrderNumber);


    if(!OrderNumber){
      throw new BadRequestError("please provide OrderNumber")
    }
    const MySale=await GeneralSaleModel.findOne({orderNumber:OrderNumber})

    
    if(!MySale){
      
      throw new BadRequestError("please provide a valid  OrderNumber")
    }
    res.status(StatusCodes.OK).json(MySale);
}
 


const updateGeneralSale=async(req,res)=>{
  const {OrderNumber}=req.params;
  const MyData=req.body;
 
  const UpdatableGeneralSale=await GeneralSaleModel.findOne({orderNumber:OrderNumber});
  if(!UpdatableGeneralSale || !OrderNumber){
    throw new BadRequestError("please provide valid Order Number");
  }
  const UpdatedGeneralSale=await GeneralSaleModel.findOneAndUpdate({orderNumber:OrderNumber},MyData,{
    new:true,
    runValidators:true
  })
  res.status(StatusCodes.OK).json(UpdatedGeneralSale)
}






  module.exports = { addGeneralSale,getAllGeneralSales,getGeneralSalesByOrderNumber,updateGeneralSale};
  


