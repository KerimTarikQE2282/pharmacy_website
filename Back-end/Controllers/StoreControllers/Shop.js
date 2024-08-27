const Store = require('../../models/Store/store');

const getAllStores = async (req, res) => {
  try {
    const stores = await Store.find({});
    res.status(200).json({ stores, number: stores.length });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while fetching the stores' });
  }
};

const createStore = async (req, res) => {
  try {
    const { StoreName, StoreLocation, StoreDescription, StoreType } = req.body;
    const newStore = await Store.create({ StoreName, StoreLocation, StoreDescription, StoreType });
    res.status(201).json({ newStore });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while creating the store' });
  }
};

const updateStore = async (req, res) => {
  try {
    const { id } = req.params;
    const storeExists = await Store.findById(id);

    if (!storeExists) {
      return res.status(404).json({ message: "Store Not Found." });
    }

    const updatedStore = await Store.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedStore);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while updating the store' });
  }
};

const deleteStore = async (req, res) => {
  try {
    const { id } = req.params;
    const storeExists = await Store.findById(id);

    if (!storeExists) {
      return res.status(404).json({ message: "Store Not Found." });
    }

    await Store.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while deleting the store' });
  }
};

const getStoreById = async (req, res) => {
  try {
    const { id } = req.params;
    const storeExists = await Store.findById(id);

    if (!storeExists) {
      return res.status(404).json({ message: "Store Not Found." });
    }

    res.status(200).json(storeExists);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while fetching the store' });
  }
};

const searchByLocation = async (req, res) => {
  try {
    const { location } = req.params;
    const stores = await Store.find({ StoreLocation: location });

    if (stores.length === 0) {
      return res.status(404).json({ message: "No stores found at this location." });
    }

    res.status(200).json({ stores });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while searching for stores by location' });
  }
};

module.exports = { getAllStores, createStore, updateStore, deleteStore, getStoreById, searchByLocation };
