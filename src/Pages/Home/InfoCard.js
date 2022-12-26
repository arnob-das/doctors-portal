import React from 'react';

const InfoCard = ({ img, cardTitle, cardDescription, bgClass }) => {
    return (
        <div className={`card lg:card-side shadow-xl py-3 lg:py-5 ${bgClass}`}>
            <figure className='pl-5'><img src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{cardDescription}</p>
            </div>
        </div>
    );
};

export default InfoCard;