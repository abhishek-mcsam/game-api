const express = require('express');
const PrizeController = require('../controllers/prizeControler')

const routes = express.Router();

routes.route('/')
.post(PrizeController.CreatePrize)
.get(PrizeController.GetAllPrize);

routes.route("/:id")
.patch(PrizeController.UpdatePrize)
.delete(PrizeController.DeletePrize)

module.exports = routes;
