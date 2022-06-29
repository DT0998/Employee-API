const express = require('express');
const user_router = express.Router();

// controller
let employeeCtrl = require("../controllers/employee");

// employee routes
user_router.get('/', employeeCtrl.getEmployee);
user_router.post('/',employeeCtrl.postEmployee);
user_router.delete('/HardDelete',employeeCtrl.hardDeleteEmployee)
user_router.delete('/SoftDelete',employeeCtrl.softDeleteEmployee)
user_router.put('/',employeeCtrl.editEmployee)
user_router.post('/Restore',employeeCtrl.restoreEmployee)

module.exports = user_router;