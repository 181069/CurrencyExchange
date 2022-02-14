const express = require("express");
const AlertServices = require("../services/alertService");
const alertRoute = express.Router();
const alertServices = new AlertServices();


alertRoute.get("/getAllAlerts", async (req, res) => {
  res.send(await alertServices.getAllAlert().then((res) => res));
});
alertRoute.post("/addAlert", async (req, res) => {
  const body = req.body;
  return res.send({
    result: await alertServices.addNewAlert(body).then((res) => res),
  });
});
module.exports = alertRoute;
