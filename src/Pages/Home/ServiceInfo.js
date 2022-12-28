import React from 'react';

const ServiceInfo = ({ name, description, img }) => {
    return (
        <div className="card shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="images" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceInfo;