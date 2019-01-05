const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require("dotenv");

// ENV conifg
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Connections
require("./config/dbconnection");

// Models
let User = require("./models/User");

const api = require("./routes/api/api");
app.use("/api", api);

app.get('*', (req, res) => {
    res.json({ message: '404, Page not found' });
});

app.listen(process.env.PORT, () => {
    console.log('Server running at ' + process.env.PORT);
});