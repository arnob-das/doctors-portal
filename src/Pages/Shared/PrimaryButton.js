import React from 'react';

const PrimaryButton = ({text}) => {
    return (
        <div>
            <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary bg-gradient-to-primary">{text}</button>
        </div>
    );
};

export default PrimaryButton;