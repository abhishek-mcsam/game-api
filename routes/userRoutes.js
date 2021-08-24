const express = require("express");
const userController = require("../controllers/userController")
const authController  = require("../controllers/authController")

const router = express.Router();

router.route('/rewards').post(userController.RewardsController)
router.route("/").post(userController.CreateUser).get(authController.Protect , userController.GetAlluser)

module.exports = router