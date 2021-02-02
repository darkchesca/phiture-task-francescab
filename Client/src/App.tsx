import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

function App() {
    let [hello, setHello] = useState('');
    useEffect(() => {
        axios.get('/hello') // url-route in the server we want to request
            .then(res => setHello(res.data))
            .catch(err => console.log(err))
    })
    return (
        <div>{hello ? hello : "Not hello"}</div>
    );
}

export default App;
