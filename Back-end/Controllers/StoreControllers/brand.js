const Brand = require('../../models/Store/brands');
const StatusCodes=require('http-status-codes')

const getAllBrands = async (req, res) => {
  try {
    const brands = await Brand.find({});
    res.status(200).json({ brands });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while fetching the brands' });
  }
};

const createBrand=async (req, res) => {
  const myNewBrand=await Brand.create(req.body)
  res.status(StatusCodes.OK).json(myNewBrand)
 
};

module.exports = { getAllBrands,createBrand };
