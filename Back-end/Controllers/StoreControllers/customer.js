const Customer = require('../models/Customer'); 

const Create = async (req, res) => {
    
        const { customerName, phone1, phone2, address1, address2, registeredBy } = req.body;

        if (!customerName || !phone1 || !address1 || !registeredBy) {
            return res.status(400).json({ msg: "Please provide all required fields" });
        }

        const newCustomer = await Customer.create({
            customerName,
            phone1,
            phone2,
            address1,
            address2,
            registeredBy,
        });

        res.status(201).json({ customer: newCustomer });
    
};

const Update = async (req, res) => {
    
        const { id } = req.params;
        const updates = req.body;

        const updatedCustomer = await Customer.findByIdAndUpdate(id, updates, {
            new: true,
            runValidators: true,
        });

        if (!updatedCustomer) {
            return res.status(404).json({ msg: "Customer not found" });
        }

        res.status(200).json({ customer: updatedCustomer }); 
    
};

const Edit = async (req, res) => {
    
        const { id } = req.params;
        const updates = req.body;

        const editedCustomer = await Customer.findByIdAndUpdate(id, { $set: updates }, {
            new: true,
            runValidators: true,
        });

        if (!editedCustomer) {
            return res.status(404).json({ msg: "Customer not found" });
        }

        res.status(200).json({ customer: editedCustomer });
};

const Delete = async (req, res) => {
    
        const { id } = req.params;

        const deletedCustomer = await Customer.findByIdAndDelete(id);

        if (!deletedCustomer) {
            return res.status(404).json({ msg: "Customer not found" });
        }

        res.status(200).json({ msg: "Customer deleted successfully" });
    
    
};

module.exports = {
    Create,
    Update,
    Edit,
    Delete,
};
