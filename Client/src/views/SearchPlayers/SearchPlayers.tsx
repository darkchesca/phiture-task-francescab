import React from "react";
import {Col, Form} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import Button from "react-bootstrap/Button";
import './SearchPlayers.scss';
import './../../styles/style.scss';

export const SearchPlayers: React.FC = () => {
    const {t} = useTranslation();

    return (
        <div className="search-players-view">
            <div className="search-players-view_form">
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

                {/*<Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGroupType">
                            <Form.Label>{t('searchPlayers.searchBy')}</Form.Label>
                            <Form.Control as="select">
                                <option>{t('searchPlayers.name')}</option>
                                <option>{t('searchPlayers.nationality')}</option>
                                <option>{t('searchPlayers.club')}</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGroupText">
                            <Form.Label>{t('searchPlayers.type')}</Form.Label>
                            <Form.Control type="text" placeholder={t('searchPlayers.type')}/>
                        </Form.Group>
                    </Form.Row>
                </Form>
                    <Button variant="primary" type="submit">
                    {t('searchPlayers.find')}
                    </Button>*/}
            </div>
            <div className="search-players-view_table">

            </div>

        </div>
    )
}
