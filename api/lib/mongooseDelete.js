// lib softdelete
const MongooseDelete = require("mongoose-delete");
const { userSchema } = require("../models/employee");

// add plugin soft delete
userSchema.plugin(MongooseDelete, {
    deletedAt: true,
    overrideMethods: "all",
});