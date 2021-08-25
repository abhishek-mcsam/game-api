const express = require("express");
const helmet = require("helmet")
const mongoSanitize=require('express-mongo-sanitize');
const xss = require('xss-clean')


// initialize app
const app = express();


app.use(helmet())

// Prevent to No Sql Data Injection
app.use(mongoSanitize());

// Prevent to malicious  htmldata
app.use(xss())


// require routes
require("./startup/dotenv")();
require("./db/db")();
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./utils/unhandleRoutes")(app);
require("./utils/globalErrorhandler")(app);




//  initialize PORT
const port = process.env.PORT || 5000;

//  create Server
app.listen(port, ()=>{
    console.log(`Port Start On ${port}`)
})