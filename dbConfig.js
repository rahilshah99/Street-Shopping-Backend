const mysql = require("mysql");


// Exporting method which establishid the connection with database...
const dbConnection = mysql.createConnection({
    // All this information is confidential, so we are just keeping them secretly...
    host: process.env.HOST,
    user: "root",
    password: "",
    database: "street_shopping1",
    multipleStatements: true
});

dbConnection.connect((err)=>{
    if(err)
        console.log(err);
    else
        console.log("Db is connected");
});

module.exports = dbConnection;