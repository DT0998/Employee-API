// use path module
const path = require("path");
// use hbs view engine
const hbs = require("hbs");
// use mongodb
const bodyParser = require("body-parser");
const mongooseDelete = require("mongoose-delete");
// config server
// use express module
const express = require("express");
const user = require("./models/employee.db");
let app = express();
let port = process.env.PORT || 3000;
// db import

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// const http = require('http');

// add plugin
user.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

// tên schema
const User = mongoose.model("user", user);



// set dynamic view files
app.set("views", path.join(__dirname, "views"));

// set view engine
app.set("view engine", "hbs");
app.use(bodyParser.json());

// route delete
app.get("/trash", (req, res) => {
  User.findDeleted({}, (err, users) => {
    if (!err) {
      res.render("trash", {
        users: users,
      });
    }
  });
});

// route index
app.get("/", (req, res) => {
  User.find({}, (err, users) => {
    if (!err) {
      res.render("index", {
        users: users,
      });
    }
  });
});

// create mongodb
app.post("/create", (req, res) => {
  var newUser = new User();
  newUser.name = req.body.name;
  newUser.email = req.body.email;
  newUser.save().then(function (err) {
    if (err) {
      console.log(err);
    }
  });
  res.redirect("/");
});

// delete mongodb

// hard delete
app.post("/force", (req, res) => {
  var id = req.body.id;
  User.deleteOne({ id }, function (err) {
    if (err) {
      console.log(err);
    }
  });
  res.redirect("/trash");
});

// soft delete
app.post("/delete", (req, res) => {
  var id = req.body.id;
  User.delete({ _id: id }, function (err) {
    if (err) {
      console.log(err);
    }
  });
  res.redirect("/");
});

//  restore
app.post("/restore", (req, res) => {
  var id = req.body.id;
  User.restore({ _id: id }, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log(id);
  res.redirect("/trash");
});

// edit mongodb
app.post("/update", (req, res) => {
  var id = req.body.id;
  User.findById(id, function (err, user) {
    if (err) {
      console.log(err);
    }
    user.name = req.body.name;
    user.email = req.body.email;
    user.save();
  });
  res.redirect("/");
});

// server listerning
app.listen(port, () => {
  console.log(`'RESTful API server started on: '${port}`);
});
