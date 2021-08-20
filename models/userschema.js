const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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
    prizeid: mongoose.Schema.ObjectId,

    animaldetails:{
        isCat: Boolean,
        idDog: Boolean,
        weight:Number,
            }
})

module.exports = mongoose.model('user' , userSchema)