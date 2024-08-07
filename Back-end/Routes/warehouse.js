const express = require('express');
const router = express.Router();

const {
  getAllWarehouses,
  getWarehouseById,
  createWarehouse,
  updateWarehouse,
  deleteWarehouse,
  searchByLocation
} = require('../Controllers/warehouse');

router.get('/getAllWarehouses', getAllWarehouses);
router.get('/getWarehouseById/:id', getWarehouseById);
router.post('/createWarehouse', createWarehouse);
router.put('/updateWarehouse/:id', updateWarehouse);
router.delete('/deleteWarehouse/:id', deleteWarehouse);
router.get('/searchByLocation/:location', searchByLocation);

module.exports = router;
