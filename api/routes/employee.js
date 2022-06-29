const express = require('express');
const user_router = express.Router();

// controller
let employeeCtrl = require("../controllers/employee");

// employee routes
user_router.get('/', employeeCtrl.getEmployee);

module.exports = user_router;