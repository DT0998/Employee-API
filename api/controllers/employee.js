// import employee model
const { Users } = require('../models/employee');
const db = require('../utils/db');

// route get employee
exports.getEmployee = function(request,response){
  Users.find(function(error,user){
    if(error){
      console.log(error);
    }
    response.json(user);
  })
}
// route post employee
exports.postEmployee = function(request,response){
  let newEmployee = new Users();
  newEmployee.name = request.body.name;
  newEmployee.email = request.body.email;
  newEmployee.save(function(error,user){
    if(error){
      console.log(error);
    }
    response.json(user)
  })

}



// employeeRoutes.post("/", (response) => {
//   var newUser = new User();
//   newUser.name = req.body.name;
//   newUser.email = req.body.email;
//   newUser.save(function (error, user) {
//     if (error) {
//       console.log(error);
//     }
//     response(user);
//   });
// });

// // delete mongodb

// // hard delete
// employeeRoutes.post("/force", (req, res) => {
//   var id = req.body.id;
//   User.deleteOne({ id }, function (err) {
//     if (err) {
//       console.log(err);
//     }
//   });
//   res.redirect("/trash");
// });

// // soft delete
// employeeRoutes.post("/delete", (req, res) => {
//   var id = req.body.id;
//   User.delete({ _id: id }, function (err) {
//     if (err) {
//       console.log(err);
//     }
//   });
//   res.redirect("/");
// });

// //  restore
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

// // edit mongodb
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
