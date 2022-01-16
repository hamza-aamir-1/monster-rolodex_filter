import React from 'react';
import './card.css';

export const Card = props => (
    <div className="card-container">
        <img alt="Monster" className='monster-img' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
        <h2>{props.monster.name}</h2>
        <h5>{props.monster.email}</h5>
    </div>
)