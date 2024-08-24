const StatusCodes=require('http-status-codes')
const Item=require('../../models/Store/item')
const { BadRequestError } = require('../../errors/')


//TODO  dont forget to specify created by after specifyint 
const addItem = async (req,res) => {
  const myNewItem=await Item.create(req.body)
  res.status(StatusCodes.OK).json(myNewItem)
}

const getAllItems=async(req,res)=>{
  const AllItems=await Item.find({})
  res.status(StatusCodes.OK).json({AllItems:AllItems,lenght:AllItems.length})
}
const getItemsByID=async (req,res)=>{
  const {id}=req.params;
  if(!id){
    throw new BadRequestError("please provide Id")
  }
  const MyItem=await Item.findOne({_id:id})
  res.status(StatusCodes.OK).json(MyItem);
}


const updateItems=async(req,res)=>{
  const {id}=req.params;
  console.log("🚀 ==> file: items.js:28 ==> updateItems ==> id:", id);

  const MyData=req.body;
 
  const UpdatableItem=await Item.findOne({_id:id});
  console.log("🚀 ==> file: items.js:31 ==> updateItems ==> UpdatableItem:", UpdatableItem);

  if(!UpdatableItem || !id){
    throw new BadRequestError("please provide valid Id");
  }
  const UpdatedItem=await Item.findOneAndUpdate({_id:id},MyData,{
    new:true,
    runValidators:true
  })
  res.status(StatusCodes.OK).json(UpdatedItem)
}

const removeItems=async(req,res)=>{
  const {id}=req.params;
  const DeletableItem=await Item.findById({_id:id});
  if(!DeletableItem || !id){
    throw new BadRequestError("please provide valid Id");
  }
  await Item.findOneAndDelete({_id:id});
  res.status(StatusCodes.OK).json({Deleted:true})
}




  module.exports = { addItem,getAllItems,getItemsByID,updateItems,removeItems};
  