const dbConnection = require("../dbConfig");
const generateUniqueId = require("generate-unique-id");
const { check, validationResult } = require("express-validator");
const City = require("../models/City");

const { qGetAllCity,
        qGetCityById,
        qAddCity,
        qUpdateCity,
        qDeleteCity } = require("../models/CityQueries");

//get all cities
exports.getAllCities = (req, res)=>{
    dbConnection.query(qGetAllCity(), (err, rows, field) =>{
        if(err)
            console.log(err);
        else
            res.send(rows);
    });
    
    
}

//get city by id
exports.getCityById = (req, res) =>{
    const cityId = req.params.cityId;
    console.log(cityId);
    dbConnection.query(qGetCityById(), 
    [cityId.trim()], 
    (err, rows, field) =>{
        if(err)
            console.log(err);
        else
            res.send(rows);
    })
}

//add city
exports.AddCity = (req, res) => {
    //console.log(req.body);
    console.log(req.body.cityName);
    const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
        error: errors.array()[0].msg
    });
  }
    
    const city = new City(req.body);
    let {cityId, cityName, stateId, createdAt, updatedAt} = city;
    cityId = generateUniqueId({
        length: 20,
        includeSymbols: ['@', '#', '|']
    });
    dbConnection.query(qAddCity(), 
    [cityId, cityName, stateId], (err, rows, fields) => {
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
    

//update city
exports.updateCity = (req, res) => {
const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
        error: errors.array()[0].msg
    });
  }
    const city = new City(req.body);
   let {cityId, cityName, stateId, createdAt, updatedAt} = city;    
    cityId = req.params.cityId;

   console.log(cityId);
   console.log(cityName);
   console.log(stateId);

   dbConnection.query(qUpdateCity(), 
   [cityName, stateId, cityId], 
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

//delete city
exports.deleteCity = ( req, res )=>{
    const cityId = req.params.cityId;

    console.log(cityId);
    dbConnection.query(qDeleteCity(),
    [ cityId ],
    ( error, rows, fields )=>{
        if( error ){
            console.log(error);
        } else{
            res.send(rows);
        }
    });
};



