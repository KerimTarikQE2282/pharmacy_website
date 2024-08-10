const Brand = require('../../models/brands');

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
        const { name } = req.body
  try {
    const newBrand=await Brand.create({name})
    res.status(200).json({newBrand})
  } catch (error) {
    console.log(error)
  }
};

module.exports = { getAllBrands,createBrand };
