const mongoose = require("mongoose");

// Define userSchema
const register = new mongoose.Schema({
  uname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  pass: {
    type: String,
    required: true,
  },
});

// Create a collection
const RegisterUser = new mongoose.model("RegisterUser", register);

// Export This
module.exports = RegisterUser;
