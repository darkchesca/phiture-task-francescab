const getNumberFromString = (string) => {
    return parseFloat(string) * 100000;
}
const allPlayersJson = require('../fifadb.json');

export const buildDreamTeam = (budget, allPlayers) => {
    console.log(budget);
    console.log(allPlayersJson.data);
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

    let gk = [];
    let fb = [];
    let hb = [];
    let fw = [];

    /*for(let p of allPlayersJson.data){
        console.log(p["Position"])
        switch (p["Position"]) {
            case 'GK':
                gk = [...gk, ...p];
                break;
            case 'LB':
            case 'RB':
            case 'LWB':
            case 'RWB':
                fb = [...fb, ...p];
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
                hb = [...hb, ...p];
                break;
            case 'CAM':
            case 'LAM':
            case 'RAM':
            case 'LWF':
            case 'RWF':
            case 'CF':
            case 'LCF':
            case 'RCF':
                fw = [...fw, ...p];
                break;
            default:
                console.log("aaaa");
        }
    }*/
    for (let p of allPlayersJson.data) {
        console.log(p);
        if (p["Position"] === 'GK') {
            gk = [...gk, ...p]
        }
    }
    console.log(gk);
    console.log(fb);
    console.log(hb);
    console.log(fw);


    //calculate cheapest team and return if budget < cheapest team ?

    //filter players in arrays by role [keep ID, price, score, position]
    //order array by score and price

    //calculate best team -> when values === -> take cheaper, if price === pick random
    //if budget > team price --> show team
    //else
    //take cheapest 2nd best of worst score

}
