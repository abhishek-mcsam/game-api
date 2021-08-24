const AppError = require("../utils/appError");
const {verifyToken , Createtoken} = require("../utils/token");
const User = require("../models/userschema");
const logger = require("../utils/logger");

exports.Protect = async(req , res , next)=>{

 try{

    let token = '';
    
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
    }else{
        token = req.header('x-auth-token')
               
    }
    if(!token){
        return next(new AppError('Permission Denied' , 401))
    }
   const decoded = await verifyToken(token);
   
  if(!decoded){
       return  next(new AppError("Permission Denied" , 401))
   }
   const currentuser = await User.findById(decoded.id);

   if(!currentuser){
       return next (new AppError("Permission Denied" , 401))
   }
    req.user = currentuser;

     
    next();
 
 }catch(err){

        logger.log("error", `auth.js |  protect | ${err}`);
        
        res.status(404).json({
            status:"error", 
            message: err.message
        })
    }

}