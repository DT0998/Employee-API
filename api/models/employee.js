const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// user schema
let userSchema = new Schema({
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

const Users = mongoose.model("User", userSchema);

module.exports = { Users, userSchema };
