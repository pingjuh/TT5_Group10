var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const cors = require("cors");
const app = require('../app');
require("dotenv").config();
router.use(cors());


mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"));


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
