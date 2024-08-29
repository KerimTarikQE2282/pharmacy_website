const express = require('express');
const router = express.Router();
const { getAllStores, createStore, updateStore, deleteStore, getStoreById, searchByLocation } = require('../../Controllers/StoreControllers/Shop');    

// Define routes
router.route('/').get(getAllStores).post(createStore)
router.route('/:id').get(getStoreById).patch(updateStore).delete(deleteStore)
router.route('/location/:location').get(searchByLocation)

module.exports = router;
