const User = require("../models/userschema");
const AppError = require("../utils/appError");
const {Createtoken} = require('../utils/token')
const logger = require("../utils/logger")


 
exports.CreateUser = async (req, res)=>{
    try{
        
       const identifyid = req.body.identifyid
               
       if(!identifyid){
        return next(new AppError("Provide ValidId" , 401))
       }
     
       const exitsUser = await User.findOne({ identifyid : identifyid});
        
        if(exitsUser){
            
             return next(new AppError("Not Applicable to play the Game" , 400))
        }
       const user = await User.create(req.body)

       const token = await Createtoken(user);

        res.status(201).json({
            status:"success",
            token
            
        })
        

    }catch(err){
      
        logger.log("error", `auth.js | create user | ${err}`);

         return res.status(400).json({
             status: "error",
            error: err
         });
    }
}

exports.UpdateUser = async (req, res)=>{
    try{
        console.log("rrrrrr" , req.params.id)
    const user = await User.findByIdAndUpdate(req.params.id , req.body ,{
        new:true,
        runValidators: true
        
    })
    
    if(!user){
        res.status(400).json({
            status:'fail',
            message:"user can't exits"
        })
    }
    res.status(200).json({
        status:"succcess",
        data: user
    })

    }catch(err){
        
        logger.log("error", `usercontroller.js | updateuser | ${err}`);

        return res.status(400).json({
            status: "error",
            message: err.message
        });

    }

}
exports.DeletUser = (req, res)=>{
    try{
    const user = User.findByIdAndRemove(req.params.id)
    if(!user){
        res.status(400).json({
            status:'fail',
            message:"user can't exits"
        })
    }
    res.status(200).json({
        status:"succcess",
        message:"user deleted"
    })

    }catch(err){
        logger.log("error", `usercontroller.js | updateuser | ${err}`);

        return res.status(400).json({
            status: "error",
            message: err.message
        });

    }

}

exports.GetAlluser = async(req , res)=>{
    try{
        
        const user = await User.find() 
        
        res.status(200).json({
            status:"success",
            data: user
        })
       
    }catch(err){
         

        logger.log("error", `usercontroller.js | getalluser | ${err}`);

        return res.status(400).json({
            status: "error",
            message: err.message
        });

    }
}

exports.GetUser = async(req , res)=>{
    try{
        const user = await User.findById(req.params.id);
        
          if(!user){
              return next(new AppError("User Can't Exits" , 400))
          }
          res.status(200).json({
              status:"success" , 
              data: user
          })

    }catch(err){
        logger.log("error", `usercontroller.js | getUser | ${err}`);

        return res.status(400).json({
            status: "error",
            message: err.message
        });

    }

}
exports.RewardsController = async (req , res)=>{
    try{
        const {shop  , iswin , userid } = req.body;
        if(!shop  || !iswin || !userid){
            return res.status(400).json({
                status:"fail",
                message: "Please Provide Valid Details"
            })
        }
        const user = await User.findByIdAndUpdate(userid , {
            shop,
            iswin,
        },
        {
            new: true
            
        });
        
        if(user.iswin === true){
            return res.status(200).json({
                status:"success",
                iswinner: true,

            })
        }else {
            return res.status(200).json({
                status:"success",
                iswinner: false,

            })

        }

    }catch(err){
        logger.log("error", `usercontroller.js | rewards | ${err}`)
        return res.status(400).json({
            status: "error",
            message: err.message
        });
    }
   
}