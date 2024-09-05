const CreditItems=require('../../models/Sale/CreditItem')
const Credit = require('../../models/Sale/Credits');
const StatusCodes = require('http-status-codes');
const { BadRequestError } = require('../../errors');

// Create a new credit
const  createCredit = async (req,res) => {
  const {orderNumber,customer,orderDate,orderStatus,orderTotal,paymentMethod,salesRepresentative,Order_item,PayedAmount}=req.body;
  const Sale = await Credit.find({ customer: customer });
console.log("🚀 ==> file: Credits.js:10 ==> createCredit ==> Customer:", Sale);

let TotalCredit = 0;
  console.log("🚀 ==> file: Credits.js:19 ==> createCredit ==> TotalCredit:", TotalCredit);
  for (let i = 0; i < Sale.length; i++) {
    TotalCredit += Sale[i].orderTotal;
  }
  TotalCredit += orderTotal;
  if(TotalCredit>1000000){
    res.status(400).json({msg:"Credit Limit is exceeded"})
  }
  /////////
  else{
    const Checker=await Credit.findOne({orderNumber})
    if(Checker){throw new BadRequestError("Credit Number is already Reserved ")}
    const myCreditSale=await Credit.create({
      orderNumber,customer,orderDate,orderTotal,paymentMethod,salesRepresentative,orderStatus
    })
    const OrderCreditModified=Order_item.map((item)=>({
      ...item,
      orderNumber:myCreditSale._id
    }))
  
     await CreditItems.create(OrderCreditModified)
  
    res.status(StatusCodes.OK).json({msg:"Credit Registration Completed Succesfully",body:req.body})
 
  }
};


// const  createPartialCredit = async (req,res) => {


// };









// Update a credit by ID
const updateCreditById = async (req, res) => {
  const { id } = req.params;
  console.log("🚀 ==> updateCreditById ==> id:", id);

  const updateData = req.body;

  const updatableCredit = await Credit.findById(id);
  if (!updatableCredit || !id) {
    throw new BadRequestError("Please provide a valid ID");
  }

  const updatedCredit = await Credit.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true
  });

  console.log("🚀 ==> updateCreditById ==> updateData:", updateData);

  res.status(StatusCodes.OK).json(updatedCredit);
};

// Fetch a credit by ID
const getCreditById = async (req, res) => {
  const { id } = req.params;

  const credit = await Credit.findById(id);
  if (!credit || !id) {
    throw new BadRequestError("Please provide a valid ID");
  }

  res.status(StatusCodes.OK).json(credit);
};

// Fetch all credits
const getAllCredits = async (req, res) => {
  try {
    const credits = await Credit.find({});
    res.status(StatusCodes.OK).json({ credits });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'An error occurred while fetching the credits' });
  }
};

// Delete a credit by ID
const deleteCreditById = async (req, res) => {
  const { id } = req.params;

  const deletableCredit = await Credit.findById(id);
  if (!deletableCredit || !id) {
    throw new BadRequestError("Please provide a valid ID");
  }

  await Credit.findByIdAndDelete(id);
  res.status(StatusCodes.OK).json({ Deleted: true });
};

module.exports = {
  createCredit,
  updateCreditById,
  getCreditById,
  getAllCredits,
  deleteCreditById,
};
