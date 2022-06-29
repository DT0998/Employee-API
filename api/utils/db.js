const mongoose = require("mongoose");

const employeeURL = `mongodb://localhost:27017/employee`;

// create connect mongodb
const connection = mongoose.connect(employeeURL, (error) => {
  if (error) {
    console.log(`${error} connecting to database`);
  } else {
    console.log("Database connected");
  }
});

module.exports = connection;
