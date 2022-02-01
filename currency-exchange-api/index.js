const express = require('express');
const cors = require('cors');
// const config = require("dotenv").config();
// const port = process.env.PORT;
const port = 3001;
var app = express();
app.use(cors());
app.get('*', (req, res) => {
    res.status(404).send({ url: req.originalUrl });
})
app.listen(port, () => console.log(`listening on port ${port}`));
