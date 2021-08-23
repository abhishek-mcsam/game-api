const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    identifyid:{
        type:String,
    },
    first_name:{
        type:String,
        
    },
    last_name:{
        type:String
    },
    email:{
        type:String
    },
    address:{
        type:String
    },
    city:{
        type:String
    },
    zipcode:{
        type:String
    },
    shop:{
        type:mongoose.Schema.ObjectId,
        ref:"shop"
    },
   isWinner:{
       type: Boolean,
       default: false

   }
   } , 
  {
    timestamps: { createdAt: "create_at", updatedAt: "updated_at" },
  }
  )
  

module.exports = mongoose.model('User' , userSchema)