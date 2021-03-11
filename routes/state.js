const express = require("express");
const dbConnection = require("../dbConfig");
const routes = express.Router();
const { check } = require("express-validator");
const { getAllStates, getStateById, AddState, updatestate, deleteState } = require("../controller/state");

//get all states
routes.get("/states", getAllStates);

//get state by id
routes.get("/state/:id", getStateById)

//add state
routes.post("/state",[
    check("stateName", "state name should be at least 3 char").isLength({ min: 3 }),
], AddState);

//update state
routes.put("/state/:stateId",[
    check("stateName", "state name should be at least 3 char").isLength({ min: 3 }),
], updatestate);

//delete state
routes.delete("/state/:stateId", deleteState);

module.exports = routes;