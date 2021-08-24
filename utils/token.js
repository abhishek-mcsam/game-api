const jwt = require("jsonwebtoken");
 

exports.Createtoken =async(user)=>{
    const token = await  jwt.sign({id: user.id} , process.env.JWT_PRIVATE_KEY ,{
        expiresIn: process.env.EXPYIRE_IN
    })
    return token;
}

exports.verifyToken = (token)=>{
    try{
        const decoded = jwt.verify(token , process.env.JWT_PRIVATE_KEY )
         return decoded;
    }catch(err){
        return null
    }
   
}