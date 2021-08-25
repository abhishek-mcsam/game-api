const express = require('express');
const shopController = require("../controllers/shopController");
const authController = require("../controllers/authController")

const routes = express.Router();

routes.route('/')
.post(authController.Protect  , authController.Restrict('isadmin') , shopController.CreateShop).get(authController.Protect , shopController.GetAllshop)

module.exports = routes;


