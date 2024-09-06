const StatusCodes=require('http-status-codes')
const GeneralSaleModel=require('../../models/Sale/GeneralSale')
const { BadRequestError } = require('../../errors');
const OrderItem = require('../../models/Sale/OrderItem');
const {createCredit}=require('./Credits')
const CustomerModel=require('../../models/Store/Customer')
  
  
const getAllPayedGeneralSales = async (req, res) => {
   
      const AllGeneralSales = await GeneralSaleModel.find(
        { billingStatus: "paid" },
        { _id: 0, customer: 1, orderDate: 1, orderTotal: 1, paymentMethod: 1 }
      );
  
      const SalesPromises = AllGeneralSales.map(async sale => {
        const { customer, orderDate, orderTotal, paymentMethod } = sale;
        const myCustomerName = await CustomerModel.findOne({ _id: customer });

        return {
          orderDate,
          orderTotal,
          paymentMethod,
          customer: myCustomerName ? myCustomerName.customerName : 'Unknown' 
        };
      });
  
      const Sales = await Promise.all(SalesPromises);
  
      res.status(StatusCodes.OK).json({'GeneralSales':Sales} );
    
  };


  const getAllunPayedGeneralSales = async (req, res) => {
   
    const AllGeneralSales = await GeneralSaleModel.find(
      {  billingStatus: { $in: ["unpaid", "partially paid"] } },
      { _id: 0, customer: 1, orderDate: 1, orderTotal: 1, paymentMethod: 1 ,orderNumber:1}
    );

    const SalesPromises = AllGeneralSales.map(async sale => {
      const { customer, orderDate, orderTotal, paymentMethod,orderNumber } = sale;
      const myCustomerName = await CustomerModel.findOne({ _id: customer });

      return {
        orderDate,
        orderTotal,
        paymentMethod,
        orderNumber,
        customer: myCustomerName ? myCustomerName.customerName : 'Unknown' 
      };
    });

    const Sales = await Promise.all(SalesPromises);

    res.status(StatusCodes.OK).json({'GeneralSales':Sales} );
  
};
const getAllunPayedGeneralSalesByOrderNumber = async (req, res) => {
   
  const AllGeneralSales = await GeneralSaleModel.find(
    {  billingStatus: { $in: ["unpaid", "partially paid"],
      orderNumber:req.params.orderNumber } },
    { _id: 0, customer: 1, orderDate: 1, orderTotal: 1, paymentMethod: 1 ,orderNumber:1}
  );

  const SalesPromises = AllGeneralSales.map(async sale => {
    const { customer, orderDate, orderTotal, paymentMethod,orderNumber } = sale;
    const myCustomerName = await CustomerModel.findOne({ _id: customer });

    return {
      orderDate,
      orderTotal,
      paymentMethod,
      orderNumber,
      customer: myCustomerName ? myCustomerName.customerName : 'Unknown' 
    };
  });

  const Sales = await Promise.all(SalesPromises);

  res.status(StatusCodes.OK).json({'GeneralSales':Sales} );

};
  

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


  module.exports={getAllPayedGeneralSales,getAllunPayedGeneralSales,getGeneralSalesByOrderNumber,getAllunPayedGeneralSalesByOrderNumber,updateGeneralSale}