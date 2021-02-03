import React, {useRef, useState} from "react";
import {useTranslation} from "react-i18next";
//custom components
import {LoadingModal} from './../../components/LoadingModal/LoadingModal';
import {ErrorModal} from "../../components/ErrorModal/ErrorModal";
//bootstrap components
import {Col, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
//other imports
import './SearchPlayers.scss';
import './../../styles/style.scss';
import Table from "react-bootstrap/cjs/Table";
import {mockPlayersList} from "../../utils/utils";
import {Player} from "../../utils/types";
import logo from './../../logo.png';

const tableHeader = [
    "Photo",
    "Name",
    "Age",
    "Nationality",
    "Club",
    "Overall",
    "Value",
]


export const SearchPlayers: React.FC = () => {
    const {t} = useTranslation();
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(false);
    let [players, setPlayers] = useState<Array<Player>>();
    let [modalTitle, setModalTitle] = useState("");
    let [modalContent, setModalContent] = useState("");

    let searchBy = useRef(null);
    let inputValue = useRef(null);


    function onSubmitSearch(event: any) {
        setLoading(true);
        const form = event.currentTarget;
        //todo add validation: min characters 3
        /*if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }*/
        event.preventDefault();
        const by = (searchBy as any).current.value;
        const tx = (inputValue as any).current.value;
        console.log(by);
        console.log(tx);

        //todo complete api
        try {
            const resp: [] = []; //await
            /*if (!resp.length) { // if resp is empty -> show modal with no result content
                setModalTitle(t('searchPlayers.notFoundTitle'));
                setModalContent(t('searchPlayers.notFoundContent'));
                setLoading(false);
                setError(true);
            } else { // if resp not empty built table
                //setPlayers(resp);
                console.log(players)
                setPlayers(mockPlayersList.data); //
                setLoading(false);
                console.log(players)
            }*/

            setPlayers(mockPlayersList.data);
            setLoading(false);

        } catch (e) { // if error -> show modal with error content
            setModalTitle(t('searchPlayers.errorTitle'));
            setModalContent(t('searchPlayers.errorBody'));
            setError(true);
            setLoading(false);
        }
        //todo empty input after on submit
    }

    return (
        <div className="search-players-view">
            <div className="search-players-view_form">
                <div className="search-players-view_form-title"><h4>{t('searchPlayers.formTitle')}</h4></div>
                <Form onSubmit={onSubmitSearch}>
                    <Form.Row className="align-items-center">
                        <Col xs="auto">
                            <Form.Control
                                ref={searchBy}
                                as="select"
                                className="mb-2">
                                <option>{t('searchPlayers.name')}</option>
                                <option>{t('searchPlayers.nationality')}</option>
                                <option>{t('searchPlayers.club')}</option>
                            </Form.Control>
                        </Col>
                        <Col xs="auto">
                            <Form.Control
                                ref={inputValue}
                                type="text"
                                minLength={3}
                                placeholder={t('searchPlayers.write')}
                                required={true}
                                className="mb-2"/>
                        </Col>
                        <Col xs="auto">
                            <Button variant="dark" type="submit" className="mb-2">
                                {t('searchPlayers.find')}
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
            <div className="search-players-view_table">
                {
                    loading
                        ? <LoadingModal/>
                        : error
                        ? <ErrorModal
                            title={modalTitle}
                            content={modalContent}
                            showModal={error}
                            onHide={() => setError(false)}>Error Modal</ErrorModal>
                        : players != undefined && players.length
                            ? <Table responsive={true} striped bordered hover variant="dark">
                                <thead>
                                <tr>
                                    {tableHeader.map((h) => {
                                        return <th key={h}>{h}</th>
                                    })}
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    mockPlayersList.data.map(p => {
                                        return <tr key={p.ID}>
                                            <td>
                                                <img
                                                    //src={p["Photo"]} //todo find alternative
                                                    src={logo}
                                                    alt={p["Name"]}
                                                    className="app-logo"
                                                />
                                            </td>
                                            <td>{p["Name"]}</td>
                                            <td>{p["Age"]}</td>
                                            <td>{p["Nationality"]}</td>
                                            <td>{p["Club"]}</td>
                                            <td>{p["Overall"]}</td>
                                            <td>{p["Value"]}</td>
                                        </tr>
                                    })
                                }
                                </tbody>
                            </Table>
                            : <span>{t('searchPlayers.nothingToSee')}</span>
                }
            </div>
        </div>
    )
}
