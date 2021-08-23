const Shop = require("../models/shopschema");

exports.CreateShop = async(req, res)=>{
    try{

        const shop = await Shop.create(req.body)

        res.status(201).json({
            status:"success",
            data: shop
        })

    }catch(er){
        res.send(er)

    }

}

exports.GetAllshop = async (req, res)=>{
    try{
        const shop = await Shop.find().populate("prize");
         
        res.status(200).json({
            status:"success",
            data:shop
           })

    }catch(err){
        res.send(err)

    }
}

exports.DeletesShop =async  (req , res)=>{
    try{

        const shop = await Shop.findAndRemoveById(req.params.id);
        if(!shop){
            return res.status(404).json({
                status:"fail",
                message:"Shop Not Found"
            })
        }
      
        res.status(204).json({
            status:"success",
            message:"shop Delted"
        })
    }catch(er){

        res.send(er)
    }
}