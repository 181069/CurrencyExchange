var express = require("express");
var currencyRoutes = express.Router();
var CurrencyService = require("../services/currencyService");
const currencyObj = new CurrencyService();


currencyRoutes.get("/getAllCurrencies", async (req, res) => {
  res.send(await currencyObj.getAllCurrencies().then((res) => res));
});



module.exports = currencyRoutes;


