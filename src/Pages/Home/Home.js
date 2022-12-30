import React from 'react';
import Banner from './Banner';
import ContactUsHome from './ContactUsHome';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className="">
            <Banner />
            <Info />
            <Services/>
            <MakeAppointment/>
            <Testimonial/>
            <ContactUsHome/>
        </div>
    );
};

export default Home;