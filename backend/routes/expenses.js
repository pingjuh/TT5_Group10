const express = require('express');
const router = express.Router();
const Expense =  require('../models/Expense')
// const Category =  require('../models/Category')
/* GET users listing. */

// @route     GET /expenses
// @desc      Get all project expenses
// @access    Public

router.post('/get', async (req, res) => {
  try {
    const expenses = await Expense.find({project_id:req.body.project_id});
    res.json(expenses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST /expenses
// @desc      Add new expense
// @access    Public
router.post('/', async (req, res) => {
  try {
    const newExpense = new Expense({
      id : req.body.id,
      project_id: req.body.project_id,
      category_id: req.body.category_id,
      name: req.body.name,
      description: req.body.description,
      amount: req.body.amount,
      created_at: req.body.created_at,
      created_by: req.body.created_by,
      updated_at: req.body.updated_at,
      updated_by: req.body.updated_by,
    });
    const expense = await newExpense.save();
    res.json(expense);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     PUT/expenses/:id
// @desc      Update expense
// @access    Public

router.put('/:_id', async (req, res) => {
  const { project_id, category_id, name, description, amount, created_at, created_by, updated_by } = req.body;
  const expenseField = {};
  expenseField.updated_at = Date().toLocaleString();
  if (project_id) expenseField.project_id = project_id;
  if (category_id) expenseField.category_id = category_id;
  if (name) expenseField.name = name;
  if (description) expenseField.description = description;
  if (amount) expenseField.amount = amount;
  if (created_at) expenseField.created_at = created_at;
  if (created_by) expenseField.created_by = created_by;
  if (updated_by) expenseField.updated_by = updated_by;
  try {
    let expense = await Expense.findById(req.params._id);
    if (!expense) return res.status(404).json({ msg: 'Expense not found' });

    expense = await Expense.findByIdAndUpdate(
      req.params._id,
      { $set: expenseField },
    );
    res.json(expense);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     DELETE/expenses/:_id
// @desc      Delete expense
// @access    Public
router.delete('/:_id', async (req, res) => {
  try {
    const expense = await Expense.findById(req.params._id);
    if (!expense) return res.status(404).json({ msg: 'Expense not found' });
    await Expense.findByIdAndRemove(req.params._id);
    res.json({ msg: 'Expense removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



module.exports = router;
