const express = require('express');
const router = express.Router();

const {
    getAllInvoices,
    getInvoiceById,
    createInvoice,
    updateInvoiceById,
    deleteInvoiceById,
} = require('../../Controllers/SalesControllers/Invoice');

router.get('/getAllInvoices', getAllInvoices);
router.get('/getInvoiceById/:id', getInvoiceById);
router.post('/createInvoice', createInvoice);
router.put('/updateInvoice/:id', updateInvoiceById);
router.delete('/deleteInvoice/:id', deleteInvoiceById);

module.exports = router;
