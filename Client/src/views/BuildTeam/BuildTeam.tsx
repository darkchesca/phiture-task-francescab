import React, {useRef, useState} from "react";
import {useTranslation} from "react-i18next";
//bootstrap
import {Col, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
//components
import {LoadingModal} from "../../components/LoadingModal/LoadingModal";
import {ErrorModal} from "../../components/ErrorModal/ErrorModal";
import {PlayerCard} from "../../components/PlayerCard/PlayerCard";
//other
import './BuildTeam.scss';
import './../../styles/style.scss';
import {mockTeam} from "../../utils/mocks";
import {Team} from "../../utils/interfaces/Team";

export const BuildTeam: React.FC = () => {
    const {t} = useTranslation();
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(false);
    let [team, setTeam] = useState<Team>(); // team of type Team
    let [modalTitle, setModalTitle] = useState("");
    let [modalContent, setModalContent] = useState("");
    let [budget, setBudget] = useState(0);

    let inputBudget = useRef(null);

    /*async*/
    function onSubmitBudget(event: any) {

        const budget = (inputBudget as any).current.value;
        event.preventDefault();

        if (budget < 10_000 /*| other things*/) {
            setModalTitle(t('buildTeam.budgetTooLowTitle'));
            setModalContent(t('buildTeam.budgetTooLowContent'));
            setError(true);
            return
        }
        setBudget(budget);
        //else ->
        //setLoading(true);
        //getAllPlayers api
        //execute buildDreamTeam

        //todo getAllPlayers api
        try {
            const resp: [] = []; //await
            setLoading(false);

        } catch (e) { // if error -> show modal with error content
            setModalTitle(t('buildTeam.errorTitle'));
            setModalContent(t('buildTeam.errorBody'));
            setError(true);
            setLoading(false);
        }

        //todo replace with real data
        setTeam(mockTeam);
    }

    return (
        <div className="build-team-view">
            <div className="build-team-view_form">
                <div className="build-team-view_form-title"><h4>{t('buildTeam.formTitle')}</h4></div>
                <Form onSubmit={onSubmitBudget}>
                    <Form.Row className="align-items-center">
                        <Col xs="auto">
                            <Form.Control
                                ref={inputBudget}
                                type="number"
                                placeholder={t('buildTeam.write')}
                                required={true}
                                className="mb-2"/>
                        </Col>
                        <Col xs="auto">
                            <Button variant="dark" type="submit" className="mb-2">
                                {t('buildTeam.start')}
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
            <div className="build-team-view_grid">
                {
                    loading
                        ? <LoadingModal/>
                        : error
                        ? <ErrorModal
                            title={modalTitle}
                            content={modalContent}
                            showModal={error}
                            onHide={() => setError(false)}>Error Modal</ErrorModal>
                        : team // team not empty
                            ? <div className="build-team-view_grid-result">
                                <h5>{t('buildTeam.resultTitle', {budget: budget})}</h5>
                                <div className="build-team-view_grid-result-team">
                                    <div className="players-row">
                                        <PlayerCard name={team.goalKeeper["Name"]} position="Keeper"/>
                                    </div>
                                    <div className="players-row">
                                        <PlayerCard name={team.fullback1["Name"]} position="Fullback 1"/>
                                        <PlayerCard name={team.fullback2["Name"]} position="Fullback 2"/>
                                    </div>
                                    <div className="players-row">
                                        <PlayerCard name={team.halfback1["Name"]} position="Halfback 1"/>
                                        <PlayerCard name={team.halfback2["Name"]} position="Halfback 2"/>
                                        <PlayerCard name={team.halfback3["Name"]} position="Halfback 3"/>
                                    </div>
                                    <div className="players-row">
                                        <PlayerCard name={team.forward1["Name"]} position="Forward 1"/>
                                        <PlayerCard name={team.forward2["Name"]} position="Forward 2"/>
                                        <PlayerCard name={team.forward3["Name"]} position="Forward 3"/>
                                        <PlayerCard name={team.forward4["Name"]} position="Forward 4"/>
                                        <PlayerCard name={team.forward5["Name"]} position="Forward 5"/>
                                    </div>
                                </div>
                            </div>
                            : <span>{t('buildTeam.nothingToSee')}</span>
                }
            </div>
        </div>
    )
}
