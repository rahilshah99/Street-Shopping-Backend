const dbConnection = require("../dbConfig");
const generateUniqueId = require("generate-unique-id");
const { check, validationResult } = require("express-validator");
const State = require("../models/State");
const { qGetAllState,
        qGetStateById,
        qAddState,
        qUpdateState,
        qDeleteState } = require("../models/StateQueries");
//get all states
exports.getAllStates = (req, res)=>{
    dbConnection.query(qGetAllState(), (err, rows, field) =>{
        if(err)
            console.log(err);
        else
            res.send(rows);
    });
    
    
}

//get state by id
exports.getStateById = (req, res) =>{
    const stateId = req.params.id;
    console.log(stateId);
    dbConnection.query(qGetStateById(), 
    [stateId], 
    (err, rows, field) =>{
        console.log(err);
        console.log(rows);
        if(err)
            console.log(err);
        else
            res.send(rows);
    })
}

//add state
exports.AddState = (req, res) => {
    //console.log(req.body);
    //console.log(req.body.stateName);
    const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
        error: errors.array()[0].msg
    });
  }
    
    const state = new State(req.body);
    let {stateId, stateName, createdAt, updatedAt} = state;
    stateId = generateUniqueId({
        length: 20,
        includeSymbols: ['@', '#', '|']
    });
    dbConnection.query(qAddState(), 
    [stateId, stateName], (err, rows, fields) => {
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
    

//update state
exports.updatestate = (req, res) => {
const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
        error: errors.array()[0].msg
    });
  }
    const state = new State(req.body);
    let {stateId, stateName, createdAt, updatedAt} = state;    
    stateId = req.params.stateId;

    console.log(stateId);

    dbConnection.query(qUpdateState(), 
    [stateName, stateId], 
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

//delete state
exports.deleteState = ( req, res )=>{
    const stateId = req.params.stateId;

    console.log(stateId);
    dbConnection.query(qDeleteState(),
    [ stateId ],
    ( error, rows, fields )=>{
        if( error ){
            console.log(error);
        } else{
            res.send(rows);
        }
    });
};



