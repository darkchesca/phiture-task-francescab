module.exports = app => {
    const players = require("../controllers/player.controller.js");

    // Retrieve all Players
    app.get("/allplayers", players.findAll);

    // Retrieve some Players by params
    app.get("/filteredPlayers", players.findSome);

};
