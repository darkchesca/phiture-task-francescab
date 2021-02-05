const express = require("express");
const bodyParser = require("body-parser"); //helps to parse the requests

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// simple route
app.get("/", (req, res) => {
    res.json({message: "This is a test.."});
});

// routes
require("./app/routes/player.routes.js")(app);

// listen for requests at set port (5000) -> http://localhost:5000
app.listen(5000, () => {
    console.log("Server is running on port 5000.");
});
