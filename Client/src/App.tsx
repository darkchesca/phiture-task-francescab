import React from 'react';
import './App.scss';
import './styles/style.scss';
//import {useTranslation} from "react-i18next";
//import {getHello} from "./api/api";
import {NavbarCustom} from '../src/components/Navbar/Navbar';

function App() {
    /*const {t} = useTranslation()
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

    })*/
    return (
        <div className="App">
            <NavbarCustom/>
            {/*<span>{hello ? hello : "Not hello"}</span>*/}
        </div>

    );
}

export default App;
