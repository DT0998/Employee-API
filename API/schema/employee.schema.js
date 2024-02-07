const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// lib softdelete
const MongooseDelete = require("mongoose-delete");

/**
 * @swagger
 * components:
 *   schemas:
 *     Employee:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - finished
 *       properties:
 *         name:
 *             type: string
 *         email:
 *           type: string
 *         dateAdded:
 *           type: string
 *           format: date
 */

// user schema
let employeeSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  dateAdded: { type: Date, default: Date.now },
});

// add plugin soft delete
employeeSchema.plugin(MongooseDelete, { overrideMethods: "all" });

let Employee = mongoose.model("employee", employeeSchema);

module.exports = { Employee, employeeSchema };
