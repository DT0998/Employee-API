const routes = require("./routes/routes");

const routes = (app) => {
  let employeeCtrl = require("../controllers/employeeController");
  // employee routes
  app
    .route("/employee")
    .get(employeeCtrl.get)
    .post(employeeCtrl.post)
    .delete(employeeCtrl.delete)
    .restore(employeeCtrl.restore)
    .put(employeeCtrl.put);
};
module.exports = { routes };
