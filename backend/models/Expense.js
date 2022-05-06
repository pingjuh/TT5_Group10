const mongoose = require("mongoose");

const ExpenseSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  project_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "projects",
  },
  category_id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
    required: true,
  },
  created_by: {
    type: String,
    required: true,
  },
  updated_at: {
    type: Date,
    default: Date.now,
    required: true,
  },
  updated_by: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("expense", ExpenseSchema);

