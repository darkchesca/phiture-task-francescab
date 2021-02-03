import React from "react";
import Modal from "react-bootstrap/cjs/Modal";

interface Props {
    showModal: boolean;
    title: string;
    content: string;
    onHide: () => void;

}

export const ErrorModal: React.FC<Props> = ({showModal, title, content, onHide}) => {

    return (
        <div>
            <Modal show={showModal} onHide={onHide} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{content}</Modal.Body>
            </Modal>
        </div>
    );
}
