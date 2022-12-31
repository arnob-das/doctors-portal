import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import ServiceCard from './ServiceCard';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('AppointmentOptions.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className='lg:px-12 px-4 my-28'>
            <div className="text-center">
                <h4 className="text-secondary text-2xl font-bold">Available Services on {format(date, 'PP')}</h4>
                <h4 className='text-accent text-xl lg:mt-2'>Please select a service.</h4>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20'>
                {services.map((service) => <ServiceCard service={service} setTreatment={setTreatment} key={service._id} />)}
            </div>
            {/* set modal here */}
            {treatment && <BookingModal treatment={treatment} />}
        </div>
    );
};

export default AvailableAppointment;