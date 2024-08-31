const Credit = require('../models/Credit');  
 const createCredit = async (req, res) => {

    const newCredit = await Credit.create(req.body);

    if (!newCredit) {
        return res.status(400).json({
            success: false,
            error: "Failed to create credit"
        });
    }

    res.status(201).json({
        success: true,
        data: newCredit
    });
    }

const updateCredit = async (req, res) => {
    const updatedCredit = await Credit.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if (!updatedCredit) {
        return res.status(404).json({
            success: false,
            error: "Credit not found"
        });
    }

    res.status(200).json({
        success: true,
        data: updatedCredit
    });
};
const editCredit = async (req, res) => { 
    const credit = await Credit.findById(req.params.id);

    if (!credit) {
        return res.status(404).json({
            success: false,
            error: "Credit not found"
        });
    }

    res.status(200).json({
        success: true,
        data: credit
    });
const deleteCredit = async (req, res) => {

    const credit = await Credit.findByIdAndDelete(req.params.id);

    if (!credit) {
        return res.status(404).json({
            success: false,
            error: "Credit not found"
        });
    }

    res.status(200).json({
        success: true,
        data: {}
    });
  } 
};
module.exports = {
    Create,
    Update,
    Edit,
    Delete,
};
