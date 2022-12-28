import React from 'react';
import InfoCard from './InfoCard';
import Clock from '../../assets/icons/clock.svg'
import Marker from '../../assets/icons/marker.svg'
import Phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <InfoCard cardTitle="Openning Hours" cardDescription="Lorem Ipsum is simply dummy text of the pri" bgClass="bg-gradient-to-r from-secondary bg-gradient-to-primary" img={Clock} />
            <InfoCard cardTitle="Visit Our Location" cardDescription="Brooklyn, NY 10036, United States" bgClass="bg-accent" img={Marker} />
            <InfoCard cardTitle="Contact Us" cardDescription="+000 123 456789" bgClass="bg-gradient-to-r from-secondary bg-gradient-to-primary" img={Phone} />
        </div>
    );
};

export default Info;