const express = require('express');
const cors = require('cors');
// const config = require("dotenv").config();
// const port = process.env.PORT;
const port = 3001;
var app = express();
app.use(cors());
app.get('/dev/data', (req, res) => {
    res.status(200).send({
        data: [3.2121,
            3.1925,
            3.2069,
            3.1879,
            3.1681,
            3.1623,
            3.1671,
            3.1972,
            3.1938,
            3.1792,
            3.1722,
            3.1586,
            3.1434,
            3.1353,
            3.1330,
            3.1305,
            3.1078,
            3.1057,
            3.1118,
            3.1083,
            3.1057,
            3.1305,]
    });
})





app.get('/dev/data2', (req, res) => {
    res.status(200).send({
        data: [
            4.5026,
            4.4941,
            4.4801,
            4.4682,
            4.4460,
            4.4502,
            4.4628,
            4.5006,
            4.4841,
            4.4660,
            4.4513,
            4.4269,
            4.4166,
            4.4068,
            4.3962,
            4.3806,
            4.3740,
            4.3680,
            4.3755,
            4.3684,
            4.3780,
            4.3775,
        ]
    });
});

app.get('*', (req, res) => {
    res.status(404).send({ url: req.originalUrl });
})
app.listen(port, () => console.log(`listening on port ${port}`));
