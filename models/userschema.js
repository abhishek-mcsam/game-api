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
        ref:'shop'
    },
   isWinner:{
       type: Boolean,
       default: false
   },
   animaldetail:{
       iscat:{
           type:Boolean,
           deafult: false
           
       },
       isdog:{
           type:Boolean,
           deafult: false
       },
       iskitten_ispuppy: {
           type:Boolean,
           deafult: false
       },
       isweight:{
           type: String,
           enum:['ten' , 'ten_fifteen', 'twentyfive'],
        //    required:[true , 'must have weight']
       }

   }
   } , 

  {
    timestamps:true
  }

  )
  
userSchema.pre(/^find/ , function(next){
    this.populate({
        path:'shop',
        select:"-__v"
    })
    next();
})
module.exports = mongoose.model('user' , userSchema)