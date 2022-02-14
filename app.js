let express = require("express");
let app = express();
let bodyParser = require("body-parser");
var cors = require('cors')
let formsRouter = require("./controllers/formsController");
let currencyRouter = require("./controllers/currencyController");
let paymentRouter = require("./controllers/paymentController");

app.use(bodyParser.json());
app.use(cors());

app.use("/forms", formsRouter);
app.use("/currency", currencyRouter);
app.use("/payment", paymentRouter);

app.listen(3004, () => {
  console.log("app is running on port 3004");
});
