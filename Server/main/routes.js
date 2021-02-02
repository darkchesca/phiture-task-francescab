//http requests are managed from here
var express = require('express');
var route = express.Router();

route.get('/hello', function (req, res) { // goes to the /path in the server and and the funxtions tells it what to do with the response
    res.json("Hello world")
});

module.exports = route; // it makes route available for imort in other files (like app.js)
