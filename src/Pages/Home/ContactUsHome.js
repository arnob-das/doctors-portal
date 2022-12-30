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
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="relative block w-full appearance-none rounded rounded-t-md border border-secondary-300 px-3 py-2 text-gray-900 placeholder-accent-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div className='py-4'>
                            <label htmlFor="password" className="sr-only">
                                Subject
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="text"
                                autoComplete="text"
                                required
                                className="relative block w-full appearance-none rounded rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Subject"
                            />
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