const express = require("express");


// initialize app
const app = express();

// require routes
require("./startup/dotenv")();
require("./db/db")();
require("./startup/routes")(app);


//  initialize PORT
const port = process.env.PORT || 5000;



//  create Server
app.listen(port, ()=>{
    console.log(`Port Start On ${port}`)
})