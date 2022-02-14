var express = require("express");
const bodyParser = require("body-parser");
const recordController = require("./app/controllers/record");
const alertController = require("./app/controllers/alert")
const app = express();
app.use(bodyParser.json());

app.use("/record", recordController);
app.use("/alert",  alertController);
app.listen(3002, () => {
  console.log("the app is running ");
});
