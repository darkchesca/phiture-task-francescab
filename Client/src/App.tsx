import React, {useEffect, useState} from 'react';
import './App.scss';
import {Button} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {getHello} from "./api/api";

function App() {
    const {t} = useTranslation()
    let [hello, setHello] = useState('');

    async function getH() {
        try {
            const res = await getHello();
            setHello(res)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getH();

    })
    return (
        <div>
            <span>{hello ? hello : "Not hello"}</span>
            <Button variant="outline-secondary">{t('main.test')}</Button>
        </div>

    );
}

export default App;
