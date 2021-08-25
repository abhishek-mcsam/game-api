const express = require("express");
const user = require("../routes/userRoutes");
const Prize = require("../routes/prizeRoutes");
const Shop = require("../routes/shopRoutes");

 

 

module.exports =(app)=>{
    
    app.use(express.json({limit: '10kb'})) 
    app.use("/api/user" , user)
    app.use("/api/prize" ,Prize)
    app.use("/api/shop" , Shop)
   
}