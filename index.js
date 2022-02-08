var express = require("express");
const bodyParser = require("body-parser");
const recordController = require("./app/controllers/record");

const app = express();
app.use(bodyParser.json());

app.use("/record", recordController);

app.listen(3002, () => {
  console.log("the app is running ");
});
