import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import ServiceCard from './ServiceCard';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [date]);

    return (
        <div className='lg:px-12 px-4 my-28'>
            <div className="text-center">
                <h4 className="text-secondary text-2xl font-bold">Available Services on {format(date, 'PP')}</h4>
                <h4 className='text-accent text-xl lg:mt-2'>Please select a service.</h4>
            </div>
            {/* spinner starts*/}
            <div className="mt-20 flex">
                {services.length === 0 && <button className="btn btn-circle btn-primary loading mx-auto bg-gradient-to-r from-secondary bg-gradient-to-primary"></button>}
            </div>
            {/* spinner ends */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20'>
                {services.map((service) => <ServiceCard service={service} setTreatment={setTreatment} key={service._id} />)}
            </div>
            {/* set modal here */}
            {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment} />}
        </div>
    );
};

export default AvailableAppointment;