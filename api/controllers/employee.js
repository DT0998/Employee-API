// import employee model
const { Users } = require("../models/employee");

// route get employee
exports.getEmployee = function (response) {
  Users.find(function (error, user) {
    if (error) {
      console.log(error);
    }
    response.json(user);
  });
};
// route post employee
exports.postEmployee = function (request, response) {
  let newEmployee = new Users();
  newEmployee.name = request.body.name;
  newEmployee.email = request.body.email;
  newEmployee.save(function (error, user) {
    if (error) {
      console.log(error);
    }
    response.json(user);
  });
};

// route delete
// route hard delete employee
exports.hardDeleteEmployee = function (request, response) {
  let userId = request.body.userId;
  Users.deleteOne({ userId }, function (error, user) {
    if (error) {
      console.log(error);
    }
    response.json(user);
  });
};
// route soft delete employee
exports.softDeleteEmployee = function (request, response) {
  let userId = request.body.userId;
  Users.delete({ userId }, function (error, user) {
    if (error) {
      console.log(error);
    }
    response.json(user);
  });
};
// route restore employee
exports.restoreEmployee = function (request, response) {
  let userId = request.body.userId;
  Users.restore({ userId }, function (error, user) {
    if (error) {
      console.log(error);
    }
    response.json(user);
  });
};

// route edit employee
exports.editEmployee = function (request, response) {
  let userId = request.body.userId;
  Users.findById(userId, function (error, user) {
    if (error) {
      console.log(error);
    }
    response.json(user);
  });
};
