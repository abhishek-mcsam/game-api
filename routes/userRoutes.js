const express = require("express");
const userController = require("../controllers/userController")

const router = express.Router();

router.route('/rewards').post(userController.RewardsController)
router.route("/").post(userController.CreateUser).get(userController.GetAlluser)

module.exports = router