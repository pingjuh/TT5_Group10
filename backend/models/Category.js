const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  }
});

module.exports = moongoose.model("categorys", CategorySchema);