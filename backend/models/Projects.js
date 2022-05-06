const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

const Project = (module.exports = mongoose.model(
  "Project",
  ProjectSchema,
  "projects"
));
