const dbConnection = require("../dbConfig");
const generateUniqueId = require("generate-unique-id");
const { check, validationResult } = require("express-validator");
const SubCategory = require("../models/SubCategory");
const { qGetAllSubCategory,
        qGetSubCategoryById,
        qAddSubCategory,
        qUpdateSubCategory,
        qDeleteSubCategory } = require("../models/SubCategoryQueries");
    
//get all sub categories
exports.getAllSubCategories = (req, res)=>{
    dbConnection.query(qGetAllSubCategory(), (err, rows, field) =>{
        if(err)
            console.log(err);
        else
            res.send(rows);
    });
    
    
}

//get sub-category by id
exports.getSubCategoryById = (req, res) =>{
    const subCategoryId = req.params.id;
    console.log(subCategoryId);
    dbConnection.query(qGetSubCategoryById(), 
    [subCategoryId.trim()], 
    (err, rows, field) =>{
        console.log(err);
        console.log(rows);
        if(err)
            console.log(err);
        else
            res.send(rows);
    })
}

//add sub-category
exports.AddSubCategory = (req, res) => {
    //console.log(req.body);
    const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
        error: errors.array()[0].msg
    });
  }
    
    const subCategory = new SubCategory(req.body);
    let {subCategoryId, subCategoryName, categoryId, createdAt, updatedAt} = subCategory;
    subCategoryId = generateUniqueId({
        length: 20,
    });
    dbConnection.query(qAddSubCategory(), 
    [subCategoryId, subCategoryName, categoryId], (err, rows, fields) => {
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
    

//update sub-category
exports.updateSubCategory = (req, res) => {
const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
        error: errors.array()[0].msg
    });
  }
    const subCategory = new SubCategory(req.body);
    let {subCategoryId, subCategoryName, categoryId, createdAt, updatedAt} = subCategory;    
    subCategoryId = req.params.subCategoryId;

    console.log(subCategoryId);

    dbConnection.query(qUpdateSubCategory(), 
    [subCategoryName, categoryId, subCategoryId], 
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

//delete sub-category
exports.deleteSubCategory = ( req, res )=>{
    const subCategoryId = req.params.subCategoryId;

    console.log(subCategoryId);
    dbConnection.query(qDeleteSubCategory(),
    [ subCategoryId ],
    ( error, rows, fields )=>{
        if( error ){
            console.log(error);
        } else{
            res.send(rows);
        }
    });
};



