const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  }
});

module.exports = moongoose.model("category", CategorySchema);