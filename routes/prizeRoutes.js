const express = require('express');
const PrizeController = require('../controllers/prizeControler')

const routes = express.Router();

routes.route('/').post(PrizeController.CreatePrize);


module.exports = routes;
