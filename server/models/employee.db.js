const mongoose = require("mongoose");
// create connect mongodb
mongoose
  .connect("mongodb://localhost:27017/Employee", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(`${error} connecting to database`);
  });

let Schema = mongoose.Schema;
// user schema
let user = new Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
});

module.exports = user;
