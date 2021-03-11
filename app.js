const express = require("express");
var bodyParser = require('body-parser');
require("dotenv");

const app = express();
const fileUpload = require("express-fileupload");
app.use(bodyParser());
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: false }));
app.use(fileUpload());

//my routes
const RoleRoutes = require("./routes/role");
const StateRoutes = require("./routes/state");
const CityRoutes = require("./routes/city");
const CategoryRoutes = require("./routes/category");
const SubCategoryRoutes = require("./routes/subCategory");

//usage of routes
app.use("/api", RoleRoutes);
app.use("/api", StateRoutes);
app.use("/api", CityRoutes);
app.use("/api", CategoryRoutes);
app.use("/api", SubCategoryRoutes);

app.listen( process.env.PORT || 3000, ()=>{
    console.log("App is running...");
});