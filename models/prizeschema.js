const mongoose = require("mongoose");

const prizeSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true, 'Name is Required']
    }
})

module.exports = mongoose.model('prize' , prizeSchema)