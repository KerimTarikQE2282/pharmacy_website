const express=require('express')
const router=express.Router()

const {getAllSuppliers,getSupplierById,createSupplier, UpdateSupplier,deleteSupplier}=require('../Controllers/supplier')

router.get('/getAllSuppliers',getAllSuppliers)
router.get('/getSupplierById:id',getSupplierById)
router.post('/createSupplier',createSupplier)
router.put('/updateSupplier/:id',UpdateSupplier)
router.delete('/deleteSupplier/:id',deleteSupplier)
module.exports=router;