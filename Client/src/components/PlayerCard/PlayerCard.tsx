import React from "react";
import './PlayerCard.scss';
import logo from './../../logo.png';

interface Props {
    name: string;
    position: string;
    price: string;
}

export const PlayerCard: React.FC<Props> = ({name, position, price}) => {

    return (
        <div className="player-card">
            <div><img
                src={logo}
                alt={name}
                className="player-card_photo"
            /></div>
            <span>{name}</span>
            <span>{position}</span>
            <span>{price}</span>
        </div>
    )
}
