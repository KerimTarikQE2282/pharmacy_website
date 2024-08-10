
const supplier = require('../../models/supplier');

const getAllSuppliers = async (req, res) => {
 
    const suppliers = await supplier.find({});
    res.status(200).json({ suppliers });
 
};


const createSupplier=async (req, res) => {
    const { name } = req.body
    const newSupplier=await supplier.create({name})
    res.status(200).json({newSupplier})
 
};


const UpdateSupplier=async (req, res) => {
    const { name } = req.body
    const id= req.params.id;
    const SupplierExists = await supplier.findOne({_id:id})
   
    if(!SupplierExists){
        return  res.status(404).json({message:"Supplier Not Found."})
    }
    const UpdateSupplier= await supplier.findByIdAndUpdate(id,req.body,{new:true,runValidators:true})
    res.status(201).json(UpdateSupplier)

 
   
};

const deleteSupplier=async (req, res) => {
    const { name } = req.body
    const id= req.params.id;
    const SupplierExists = await supplier.findOne({_id:id})
   
    if(!SupplierExists){
        return  res.status(404).json({message:"Supplier Not Found."})
    }
    await supplier.findByIdAndDelete(id)
    res.status(201).json("Supplier Deleted Successfully")

    
    
};


const getSupplierById = async (req, res) => {
      const id= req.params.id;
      const SupplierExists = await supplier.findOne({_id:id});
      if(!SupplierExists){
        return  res.status(404).json({message:"Supplier Not Found."})
      }
      res.status(200).json({ SupplierExists });
 
  };


module.exports = { getAllSuppliers,getSupplierById,createSupplier,UpdateSupplier,deleteSupplier};
