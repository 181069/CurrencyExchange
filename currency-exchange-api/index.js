const express = require('express');
const cors = require('cors');
var app = express();
// app.use(cors());
const port = 3001;
app.get('*', (req, res) => {
    res.status(404).send('404', { url: req.originalUrl });
})
app.listen(port, () => console.log(`listening on port ${port}`));
