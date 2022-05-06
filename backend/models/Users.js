const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  appointment: {
    type: String,
    required: true,
  }
});

const User = (module.exports = mongoose.model(
  "User",
  UserSchema,
  "users"
));
