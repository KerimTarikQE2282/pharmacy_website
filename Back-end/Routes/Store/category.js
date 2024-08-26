const express = require('express');
const router = express.Router();
const {
  getAllCategories,
  createCategory,
  updateCategoryById,
  getCategoryById,
  deleteCategoryById
} = require('../../Controllers/StoreControllers/Categorie'); // Adjust the path as necessary

// Define routes
router.route('/').get(getAllCategories).post(createCategory);
router.route('/:id').get(getCategoryById).patch(updateCategoryById).delete(deleteCategoryById);

module.exports = router;
