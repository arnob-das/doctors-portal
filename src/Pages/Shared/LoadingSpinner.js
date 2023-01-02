import React from 'react';

const LoadingSpinner = ({text}) => {
    return (
        <div className="lg:my-20 flex">
            <button className="btn btn-primary loading mx-auto bg-gradient-to-r from-secondary bg-gradient-to-primary">{text}</button>
        </div>
    );
};

export default LoadingSpinner;