// import employee model
const { Employee } = require("../schema/employee.schema");

// route get employee
const getEmployee = (_request, response) => {
  Employee.find(function (error, employee) {
    if (error) {
      return response.status(500).send({ error: "Error" });
    }
    response.send({ data: employee, total: employee.length });
  });
};

// route post employee
const createEmployee = (request, response) => {
  let newEmployee = new Employee();
  newEmployee.name = request.body.name;
  newEmployee.email = request.body.email;
  newEmployee.save(function (error, employee) {
    if (error) {
      return response.status(500).send({ error: "Error" });
    }
    response.send(employee);
  });
};

// route hard delete employee
const hardDeleteEmployee = (request, response) => {
  const employeeId = request.param.employeeId;
  Employee.deleteOne({ employeeId }, function (error, employee) {
    if (!employee) {
      return response.status(404).send({ error: "Employee not found" });
    }
    if (error) {
      return response.status(500).send({ error: "Error" });
    }
    response.send(employee);
  });
};

// route soft delete employee
const softDeleteEmployee = (request, response) => {
  const employeeId = request.param.employeeId;
  Employee.deleteById(employeeId, function (error, employee) {
    if (!employee) {
      return response.status(404).send({ error: "Employee not found" });
    }
    if (error) {
      return response.status(500).send({ error: "Error" });
    }
    response.send(employee);
  });
};

// route restore employee
const restoreEmployee = (request, response) => {
  const employeeId = request.param.employeeId;
  Employee.restore({ employeeId }, function (error, employee) {
    if (!employee) {
      return response.status(404).send({ error: "Employee not found" });
    }
    if (error) {
      return response.status(500).send({ error: "Error" });
    }
    response.send(employee);
  });
};

// route edit employee
const editEmployee = (request, response) => {
  const employeeId = request.param.employeeId;
  const newName = request.body.name;
  const newEmail = request.body.email;

  // Find the employee by ID
  Employee.findById(employeeId, function (error, employee) {
    if (error) {
      return response.status(500).send({ error: "Error" });
    }
    if (!employee) {
      return response.status(404).send({ error: "Employee not found" });
    }

    // Update the employee data
    if (newName) {
      employee.name = newName; // Update the name if provided
    }
    if (newEmail) {
      employee.email = newEmail; // Update the email if provided
    }

    // Save the updated employee data
    employee.save(function (error, updatedEmployee) {
      if (error) {
        return response.status(500).send({ error: "Error updating employee" });
      }
      // Send the updated employee data in the response
      response.send(updatedEmployee);
    });
  });
};

module.exports = {
  getEmployee,
  createEmployee,
  hardDeleteEmployee,
  softDeleteEmployee,
  restoreEmployee,
  editEmployee,
};
