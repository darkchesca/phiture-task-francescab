const getNumberFromString = (string) => {
    return parseFloat(string) * 100_000;
}

const orderPlayersByRatePrice = (a, b) => {

}

export const buildDreamTeam = (budget, allPlayers) => {

    //final team
    const finalTeam = {
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

    //role arrays
    let allGk = [];
    let allFb = [];
    let allHb = [];
    let allFw = [];

    //divide players by roles
    for (let p of allPlayers) {
        switch (p["Position"]) {
            case 'GK':
                allGk = [...allGk, ...p];
                break;
            case 'LB':
            case 'RB':
            case 'LWB':
            case 'RWB':
                allFb = [...allFb, ...p];
                break;
            case 'CB':
            case 'LCB':
            case 'RCB':
            case 'CDM':
            case 'LDM':
            case 'RDM':
            case 'CM':
            case 'LCM':
            case 'RCM':
            case 'LM':
            case 'RM':
                allHb = [...allHb, ...p];
                break;
            case 'CAM':
            case 'LAM':
            case 'RAM':
            case 'LWF':
            case 'RWF':
            case 'CF':
            case 'LCF':
            case 'RCF':
                allFw = [...allFw, ...p];
                break;
            default:
        }
    }

    /*
    -> calculate best-cheapest team:
    -> divide players in arrays by role
    -> each array: ORDER BY overall DESC, value ASC (could do this directly from sql query actually)
    -> calculate totalTeamPrice = allGk[0].value + allFb[0].value + allFb[1].value etc.
    if budget >= totalTeamPrice -> return finalTeam
    ---> goalKeeper: {player: allGk[0], index: 0}
    ---> fullback1: {player: allFb[0], index: 0}
    ---> fullback2: {player : allFb[1], index: 1}
    ---> halfback1: {player: allHb[0], index 0}
    ---> halfback2: {player: allHb[1], index: 1}
    ---> halfback3: {player: allHb[2], index: 2}
    ---> forward1: {player: allFw[0], index: 0}
    ---> forward1: {player: allFw[1], index: 1}
    ---> forward1: {player: allFw[2], index: 2}
    ---> forward1: {player: allFw[3], index: 3}
    ---> forward1: {player: allFw[4], index: 4}
    else
    -> get most expensive player from finalTeam
    -> loop his original array to find player with highest overall and cheapest price after him
    -> calculate price of finalTeam
    if budget >= totalTeamPrice -> return finalTeam
    -> recurrent function

    */


    //calculate cheapest team and return if budget < cheapest team ?

    //filter players in arrays by role [keep ID, price, score, position]
    //order array by score and price

    //calculate best team -> when values === -> take cheaper, if price === pick random
    //if budget > team price --> show team
    //else
    //take cheapest 2nd best of worst score

}
