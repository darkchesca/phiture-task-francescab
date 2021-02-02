import axios from 'axios';

export async function getHello() {
    try {
        const resp = await axios.get('/hello') // url-route in the server we want to request;
        return resp.data;
    } catch (e) {
        console.log(e)
    }
}

/*export async function getRecommendations(text: any) {
    const options: any = {
        method: 'POST',
        url: 'http://',
        headers: {
            'content-type': 'application/json',
            'subscription-key': 'key'
        },
        data: text,
        json: true
    };

    try {
        const resp = await axios.request(options);
        return resp.data;
    } catch (e) {
        console.log(e)
    }
}*/
