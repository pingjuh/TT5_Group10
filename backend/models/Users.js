const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  }
});

const User = (module.exports = mongoose.model(
  "User",
  UserSchema,
  "users"
));
