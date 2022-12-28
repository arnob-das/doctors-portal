import React from 'react';
import ServiceInfo from './ServiceInfo';
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import flouride from '../../assets/images/fluoride.png'
import treatment from '../../assets/images/treatment.png'

const Services = () => {

    const serviceInfo = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: flouride
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: cavity
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: whitening
        }
    ]

    return (
        <div className="my-28">
            <div className="text-center">
                <h3 className="text-primary text-xl font-bold uppercase">Our Services</h3>
                <h2 className="text-4xl">Services We Provide</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-28">
                {serviceInfo.map(service => <ServiceInfo key={service._id} name={service.name} description={service.description} img={service.img} />)}
            </div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="lg:mx-12 max-w-sm rounded-lg shadow-2xl" alt="treatment" />
                    
                    <div className="lg:mx-12">
                        <h1 className="text-5xl font-bold text-accent">Exceptional Dental <br></br> Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary bg-gradient-to-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;