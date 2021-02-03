import axios from 'axios';

export async function getHello() {
    try {
        const resp = await axios.get('/hello') // url-route in the server we want to request;
        return resp.data;
    } catch (e) {
        console.log(e)
    }
}

export async function getPlayers(filters: any) { //todo if !filters -> getAll ? or do 2 different apis?
    const options: any = {
        method: 'GET',
        url: 'http://',
        headers: {
            'content-type': 'application/json',
            'subscription-key': 'key'
        },
        params: filters, //todo check name of attribute
        json: true
    };

    try {
        const resp = await axios.request(options);
        return resp.data;
    } catch (e) {
        console.log(e)
    }
}
