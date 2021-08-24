const Prize = require("../models/prizeschema");
const logger = require("../utils/logger")


exports.CreatePrize =  async(req , res , next )=>{
    try{
        const prize = await Prize.create(req.body)
      
        res.status(200).json({
            status:"success",
            data: prize
        })

    }catch(err){
        logger.log("error", `prizeController.js | create prize | ${err}`);
        res.status(404).json({
            status:"error", 
            message: err.message
        })
    }

}

exports.GetAllPrize = async (req,res , next )=>{
    try{
        const prize = await Prize.find();
        
        res.status(200).json({
            status:"success",
            data: prize
        })

    }catch(err){

        logger.log("error", `prizeController.js |  Get All Prize | ${err}`);
        res.status(404).json({
            status:"error", 
            message: err.message
        })

    }
  
}

exports.GetPrize = async(req, res , next)=>{

    try{
        const prize = await Prize.findById(req.params.id)
       
        if(!prize){
            res.status(400).json({
                status:"fail",
            message: "Prize nOT FOUND"
            })
        }
        res.status(200).json({
            status:"success",
            data: prize
        })

    }catch(err){
        logger.log("error", `prizeController.js | get Prize | ${err}`);
        res.status(404).json({
            status:"error", 
            message: err.message
        })

    }

}
exports.UpdatePrize = async (req , res  , next)=>{
    try{
       
        const prize = await Prize.findByIdAndUpdate(req.params.id, req.body ,{
            new: true , 
            runValidators: false
        })
        if(!prize){
            return next(new AppError("Prize Not Exit's in Db" , 404))
        }
        res.status(200).json({
            status:"success",
            data: prize
        })

    }catch(err){
        logger.log("error", `prizeController.js |  update prize | ${err}`);
        res.status(404).json({
            status:"error", 
            message: err.message
        })
    }
 
}
exports.DeletePrize = async(req , res, next)=>{
    try{
        const prize = await Prize.findByIdAndRemove(req.params.id)
        
        if(!prize){
            res.status(400).json({
                status:"fail",
            message: "Prize nOT FOUND"
            })
        }
        res.status(204).json({
            status:"success",
             message:"Prize was deleted"
        })

    }catch(err){
        logger.log("error", `prizeController.js |  delete prize | ${err}`);
        res.status(404).json({
            status:"error", 
            message: err.message
        })
    }

}