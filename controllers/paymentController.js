var express = require("express");
var paymentRoutes = express.Router();
var PaymentService = require("../services/paymentService");
const paymentObj = new PaymentService();


paymentRoutes.get("/getAllPayments", async (req, res) => {
  res.send(await paymentObj.getAllPayments().then((res) => res));
});



module.exports = paymentRoutes;

