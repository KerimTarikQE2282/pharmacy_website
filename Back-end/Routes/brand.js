const express=require('express')
const router=express.Router()

const {getAllBrands,createBrand}=require('../Controllers/StoreControllers/brand')

router.get('/',getAllBrands)
router.post('/',createBrand)

module.exports = router;


