const Credit = require('../../models/Sale/Credits');
const StatusCodes = require('http-status-codes');
const BadRequestError = require('../../errors'); // Adjust the path as necessary

// Create a new credit
const createCredit = async (req, res) => {
  const newCredit = await Credit.create(req.body);
  res.status(StatusCodes.CREATED).json(newCredit);
};

// Update a credit by ID
const updateCreditById = async (req, res) => {
  const { id } = req.params;
  console.log("🚀 ==> updateCreditById ==> id:", id);

  const updateData = req.body;

  const updatableCredit = await Credit.findById(id);
  if (!updatableCredit || !id) {
    throw new BadRequestError("Please provide a valid ID");
  }

  const updatedCredit = await Credit.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true
  });

  console.log("🚀 ==> updateCreditById ==> updateData:", updateData);

  res.status(StatusCodes.OK).json(updatedCredit);
};

// Fetch a credit by ID
const getCreditById = async (req, res) => {
  const { id } = req.params;

  const credit = await Credit.findById(id);
  if (!credit || !id) {
    throw new BadRequestError("Please provide a valid ID");
  }

  res.status(StatusCodes.OK).json(credit);
};

// Fetch all credits
const getAllCredits = async (req, res) => {
  try {
    const credits = await Credit.find({});
    res.status(StatusCodes.OK).json({ credits });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'An error occurred while fetching the credits' });
  }
};

// Delete a credit by ID
const deleteCreditById = async (req, res) => {
  const { id } = req.params;

  const deletableCredit = await Credit.findById(id);
  if (!deletableCredit || !id) {
    throw new BadRequestError("Please provide a valid ID");
  }

  await Credit.findByIdAndDelete(id);
  res.status(StatusCodes.OK).json({ Deleted: true });
};

module.exports = {
  createCredit,
  updateCreditById,
  getCreditById,
  getAllCredits,
  deleteCreditById,
};
