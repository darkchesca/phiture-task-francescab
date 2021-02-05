import axios from 'axios';

export async function getFilteredPlayers(filters: any) {
    const options: any = {
        method: 'GET',
        url: 'http://localhost:5000/filteredPlayers',
        headers: {
            'content-type': 'application/json'
        },
        params: filters,
        json: true
    };

    try {
        const resp = await axios.request(options);
        return resp.data;
    } catch (e) {
        console.log(e)
    }
}


export async function getAllPlayers() {
    const options: any = {
        method: 'GET',
        url: 'http://localhost:5000/allplayers',
        headers: {
            'content-type': 'application/json'
        },
        json: true
    };

    try {
        const resp = await axios.request(options);
        return resp.data;
    } catch (e) {
        console.log(e)
    }
}
