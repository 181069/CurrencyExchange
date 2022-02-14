let express = require("express");
let app = express();
let bodyParser = require("body-parser");
var cors = require('cors')
let formsRouter = require("../api/controllers/formsController");
let currencyRouter = require("../api/controllers/currencyController");
let paymentRouter = require("../api/controllers/paymentController");
const recordRoute = require("./controllers/recordController");
const alertRoute = require("./controllers/alertController");

app.use(bodyParser.json());
app.use(cors());

app.use("/forms", formsRouter);
app.use("/currency", currencyRouter);
app.use("/payment", paymentRouter);
app.use("/records", recordRoute);
app.use("/alerts", alertRoute);

app.listen(3004, () => {
  console.log("app is running on port 3004");
});
