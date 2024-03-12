const {
  getEmployee,
  createEmployee,
  hardDeleteEmployee,
  softDeleteEmployee,
  restoreEmployee,
  editEmployee,
} = require("../controllers/employee.controller");

// employee routes
function routes(app, rootUrl) {
  /**
   * @swagger
   * tags:
   *   name: Employee
   *   description: Employee management APIs
   */
  /**
   * @swagger
   * /api/employee:
   *   get:
   *     summary: Get all employees
   *     tags: [Employee]
   *     responses:
   *       200:
   *         description: List of employees
   *       500:
   *         description: Some server error
   */
  app.get(`/${rootUrl}/employee`, getEmployee);

  /**
   * @swagger
   * /api/employee:
   *   post:
   *     summary: Create a new employee
   *     tags: [Employee]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Employee'
   *     responses:
   *       200:
   *         description: Employee created successfully
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Employee'
   *       500:
   *         description: Some server error
   */
  app.post(`/${rootUrl}/employee`, createEmployee);
  /**
   * @swagger
   * /api/employee/:employeeId:
   *   put:
   *     summary: Update an employee by ID
   *     tags: [Employee]
   *     parameters:
   *       - in: path
   *         name: employeeId
   *         schema:
   *           type: string
   *         required: true
   *         description: ID of the employee to update
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *               email:
   *                 type: string
   *             required:
   *               - name
   *               - email
   *     responses:
   *       200:
   *         description: Employee updated successfully
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Employee'  # Adjust this to match your Employee schema
   *       404:
   *         description: Employee not found
   *       500:
   *         description: Internal Server Error
   */
  app.put(`/${rootUrl}/employee/:employeeId`, editEmployee);

  /**
   * @swagger
   * /api/employee/:employeeId:
   *   delete:
   *     summary: Hard delete an employee by ID
   *     tags: [Employee]
   *     parameters:
   *       - in: path
   *         name: employeeId
   *         schema:
   *           type: string
   *         required: true
   *         description: ID of the employee to hard delete
   *     responses:
   *       200:
   *         description: Employee hard deleted successfully
   *       404:
   *         description: Employee not found
   *       500:
   *         description: Internal Server Error
   */
  app.delete(`/${rootUrl}/employee/:employeeId`, hardDeleteEmployee);
  /**
   * @swagger
   * /api/employee/soft-delete/:employeeId:
   *   delete:
   *     summary: Soft delete an employee by ID
   *     tags: [Employee]
   *     parameters:
   *       - in: path
   *         name: employeeId
   *         schema:
   *           type: string
   *         required: true
   *         description: ID of the employee to soft delete
   *     responses:
   *       200:
   *         description: Employee soft deleted successfully
   *       404:
   *         description: Employee not found
   *       500:
   *         description: Internal Server Error
   */
  app.delete(`/${rootUrl}/employee/soft-delete/:employeeId`, softDeleteEmployee);
  /**
   * @swagger
   * /api/employee/restore/:employeeId:
   *   post:
   *     summary: Restore a soft deleted employee by ID
   *     tags: [Employee]
   *     parameters:
   *       - in: path
   *         name: employeeId
   *         schema:
   *           type: string
   *         required: true
   *         description: ID of the employee to restore
   *     responses:
   *       200:
   *         description: Employee restored successfully
   *       404:
   *         description: Employee not found
   *       500:
   *         description: Internal Server Error
   */
  app.post(`/${rootUrl}/employee/restore/:employeeId`, restoreEmployee);
}

module.exports = routes;
