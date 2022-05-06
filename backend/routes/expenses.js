const express = require('express');
const router = express.Router();
const Expense =  require('../models/Expense')
// const Category =  require('../models/Category')
/* GET users listing. */

// @route     GET /expenses
// @desc      Get all project expenses
// @access    Public

router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST /expenses
// @desc      Add new contact
// @access    Private
router.post('/', async (req, res) => {
  try {
    const newExpense = new Expense({
      id,
      project_id,
      category_id,
      name,
      description,
      amount,
      created_at,
      created_by,
      updated_at,
      updated_by
    });
    const expense = await newExpense.save();
    res.json(expense);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


module.exports = router;
