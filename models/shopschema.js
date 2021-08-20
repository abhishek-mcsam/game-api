const mongoose = requiere("mongoose");

const shopschema = new mongoose.Schema({
    name:{
        type: String,
        require: [true , 'Name is reuired']
       
    },
    prizelist: [
        {
         prize:   mongoose.Schema.ObjectId
        }
      ],
   campday:{
       type: Number
   },
   
})

module.exports = mongoose.model('shop' , shopschema)