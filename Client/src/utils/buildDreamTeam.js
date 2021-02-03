const getNumberFromString = (string) => {
    return parseFloat(string) * 100000;
}
export const buildDreamTeam = (budget, allPlayers) => {
    const teamRoles = {
        goalKeeper: {},

        fullback1: {},
        fullback2: {},

        halfback1: {},
        halfback2: {},
        halfback3: {},

        forward1: {},
        forward2: {},
        forward3: {},
        forward4: {},
        forward5: {},
    }

    //calculate cheapest team and return if budget < cheapest team ?

    //filter players in arrays by role [keep ID, price, score, position]
    //order array by score and price

    //calculate best team -> when values === -> take cheaper, if price === pick random
    //if budget > team price --> show team
    //else
    //take cheapest 2nd best of worst score

}
