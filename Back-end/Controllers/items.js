
const Item=require('../models/item')
// controllers/userController.js



const getAllJobs = async (req, res) => {
  const items=Item.find({})
  res.status(StatusCodes.OK).json({ items, count: items.length })
}

const AddItem=async (req,res)=>{
  const task=Item.create(req.body)
  res.status(StatusCodes.CREATED).json({task})
}
  module.exports = { getAllJobs,AddItem };
  