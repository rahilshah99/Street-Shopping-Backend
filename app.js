const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("Welcome to Street-Shopping...");
});

app.listen( process.env.PORT || 3000, ()=>{
    console.log("App is running...");
});