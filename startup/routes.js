const express = require("express");
const user = require("../routes/userRoutes");
const Prize = require("../routes/prizeRoutes");
const Shop = require("../routes/shopRoutes");

 

 

module.exports =(app)=>{
    
    app.use(express.json()) 
    app.use("/app/user" , user)
    app.use("/app/prize" ,Prize)
    app.use("/app/shop" , Shop)
   




}