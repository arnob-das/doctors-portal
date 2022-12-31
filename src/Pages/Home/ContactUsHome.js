import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const ContactUsHome = () => {
    return (
        <section
            style={{
                background: `url(${appointment})`
            }}
            className="flex min-h-full items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
        >
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h4 className="mt-6 text-center text-xl font-bold tracking-tight uppercase text-secondary">
                        Contact Us
                    </h4>
                    <p className="mt-2 text-center text-3xl text-white">
                        Stay Connected With Us
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div className="-py-4">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input type="text" placeholder="Email Address" className="input input-bordered input-primary w-full" />
                        </div>
                        <div className='py-4'>
                            <label htmlFor="password" className="sr-only">
                                Subject
                            </label>
                            <input type="text" placeholder="Subject" className="input input-bordered input-primary w-full" />
                        </div>
                        <div className='py-4'>
                            <label htmlFor="password" className="sr-only">
                                Message
                            </label>
                            <textarea className="textarea w-full" placeholder="Message"></textarea>                        </div>
                        <div>
                            <PrimaryButton text="Submit" />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactUsHome;