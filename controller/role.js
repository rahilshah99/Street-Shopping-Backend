const dbConnection = require("../dbConfig");
const Role = require("../models/Role");
const { check, validationResult } = require("express-validator");
const generateUniqueId = require("generate-unique-id");
const { qGetAllRole,
        qGetRoleById,
        qAddRole,
        qUpdateRole,
        qDeleteRole } = require("../models/RoleQueries");
//get all roles
exports.getAllRoles = (req, res)=>{
    dbConnection.query(qGetAllRole(), (err, rows, field) =>{
        if(err)
            console.log(err);
        else
            res.send(rows);
    });
    
    
}

//get role by id
exports.getRoleById = (req, res) =>{
    const userId = req.params.id;
    dbConnection.query(qGetRoleById(), 
    [userId], 
    (err, rows, field) =>{
        if(err)
            console.log(err);
        else
            res.send(rows);
    })
}

//add role
exports.AddRole = (req, res) => {
    console.log(req.body);
    console.log(req.file);
    console.log(req.body.roleName);
    const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
        error: errors.array()[0].msg
    });
  }

   const role = new Role(req.body);
   const {roleId, roleName, createdAt, updatedAt} = role;
    roleId = generateUniqueId({
        length: 20,
    });
   dbConnection.query(qAddRole(), 
   [roleName], (err, rows, fields) => {
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

//update role
exports.updateRole = (req, res) => {
    const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
        error: errors.array()[0].msg
    });
  }
    const role = new Role(req.body);
   let {roleId, roleName, createdAt, updatedAt} = role;    
    roleId = req.params.roleId;

   console.log(roleId);

   dbConnection.query(qUpdateRole(), 
   [roleName, roleId], 
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

exports.deleteRole = ( req, res )=>{
    const roleId = req.params.roleId;

    console.log(roleId);
    dbConnection.query(qDeleteRole(),
    [ roleId ],
    ( error, rows, fields )=>{
        if( error ){
            console.log(error);
        } else{
            res.send(rows);
        }
    });
};



