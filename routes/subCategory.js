const express = require("express");
const dbConnection = require("../dbConfig");
const routes = express.Router();
const { check } = require("express-validator");
const {  } = require("../controller/category");
const { getAllSubCategories, getSubCategoryById, AddSubCategory, updateSubCategory, deleteSubCategory } = require("../controller/subCategory");

//get all sub-categories
routes.get("/subCategories", getAllSubCategories);

//get sub-category by id
routes.get("/subCategory/:id", getSubCategoryById)

//add sub-category
routes.post("/subCategory",[
    check("subCategoryName", "sub-category name should be at least 3 char").isLength({ min: 3 }),
    check("categoryId", "category id should be at least 3 char").isLength({ min: 3 }),
], AddSubCategory);

//update sub-category
routes.put("/subCategory/:subCategoryId",[
    check("subCategoryName", "sub-category name should be at least 3 char").isLength({ min: 3 }),
    check("categoryId", "categoryId type should be at least 3 char").isLength({ min: 3 }),
], updateSubCategory);

//delete sub-category
routes.delete("/subCategory/:subCategoryId", deleteSubCategory);

module.exports = routes;