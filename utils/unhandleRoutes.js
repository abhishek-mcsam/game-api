const AppError = require("./appError");

module.exports =(app)=>{
    app.all('*' , (req,res , next)=>{
        next(new AppError(`Can't find On the ${req.originalUrl} on the server`, 404))
      
    })

}