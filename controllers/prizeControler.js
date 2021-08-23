const Prize = require("../models/prizeschema");

exports.CreatePrize =  async(req , res , next )=>{
    try{
        const prize = await Prize.create(req.body)
        res.status(200).json({
            status:"success",
            data: prize
        })

    }catch(er){
        res.send(er)

    }

}

exports.GetAllPrize = async (req,res , next )=>{
    try{
        const prize = await Prize.find();
        
        res.status(200).json({
            status:"success",
            data: prize
        })

    }catch(er){

        res.status(404).json({
            status:'fail',
            message:"Not Found All Prize"
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

    }catch(er){
        res.status(404).json({
            status:'fail',
            message:"Error To Find Error"
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
        res.status(err)
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

    }catch(er){
        res.status(404).json({
            status:'fail',
            message:"Error To Find Error"
        })

    }

}