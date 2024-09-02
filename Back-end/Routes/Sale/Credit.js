const express = require('express');
const router = express.Router();
const {
    createCredit,
    updateCreditById,
    getCreditById,
    getAllCredits,
    deleteCreditById,
  }= require('../../Controllers/SalesControllers/Credits'); // Adjust the path as necessary

// Define routes
router.route('/')
  .get(getAllCredits)
  .post(createCredit);

router.route('/:id')
  .get(getCreditById)
  .patch(updateCreditById)
  .delete(deleteCreditById);

module.exports = router;
