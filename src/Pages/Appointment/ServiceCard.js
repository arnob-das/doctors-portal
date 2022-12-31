import React from 'react';

const ServiceCard = ({ service, setTreatment }) => {

    const { name, slots } = service;

    const space = slots.length === 1 ? "Space" : "Spaces";

    return (
        <div className="card lg:max-w-lg shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">{name}</h2>
                <p className="text-xl text-accent py-1">
                    {
                        slots.length ?
                            <span>{slots[0]}</span>
                            : <span className="text-red-500">Try Another Date</span>
                    }
                </p>
                <p className="py-1">{slots.length} {space} Available</p>
                <label
                    className="btn btn-sm btn-primary text-white bg-gradient-to-r from-secondary bg-gradient-to-primary"
                    htmlFor="booking-modal"
                    onClick={() => setTreatment(service)}
                    disabled={slots.length === 0}
                >
                    Book Appointment
                </label>
            </div>
        </div>
    );
};

export default ServiceCard;