const Player = require("../models/player.model.js");

// Retrieve all Players from the database.
exports.findAll = (req, res) => {
    Player.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving players."
            });
        else res.send(data);
    });

};

// Find some Players by params
exports.findSome = (req, res) => {
    Player.findByKeyValue(req.params.params, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Coul not find any players with ${req.params.key} ${req.params.value}.`
                });
            } else {
                res.status(500).send({
                    message: `Error retrieving players  with with ${req.params.key} ${req.params.value}.`
                });
            }
        } else res.send(data);
    });
};

