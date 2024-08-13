const Unit = require('../models/Unit');

const getAllUnits = async (req, res) => {
    
        const units = await Unit.find({});

        if (units.length === 0) {
            return res.status(404).json({ message: "No units found." });
        }

        res.status(200).json({ units });
   
};

  const createUnit = async (req, res) => {

        
        const { name } = req.body
        const createUnit = await unit.create({name});
        
     
 const getUnitById = async (req, res) => {
        const id = req.params.id;
        try {
            const unit = await Unit.findById(id);
    
            if (!unit) {
                return res.status(404).json({ message: "Unit Not Found." });
            }
    
            res.status(200).json({ unit });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'An error occurred while fetching the unit.' });
        }
    };

    const deleteUnitById = async (req, res) => {
        const id = req.params.id;
        
            const unit = await Unit.findByIdAndDelete(id);
    
            if (!unit) {
                
                return res.status(404).json({ message: "Unit Not Found." });
            }
    
            
        
            
    };
    
    const updateUnitById = async (req, res) => {
        const id = req.params.id;
        const updateData = req.body;
    
        
    };
    module.exports = { getAllUnits,getUnitById,createUnit,updateUnitById ,deleteUnitById};  

};





