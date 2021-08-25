const mongoose = require("mongoose");

const prizeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Name is requiredd']
    },
    shop:{
        type:mongoose.Schema.ObjectId,
        ref:'shop',
        required: [true , 'Provide Valid ShopId']
       }
    
},
{
    timestamps: true
}
)



module.exports = mongoose.model('prize' , prizeSchema)