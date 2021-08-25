const mongoose = require("mongoose");

const shopschema = new mongoose.Schema({
    name:{
        type: String,
        required: [true , 'Name is reuired']
      
    },
   campday:{
       type: Number
   },
   
},
 
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
},
{
    timestamps: true
}
);

shopschema.virtual("prize", {
    ref:"prize",
    foreignField:"shop",
    localField:"_id",
    

})

shopschema.pre(/^find/ , function(next){
    console.log("Inside the Pre Hook")
    this.populate({
        path:"prize",
        select:"-__v"
    })
    next();
})

module.exports = mongoose.model('shop' , shopschema)