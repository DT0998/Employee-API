// import employee model
const { Users } = require("../models/employee");

// route get employee
exports.getEmployee = function (request, response) {
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

// //  route restore employee
// employeeRoutes.post("/restore", (req, res) => {
//   var id = req.body.id;
//   User.restore({ _id: id }, function (err) {
//     if (err) {
//       console.log(err);
//     }
//   });
//   console.log(id);
//   res.redirect("/trash");
// });

// // route edit employee 
// employeeRoutes.post("/update", (req, res) => {
//   var id = req.body.id;
//   User.findById(id, function (err, user) {
//     if (err) {
//       console.log(err);
//     }
//     user.name = req.body.name;
//     user.email = req.body.email;
//     user.save();
//   });
//   res.redirect("/");
// });
