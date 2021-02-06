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
import {getAllPlayers} from "../../api/api";

export const BuildTeam: React.FC = () => {
    const {t} = useTranslation();
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(false);
    let [team, setTeam] = useState<Team>(); // team of type Team
    let [modalTitle, setModalTitle] = useState("");
    let [modalContent, setModalContent] = useState("");
    let [budget, setBudget] = useState(0);

    let inputBudget = useRef(null);

    async function onSubmitBudget(event: any) {

        const budget = (inputBudget as any).current.value;
        event.preventDefault();

        if (budget < 70_000_000) {
            setModalTitle(t('buildTeam.budgetTooLowTitle'));
            setModalContent(t('buildTeam.budgetTooLowContent'));
            setError(true);
            return
        }
        setBudget(budget);

        setLoading(true);
        try {
            const resp = await getAllPlayers();
            console.log(resp);
            // buildDreamTeam(budget, resp); //todo finish method and add wworker
            setTeam(mockTeam);
            setLoading(false);

        } catch (e) { // if error -> show modal with error content
            setModalTitle(t('buildTeam.errorTitle'));
            setModalContent(t('buildTeam.errorBody'));
            setError(true);
            setLoading(false);
        }


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
                                        <PlayerCard name={team.goalKeeper["Name"]} position="Keeper"
                                                    price={team.goalKeeper["Value"]}/>
                                    </div>
                                    <div className="players-row">
                                        <PlayerCard name={team.fullback1["Name"]} position="Fullback 1"
                                                    price={team.fullback1["Value"]}/>
                                        <PlayerCard name={team.fullback2["Name"]} position="Fullback 2"
                                                    price={team.fullback2["Value"]}/>
                                    </div>
                                    <div className="players-row">
                                        <PlayerCard name={team.halfback1["Name"]} position="Halfback 1"
                                                    price={team.halfback1["Value"]}/>
                                        <PlayerCard name={team.halfback2["Name"]} position="Halfback 2"
                                                    price={team.halfback2["Value"]}/>
                                        <PlayerCard name={team.halfback3["Name"]} position="Halfback 3"
                                                    price={team.halfback3["Value"]}/>
                                    </div>
                                    <div className="players-row">
                                        <PlayerCard name={team.forward1["Name"]} position="Forward 1"
                                                    price={team.forward1["Value"]}/>
                                        <PlayerCard name={team.forward2["Name"]} position="Forward 2"
                                                    price={team.forward2["Value"]}/>
                                        <PlayerCard name={team.forward3["Name"]} position="Forward 3"
                                                    price={team.forward3["Value"]}/>
                                        <PlayerCard name={team.forward4["Name"]} position="Forward 4"
                                                    price={team.forward4["Value"]}/>
                                        <PlayerCard name={team.forward5["Name"]} position="Forward 5"
                                                    price={team.forward5["Value"]}/>
                                    </div>
                                </div>
                            </div>
                            : <span>{t('buildTeam.nothingToSee')}</span>
                }
            </div>
        </div>
    )
}
