const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const db = require("../utils/db");
// user schema
let userSchema = new Schema({
  employeeId: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  dateAdded: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
