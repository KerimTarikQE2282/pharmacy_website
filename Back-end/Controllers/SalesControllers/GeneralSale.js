const StatusCodes=require('http-status-codes')
const GeneralSaleModel=require('../../models/Sale/GeneralSale')
const { BadRequestError } = require('../../errors')


//TODO  dont forget to specify created by after specifyint 
const addGeneralSale= async (req,res) => {
  const myGeneralSale=await GeneralSaleModel.create(req.body)
  res.status(StatusCodes.OK).json(myGeneralSale)
}

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
  


