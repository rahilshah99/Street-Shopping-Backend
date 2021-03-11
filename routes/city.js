const express = require("express");
const dbConnection = require("../dbConfig");
const routes = express.Router();
const { check } = require("express-validator");
const { getAllCities, getCityById, AddCity, updateCity, deleteCity } = require("../controller/city");

//get all cities
routes.get("/cities", getAllCities);

//get city by id
routes.get("/city/:cityId", getCityById)

//add city
routes.post("/city",[
    check("cityName", "city name should be at least 3 char").isLength({ min: 3 }),
    check("stateId", "state id should be at least 1 char").isLength({ min: 1 }),
    ], AddCity);

//update city
routes.put("/city/:cityId",[
    check("cityName", "city name should be at least 3 char").isLength({ min: 3 }),
    check("stateId", "state id should be at least 1 char").isLength({ min: 1 }),
    ],updateCity);

//delete city
routes.delete("/city/:stateId", deleteCity);

module.exports = routes;