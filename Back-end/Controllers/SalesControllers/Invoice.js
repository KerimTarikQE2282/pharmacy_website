const Invoice =require('../../models/Sale/Invoice')


const getAllInvoices = async (req, res) => {
    try {
        const invoices = await Invoice.find({});
        if (invoices.length === 0) {
            return res.status(404).json({ message: "No invoices found." });
        }
        res.status(200).json({ invoices });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching invoices.' });
    }
};


const createInvoice = async (req, res) => {
    try {
        const { orderNumber, productName, quantity, unitPrice } = req.body;
        const newInvoice = new Invoice({ orderNumber, productName, quantity, unitPrice });
        const savedInvoice = await newInvoice.save();
        res.status(201).json(savedInvoice);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'An error occurred while creating the invoice.' });
    }
};


const getInvoiceById = async (req, res) => {
    const id = req.params.id;
    try {
        const invoice = await Invoice.findById(id);
        if (!invoice) {
            return res.status(404).json({ message: "Invoice not found." });
        }
        res.status(200).json({ invoice });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching the invoice.' });
    }
};


const updateInvoiceById = async (req, res) => {
    const id = req.params.id;
    const updateData = req.body;
    try {
        const updatedInvoice = await Invoice.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedInvoice) {
            return res.status(404).json({ message: "Invoice not found." });
        }
        res.status(200).json(updatedInvoice);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'An error occurred while updating the invoice.' });
    }
};


const deleteInvoiceById = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedInvoice = await Invoice.findByIdAndDelete(id);
        if (!deletedInvoice) {
            return res.status(404).json({ message: "Invoice not found." });
        }
        res.status(200).json({ message: "Invoice deleted successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while deleting the invoice.' });
    }
};

module.exports = { 
    getAllInvoices, 
    createInvoice, 
    getInvoiceById, 
    updateInvoiceById, 
    deleteInvoiceById 
};
