const express = require("express");
const bodyParser = require("body-parser"); //helps to parse the requests

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

app.use(function (req, res, next) { // just to simplify things
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// routes
require("./app/routes/player.routes.js")(app);
