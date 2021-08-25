const express = require("express");
const userController = require("../controllers/userController")
const authController  = require("../controllers/authController")


const router = express.Router();
// authController.Protect  , authController.Restrict('isadmin')  ,
router.route('/rewards').post( userController.RewardsController)
router.route("/").post(userController.CreateUser).get(authController.Protect  , authController.Restrict('user')  , userController.GetAlluser);
router.route("/:id").patch(userController.UpdateUser).get(userController.GetUser)
// authController.Protect  , authController.Restrict('isadmin') ,
module.exports = router