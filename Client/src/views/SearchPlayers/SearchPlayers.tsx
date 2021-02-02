import React, {useState} from "react";
import {useTranslation} from "react-i18next";

import {LoadingModal} from './../../components/LoadingModal/LoadingModal';

import {Col, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

import './SearchPlayers.scss';
import './../../styles/style.scss';

export const SearchPlayers: React.FC = () => {
    const {t} = useTranslation();
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(false);

    return (
        <div className="search-players-view">
            <div className="search-players-view_form">
                <div className="search-players-view_form-title">{t('searchPlayers.formTitle')}</div>
                <Form>
                    <Form.Row className="align-items-center">
                        <Col xs="auto">
                            <Form.Label htmlFor="inlineFormInput" srOnly>{t('searchPlayers.searchBy')}</Form.Label>
                            <Form.Control as="select" className="mb-2">
                                <option>{t('searchPlayers.name')}</option>
                                <option>{t('searchPlayers.nationality')}</option>
                                <option>{t('searchPlayers.club')}</option>
                            </Form.Control>
                        </Col>
                        <Col xs="auto">
                            <Form.Label htmlFor="inlineFormInput" srOnly>{t('searchPlayers.type')}</Form.Label>
                            <Form.Control type="text" placeholder={t('searchPlayers.type')} className="mb-2"/>
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
                        ? <span>Error Modal</span>
                        : <span>Table</span>
                }
            </div>

        </div>
    )
}
