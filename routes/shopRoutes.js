const express = require('express');
const shopController = require("../controllers/shopController");
const ProtectController = require("../controllers/authController")

const routes = express.Router();

routes.route('/').post(shopController.CreateShop).get(ProtectController.Protect , shopController.GetAllshop)

module.exports = routes;


