const express = require('express');
const router = express.Router();
const unitController = require('../controllers/unitController');

router.post('/', unitController.createUnit);
router.get('/', unitController.getAllUnits);

router.get('/:id', unitController.getUnitById);

router.put('/:id', unitController.updateUnitById);

router.delete('/:id', unitController.deleteUnitById);

module.exports = router;
