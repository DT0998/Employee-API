const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');
const db = require("../utils/db");

// user schema
let userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  dateAdded: { type: Date, default: Date.now },
});

// auto increment id
autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, {
  model: "users", // collection or table name in which you want to apply auto increment
  field: "userId", // field of model which you want to auto increment
  startAt: 1, // start your auto increment value from 1
  incrementBy: 1, // incremented by 1
});
let Users = mongoose.model("users", userSchema);

module.exports = { Users, userSchema };
