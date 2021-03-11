const dbConnection = require("../dbConfig");
const generateUniqueId = require("generate-unique-id");
const { check, validationResult } = require("express-validator");
const Category = require("../models/Category");
const { qGetAllCategory,
        qGetCategoryById,
        qAddCategory,
        qUpdateCategory,
        qDeleteCategory } = require("../models/CategoryQueries");
    
//get all categories
exports.getAllCategories = (req, res)=>{
    dbConnection.query(qGetAllCategory(), (err, rows, field) =>{
        if(err)
            console.log(err);
        else
            res.send(rows);
    });
    
    
}

//get category by id
exports.getCategoryById = (req, res) =>{
    const categoryId = req.params.id;
    console.log(categoryId);
    dbConnection.query(qGetCategoryById(), 
    [categoryId.trim()], 
    (err, rows, field) =>{
        console.log(err);
        console.log(rows);
        if(err)
            console.log(err);
        else
            res.send(rows);
    })
}

//add category
exports.AddCategory = (req, res) => {
    //console.log(req.body);
    const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
        error: errors.array()[0].msg
    });
  }
    
    const category = new Category(req.body);
    let {categoryId, categoryName, categoryType, createdAt, updatedAt} = category;
    categoryId = generateUniqueId({
        length: 20,
    });
    dbConnection.query(qAddCategory(), 
    [categoryId, categoryName, categoryType], (err, rows, fields) => {
        if(err){
            return res.status(402).json({
            error: "Failed to add"
          });   
        } 
        res.json({
            message: "added successfully"
        });
    });
};
    

//update category
exports.updateCategory = (req, res) => {
const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
        error: errors.array()[0].msg
    });
  }
    const category = new Category(req.body);
    let {categoryId, categoryName, categoryType, createdAt, updatedAt} = category;    
    categoryId = req.params.categoryId;

    console.log(categoryId);

    dbConnection.query(qUpdateCategory(), 
    [categoryName, categoryType, categoryId], 
    (err, rows, fields) => {
    if(err){
        return res.status(402).json({
        error: "Failed to update"
      });   
    } 
    res.json({
        message: "updated successfully"
    });
   });
};

//delete category
exports.deleteCategory = ( req, res )=>{
    const categoryId = req.params.categoryId;

    console.log(categoryId);
    dbConnection.query(qDeleteCategory(),
    [ categoryId ],
    ( error, rows, fields )=>{
        if( error ){
            console.log(error);
        } else{
            res.send(rows);
        }
    });
};



