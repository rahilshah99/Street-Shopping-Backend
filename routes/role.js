const express = require("express");
const dbConnection = require("../dbConfig");
const routes = express.Router();
const { check } = require("express-validator");
const { getAllRoles, getRoleById, AddRole, updateRole, deleteRole } = require("../controller/role");

//get all roles
routes.get("/roles", getAllRoles);

//get role by id
routes.get("/role/:id",[
    check("roleName", "role name should be at least 3 char").isLength({ min: 3 }),
], getRoleById)

//add role
routes.post("/role",[
    check("roleName", "role name should be at least 3 char").isLength({ min: 3 }),
], AddRole);

//update role
routes.put("/role/:roleId", updateRole);

//delete role
routes.delete("/role/:roleId", deleteRole);

module.exports = routes;