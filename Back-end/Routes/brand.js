const express=require('express')
const router=express.Router()

const {getAllBrands,createBrand}=require('../Controllers/brand')

router.get('/',getAllBrands)
router.post('/',createBrand)

module.exports = router;


