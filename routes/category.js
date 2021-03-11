const express = require("express");
const dbConnection = require("../dbConfig");
const routes = express.Router();
const { check } = require("express-validator");
const { getAllCategories, getCategoryById, AddCategory, updateCategory, deleteCategory } = require("../controller/category");

//get all categories
routes.get("/categories", getAllCategories);

//get category by id
routes.get("/category/:id", getCategoryById)

//add category
routes.post("/category",[
    check("categoryName", "category name should be at least 3 char").isLength({ min: 3 }),
    check("categoryType", "category type should be at least 3 char").isLength({ min: 3 }),
], AddCategory);

//update category
routes.put("/category/:categoryId",[
    check("categoryName", "category name should be at least 3 char").isLength({ min: 3 }),
    check("categoryType", "category type should be at least 3 char").isLength({ min: 3 }),
], updateCategory);

//delete category
routes.delete("/category/:categoryId", deleteCategory);

module.exports = routes;