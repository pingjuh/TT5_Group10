const express = require('express');
const router = express.Router();
const Expense =  require('../models/Expense')
// const Category =  require('../models/Category')
/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send('expense route');
});

    
  router.post('/allExpense', async function(req, res, next) {
      try{
        const projectid = req.body.id
        console.log(projectid)
        const expenses = await Expense.find({project_id: projectid})
        console.log(expenses)
        // const categoryid = req.body.id
        // console.log(categoryid)
        // const category = await Expense.find({category_id: categoryid})
        // console.log(category)
        return res.send(expenses)
      }catch (err) {
        console.log(err);
        return res.status(400).json({
          error: true,
          message: "Failed to save",
        });
      }
      return res.send("No projects yet")
});

module.exports = router;
