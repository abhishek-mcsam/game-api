const mongoose = require("mongoose");

module.exports = ()=>{
    mongoose.connect(process.env.db,{
         useUnifiedTopology: true ,
         useNewUrlParser: true,
         useFindAndModify: false,
    }).then(()=>{
        console.log("Db Connected")
    }).catch((err)=>{
        console.log("Not Connected To Db " , err)
    })
}