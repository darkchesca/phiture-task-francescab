const teamRoles = {
    goalKeeper: "ID",

    fullback1: "ID",
    fullback2: "ID",

    halfback1: "ID",
    halfback2: "ID",
    halfback3: "ID",

    forward1: "ID",
    forward2: "ID",
    forward3: "ID",
    forward4: "ID",
    forward5: "ID",
}

const buildDreamTeam = (budget, allPlayers) => {

    if (!budget || budget <= 10000 || typeof budget !== 'Number') {
        return //show modal err budget too low, you need at least $ xx
    }
    //calculate cheapest team and return if budget < cheapest team ?

    //filter players in arrays by role [keep ID, price, score, position]
    //order array by score and price

    //calculate best team -> when values === -> take cheaper, if price === pick random
    //if budget > team price --> show team
    //else
    //take cheapest 2nd best of worst score

}
