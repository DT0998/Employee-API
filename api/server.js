const bodyParser = require("body-parser");
// config server
// use express module
const express = require("express");
const app = express()
let port = process.env.PORT || 3000;

// db import
const db = require("./utils/db");
// schema
const { User } = require("./models/employeeModels");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// import routes
let routes = require('./')

// server listerning
app.listen(port, () => {
  console.log(`'RESTful API server started on: '${port}`);
});
