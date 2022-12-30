import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className="flex justify-center items-center my-10 lg:my-28 p-5 lg:p-0"
            style={{
                background: `url(${appointment})`
            }}>
            <div className="w-0 invisible lg:flex-1 lg:visible">
                <img className="invisible lg:mt-[-200px] lg:visible" src={doctor} alt="doctor" />
            </div>
            <div className="lg:flex-1 lg:px-5">
                <h3 className='text-xl text-primary font-bold uppercase mb-4'>Appointment</h3>
                <h2 className='text-3xl text-white my-5'>Make An Appointment Today</h2>
                <p className='text-white my-5 text-justify'>Thank you for considering our practice for your medical care. We are dedicated to providing the highest quality service to all of our patients. To make an appointment, simply call our office or use our online appointment system. Our friendly staff will be happy to assist you in scheduling a convenient time for your visit. We offer a variety of appointment options, including same-day and next-day appointments, as well as evening and weekend availability. We understand that your time is valuable, and we will do our best to minimize any wait times. We look forward to seeing you and helping you achieve optimal health.</p>
                <PrimaryButton className="mt-5 lg:mt-5" text="Get Started" />
            </div>
        </section>
    );
};

export default MakeAppointment;