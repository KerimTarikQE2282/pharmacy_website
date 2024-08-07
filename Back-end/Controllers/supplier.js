
const supplier = require('../models/supplier');

const getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await supplier.find({});
    res.status(200).json({ suppliers });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while fetching the supplier' });
  }
};


const createSupplier=async (req, res) => {
        const { name } = req.body
  try {
    const newSupplier=await supplier.create({name})//dnkwandkwlanklldnwaklndwkandkwa
    res.status(200).json({newSupplier})
  } catch (error) {
    console.log(error)
  }
};


const UpdateSupplier=async (req, res) => {
    const { name } = req.body

try {

    const id= req.params.id;
    const SupplierExists = await supplier.findOne({_id:id})
   
    if(!SupplierExists){
        return  res.status(404).json({message:"Supplier Not Found."})
    }
    const UpdateSupplier= await supplier.findByIdAndUpdate(id,req.body,{new:true})
    res.status(201).json(UpdateSupplier)

    res.status(200).json({newSupplier})
    } catch (error) {
console.log(error)
}
};

const deleteSupplier=async (req, res) => {
    const { name } = req.body

try {

    const id= req.params.id;
    const SupplierExists = await supplier.findOne({_id:id})
   
    if(!SupplierExists){
        return  res.status(404).json({message:"Supplier Not Found."})
    }
    await supplier.findByIdAndDelete(id)
    res.status(201).json("Supplier Deleted Successfully")

    res.status(200).json({newSupplier})
    } catch (error) {
console.log(error)
}
};


const getSupplierById = async (req, res) => {
    const { name } = req.body
    try {

        const id= req.params.id;
      const SupplierExists = await supplier.findOne({_id:id});


      if(!SupplierExists){
        return  res.status(404).json({message:"Supplier Not Found."})
    }


      res.status(200).json({ SupplierExists });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'An error occurred while fetching the supplier' });
    }
  };


module.exports = { getAllSuppliers,getSupplierById,createSupplier,UpdateSupplier,deleteSupplier};
