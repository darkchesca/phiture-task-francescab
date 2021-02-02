import React from "react";
import './LoadingModal.scss';
import ball from './../../football.svg';

export const LoadingModal: React.FC = () => {

    return (
        <div>
            <img
                src={ball}
                className="loading-modal-img"
            />
        </div>
    );
}
