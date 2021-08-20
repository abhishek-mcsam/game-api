exports.CreatePrize = (req , res, )=>{
    try{
        conole.log("Created Prize")
        res.status(200).json({
            status:"success",
            message:"PrizE Created"

        })

    }catch(er){
        res.send(er)

    }

}