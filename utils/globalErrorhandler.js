const AppError = require('./appError');

const handDuplicateErrorDb  = ()=>{
    const message = `Duplicate Field Error try with other values`;
     return next(new AppError(message, 401))

}
const sendErrorDeveopmentError =(err  , res)=>{
    res.status(err.statusCode).json({
        status: err.status,
        error:err,
        message: err.message,
        stack: err.stack
    })

}
const sendErrorProduction =(err)=>{

}

module.exports =(app)=>{
    app.use((err , req , res , next)=>{
        err.statusCode  = err.statusCode || 500;
        err.status = err.status  || 'error';

      if(process.env.NODE_ENV === 'development'){
          sendErrorDeveopmentError(err, res)
      }else if(proccess.env.MODE_ENV === 'production'){
        if(err.name === 11000) err = handDuplicateErrorDb()

      }


    })
}