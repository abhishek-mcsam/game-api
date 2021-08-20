exports.CreateShop = (req, res)=>{
    try{
        console.log("Inside the Shop Routes")
        res.status(200).json({
            status:"success",
            message:"Shop Created"
        })

    }catch(er){
        res.send(er)

    }

}