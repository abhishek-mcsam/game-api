const express = require('express');
const shopController = require("../controllers/shopController")

const routes = express.Router();

routes.route('/').post(shopController.CreateShop)

module.exports = routes;


