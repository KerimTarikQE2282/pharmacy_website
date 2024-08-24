const express = require('express');
const router = express.Router();
const {
    getAllBrands,
    createBrand,
    updateBrandById,
    getBrandById,
    deleteBrandById
  } = require('../../Controllers/StoreControllers/brand');    

// Define routes
router.route('/').get(getAllBrands).post(createBrand)
router.route('/:id').get(getBrandById).patch(updateBrandById).delete(deleteBrandById)

module.exports = router;
