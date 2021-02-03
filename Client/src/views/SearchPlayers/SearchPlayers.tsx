import React, {useRef, useState} from "react";
import {useTranslation} from "react-i18next";

import {LoadingModal} from './../../components/LoadingModal/LoadingModal';
import {ErrorModal} from "../../components/ErrorModal/ErrorModal";

import {Col, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

import './SearchPlayers.scss';
import './../../styles/style.scss';

export const SearchPlayers: React.FC = () => {
    const {t} = useTranslation();
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(false);
    let [players, setPlayers] = useState([]);
    let [modalTitle, setModalTitle] = useState("");
    let [modalContent, setModalContent] = useState("");

    let searchBy = useRef(null);
    let inputValue = useRef(null);


    function onSubmitSearch(event: any) {
        // setLoading(true);
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

        //add api here
        //seLoading(false)
        try {
            const resp: [] = []; //await
            if (!resp.length) {
                setModalTitle(t('searchPlayers.notFoundTitle'));
                setModalContent(t('searchPlayers.notFoundContent'));
                setError(true);
            } else {
                setPlayers(resp);
            }

        } catch (e) {
            setModalTitle(t('searchPlayers.errorTitle'));
            setModalContent(t('searchPlayers.errorBody'));
            setError(true);
        }
    }

    return (
        <div className="search-players-view">
            <div className="search-players-view_form">
                <div className="search-players-view_form-title">{t('searchPlayers.formTitle')}</div>
                <Form onSubmit={onSubmitSearch}>
                    <Form.Row className="align-items-center">
                        <Col xs="auto">
                            <Form.Label htmlFor="inlineFormInput" srOnly>{t('searchPlayers.searchBy')}</Form.Label>
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
                            <Form.Label htmlFor="inlineFormInput" srOnly>{t('searchPlayers.type')}</Form.Label>
                            <Form.Control
                                ref={inputValue}
                                type="text"
                                placeholder={t('searchPlayers.type')}
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
                        : players.length
                            ? <span>Table</span>
                            : <span>{t('searchPlayers.nothingToSee')}</span>
                }
            </div>
        </div>
    )
}
