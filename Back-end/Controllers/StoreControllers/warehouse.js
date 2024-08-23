const Warehouse =require('../../models/Store/warehouse')

const getAllWarehouses = async (req, res) => {
  try {
    const warehouses = await Warehouse.find({});
    res.status(200).json({ warehouses,number:(warehouses.length) });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while fetching the warehouses' });
  }
};

const createWarehouse = async (req, res) => {
  try {
    const { WareHouseName, WareHouseLocation, WareHouseDescription, WareHouseType } = req.body;
    const newWarehouse = await Warehouse.create({ WareHouseName, WareHouseLocation, WareHouseDescription, WareHouseType });
    res.status(201).json({ newWarehouse });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while creating the warehouse' });
  }
};

const updateWarehouse = async (req, res) => {
  try {
    const { id } = req.params;
    const warehouseExists = await Warehouse.findById(id);

    if (!warehouseExists) {
      return res.status(404).json({ message: "Warehouse Not Found." });
    }

    const updatedWarehouse = await Warehouse.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedWarehouse);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while updating the warehouse' });
  }
};

const deleteWarehouse = async (req, res) => {
  try {
    const { id } = req.params;
    const warehouseExists = await Warehouse.findById(id);

    if (!warehouseExists) {
      return res.status(404).json({ message: "Warehouse Not Found." });
    }

    await Warehouse.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while deleting the warehouse' });
  }
};

const getWarehouseById = async (req, res) => {
  try {
    const { id } = req.params;
    const warehouseExists = await Warehouse.findById(id);

    if (!warehouseExists) {
      return res.status(404).json({ message: "Warehouse Not Found." });
    }

    res.status(200).json(warehouseExists);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while fetching the warehouse' });
  }
};

const searchByLocation = async (req, res) => {
  try {
    const { location } = req.params;
    const warehouses = await Warehouse.find({ WareHouseLocation: location });

    if (warehouses.length === 0) {
      return res.status(404).json({ message: "No warehouses found at this location." });
    }

    res.status(200).json({ warehouses });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while searching for warehouses by location' });
  }
};

module.exports = { getAllWarehouses, createWarehouse, updateWarehouse, deleteWarehouse, getWarehouseById, searchByLocation };
