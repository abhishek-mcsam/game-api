const prize = require("../data/prize");
const shop  = require("../data/shop");

exports.CreateUser =(req, res)=>{
    try{
        console.log("Prizeeee is " , prize)
        console.log("shop is " , shop)
        
        res.send("User Created")
    }catch(er){

    }
}

 