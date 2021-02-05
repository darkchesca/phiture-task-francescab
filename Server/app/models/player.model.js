const sql = require("./db.js");

// constructor
const Player = function (player) {
    this.originalIndex = player["originalIndex"];
    this.ID = player["ID"];
    this.name = player["Name"];
    this.age = player["age"];
    this.photo = player["photo"];
    this.nationality = player["nationality"];
    this.overall = player["overall"];
    this.club = player["club"];
    this.position = player["position"];
    this.value = player["value"];
};


Player.findByKeyValue = (params, result) => {
    sql.query(`SELECT * FROM myfifatable WHERE ${params.key} = ${params.value}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found players: ", res);
            result(null, res);
            return;
        }

        // Players not found
        result({kind: "not_found"}, null);
    });
};

Player.getAll = result => {
    sql.query("SELECT * FROM myfifatable", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("players: ", res);
        result(null, res);
    });
};


module.exports = Player;
